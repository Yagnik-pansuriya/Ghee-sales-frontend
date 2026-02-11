import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Video background fallback to image if needed
    const heroImage = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop";

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div className="relative w-full h-[120%] -top-[10%]">
                    <img
                        src={heroImage}
                        alt="Golden sunlight on organic farm"
                        className="w-full h-full object-cover brightness-[0.65]"
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                </div>
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 text-center text-white px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-[1px] bg-secondary mb-8"
                    />

                    <span className="inline-block text-secondary font-sans font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base animate-fade-in-up">
                        100% Organic • Ethical • Pure
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight text-white drop-shadow-xl">
                        Nature’s Golden <br className="hidden md:block" />
                        <span className="text-stone-100 italic">Liquid Gold</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide text-shadow">
                        Discover the ancient purity of Bilona Ghee and wild-harvested Honey.
                        Sourced from free-grazing cows and pristine forests.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <Button size="lg" className="w-full sm:w-auto min-w-[180px] shadow-glow">
                            Shop Collection
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[180px] backdrop-blur-sm">
                            Our Story
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Elements / Decor */}
            <motion.div
                style={{ y: y2 }}
                className="absolute -right-20 top-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-3 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-80 hover:text-secondary transition-colors">Explore</span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div
                        animate={{ y: [-64, 64] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-secondary to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
