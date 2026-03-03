"use client";

import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types/product.types';

interface QuickViewState {
    selectedProduct: Product | null;
    isOpen: boolean;
    openQuickView: (product: Product) => void;
    closeQuickView: () => void;
}

const QuickViewContext = createContext<QuickViewState | undefined>(undefined);

export function QuickViewProvider({ children }: { children: React.ReactNode }) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openQuickView = (product: Product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const closeQuickView = () => {
        setIsOpen(false);
        setTimeout(() => {
            setSelectedProduct(null);
        }, 350); // wait for modal transition
    };

    return (
        <QuickViewContext.Provider value={{ selectedProduct, isOpen, openQuickView, closeQuickView }}>
            {children}
        </QuickViewContext.Provider>
    );
}

export function useQuickView() {
    const context = useContext(QuickViewContext);
    if (context === undefined) {
        throw new Error('useQuickView must be used within a QuickViewProvider');
    }
    return context;
}
