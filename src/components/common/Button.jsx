import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white border border-primary hover:bg-transparent hover:text-primary hover:shadow-lg focus:ring-primary",
        secondary: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white hover:shadow-lg focus:ring-primary",
        outline: "bg-transparent text-white border border-white hover:bg-white hover:text-primary hover:shadow-lg focus:ring-white",
        ghost: "bg-transparent text-primary hover:bg-primary/10 focus:ring-primary",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
