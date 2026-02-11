import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { FiSun, FiAward, FiStar, FiRefreshCw, FiDroplet, FiHeart, FiSettings } from 'react-icons/fi';

const BilonaJourney = () => {
    const steps = [
        {
            number: "01",
            title: "Ethical Sourcing",
            desc: "We start with pure A2 milk from free-grazing Gir cows. No hormones, no stress, just nature's finest gift.",
            icon: <FiHeart />,
            color: "bg-green-50",
            textColor: "text-green-700",
            detail: "Free Grazing • A2 Protein Only"
        },
        {
            number: "02",
            title: "Slow Boiling",
            desc: "The milk is slow-boiled over earthen chulhas using traditional firewood, preserving every vital nutrient.",
            icon: <FiSettings />,
            color: "bg-orange-50",
            textColor: "text-orange-700",
            detail: "Earthen Chulhas • Low Heat"
        },
        {
            number: "03",
            title: "Natural Curding",
            desc: "Milk is converted into curd overnight at room temperature. This is the secret to authentic granular texture.",
            icon: <FiDroplet />,
            color: "bg-blue-50",
            textColor: "text-blue-700",
            detail: "Overnight Culturing • No Additives"
        },
        {
            number: "04",
            title: "Bilona Churning",
            desc: "The curd is churned bi-directionally using a wooden churner (Bilona). This separates the pure makkhan (butter).",
            icon: <FiRefreshCw />,
            color: "bg-amber-50",
            textColor: "text-amber-700",
            detail: "Hand Churned • Ancient Method"
        },
        {
            number: "05",
            title: "Pure Clarification",
            desc: "Makkhan is heated on a slow flame to remove moisture, leaving behind golden, aromatic, medicinal A2 Ghee.",
            icon: <FiSun />,
            color: "bg-yellow-50",
            textColor: "text-yellow-700",
            detail: "Golden Granules • High Aroma"
        }
    ];

    return (
        <SectionWrapper className="py-32 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
                    >
                        Ancestral Wisdom
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight"
                    >
                        The Art of <span className="text-secondary italic">Bilona</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-secondary mx-auto mb-8" />
                    <p className="text-xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                        Unlike industrial methods, our 5-step Vedic process takes 32 hours and 25 kg of milk to create just one jar of pure Ghee.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/5 -translate-x-1/2" />

                    <div className="space-y-24 md:space-y-40">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-1 text-center lg:text-left"
                                >
                                    <div className={`inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-6 ${step.textColor}`}>
                                        <span className="w-10 h-10 rounded-full border border-current flex items-center justify-center font-serif text-lg">
                                            {step.number}
                                        </span>
                                        {step.detail}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">{step.title}</h3>
                                    <p className="text-lg text-text-muted leading-relaxed mb-8">
                                        {step.desc}
                                    </p>
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <FiStar className="text-secondary" />
                                        <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40">Pure Vedic Standard</span>
                                    </div>
                                </motion.div>

                                <div className="relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className={`w-32 h-32 md:w-48 md:h-48 rounded-full ${step.color} ${step.textColor} shadow-2xl flex items-center justify-center text-5xl md:text-7xl border-8 border-white group relative`}
                                    >
                                        {step.icon}
                                        <div className="absolute inset-2 border border-current opacity-20 rounded-full" />
                                    </motion.div>

                                    <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full ${step.color} ${step.textColor} border-4 border-white shadow-lg flex items-center justify-center font-bold text-sm`}>
                                        {step.number}
                                    </div>
                                </div>

                                <div className="flex-1 hidden lg:block" />
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-40 bg-cream p-12 md:p-24 rounded-[60px] text-center border-2 border-primary/5"
                >
                    <FiAward className="text-6xl text-secondary mx-auto mb-8" />
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8">Slow Food for a Fast Life</h3>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed italic mb-12">
                        "Real health cannot be mass-produced. It requires patience, tradition, and respect for nature's natural rhythm."
                    </p>
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">32 hrs</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-secondary">Crafting Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">25 L</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-secondary">A2 Milk / Jar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">0</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-secondary">Chemicals</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default BilonaJourney;
