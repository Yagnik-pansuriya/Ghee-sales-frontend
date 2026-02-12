import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/layout/SectionWrapper';
import FounderStory from '../components/sections/FounderStory';
import BrandStory from '../components/sections/BrandStory';
import ComparisonTool from '../components/sections/ComparisonTool';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <section className="relative h-[50vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?q=80&w=2000&auto=format&fit=crop"
                        alt="Farm Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
                </div>
                <div className="max-w-7xl mx-auto md:px-8 relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-[0.4em] mb-6 block text-sm uppercase">
                            Establishing Purity Since 1998
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-white leading-tight">Roots of <span className="text-secondary italic">Trust</span></h1>
                        <div className="h-1 w-24 bg-secondary mx-auto mb-8" />
                        <p className="text-xl max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
                            A journey from the heart of India's organic pastures to the sanctity of your kitchen shelf.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Story Section */}
            <FounderStory />

            {/* Brand Mission & Story */}
            <BrandStory />

            {/* Comparison Section */}
            <ComparisonTool />
        </div>
    );
};

export default About;
