import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import GirMap from '../components/traceability/GirMap';
import { motion } from 'framer-motion';
import { FiMap } from 'react-icons/fi';

const Traceability = () => {
    return (
        <div className="min-h-screen bg-cream">
            {/* Header */}
            <div className="pt-32 pb-16 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm border border-secondary/10"
                >
                    <FiMap /> Source Traceability
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                    From Our Soil to <span className="text-secondary italic">Your Soul</span>
                </h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                    Explore the sacred geography of our farm. Every jar has a journey—trace the roots of purity back to the source.
                </p>
            </div>

            {/* Map Section */}
            <SectionWrapper className="!pt-0 pb-32">
                <GirMap />
            </SectionWrapper>
        </div>
    );
};

export default Traceability;
