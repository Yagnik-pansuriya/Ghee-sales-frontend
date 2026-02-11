import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.trim()) {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase()) ||
                p.tag.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered.slice(0, 6));
        } else {
            setResults([]);
        }
    }, [query]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex flex-col p-6 md:p-12"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                    >
                        <FiX size={32} />
                    </button>

                    <div className="max-w-4xl mx-auto w-full mt-20">
                        <div className="relative group">
                            <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary text-3xl group-focus-within:scale-110 transition-transform" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search for pure Ghee or Wild Honey..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-white/5 border-2 border-white/10 focus:border-secondary/50 rounded-[30px] py-6 pl-20 pr-10 text-2xl md:text-3xl font-serif text-white placeholder:text-white/20 outline-none transition-all"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery('')}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                                >
                                    <FiX size={24} />
                                </button>
                            )}
                        </div>

                        <div className="mt-12">
                            {results.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {results.map((product) => (
                                        <Link
                                            key={product.id}
                                            to={`/products/${product.id}`}
                                            onClick={onClose}
                                            className="group flex items-center gap-6 bg-white/5 p-4 rounded-3xl border border-white/5 hover:bg-white/10 transition-all hover:translate-x-2"
                                        >
                                            <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 mix-blend-multiply" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
                                                <h4 className="text-white font-bold text-lg">{product.name}</h4>
                                                <p className="text-white/50 text-sm">₹{product.price}</p>
                                            </div>
                                            <FiArrowRight className="text-white/20 group-hover:text-secondary group-hover:translate-x-1 transition-all mr-4" />
                                        </Link>
                                    ))}
                                </div>
                            ) : query.trim() ? (
                                <div className="text-center py-20">
                                    <p className="text-white/30 text-xl font-serif">No products found for "{query}"</p>
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-4">
                                    <span className="text-white/30 text-sm uppercase tracking-widest w-full mb-2">Popular Searches:</span>
                                    {['A2 Gir Cow Ghee', 'Raw Honey', 'Turmeric', 'Bilona Ghee'].map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => setQuery(tag)}
                                            className="bg-white/5 hover:bg-white/10 text-white/70 px-6 py-2 rounded-full border border-white/10 text-sm transition-all"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
