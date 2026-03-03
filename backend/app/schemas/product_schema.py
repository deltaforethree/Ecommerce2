from pydantic import BaseModel
from typing import Optional

class ProductSchema(BaseModel):
    id: str
    name: str
    fabric: str
    price: float
    category: str
    image: str
    description: Optional[str] = None
    tag: Optional[str] = None

    class Config:
        from_attributes = True
