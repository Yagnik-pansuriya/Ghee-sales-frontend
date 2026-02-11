import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Mumbai",
        text: "I've tried many organic brands, but the aroma of this Bilona Ghee takes me back to my grandmother's kitchen. Absolutely authentic!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Rahul Mehta",
        location: "Delhi",
        text: "The raw honey is incredible. You can actually taste the wildflowers. It's now a staple in my morning routine.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Anjali Gupta",
        location: "Bangalore",
        text: "Fast delivery and beautiful packaging. I bought it as a gift for my parents, and they loved the quality.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <SectionWrapper bgColor="bg-white">
            <div className="mb-16 text-center">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Community</span>
                <h2 className="text-4xl md:text-5xl font-serif text-primary">Words of Wellness</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((review, idx) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-cream/50 p-8 rounded-3xl relative hover:bg-cream transition-colors duration-300"
                    >
                        <FaQuoteLeft className="text-secondary/20 text-6xl absolute top-6 left-6" />

                        <div className="relative z-10">
                            <div className="flex gap-1 mb-6 text-secondary">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} size={16} />
                                ))}
                            </div>

                            <p className="text-text-main text-lg italic mb-8 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h4 className="font-serif font-bold text-primary">{review.name}</h4>
                                    <span className="text-xs tracking-wider uppercase text-text-muted">{review.location}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;