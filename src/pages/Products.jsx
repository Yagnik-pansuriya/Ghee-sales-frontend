import React, { useState } from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { showToast } from '../redux/toastSlice';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import WishlistButton from '../components/common/WishlistButton';

import { products as allProducts } from '../data/products';

const Products = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        dispatch(showToast(`${product.name} added to cart!`));
    };

    const categories = ['All', 'Ghee', 'Honey', 'Bestseller', 'Rare', 'Immunity'];

    const filteredProducts = allProducts.filter(p => {
        const matchesCategory = filter === 'All' || p.category === filter || p.tag === filter;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-32 min-h-screen bg-cream relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">Our Collection</h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
                    Hand-picked essentials for a healthier lifestyle.
                </p>

                {/* Search & Filters */}
                <div className="max-w-4xl mx-auto mb-16 space-y-8">
                    <div className="relative group">
                        <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 text-xl group-focus-within:text-secondary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for Ghee, Honey, or specific benefits..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-8 py-5 bg-white border border-primary/5 rounded-[24px] shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium text-primary"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full border text-sm font-bold tracking-wide transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white border-primary shadow-md'
                                    : 'bg-white text-primary border-primary/10 hover:border-secondary hover:text-secondary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
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
                                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square bg-cream group-hover:bg-cream/50 transition-colors">
                                    <Link to={`/products/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                                            loading="lazy"
                                        />
                                    </Link>

                                    {/* Hover Actions (Desktop) */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                                        <div className="flex gap-3 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <WishlistButton
                                                product={product}
                                                className="w-10 h-10 bg-white"
                                            />
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="h-10 px-4 bg-primary text-white rounded-full flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg font-bold text-xs"
                                            >
                                                <FiShoppingBag size={14} /> Quick Add
                                            </button>
                                        </div>
                                    </div>

                                    {/* Wishlist (Mobile/Always visible fallback if needed) */}
                                    <div className="absolute top-4 right-4 md:hidden">
                                        <WishlistButton product={product} />
                                    </div>
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
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-24 text-center"
                    >
                        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary/20">
                            <FiSearch size={40} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-2">No products found</h3>
                        <p className="text-text-muted">Try adjusting your search or filters to find what you're looking for.</p>
                        <button
                            onClick={() => { setFilter('All'); setSearchQuery(''); }}
                            className="mt-8 text-secondary font-bold underline underline-offset-8 hover:text-primary transition-colors"
                        >
                            Reset all filters
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Products;
