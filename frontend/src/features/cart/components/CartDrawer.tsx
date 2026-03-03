"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import Button from '@/components/ui/Button';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/45 z-[900] transition-opacity duration-350 ${isOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 w-[420px] max-w-[95vw] h-screen bg-white z-[950] flex flex-col shadow-2xl transition-transform duration-380 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <h2 className="font-serif text-[1.3rem] font-normal">
                        Your Cart <span className="font-sans text-[13px] text-muted ml-1.5 font-light">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                    </h2>
                    <button onClick={onClose} className="text-xl text-muted hover:text-charcoal transition-colors">✕</button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center gap-4 text-muted">
                            <span className="text-[3.5rem] opacity-30">🛍️</span>
                            <p className="text-[14px] tracking-wide">Your cart is empty</p>
                            <button onClick={onClose} className="text-[11px] tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {items.map((item, idx) => (
                                <div key={`${item.id}-${item.size}`} className="grid grid-cols-[80px_1fr_auto] gap-4 pb-6 border-b border-border last:border-0 align-start">
                                    <div className="relative w-20 h-[100px] overflow-hidden bg-cream">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-serif text-[0.95rem] mb-1">{item.name}</p>
                                        <p className="text-[11px] uppercase tracking-wider text-muted mb-2">{item.fabric}</p>
                                        <p className="text-[12px] text-muted mb-2.5">Size: {item.size}</p>
                                        <div className="inline-flex items-center border border-border">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, -1)}
                                                className="w-7 h-7 flex items-center justify-center text-sm hover:bg-cream transition-colors"
                                            >
                                                −
                                            </button>
                                            <span className="w-8 text-center text-[13px] border-x border-border py-1">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, 1)}
                                                className="w-7 h-7 flex items-center justify-center text-sm hover:bg-cream transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right flex flex-col justify-between">
                                        <p className="text-[14px] font-normal whitespace-nowrap">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                                        <button
                                            onClick={() => removeItem(item.id, item.size)}
                                            className="text-[11px] uppercase tracking-wider text-muted hover:text-red-600 transition-colors mt-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-7 bg-offwhite border-t border-border">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[12px] uppercase tracking-widest text-muted">Subtotal</span>
                            <span className="font-serif text-[1.3rem]">₹{subtotal.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-[12px] text-muted leading-relaxed mb-5">
                            Shipping & taxes calculated at checkout. Free delivery above ₹999.
                        </p>
                        <Link href="/checkout" className="block mb-3" onClick={onClose}>
                            <Button fullWidth variant="primary">
                                Proceed to Checkout →
                            </Button>
                        </Link>
                        <button
                            onClick={onClose}
                            className="w-full border border-charcoal py-3 text-[11px] uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all underline-none"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
