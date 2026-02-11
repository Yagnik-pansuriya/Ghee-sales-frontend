import React, { useState, useEffect, useRef } from 'react';
import { getProductById } from '../data/products';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { FiShoppingBag, FiStar, FiCheck, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Reviews from '../components/sections/Reviews';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [showSticky, setShowSticky] = useState(false);
    const mainCtaRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mainCtaRef.current) {
                const rect = mainCtaRef.current.getBoundingClientRect();
                setShowSticky(rect.bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!product) {
        return (
            <div className="pt-32 text-center h-[70vh] flex flex-col items-center justify-center">
                <FiShoppingBag size={64} className="text-cream mb-6" />
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Product not found</h2>
                <Button as={Link} to="/products" variant="outline" className="gap-2">
                    <FiArrowLeft /> Back to Shop
                </Button>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity }));
    };

    return (
        <div className="pt-32 min-h-screen bg-white">
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Gallery */}
                    <div className="bg-cream rounded-[40px] p-10 aspect-square flex items-center justify-center relative overflow-hidden group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Premium</span>
                            <div className="flex items-center gap-1 text-secondary text-sm font-bold">
                                <FiStar className="fill-current" /> 4.9 (124 reviews)
                            </div>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">{product.name}</h1>
                        <p className="text-3xl text-primary font-bold mb-8">₹{product.price} <span className="text-lg text-text-muted font-normal">/ 500ml</span></p>

                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                            {product.desc}
                        </p>

                        <div className="mb-10 p-6 bg-cream rounded-2xl border border-secondary/20">
                            <h4 className="font-bold mb-4 font-serif text-primary">Key Benefits:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {(product.benefits || ["Pure & Authentic", "Lab Tested", "No Preservatives"]).map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                                        <span className="text-secondary"><FiCheck /></span> {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4" ref={mainCtaRef}>
                            <div className="flex items-center border border-border rounded-full px-4 gap-4 bg-white justify-between sm:justify-start py-2 sm:py-0">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-xl font-bold text-primary p-2 hover:bg-cream rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                                >
                                    <FiMinus />
                                </button>
                                <span className="font-bold text-lg min-w-[30px] text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-xl font-bold text-primary p-2 hover:bg-cream rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                            <Button
                                variant="primary"
                                size="lg"
                                className="flex-1 gap-2 shadow-lg hover:shadow-xl py-4 sm:py-0"
                                onClick={handleAddToCart}
                            >
                                Add to Cart <FiShoppingBag />
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Sticky Mobile CTA */}
            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-border p-4 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 overflow-hidden">
                                <h4 className="font-serif font-bold text-primary truncate leading-none mb-1">{product.name}</h4>
                                <p className="text-secondary font-bold text-sm leading-none">₹{product.price}</p>
                            </div>
                            <Button
                                variant="primary"
                                size="sm"
                                className="h-12 px-8 shadow-glow"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Social Proof & Reviews */}
            <SectionWrapper>
                <Reviews />
            </SectionWrapper>
        </div>
    );
};

export default ProductDetail;
