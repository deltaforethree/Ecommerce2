from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import products, auth, cart, orders

app = FastAPI(
    title="Delta Force API",
    description="Backend API for Indian Women's Couture Ecommerce",
    version="1.0.0"
)

# Set up CORS
origins = [
    "http://localhost:3000",
    "https://delta-force.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Delta Force API"}

# Include routers
app.include_router(products.router, prefix="/api/v1/products", tags=["Products"])
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(cart.router, prefix="/api/v1/cart", tags=["Cart"])
app.include_router(orders.router, prefix="/api/v1/orders", tags=["Orders"])
