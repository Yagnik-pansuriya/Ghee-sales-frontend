import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Yoga Instructor",
        text: "I've tried many organic ghees, but this one is truly exceptional. The aroma reminds me of my grandmother's home-made ghee. Absolutely pure!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "Chef",
        text: "The texture and taste of the A2 Ghee is perfect for traditional Indian sweets. It adds a rich, authentic flavor that store-bought ghee simply cannot match.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 3,
        name: "Anita Desai",
        role: "Homemaker",
        text: "My family loves the raw honey! It's so different from the processed sugar syrups sold in markets. Highly recommend for immunity.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <SectionWrapper bgColor="bg-white" className="relative">
            <div className="absolute top-20 right-20 text-primary/5 text-9xl font-serif hidden lg:block">
                <FaQuoteRight />
            </div>

            <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Testimonials</span>
                <h2 className="text-4xl md:text-5xl mt-3 font-serif">Loved by Thousands</h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
                <div className="overflow-hidden p-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-cream rounded-[40px] p-10 md:p-14 text-center relative"
                        >
                            <img
                                src={reviews[currentIndex].image}
                                alt={reviews[currentIndex].name}
                                className="w-20 h-20 rounded-full border-4 border-white shadow-lg mx-auto mb-6 object-cover"
                            />

                            <div className="flex justify-center gap-1 text-secondary mb-6">
                                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} size={20} />
                                ))}
                            </div>

                            <p className="font-serif text-xl md:text-3xl leading-relaxed text-text-main italic mb-8">
                                "{reviews[currentIndex].text}"
                            </p>

                            <div>
                                <h4 className="text-primary font-bold text-lg">{reviews[currentIndex].name}</h4>
                                <span className="text-text-muted text-sm uppercase tracking-wider">{reviews[currentIndex].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevReview}
                    className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    onClick={nextReview}
                    className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
                >
                    <FiChevronRight size={24} />
                </button>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
