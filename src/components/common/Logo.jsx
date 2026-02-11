import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-serif font-bold text-xl group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                G
            </div>
            <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-primary group-hover:text-secondary transition-colors duration-300">
                    Ghee & Honey
                </span>
                <span className="text-[0.65rem] tracking-[0.2em] font-sans uppercase text-text-muted">
                    Organic | Pure
                </span>
            </div>
        </Link>
    );
};

export default Logo;
