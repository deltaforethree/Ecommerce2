"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../../products/types/product.types';
import { CartItem, CartState } from '../types/cart.types';

const CartContext = createContext<CartState | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to localStorage whenever items change
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(items));
        }
    }, [items, isInitialized]);

    const addItem = (product: Product, size: string, color?: string) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === product.id && i.size === size);
            if (existing) {
                return prev.map(i => i === existing ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...product, quantity: 1, size, selectedColor: color }];
        });
    };

    const removeItem = (id: string, size: string) => {
        setItems(prev => prev.filter(i => !(i.id === id && i.size === size)));
    };

    const updateQuantity = (id: string, size: string, delta: number) => {
        setItems(prev => prev.map(i => {
            if (i.id === id && i.size === size) {
                const newQty = Math.max(0, i.quantity + delta);
                return newQty === 0 ? null : { ...i, quantity: newQty };
            }
            return i;
        }).filter(Boolean) as CartItem[]);
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
