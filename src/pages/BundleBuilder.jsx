import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { FiPlus, FiTrash2, FiShoppingBag, FiInfo, FiCheckCircle, FiGift, FiChevronRight, FiStar } from 'react-icons/fi';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { products } from '../data/products';
import { addItem } from '../redux/cartSlice';
import { showToast } from '../redux/toastSlice';
import clsx from 'clsx';

const BUNDLE_SIZES = [
    { id: 3, label: 'Standard Ritual', discount: 10, description: 'Perfect for small families' },
    { id: 5, label: 'Grand Sanctity', discount: 15, description: 'The ultimate wellness supply' },
];

const BundleBuilder = () => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState(3);
    const [slots, setSlots] = useState(Array(3).fill(null));
    const [isAdded, setIsAdded] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    useEffect(() => {
        setSlots(Array(selectedSize).fill(null));
    }, [selectedSize]);

    const addToSlot = (product) => {
        const nextEmptySlot = slots.findIndex(s => s === null);
        if (nextEmptySlot !== -1) {
            const newSlots = [...slots];
            newSlots[nextEmptySlot] = product;
            setSlots(newSlots);
            // Play subtle haptic-like visual feedback?
        }
    };

    const removeFromSlot = (idx) => {
        const newSlots = [...slots];
        newSlots[idx] = null;
        setSlots(newSlots);
    };

    const isFull = slots.every(s => s !== null);
    const filledCount = slots.filter(s => s !== null).length;

    const rawTotal = slots.reduce((acc, curr) => acc + (curr ? parseFloat(curr.price.replace(/,/g, '')) : 0), 0);
    const discountPercent = BUNDLE_SIZES.find(s => s.id === selectedSize).discount;
    const discountAmount = rawTotal * (discountPercent / 100);
    const bundleTotal = rawTotal - discountAmount;

    const handleAddBundleToCart = () => {
        if (!isFull) return;

        const bundleItem = {
            id: `bundle-${Date.now()}`,
            name: `${selectedSize} Jars Premium Bundle`,
            price: (bundleTotal / 1).toFixed(0),
            image: "https://images.unsplash.com/photo-1549462229-837c7620c57c?q=80&w=800&auto=format&fit=crop",
            quantity: 1,
            desc: `Curated Selection: ${slots.map(s => s.name).join(', ')}`,
            isBundle: true
        };

        dispatch(addItem(bundleItem));
        dispatch(showToast(`Premium ${selectedSize}-Jar Bundle added to your cart!`));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 3000);
    };

    return (
        <div className="pt-32 pb-32 bg-white min-h-screen overflow-hidden relative">
            <SectionWrapper>
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-24 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-xs font-bold uppercase tracking-[0.25em] mb-6 border border-secondary/20"
                        >
                            <FiStar /> Curated Experience
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 tracking-tight">
                            Build Your <span className="text-secondary italic">Ritual Box</span>
                        </h1>
                        <p className="text-xl text-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                            Personalize your wellness journey. Select your favorite jars and unlock <br className="hidden md:block" />
                            exclusive <span className="text-primary font-bold underline underline-offset-8 decoration-secondary/30">Vedic Discounts</span> on every bundle.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Selector & Box Preview */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Step 1: Size */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {BUNDLE_SIZES.map(size => (
                                    <button
                                        key={size.id}
                                        onClick={() => setSelectedSize(size.id)}
                                        className={clsx(
                                            "relative p-8 rounded-[40px] border-2 transition-all text-left overflow-hidden group",
                                            selectedSize === size.id
                                                ? "border-secondary bg-cream/10 shadow-xl shadow-secondary/5"
                                                : "border-primary/5 bg-white hover:border-secondary/40"
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={clsx(
                                                "w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold transition-colors",
                                                selectedSize === size.id ? "bg-secondary text-primary" : "bg-cream text-primary/40"
                                            )}>
                                                {size.id}
                                            </div>
                                            <span className="text-xs font-bold bg-primary text-secondary px-3 py-1 rounded-full">
                                                SAVE {size.discount}%
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-primary mb-1">{size.label}</h3>
                                        <p className="text-sm text-text-muted font-light">{size.description}</p>

                                        {selectedSize === size.id && (
                                            <motion.div
                                                layoutId="active-indicator"
                                                className="absolute bottom-4 right-8 text-secondary"
                                            >
                                                <FiCheckCircle size={24} />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Step 2: Box Visual */}
                            <div className="relative bg-cream/20 rounded-[80px] p-12 md:p-20 border border-primary/5 min-h-[500px] flex flex-col items-center justify-center perspective-1000">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.08),transparent_70%)]" />

                                <h3 className="absolute top-12 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.4em] text-primary/30 text-center">
                                    Assembly Chamber ({filledCount}/{selectedSize})
                                </h3>

                                <div className="flex flex-wrap justify-center gap-10 relative z-10 w-full">
                                    <AnimatePresence>
                                        {slots.map((slot, idx) => (
                                            <motion.div
                                                key={idx}
                                                layout
                                                className={clsx(
                                                    "w-36 h-52 md:w-44 md:h-60 rounded-[40px] border-2 flex flex-col items-center justify-center relative transition-all preserve-3d",
                                                    slot
                                                        ? "border-secondary bg-white shadow-2xl scale-105"
                                                        : "border-primary/10 border-dashed bg-white/40"
                                                )}
                                            >
                                                {slot ? (
                                                    <motion.div
                                                        initial={{ y: -50, opacity: 0, rotate: -15, scale: 0.8 }}
                                                        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                                                        className="h-full w-full flex flex-col items-center p-6"
                                                    >
                                                        <div className="relative group/slot w-full h-32 mb-4">
                                                            <img
                                                                src={slot.image}
                                                                alt={slot.name}
                                                                className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl"
                                                            />
                                                            <button
                                                                onClick={() => removeFromSlot(idx)}
                                                                className="absolute -top-4 -right-4 w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center opacity-0 group-hover/slot:opacity-100 transition-all hover:bg-red-500 hover:text-white shadow-lg border border-red-100"
                                                            >
                                                                <FiTrash2 size={16} />
                                                            </button>
                                                        </div>
                                                        <div className="text-center mt-auto">
                                                            <p className="text-[10px] uppercase font-bold text-secondary mb-1 tracking-widest">{slot.category}</p>
                                                            <h4 className="text-xs font-serif font-bold text-primary line-clamp-1">{slot.name}</h4>
                                                        </div>
                                                    </motion.div>
                                                ) : (
                                                    <div className="text-primary/10 flex flex-col items-center gap-4">
                                                        <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center border border-primary/5">
                                                            <FiPlus size={24} />
                                                        </div>
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-center">Add <br /> Ritual</span>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {/* Box Base Visual */}
                                <div className="absolute bottom-10 left-12 right-12 h-24 bg-primary/5 rounded-[100px] blur-3xl -z-10" />
                            </div>

                            {/* Product Shelf */}
                            <div className="pt-12">
                                <div className="flex items-center justify-between mb-12">
                                    <h3 className="text-2xl font-serif font-bold text-primary">Wellness Library</h3>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-secondary" />
                                        <div className="w-2 h-2 rounded-full bg-primary/10" />
                                        <div className="w-2 h-2 rounded-full bg-primary/10" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                                    {products.slice(0, 8).map((product) => {
                                        const isDisabled = isFull;
                                        return (
                                            <motion.div
                                                key={product.id}
                                                whileHover={!isDisabled ? { y: -5 } : {}}
                                                className={clsx(
                                                    "group bg-cream/10 p-6 rounded-[40px] border border-transparent transition-all text-center",
                                                    isDisabled ? "opacity-30 grayscale cursor-not-allowed" : "cursor-pointer hover:bg-white hover:shadow-xl hover:border-secondary/20"
                                                )}
                                                onClick={() => !isDisabled && addToSlot(product)}
                                            >
                                                <div className="aspect-[4/5] mb-6 relative">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-110 duration-700"
                                                    />
                                                    {!isDisabled && (
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <div className="w-12 h-12 bg-primary text-secondary rounded-2xl flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                                                                <FiPlus size={24} />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <h4 className="font-bold text-primary text-sm mb-2 leading-tight">{product.name}</h4>
                                                <p className="text-secondary font-bold text-xs uppercase tracking-widest">₹{product.price}</p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Summary & Sticky Controller */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="bg-primary p-12 rounded-[60px] text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -mr-16 -mt-16 rounded-full blur-3xl" />

                                <h3 className="text-3xl font-serif font-bold mb-10 border-b border-white/10 pb-8 tracking-tight">Ritual Summary</h3>

                                <div className="space-y-6 mb-12">
                                    <div className="flex justify-between items-center text-white/60 text-sm">
                                        <span className="font-bold tracking-widest uppercase text-[10px]">Assembly Status</span>
                                        <span className="font-bold text-white">{filledCount} / {selectedSize}</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(filledCount / selectedSize) * 100}%` }}
                                            className="h-full bg-secondary shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                        />
                                    </div>

                                    <div className="space-y-4 pt-6">
                                        <div className="flex justify-between items-center group/price">
                                            <span className="text-white/60">Subtotal</span>
                                            <span className="font-bold">₹{rawTotal.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-secondary font-bold">Bundle Savings</span>
                                            <span className="text-secondary font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="h-[1px] bg-white/10 mt-4" />
                                        <div className="flex justify-between items-end pt-4">
                                            <div>
                                                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Final Investment</p>
                                                <p className="text-4xl font-serif font-bold text-secondary">₹{bundleTotal.toFixed(0).toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className={clsx(
                                        "w-full py-6 rounded-3xl text-lg font-bold transition-all gap-3 shadow-glow-secondary",
                                        isFull ? "bg-secondary text-primary hover:scale-[1.02]" : "bg-white/5 text-white/40 border-white/10"
                                    )}
                                    disabled={!isFull}
                                    onClick={handleAddBundleToCart}
                                >
                                    {isAdded ? (
                                        <><FiCheckCircle className="text-xl" /> Secured to Ritual</>
                                    ) : (
                                        <><FiGift className="text-xl" /> Create My Bundle</>
                                    )}
                                </Button>

                                {!isFull && (
                                    <div className="mt-8 flex items-start gap-3 bg-white/5 p-6 rounded-3xl border border-white/5">
                                        <FiInfo className="text-secondary mt-1 shrink-0" />
                                        <p className="text-xs text-white/60 leading-relaxed font-light">
                                            Add {selectedSize - filledCount} more premium jars to finalize your custom box and unlock the <span className="text-secondary font-bold">{discountPercent}% discount</span>.
                                        </p>
                                    </div>
                                )}

                                <div className="mt-8 flex items-center justify-center gap-6 opacity-30 grayscale contrast-125">
                                    <div className="text-[8px] font-bold tracking-widest uppercase">Traditional</div>
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                    <div className="text-[8px] font-bold tracking-widest uppercase">Pure</div>
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                    <div className="text-[8px] font-bold tracking-widest uppercase">Lab Tested</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default BundleBuilder;
