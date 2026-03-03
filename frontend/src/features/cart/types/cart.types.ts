import { Product } from '../../products/types/product.types';

export interface CartItem extends Product {
    quantity: number;
    size: string;
    selectedColor?: string;
}

export interface CartState {
    items: CartItem[];
    addItem: (product: Product, size: string, color?: string) => void;
    removeItem: (id: string, size: string) => void;
    updateQuantity: (id: string, size: string, delta: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
}
