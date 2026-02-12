import React, { useState, useEffect, useRef } from 'react';
import { getProductById } from '../data/products';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { showToast } from '../redux/toastSlice';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { FiShoppingBag, FiStar, FiCheck, FiMinus, FiPlus, FiArrowLeft, FiShield, FiTruck, FiRefreshCw, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Reviews from '../components/sections/Reviews';
import Breadcrumbs from '../components/common/Breadcrumbs';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [showSticky, setShowSticky] = useState(false);
    const mainCtaRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mainCtaRef.current) {
                const rect = mainCtaRef.current.getBoundingClientRect();
                setShowSticky(rect.top < 0);
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
        dispatch(showToast(`${product.name} added to cart!`));
    };

    const gallery = product.gallery || [product.image];

    const accordionItems = [
        {
            title: "Traditional Bilona Ritual",
            content: product.longDesc || "Our ghee is made using the Vedic Bilona method. We boil A2 milk over firewood, culture it into curd overnight, and hand-churn it bi-directionally to separate pure butter."
        },
        {
            title: "Nutritional Facts",
            content: "Rich in fat-soluble vitamins (A, D, E, K), Omega-3 fatty acids, and Conjugated Linoleic Acid (CLA). Zero trans fats, zero preservatives, and zero artificial colors."
        },
        {
            title: "Storage & Shelf Life",
            content: "Store in a cool, dry place. No refrigeration required. Stays fresh for 12 months from the date of manufacture. Use a clean, dry spoon for every use."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* STICKY TOP BAR (Desktop only) */}
            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        className="fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-md border-b border-border py-4 hidden md:block shadow-sm"
                    >
                        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={product.image} alt="" className="w-12 h-12 object-contain mix-blend-multiply" />
                                <div>
                                    <h4 className="font-serif font-bold text-primary">{product.name}</h4>
                                    <p className="text-secondary font-bold text-sm">₹{product.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center border border-border rounded-full px-3 py-1 gap-4 bg-white">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-primary hover:text-secondary"><FiMinus /></button>
                                    <span className="font-bold min-w-[20px] text-center">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="text-primary hover:text-secondary"><FiPlus /></button>
                                </div>
                                <Button variant="primary" size="sm" onClick={handleAddToCart}>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="pt-32 pb-24">
                <SectionWrapper>
                    <Breadcrumbs />
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* LEFT: Image Gallery */}
                        <div className="space-y-6">
                            <div className="bg-cream rounded-[40px] p-8 md:p-12 aspect-square flex items-center justify-center relative overflow-hidden group border border-primary/5">
                                <motion.img
                                    key={selectedImage}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    src={gallery[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                                />
                                {product.tag && (
                                    <span className="absolute top-8 left-8 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                                        {product.tag}
                                    </span>
                                )}
                            </div>

                            {/* Thumbnails */}
                            {gallery.length > 1 && (
                                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                                    {gallery.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`w-20 h-20 rounded-2xl p-2 border-2 transition-all shrink-0 ${selectedImage === idx ? 'border-secondary bg-cream shadow-md' : 'border-transparent bg-gray-50 opacity-60 hover:opacity-100'
                                                }`}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Trust Markers (Desktop only side) */}
                            <div className="hidden lg:grid grid-cols-3 gap-4 pt-8 border-t border-primary/5">
                                <div className="text-center">
                                    <FiShield className="mx-auto text-secondary text-2xl mb-2" />
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Lab Tested</p>
                                </div>
                                <div className="text-center">
                                    <FiTruck className="mx-auto text-secondary text-2xl mb-2" />
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Secure Origin</p>
                                </div>
                                <div className="text-center">
                                    <FiRefreshCw className="mx-auto text-secondary text-2xl mb-2" />
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Bilona Method</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Details */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center gap-1 text-secondary">
                                    {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current w-4 h-4" />)}
                                </div>
                                <span className="text-text-muted text-sm font-medium">(124 Verified Reviews)</span>
                            </div>

                            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary leading-tight">{product.name}</h1>

                            <div className="flex items-baseline gap-4 mb-8">
                                <p className="text-3xl text-primary font-bold">₹{product.price}</p>
                                <p className="text-text-muted text-sm line-through">₹{(parseInt(product.price.replace(/,/g, '')) * 1.2).toLocaleString('en-IN')}</p>
                                <span className="text-green-600 text-sm font-bold">20% OFF</span>
                            </div>

                            <p className="text-text-muted text-lg mb-10 leading-relaxed font-light">
                                {product.desc}
                            </p>

                            <div className="space-y-8 mb-12">
                                {/* Buy Controls */}
                                <div className="flex flex-col sm:flex-row gap-4" ref={mainCtaRef}>
                                    <div className="flex items-center border-2 border-primary/5 rounded-2xl px-6 gap-6 bg-cream/30 justify-between sm:justify-start">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="text-xl font-bold text-primary p-2 hover:text-secondary transition-colors"
                                        >
                                            <FiMinus />
                                        </button>
                                        <span className="font-bold text-xl min-w-[30px] text-center">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="text-xl font-bold text-primary p-2 hover:text-secondary transition-colors"
                                        >
                                            <FiPlus />
                                        </button>
                                    </div>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="flex-1 gap-3 py-5 shadow-2xl shadow-secondary/20 group"
                                        onClick={handleAddToCart}
                                    >
                                        Add to Ritual <FiShoppingBag className="group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>

                                {/* Certificates/Badges List */}
                                <div className="flex flex-wrap gap-2">
                                    {(product.certificates || ["FSSAI Certified", "Lab Tested", "Small Batch"]).map((cert, idx) => (
                                        <span key={idx} className="flex items-center gap-2 bg-cream px-4 py-2 rounded-full border border-secondary/20 text-xs font-bold text-primary">
                                            <FiCheck className="text-secondary" /> {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Accordion Sections */}
                            <div className="border-t border-primary/5">
                                {accordionItems.map((item, idx) => (
                                    <div key={idx} className="border-b border-primary/5">
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                                            className="w-full flex items-center justify-between py-6 group"
                                        >
                                            <span className="font-serif font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                                                {item.title}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: activeAccordion === idx ? 180 : 0 }}
                                                className="text-secondary"
                                            >
                                                <FiChevronDown size={20} />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {activeAccordion === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pb-8 text-text-muted leading-relaxed font-light">
                                                        {item.content}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </div>

            {/* Sticky Mobile CTA */}
            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-border p-4 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 overflow-hidden">
                                <h4 className="font-serif font-bold text-primary truncate leading-none mb-1">{product.name}</h4>
                                <p className="text-secondary font-bold text-sm leading-none">₹{product.price}</p>
                            </div>
                            <Button
                                variant="primary"
                                size="sm"
                                className="h-12 px-8"
                                onClick={handleAddToCart}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Social Proof & Reviews */}
            <Reviews product={product} />
        </div>
    );
};

export default ProductDetail;
