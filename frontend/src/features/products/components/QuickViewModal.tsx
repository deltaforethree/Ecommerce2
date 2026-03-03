"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { useQuickView } from '../hooks/useProduct';
import { useCart } from '@/features/cart/hooks/useCart';

export default function QuickViewModal() {
    const { selectedProduct, isOpen, closeQuickView } = useQuickView();
    const { addItem } = useCart();
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('#c49a5a');
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    // Sync image when product changes
    useEffect(() => {
        if (selectedProduct) {
            setImgSrc(selectedProduct.image);
        }
    }, [selectedProduct]);

    if (!selectedProduct) return null;

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const colors = [
        { name: 'Gold', hex: '#c49a5a' },
        { name: 'Berry', hex: '#8b5e83' },
        { name: 'Teal', hex: '#4a7c6f' },
        { name: 'Ruby', hex: '#c0392b' },
        { name: 'Carbon', hex: '#2c3e50' },
    ];

    const handleAddToCart = () => {
        addItem(selectedProduct, selectedSize, selectedColor);
        closeQuickView();
    };

    return (
        <Modal isOpen={isOpen} onClose={closeQuickView}>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[2/3] overflow-hidden bg-cream">
                    <Image
                        src={imgSrc || selectedProduct.image}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover"
                        onError={() => setImgSrc("https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000&q=80")}
                    />

                    {selectedProduct.tag && (
                        <span className="absolute top-3.5 left-3.5 bg-gold text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
                            {selectedProduct.tag}
                        </span>
                    )}
                </div>

                <div className="p-8 flex flex-col justify-center">
                    <p className="text-gold text-[11px] tracking-[0.2em] uppercase mb-2">
                        {selectedProduct.fabric}
                    </p>
                    <h2 className="font-serif text-[1.7rem] font-normal leading-tight mb-3">
                        {selectedProduct.name}
                    </h2>
                    <div className="text-[1.1rem] mb-5">
                        {selectedProduct.originalPrice && (
                            <del className="text-muted text-sm mr-2.5">
                                ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                            </del>
                        )}
                        <span className="text-gold-dark font-medium">
                            ₹{selectedProduct.price.toLocaleString('en-IN')}
                        </span>
                    </div>

                    <p className="text-[13px] text-muted leading-[1.8] mb-6">
                        {selectedProduct.description || "A timeless handcrafted piece that celebrates Indian heritage and modern elegance."}
                    </p>

                    <div className="mb-6">
                        <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal font-medium mb-1.5">Size</p>
                        <div className="flex gap-2 flex-wrap">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-11 h-11 border text-[12px] flex items-center justify-center transition-all ${selectedSize === size
                                        ? 'bg-charcoal text-white border-charcoal'
                                        : 'bg-transparent text-charcoal border-border hover:bg-offwhite'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal font-medium mb-1.5">Colour</p>
                        <div className="flex gap-2.5">
                            {colors.map(color => (
                                <button
                                    key={color.hex}
                                    onClick={() => setSelectedColor(color.hex)}
                                    className={`w-6.5 h-6.5 rounded-full border-2 transition-all ${selectedColor === color.hex
                                        ? 'border-charcoal scale-110'
                                        : 'border-transparent hover:scale-105'
                                        }`}
                                    style={{ backgroundColor: color.hex }}
                                    title={color.name}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button onClick={handleAddToCart} fullWidth variant="primary">
                            Add to Cart
                        </Button>
                        <Button variant="outline" fullWidth>
                            ♡ &nbsp; Add to Wishlist
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
