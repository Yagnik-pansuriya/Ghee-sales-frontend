import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiShoppingBag, FiArrowLeft, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addItem, toggleCart } from '../redux/cartSlice';
import { Helmet } from 'react-helmet-async';

const Wishlist = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.wishlist.items);
    const [addedItem, setAddedItem] = useState(null);

    const handleAddToCart = (product) => {
        dispatch(addItem({ ...product, quantity: 1 }));
        setAddedItem(product.name);
        setTimeout(() => setAddedItem(null), 3000);
        // Optional: Open cart drawer
        // dispatch(toggleCart());
    };

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen relative">
            <Helmet>
                <title>Your Wishlist | Farm Begin</title>
            </Helmet>

            {/* Success Toast */}
            <AnimatePresence>
                {addedItem && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                        className="fixed bottom-10 left-1/2 z-[100] bg-primary text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-secondary/20"
                    >
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
                            <FiShoppingBag size={14} />
                        </div>
                        <span className="font-bold text-sm md:text-base">Successfully added {addedItem} to cart</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <SectionWrapper>
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h1 className="text-4xl font-serif font-bold text-primary mb-2">My Wishlist</h1>
                            <p className="text-text-muted">Saved items you love from the farm.</p>
                        </div>
                        <Link to="/products">
                            <Button variant="outline" size="sm" className="gap-2">
                                <FiArrowLeft /> Back to Shop
                            </Button>
                        </Link>
                    </div>

                    {items.length === 0 ? (
                        <div className="text-center py-32 bg-cream/20 rounded-[50px] border-2 border-dashed border-primary/10">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                                <FiHeart size={40} className="text-secondary opacity-20" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Your wishlist is empty</h3>
                            <p className="text-text-muted mb-8 max-w-sm mx-auto">
                                Items you heart while browsing will appear here so you can easily find them later.
                            </p>
                            <Link to="/products">
                                <Button size="lg">Discover Products</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-[40px] border border-border overflow-hidden hover:shadow-xl transition-all group relative"
                                >
                                    <div className="aspect-square bg-cream relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700" />
                                        <button
                                            onClick={() => dispatch(removeFromWishlist(item.id))}
                                            className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-soft"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-secondary text-[10px] font-bold uppercase tracking-widest block mb-1">{item.category}</span>
                                                <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                                            </div>
                                            <p className="text-xl font-bold text-primary">₹{item.price}</p>
                                        </div>
                                        <Button
                                            className="w-full gap-2 rounded-2xl"
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            <FiShoppingBag /> Add to Cart
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Wishlist;
