"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { useCart } from '@/features/cart/hooks/useCart';

// Mock data mapping (Realistically would come from a service)
const PRODUCT_DATA: Record<string, any> = {
    '1': { id: "1", name: "Tara Lavender Anarkali", fabric: "Chanderi Silk", price: 1999, originalPrice: 2499, tag: "New", image: "https://images.unsplash.com/photo-1669197788715-ed7b7ca4ec89?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Full length pleated Anarkali with cutdana embroidery. Butter crepe lining. Sleeves can be customised." },
    '2': { id: "2", name: "Rati Block Print Kurti", fabric: "Pure Cotton", price: 1399, originalPrice: 1800, tag: "Sale", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Hand block printed kurti in natural cotton dyes. Relaxed fit, perfect for everyday wear." },
    '5': { id: "5", name: "Damini Floral Kurti", fabric: "Mul Cotton", price: 2199, originalPrice: 2499, tag: "Best Seller", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800", description: "Floral printed kurti in breathable mul cotton. A customer favourite for its comfort." },
};

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const { addItem } = useCart();

    // For demo, we'll try to find by ID or name
    const product = PRODUCT_DATA[slug] || PRODUCT_DATA['1'];

    const [selectedSize, setSelectedSize] = useState('M');
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="py-20 px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-gold text-[12px] tracking-[0.3em] uppercase mb-4 block">{product.fabric}</span>
                    <h1 className="font-serif text-[2.8rem] leading-tight mb-6">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-[1.5rem] font-medium text-gold-dark">₹{product.price.toLocaleString('en-IN')}</span>
                        {product.originalPrice && (
                            <del className="text-muted text-[1.1rem]">₹{product.originalPrice.toLocaleString('en-IN')}</del>
                        )}
                        <span className="bg-cream text-muted text-[10px] tracking-widest uppercase px-3 py-1 ml-2">In Stock</span>
                    </div>

                    <p className="text-muted leading-[1.85] mb-10 text-[15px]">
                        {product.description}
                        <br /><br />
                        Our {product.name} is meticulously handcrafted using premium {product.fabric}. Designed for elegance and comfort, it features intricate details that celebrate traditional Indian craftsmanship.
                    </p>

                    <div className="mb-8">
                        <p className="text-[11px] tracking-[0.2em] uppercase font-medium mb-4">Select Size</p>
                        <div className="flex gap-3">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-14 h-14 border flex items-center justify-center transition-all ${selectedSize === size ? 'bg-charcoal text-white border-charcoal' : 'border-border hover:border-charcoal'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button
                            className="flex-1 py-5"
                            onClick={() => addItem(product, selectedSize)}
                        >
                            Add to Cart — ₹{product.price.toLocaleString('en-IN')}
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-8">
                        <div>
                            <span className="block text-[11px] tracking-widest uppercase text-muted mb-2">Fabric</span>
                            <span className="text-[13px]">{product.fabric}</span>
                        </div>
                        <div>
                            <span className="block text-[11px] tracking-widest uppercase text-muted mb-2">Care</span>
                            <span className="text-[13px]">Dry Clean Only</span>
                        </div>
                        <div>
                            <span className="block text-[11px] tracking-widest uppercase text-muted mb-2">Dispatch</span>
                            <span className="text-[13px]">2-4 Days</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
