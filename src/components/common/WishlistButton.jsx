import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../../redux/wishlistSlice';
import clsx from 'clsx';

const WishlistButton = ({ product, className }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.wishlist.items);
    const isWishlisted = items.some(item => item.id === product.id);

    const handleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(toggleWishlist(product));
    };

    return (
        <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleToggle}
            className={clsx(
                "p-3 rounded-full shadow-lg transition-all flex items-center justify-center",
                isWishlisted
                    ? "bg-secondary text-white"
                    : "bg-white text-primary hover:text-secondary",
                className
            )}
        >
            {isWishlisted ? <FaHeart size={18} /> : <FiHeart size={18} />}
        </motion.button>
    );
};

export default WishlistButton;
