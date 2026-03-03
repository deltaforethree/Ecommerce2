"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/features/cart/hooks/useCart";
import CartDrawer from "@/features/cart/components/CartDrawer";

export default function Navbar() {
    const { totalItems } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <div className="bg-charcoal text-[#e8ddd0] text-center py-[9px] px-4 text-[12px] tracking-[0.18em] uppercase relative z-[401]">
                🌍 We Ship Worldwide
                <span className="text-gold mx-[0.7rem]">✦</span>
                Free Shipping on Orders Above ₹999
                <span className="text-gold mx-[0.7rem]">✦</span>
                New Festive Collection Now Live
            </div>

            <nav className="sticky top-0 bg-white/97 backdrop-blur-md border-b border-border z-[400] px-[5vw]">
                <div className="flex items-center justify-between h-[68px]">
                    <Link href="/" className="font-serif text-[1.55rem] tracking-[0.08em] font-normal">
                        Delta <em className="italic text-gold not-italic">Force</em>
                    </Link>


                    <ul className="hidden lg:flex gap-8 list-none uppercase font-normal text-[12px] tracking-[0.14em] text-muted">
                        <li><Link href="/" className="hover:text-charcoal border-b border-transparent hover:border-gold pb-[3px] transition-colors">Home</Link></li>
                        <li><Link href="/products" className="hover:text-charcoal border-b border-transparent hover:border-gold pb-[3px] transition-colors">Sarees</Link></li>
                        <li><Link href="/products" className="hover:text-charcoal border-b border-transparent hover:border-gold pb-[3px] transition-colors">Kurtis</Link></li>
                        <li><Link href="/products" className="hover:text-charcoal border-b border-transparent hover:border-gold pb-[3px] transition-colors">Anarkali</Link></li>
                        <li><Link href="/products" className="hover:text-charcoal border-b border-transparent hover:border-gold pb-[3px] transition-colors">Lehengas</Link></li>
                        <li><Link href="/products" className="hover:text-charcoal border-b border-transparent hover:border-gold pb-[3px] transition-colors">New Arrivals</Link></li>
                        <li><Link href="/products" className="hover:text-charcoal border-b border-transparent hover:border-gold pb-[3px] transition-colors">Sale</Link></li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <button className="p-1 text-muted hover:text-charcoal transition-colors">🔍</button>
                        <button className="p-1 text-muted hover:text-charcoal transition-colors">♡</button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="bg-charcoal text-white flex items-center gap-[7px] py-[9px] px-[20px] text-[11px] tracking-[0.16em] uppercase font-sans hover:bg-gold transition-colors relative"
                        >
                            Cart <span className="bg-gold text-white w-[17px] h-[17px] rounded-full inline-flex items-center justify-center text-[10px]">{totalItems}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
