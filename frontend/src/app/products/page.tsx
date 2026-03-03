"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/features/products/components/ProductCard';

const PRODUCTS = [
    { id: "1", name: "Tara Lavender Anarkali", fabric: "Chanderi Silk", price: 1999, originalPrice: 2499, tag: "New", image: "https://images.unsplash.com/photo-1669197788715-ed7b7ca4ec89?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Full length pleated Anarkali with cutdana embroidery. Butter crepe lining. Sleeves can be customised." },
    { id: "2", name: "Rati Block Print Kurti", fabric: "Pure Cotton", price: 1399, originalPrice: 1800, tag: "Sale", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Hand block printed kurti in natural cotton dyes. Relaxed fit, perfect for everyday wear." },
    { id: "3", name: "Aarav Pleated Co-ord Set", fabric: "Georgette", price: 2199, image: "https://images.unsplash.com/photo-1763818104121-7d63caa456f1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Elegant pleated co-ord set in soft georgette. Includes kurti and palazzo pants." },
    { id: "4", name: "Priya Festive Saree", fabric: "Onam Saree", price: 4500, tag: "New", image: "https://images.unsplash.com/photo-1679849922748-f59ba2e10c10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Pure Banarasi silk saree with intricate zari weave. Comes with an unstitched blouse piece." },
    { id: "5", name: "Damini Floral Kurti", fabric: "Mul Cotton", price: 2199, originalPrice: 2499, tag: "Best Seller", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800", description: "Floral printed kurti in breathable mul cotton. A customer favourite for its comfort." },
    { id: "6", name: "Crepe Silk Set", fabric: "Crepe Silk", price: 1899, originalPrice: 2499, tag: "Best Seller", image: "https://images.unsplash.com/photo-1615555896813-401d84a0d737?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Three-piece crepe silk set with hand embroidered yoke. Includes kurti, dupatta and straight pants." },
    { id: "7", name: "Yamini Casual Kurti", fabric: "Pure Linen", price: 2199, originalPrice: 2499, tag: "Best Seller", image: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Effortlessly chic linen kurti for everyday styling. Minimal design, maximum elegance." },
    { id: "8", name: "Crushed Georgette Anarkali", fabric: "Crushed Georgette", price: 4800, originalPrice: 5500, tag: "Best Seller", image: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Crushed georgette Anarkali with intricate cutdana embroidery. Full length with butter crepe lining." },
];

export default function ProductsPage() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Sarees', 'Kurtis', 'Anarkali', 'Lehengas', 'Kurti Sets'];

    const filteredProducts = filter === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.fabric.toLowerCase().includes(filter.toLowerCase()) || p.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="py-20 px-[5vw]">
                <div className="text-center mb-16">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-gold block mb-[0.6rem]">Delta Force Collections</span>
                    <h1 className="font-serif text-[3.2rem] font-normal mb-[0.6rem]">All Products</h1>
                    <p className="text-[14px] text-muted max-w-[500px] mx-auto leading-[1.7]">
                        Discover our curated collection of fine Indian couture. From everyday elegance to grand festive ensembles.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 text-[11px] tracking-[0.15em] uppercase border transition-all ${filter === cat ? 'bg-charcoal text-white border-charcoal' : 'bg-transparent text-muted border-border hover:border-gold hover:text-gold'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((prod) => (
                        <ProductCard key={prod.id} {...prod} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-offwhite">
                        <p className="text-muted italic">No products found in this category yet.</p>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
