import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    icon: Icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white border border-primary hover:bg-primary-dark hover:border-primary-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        secondary: "bg-secondary text-primary border border-secondary hover:bg-secondary-dark hover:border-secondary-dark hover:text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent text-primary hover:bg-primary/5 hover:text-primary-dark",
        white: "bg-white text-primary border border-white hover:bg-cream shadow-md hover:shadow-lg",
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
            {Icon && <Icon className="ml-2 w-5 h-5" />}
        </motion.button>
    );
};

export default Button;
