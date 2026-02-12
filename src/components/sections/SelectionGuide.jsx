import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTarget, FiHeart, FiZap, FiArrowRight, FiRotateCcw, FiCheck, FiShoppingBag } from 'react-icons/fi';
import Button from '../common/Button';
import SectionWrapper from '../layout/SectionWrapper';
import { products } from '../../data/products';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { showToast } from '../../redux/toastSlice';
import { Link } from 'react-router-dom';

const SelectionGuide = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const dispatch = useDispatch();

    const questions = [
        {
            id: 'goal',
            text: "What is your primary wellness goal?",
            options: [
                { id: 'immunity', label: "Immunity & Strength", icon: <FiZap />, desc: "Focus on vitamins & antioxidants" },
                { id: 'digestion', label: "Gut Health & Digestion", icon: <FiHeart />, desc: "Focus on probiotics & easy absorption" },
                { id: 'performance', label: "Physical & Mental Clarity", icon: <FiTarget />, desc: "Focus on healthy fats & energy" }
            ]
        },
        {
            id: 'type',
            text: "Which ritual fits your lifestyle best?",
            options: [
                { id: 'cooking', label: "Daily Cooking & Tadkas", desc: "High smoke point, rich aroma" },
                { id: 'morning', label: "Morning Tonic", desc: "Warm water + Ghee/Honey" },
                { id: 'wellness', label: "Ayurvedic Medicine", desc: "Small batch, rare infusions" }
            ]
        }
    ];

    const handleAnswer = (questionId, optionId) => {
        setAnswers({ ...answers, [questionId]: optionId });
        setStep(step + 1);
    };

    const reset = () => {
        setStep(0);
        setAnswers({});
    };

    const getRecommendation = () => {
        if (answers.goal === 'immunity' && answers.type === 'morning') return products.find(p => p.id === 2); // Raw Forest Honey
        if (answers.goal === 'digestion') return products.find(p => p.id === 1); // A2 Gir Cow Ghee
        if (answers.goal === 'performance' && answers.type === 'wellness') return products.find(p => p.id === 3); // Spiced Turmeric Ghee
        return products.find(p => p.id === 1); // Fallback to Bestseller
    };

    const recommendation = getRecommendation();

    return (
        <section className="py-24 bg-cream/10 border-y border-primary/5">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">The Vedic Guide</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Find Your Perfect Ritual</h2>
                        <p className="text-text-muted max-w-xl mx-auto font-light">
                            Answer 2 quick questions and let our Vedic wisdom recommend the ideal product for your lifestyle.
                        </p>
                    </div>

                    <div className="bg-white rounded-[50px] p-8 md:p-16 border border-primary/5 shadow-xl shadow-primary/5 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {step < questions.length ? (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-2">
                                        <p className="text-secondary font-bold text-sm">Step 0{step + 1} / 02</p>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">{questions[step].text}</h3>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        {questions[step].options.map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleAnswer(questions[step].id, opt.id)}
                                                className="group p-8 rounded-3xl border-2 border-primary/5 hover:border-secondary transition-all text-left bg-cream/5 hover:bg-cream/20 flex flex-col items-center md:items-start text-center md:text-left"
                                            >
                                                {opt.icon && (
                                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-secondary text-2xl mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                                        {opt.icon}
                                                    </div>
                                                )}
                                                <h4 className="font-bold text-primary text-lg mb-2">{opt.label}</h4>
                                                <p className="text-text-muted text-xs leading-relaxed font-medium opacity-60 group-hover:opacity-100">{opt.desc}</p>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-10"
                                >
                                    <div className="relative inline-block">
                                        <div className="absolute -inset-4 bg-secondary/10 rounded-full blur-2xl animate-pulse" />
                                        <FiCheck size={64} className="mx-auto text-secondary relative z-10" />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">Your Soul-Match Ritual</h3>
                                        <p className="text-text-muted font-light">Based on your goals, we recommend starting with our:</p>
                                    </div>

                                    <div className="bg-cream/20 p-8 rounded-[40px] border border-secondary/20 flex flex-col items-center">
                                        <img src={recommendation.image} alt={recommendation.name} className="w-48 h-48 object-contain mix-blend-multiply mb-6" />
                                        <h4 className="text-2xl font-serif font-bold text-primary mb-2">{recommendation.name}</h4>
                                        <p className="text-secondary font-bold text-xl mb-6">₹{recommendation.price}</p>

                                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                            <Button
                                                as={Link}
                                                to={`/products/${recommendation.id}`}
                                                variant="outline"
                                                className="w-full sm:w-auto"
                                            >
                                                Learn More
                                            </Button>
                                            <Button
                                                variant="primary"
                                                className="w-full sm:w-auto gap-2"
                                                onClick={() => {
                                                    dispatch(addItem(recommendation));
                                                    dispatch(showToast(`${recommendation.name} added to cart!`));
                                                }}
                                            >
                                                Add to Ritual <FiShoppingBag />
                                            </Button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={reset}
                                        className="text-text-muted text-xs font-bold flex items-center gap-2 mx-auto hover:text-secondary transition-colors uppercase tracking-widest"
                                    >
                                        <FiRotateCcw /> Restart Discovery
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};

export default SelectionGuide;
