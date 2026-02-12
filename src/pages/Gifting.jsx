import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import GiftWizard from '../components/gifting/GiftWizard';
import { motion } from 'framer-motion';
import { FiGift } from 'react-icons/fi';

const Gifting = () => {
    return (
        <div className="pt-20 min-h-screen bg-cream">
            {/* Hero Header */}
            <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-white/20"
                    >
                        <FiGift /> The Art of Gifting
                    </motion.div>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6">Curate a box of <br /><span className="text-secondary italic">Happiness</span></h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                        Hand-pick our finest Vedic products, personalize a heartfelt note, and we'll wrap it in royal elegance for your loved ones.
                    </p>
                </div>
            </div>

            <SectionWrapper bgColor="bg-cream" className="-mt-12 relative z-20 pb-32">
                <GiftWizard />
            </SectionWrapper>
        </div>
    );
};

export default Gifting;
