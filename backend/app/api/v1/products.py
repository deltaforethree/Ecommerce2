from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.product_schema import ProductSchema

router = APIRouter()

@router.get("/", response_model=List[ProductSchema])
async def get_products():
    # Placeholder for database logic
    return [
        {
            "id": "1",
            "name": "Tara Lavender Anarkali",
            "fabric": "Chanderi Silk",
            "price": 1999,
            "category": "Anarkali",
            "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80"
        }
    ]

@router.get("/{product_id}", response_model=ProductSchema)
async def get_product(product_id: str):
    # Placeholder for database logic
    return {
        "id": product_id,
        "name": "Tara Lavender Anarkali",
        "fabric": "Chanderi Silk",
        "price": 1999,
        "category": "Anarkali",
        "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80"
    }
