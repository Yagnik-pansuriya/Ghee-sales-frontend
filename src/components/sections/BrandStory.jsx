import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiHeart, FiTarget, FiStar, FiShield } from 'react-icons/fi';
import SectionWrapper from '../layout/SectionWrapper';

const BrandStory = () => {
    const benefits = [
        { title: "Direct from farm", icon: <FiStar /> },
        { title: "No adulteration", icon: <FiShield /> },
        { title: "Traditional preparation", icon: <FiHeart /> },
        { title: "Health-focused", icon: <FiCheckCircle /> },
        { title: "Honest quality", icon: <FiStar /> },
        { title: "Trusted by families", icon: <FiHeart /> },
    ];

    return (
        <div className="relative overflow-hidden bg-primary text-white">
            {/* Immersive Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <SectionWrapper className="relative z-10 py-24 md:py-32" bgColor="bg-transparent">
                <div className="max-w-4xl mx-auto">
                    {/* Mission Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Our Mission</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            Pure, Natural, and Chemical-Free <br />
                            <span className="text-secondary">From Farm to Your Home</span>
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed font-light italic">
                            "In today’s market, where food purity is often compromised, Farm Begin stands for trust, purity, and honesty."
                        </p>
                    </motion.div>

                    {/* Product Features Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        {/* Ghee Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10 hover:border-secondary/30 transition-colors group"
                        >
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🐄</div>
                            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Our A2 Gir Cow Ghee</h3>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                Prepared from the milk of pure Gir cows using the traditional <strong>Bilona method</strong>. This is real Vedic ghee, just like our grandparents used.
                            </p>
                            <ul className="space-y-3">
                                {["Natural aroma & rich taste", "High nutrition & medicinal value", "Easy digestion & immunity support"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <FiCheckCircle className="text-secondary mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Honey Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10 hover:border-secondary/30 transition-colors group"
                        >
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🍯</div>
                            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Our Natural Honey</h3>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                100% raw, unprocessed, and unheated. Collected naturally from beehives, retaining all enzymes and medicinal benefits.
                            </p>
                            <ul className="space-y-3">
                                {["No sugar mix or chemicals", "No artificial flavors", "Rich in naturally occurring enzymes"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <FiCheckCircle className="text-secondary mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Why Choose Us & Vision */}
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h3 className="text-3xl font-serif font-bold mb-8">Why Choose Farm Begin?</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 border border-white/5 hover:bg-secondary/10 transition-colors"
                                    >
                                        <div className="text-secondary text-xl">{benefit.icon}</div>
                                        <span className="text-xs font-bold uppercase tracking-wider">{benefit.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-secondary p-12 rounded-[50px] text-primary relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.4),transparent_60%)]" />
                            <FiTarget className="text-5xl mb-6 relative z-10" />
                            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Our Vision</h3>
                            <p className="text-lg leading-relaxed font-medium relative z-10">
                                To make every home healthier by providing pure food products that people can trust without doubt.
                            </p>
                            <div className="mt-8 pt-8 border-t border-primary/10 relative z-10">
                                <span className="font-serif italic text-xl">"Trust, Purity, and Honesty."</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default BrandStory;
