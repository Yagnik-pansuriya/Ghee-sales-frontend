import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { FiPlus, FiTrash2, FiShoppingBag, FiInfo, FiCheckCircle } from 'react-icons/fi';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { products } from '../data/products';
import { addItem } from '../redux/cartSlice';

const BUNDLE_SIZES = [
    { id: 3, label: '3 Jars Pack', discount: 10 },
    { id: 5, label: '5 Jars Pack', discount: 15 },
];

const BundleBuilder = () => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState(3);
    const [slots, setSlots] = useState(Array(3).fill(null));
    const [isAdded, setIsAdded] = useState(false);

    // Update slots when size changes
    useEffect(() => {
        setSlots(Array(selectedSize).fill(null));
    }, [selectedSize]);

    const addToSlot = (product) => {
        const nextEmptySlot = slots.findIndex(s => s === null);
        if (nextEmptySlot !== -1) {
            const newSlots = [...slots];
            newSlots[nextEmptySlot] = product;
            setSlots(newSlots);
        }
    };

    const removeFromSlot = (idx) => {
        const newSlots = [...slots];
        newSlots[idx] = null;
        setSlots(newSlots);
    };

    const isFull = slots.every(s => s !== null);

    // Calculate Prices
    const rawTotal = slots.reduce((acc, curr) => acc + (curr ? parseFloat(curr.price.replace(/,/g, '')) : 0), 0);
    const discountPercent = BUNDLE_SIZES.find(s => s.id === selectedSize).discount;
    const discountAmount = rawTotal * (discountPercent / 100);
    const bundleTotal = rawTotal - discountAmount;

    const handleAddBundleToCart = () => {
        if (!isFull) return;

        const bundleItem = {
            id: `bundle-${Date.now()}`,
            name: `Custom ${selectedSize} Jars Bundle`,
            price: (bundleTotal / 1).toFixed(0), // Final price per bundle
            image: "https://images.unsplash.com/photo-1549462229-837c7620c57c?q=80&w=800&auto=format&fit=crop", // Gift box image
            quantity: 1,
            desc: `Pack of ${selectedSize}: ${slots.map(s => s.name).join(', ')}`,
            isBundle: true
        };

        dispatch(addItem(bundleItem));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 3000);
    };

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <SectionWrapper>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Exclusive Offer</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Build Your Own Bundle</h1>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                            Select your favorite jars and build a custom pack.
                            Enjoy up to <span className="text-secondary font-bold">15% discount</span> on the entire bundle.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Selector Section */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-cream/40 p-8 rounded-[40px] border border-secondary/10">
                                <h3 className="text-xl font-serif font-bold text-primary mb-6">1. Choose Bundle Size</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {BUNDLE_SIZES.map(size => (
                                        <button
                                            key={size.id}
                                            onClick={() => setSelectedSize(size.id)}
                                            className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 ${selectedSize === size.id ? 'border-secondary bg-white shadow-md' : 'border-border bg-white/50 hover:border-secondary/30'}`}
                                        >
                                            <span className="text-2xl font-bold text-primary">{size.id}</span>
                                            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Jars</span>
                                            <span className="text-[10px] font-bold text-white bg-secondary px-2 py-0.5 rounded-full mt-2">-{size.discount}%</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-cream/40 p-8 rounded-[40px] border border-secondary/10 sticky top-32">
                                <h3 className="text-xl font-serif font-bold text-primary mb-6">2. Your Bundle Review</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-text-muted">
                                        <span>Items ({slots.filter(s => s !== null).length}/{selectedSize})</span>
                                        <span className="font-bold">₹{rawTotal.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-secondary">
                                        <span>Bundle Discount ({discountPercent}%)</span>
                                        <span className="font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="pt-4 border-t border-primary/10 flex justify-between items-end">
                                        <span className="text-primary font-bold">Bundle Price</span>
                                        <span className="text-3xl font-serif font-bold text-primary">₹{bundleTotal.toFixed(0).toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                                <Button
                                    className="w-full py-4 rounded-2xl gap-2"
                                    disabled={!isFull}
                                    onClick={handleAddBundleToCart}
                                >
                                    {isAdded ? (
                                        <><FiCheckCircle /> Added to Cart</>
                                    ) : (
                                        <><FiShoppingBag /> Add Bundle to Cart</>
                                    )}
                                </Button>
                                {!isFull && (
                                    <p className="mt-4 text-xs text-center text-text-muted flex items-center justify-center gap-1">
                                        <FiInfo className="text-secondary" /> Add {selectedSize - slots.filter(s => s !== null).length} more items to complete
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Slots & Product List */}
                        <div className="lg:col-span-8 flex flex-col gap-12">
                            {/* Visual Slots */}
                            <div className="bg-primary/5 p-8 rounded-[50px] border-4 border-dashed border-primary/10">
                                <div className="flex flex-wrap justify-center gap-6">
                                    {slots.map((slot, idx) => (
                                        <motion.div
                                            key={idx}
                                            layout
                                            className={`w-32 h-40 md:w-36 md:h-48 rounded-[30px] border-2 flex flex-col items-center justify-center relative overflow-hidden transition-all ${slot ? 'border-secondary bg-white shadow-lg' : 'border-primary/20 bg-white/50'}`}
                                        >
                                            {slot ? (
                                                <>
                                                    <img src={slot.image} alt={slot.name} className="w-24 h-24 object-contain mix-blend-multiply" />
                                                    <span className="text-[10px] font-bold px-2 text-center text-primary mt-2 line-clamp-1">{slot.name}</span>
                                                    <button
                                                        onClick={() => removeFromSlot(idx)}
                                                        className="absolute top-2 right-2 p-1.5 bg-red-100 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                                                    >
                                                        <FiTrash2 size={12} />
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="text-primary/20 flex flex-col items-center gap-2">
                                                    <FiPlus size={24} />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest">Add Jar</span>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Select List */}
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-primary mb-8 ml-2">Select Products</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    {products.slice(0, 12).map((product) => {
                                        const isDisabled = isFull;
                                        return (
                                            <div
                                                key={product.id}
                                                className={`group bg-cream/20 p-4 rounded-[30px] border border-transparent hover:border-secondary/20 transition-all text-center ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                                onClick={() => !isDisabled && addToSlot(product)}
                                            >
                                                <div className="aspect-square bg-white rounded-2xl mb-4 overflow-hidden relative">
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors flex items-center justify-center">
                                                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-secondary shadow-lg scale-0 group-hover:scale-100 transition-transform">
                                                            <FiPlus size={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="font-bold text-primary text-sm mb-1">{product.name}</h4>
                                                <p className="text-secondary font-bold text-sm">₹{product.price}</p>
                                            </div>
                                        );
                                    })}
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
