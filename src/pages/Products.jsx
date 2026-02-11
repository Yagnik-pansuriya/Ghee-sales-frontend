import React, { useState } from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import WishlistButton from '../components/common/WishlistButton';

import { products as allProducts } from '../data/products';

const Products = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('All');

    const filteredProducts = filter === 'All'
        ? allProducts
        : allProducts.filter(p => p.category === filter);

    return (
        <div className="pt-32 min-h-screen bg-cream">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">Our Collection</h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
                    Hand-picked essentials for a healthier lifestyle.
                </p>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-16">
                    {['All', 'Ghee', 'Honey'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-2 rounded-full border transition-all duration-300 ${filter === cat
                                ? 'bg-primary text-white border-primary'
                                : 'bg-transparent text-primary border-primary hover:bg-primary/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {filteredProducts.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={product.id}
                            className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-card transition-all duration-300"
                        >
                            <div className="block overflow-hidden rounded-2xl mb-6 aspect-square bg-cream relative">
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </Link>
                                <WishlistButton
                                    product={product}
                                    className="absolute top-4 right-4 z-10"
                                />
                            </div>
                            <div className="text-left">
                                <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2 block">{product.category}</span>
                                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xl font-bold text-primary">₹{product.price}</span>
                                    <Button
                                        size="sm"
                                        onClick={() => dispatch(addItem(product))}
                                    >
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Products;
