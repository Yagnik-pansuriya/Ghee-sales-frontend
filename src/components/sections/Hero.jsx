import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2574"
                    alt="Organic Honey Farm"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-secondary font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
                        Pure • Organic • Vedic
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight text-white">
                        Nature’s Golden <br className="hidden md:block" /> Elixir
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Experience the purity of traditional Bilona Ghee and raw, unprocessed Honey. Sourced directly from free-grazing cows and wild forests.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                            Shop Collection
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            Our Story
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest uppercase opacity-70">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-secondary"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
