import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-sans';

    const variants = {
        primary: 'bg-charcoal text-white hover:bg-gold',
        secondary: 'bg-gold text-white hover:bg-gold-dark',
        ghost: 'bg-transparent text-charcoal hover:bg-offwhite',
        outline: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white',
    };

    const sizes = {
        sm: 'px-6 py-2 text-[10px]',
        md: 'px-8 py-3.5 text-[11px]',
        lg: 'px-12 py-4 text-[12px]',
    };

    const widthStyle = fullWidth ? 'w-full' : 'w-fit';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
