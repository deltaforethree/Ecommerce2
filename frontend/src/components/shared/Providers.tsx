"use client";

import React from 'react';
import { CartProvider } from '@/features/cart/hooks/useCart';
import { QuickViewProvider } from '@/features/products/hooks/useProduct';
import QuickViewModal from '@/features/products/components/QuickViewModal';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <QuickViewProvider>
                {children}
                <QuickViewModal />
            </QuickViewProvider>
        </CartProvider>
    );
}
