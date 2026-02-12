import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import logoImg from '../../assets/final-logo.png';

const Logo = ({ isScrolled }) => {
    return (
        <Link to="/" className="flex items-center group">
            <div className="relative w-56 h-28 md:w-80 md:h-40 transition-all duration-500 ease-in-out">
                <img
                    src={logoImg}
                    alt="Farm Begin Logo"
                    className={clsx(
                        "w-full h-full object-contain object-left group-hover:scale-105 transition-transform duration-500",
                        !isScrolled && "brightness-0 invert contrast-[1.1]"
                    )}
                />
            </div>
        </Link>
    );
};

export default Logo;
