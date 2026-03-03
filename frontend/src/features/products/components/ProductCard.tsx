"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuickView } from "../hooks/useProduct";
import { useCart } from "@/features/cart/hooks/useCart";
import { Product } from "../types/product.types";

interface ProductCardProps {
    id: string;
    name: string;
    fabric: string;
    price: number;
    originalPrice?: number;
    image: string;
    tag?: string;
    description?: string;
}

export default function ProductCard({ id, name, fabric, price, originalPrice, image, tag, description }: ProductCardProps) {
    const { openQuickView } = useQuickView();
    const { addItem } = useCart();
    const [imgSrc, setImgSrc] = useState(image);

    useEffect(() => {
        setImgSrc(image);
    }, [image]);


    const product: Product = {
        id, name, fabric, price, originalPrice, image: imgSrc, tag, description,
        category: 'General'
    };

    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[2/3] overflow-hidden bg-cream mb-4">
                <Link href={`/products/${id}`} className="block w-full h-full relative">
                    <Image
                        src={imgSrc}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgSrc("https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80")}
                    />
                </Link>

                {tag && (
                    <span className={`absolute top-2.5 left-2.5 bg-charcoal text-white text-[9px] tracking-[0.18em] uppercase px-[9px] py-1 ${tag === 'Sale' || tag === 'Best Seller' ? 'bg-gold' : ''}`}>
                        {tag}
                    </span>
                )}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/92 flex items-center justify-center text-sm opacity-0 transition-opacity group-hover:opacity-100 uppercase pointer-events-none hover:bg-gold hover:text-white transition-all">
                    ♡
                </div>

                {/* Actions - Slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0 shadow-lg z-10">
                    <button
                        onClick={(e) => { e.stopPropagation(); openQuickView(product); }}
                        className="bg-white text-charcoal border-r border-border py-[11.5px] text-[10px] tracking-[0.14em] uppercase font-sans hover:bg-cream transition-colors"
                    >
                        Quick View
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); addItem(product, 'M'); }}
                        className="bg-charcoal text-white py-[11.5px] text-[10px] tracking-[0.14em] uppercase font-sans hover:bg-gold transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="text-center">
                <Link href={`/products/${id}`} className="block">
                    <p className="text-[11px] tracking-[0.12em] uppercase text-muted mb-1">{fabric}</p>
                    <h3 className="font-serif text-[1rem] font-normal mb-[5px]">{name}</h3>
                    <p className="text-[14px]">
                        {originalPrice && <del className="text-muted text-[12px] mr-1">₹{originalPrice.toLocaleString('en-IN')}</del>}
                        <span className="text-gold-dark font-medium">₹{price.toLocaleString('en-IN')}</span>
                    </p>
                </Link>
            </div>
        </div>
    );
}
