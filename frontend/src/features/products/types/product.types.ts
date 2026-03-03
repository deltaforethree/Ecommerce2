export interface Product {
    id: string;
    name: string;
    fabric: string;
    price: number;
    originalPrice?: number;
    image: string;
    tag?: string;
    description?: string;
    category: string;
}

export interface ProductVariant {
    size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
    color: string;
    hex: string;
}
