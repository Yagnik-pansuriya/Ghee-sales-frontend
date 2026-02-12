import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGift, FiMessageSquare, FiPackage, FiCheckCircle, FiArrowRight, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import Button from '../common/Button';
import CardPersonalizer from './CardPersonalizer';
import WrappingSelector, { WRAPPINGS } from './WrappingSelector';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { showToast } from '../../redux/toastSlice';
import { useNavigate } from 'react-router-dom';

const STEPS = [
    { id: 1, name: 'Select Gift Set', icon: FiGift },
    { id: 2, name: 'Personalize Note', icon: FiMessageSquare },
    { id: 3, name: 'Premium Wrapping', icon: FiPackage },
    { id: 4, name: 'Review & Add', icon: FiCheckCircle },
];

const GIFT_BUNDLES = [
    {
        id: 'ritual_box',
        name: 'The Golden Ritual Box',
        price: 2499,
        image: 'https://images.unsplash.com/photo-1549462229-837c7620c57c?q=80&w=800', // Placeholder
        description: 'Contains: 500ml A2 Ghee, 250g Raw Honey, Wooden Spoon.'
    },
    {
        id: 'wellness_trio',
        name: 'Vedic Wellness Trio',
        price: 3999,
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800', // Placeholder
        description: 'Contains: 1L A2 Ghee, 500g Wild Honey, Turmeric Latte Mix.'
    },
    {
        id: 'starter_set',
        name: 'Purity Starter Set',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1607344645830-6e3619aa9033?q=80&w=800', // Placeholder
        description: 'Contains: 250ml A2 Ghee, 100g Forest Honey.'
    }
];

const GiftWizard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedBundle, setSelectedBundle] = useState(null);
    const [message, setMessage] = useState('');
    const [theme, setTheme] = useState('gold');
    const [font, setFont] = useState('serif');
    const [selectedWrapping, setSelectedWrapping] = useState('gold_foil');

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep(c => c + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(c => c - 1);
    };

    const handleAddToCart = () => {
        if (!selectedBundle) return;

        const wrapping = WRAPPINGS.find(w => w.id === selectedWrapping);
        const totalPrice = selectedBundle.price + (wrapping ? wrapping.price : 0);

        const cartItem = {
            id: `gift-${Date.now()}`,
            name: `Gift: ${selectedBundle.name}`,
            price: totalPrice,
            image: selectedBundle.image,
            quantity: 1,
            isGift: true,
            giftDetails: {
                bundleId: selectedBundle.id,
                message,
                cardTheme: theme,
                cardFont: font,
                wrappingId: selectedWrapping,
                wrappingName: wrapping?.name
            }
        };

        dispatch(addItem(cartItem));
        dispatch(showToast('Custom Gift Box added to cart!'));
        navigate('/cart');
    };

    return (
        <div className="bg-white rounded-[40px] shadow-2xl border border-primary/5 overflow-hidden">
            {/* Steps Header */}
            <div className="bg-cream/50 p-6 md:p-10 border-b border-primary/5">
                <div className="flex justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -z-10 -translate-y-1/2 rounded-full hidden md:block" />
                    {STEPS.map((step) => (
                        <div key={step.id} className="flex flex-col items-center gap-3 relative z-10 w-1/4">
                            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg md:text-2xl transition-all duration-500 ${currentStep >= step.id ? 'bg-primary text-secondary shadow-lg scale-110' : 'bg-white text-gray-300 border-2 border-gray-100'
                                }`}>
                                <step.icon />
                            </div>
                            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest text-center transition-colors duration-300 ${currentStep >= step.id ? 'text-primary' : 'text-gray-300'
                                }`}>
                                {step.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-12 min-h-[500px]">
                <AnimatePresence mode="wait">
                    {/* STEP 1: SELECT BUNDLE */}
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {GIFT_BUNDLES.map((bundle) => (
                                <div
                                    key={bundle.id}
                                    onClick={() => setSelectedBundle(bundle)}
                                    className={`cursor-pointer rounded-3xl overflow-hidden border-2 transition-all hover:shadow-xl ${selectedBundle?.id === bundle.id ? 'border-secondary ring-4 ring-secondary/10 scale-[1.02]' : 'border-primary/5 hover:border-secondary/50'
                                        }`}
                                >
                                    <div className="aspect-square bg-cream relative">
                                        <img src={bundle.image} alt={bundle.name} className="w-full h-full object-cover mix-blend-multiply" />
                                        {selectedBundle?.id === bundle.id && (
                                            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                                                <div className="bg-secondary text-primary rounded-full p-4 shadow-xl">
                                                    <FiCheckCircle size={32} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="font-serif font-bold text-xl text-primary mb-2">{bundle.name}</h3>
                                        <p className="text-sm text-text-muted mb-4">{bundle.description}</p>
                                        <p className="text-2xl font-bold text-secondary">₹{bundle.price}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* STEP 2: PERSONALIZE */}
                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <CardPersonalizer
                                message={message}
                                setMessage={setMessage}
                                theme={theme}
                                setTheme={setTheme}
                                font={font}
                                setFont={setFont}
                            />
                        </motion.div>
                    )}

                    {/* STEP 3: WRAPPING */}
                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <WrappingSelector
                                selected={selectedWrapping}
                                onSelect={setSelectedWrapping}
                            />
                        </motion.div>
                    )}

                    {/* STEP 4: REVIEW */}
                    {currentStep === 4 && selectedBundle && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="bg-cream/30 border border-primary/10 rounded-3xl p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg shrink-0">
                                    <img src={selectedBundle.image} alt={selectedBundle.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="font-serif font-bold text-2xl text-primary mb-2">{selectedBundle.name}</h3>
                                    <p className="text-text-muted mb-4">{selectedBundle.description}</p>
                                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                        <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold border border-primary/10">
                                            Wrap: {WRAPPINGS.find(w => w.id === selectedWrapping)?.name}
                                        </span>
                                        <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold border border-primary/10">
                                            Card: {THEMES.find(t => t.id === theme)?.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-text-muted uppercase font-bold tracking-wider">Total</p>
                                    <p className="text-4xl font-serif text-primary">
                                        ₹{selectedBundle.price + (WRAPPINGS.find(w => w.id === selectedWrapping)?.price || 0)}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-dashed border-primary/10 rounded-3xl p-8 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Your Message</p>
                                <p className={`text-2xl text-primary/80 ${FONTS.find(f => f.id === font)?.class}`}>
                                    "{message || 'No message added'}"
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer / Navigation */}
            <div className="p-6 md:p-10 border-t border-primary/5 bg-cream/10 flex justify-between items-center">
                <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`gap-2 ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                    <FiArrowLeft /> Back
                </Button>

                {currentStep < 4 ? (
                    <Button
                        variant="primary"
                        onClick={handleNext}
                        disabled={currentStep === 1 && !selectedBundle}
                        className="gap-2 px-8"
                    >
                        Next Step <FiArrowRight />
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        onClick={handleAddToCart}
                        className="gap-2 px-12 py-4 text-lg shadow-xl shadow-secondary/20"
                    >
                        <FiShoppingBag /> Add Gift to Cart
                    </Button>
                )}
            </div>
        </div>
    );
};

export default GiftWizard;
