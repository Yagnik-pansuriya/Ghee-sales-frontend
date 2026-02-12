import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { FiSun, FiAward, FiStar, FiRefreshCw, FiDroplet, FiHeart, FiSettings } from 'react-icons/fi';
import clsx from 'clsx';

const BilonaJourney = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            number: "01",
            title: "Ethical Sourcing",
            desc: "We start with pure A2 milk from free-grazing Gir cows. No hormones, no stress, just nature's finest gift.",
            icon: <FiHeart />,
            color: "bg-green-50",
            textColor: "text-green-700",
            glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
            detail: "Free Grazing • A2 Protein Only"
        },
        {
            number: "02",
            title: "Slow Boiling",
            desc: "The milk is slow-boiled over earthen chulhas using traditional firewood, preserving every vital nutrient.",
            icon: <FiSettings />,
            color: "bg-orange-50",
            textColor: "text-orange-700",
            glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
            detail: "Earthen Chulhas • Low Heat"
        },
        {
            number: "03",
            title: "Natural Curding",
            desc: "Milk is converted into curd overnight at room temperature. This is the secret to authentic granular texture.",
            icon: <FiDroplet />,
            color: "bg-blue-50",
            textColor: "text-blue-700",
            glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
            detail: "Overnight Culturing • No Additives"
        },
        {
            number: "04",
            title: "Bilona Churning",
            desc: "The curd is churned bi-directionally using a wooden churner (Bilona). This separates the pure makkhan (butter).",
            icon: <FiRefreshCw />,
            color: "bg-amber-50",
            textColor: "text-amber-700",
            glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
            detail: "Hand Churned • Ancient Method"
        },
        {
            number: "05",
            title: "Pure Clarification",
            desc: "Makkhan is heated on a slow flame to remove moisture, leaving behind golden, aromatic, medicinal A2 Ghee.",
            icon: <FiSun />,
            color: "bg-yellow-50",
            textColor: "text-yellow-700",
            glow: "shadow-[0_0_30px_rgba(234,179,8,0.3)]",
            detail: "Golden Granules • High Aroma"
        }
    ];

    return (
        <SectionWrapper className="py-40 bg-white overflow-hidden" id="bilona-journey" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Intro */}
                <div className="text-center mb-40 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-secondary/20"
                    >
                        Ancestral Wisdom
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tighter"
                    >
                        The Art of <span className="text-secondary italic">Bilona</span>
                    </motion.h2>
                    <p className="text-2xl text-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                        A 3,000-year-old Vedic ritual that transforms pure A2 milk into <br className="hidden md:block" />
                        <span className="text-primary font-bold decoration-secondary decoration-2 underline underline-offset-8">Golden Medicine.</span>
                    </p>
                </div>

                <div className="relative">
                    {/* The Scrollytelling Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/5 -translate-x-1/2 hidden md:block" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-secondary origin-top -translate-x-1/2 hidden md:block blur-[1px]"
                    />

                    <div className="space-y-40 md:space-y-64">
                        {steps.map((step, idx) => (
                            <div key={idx} className={clsx(
                                "flex flex-col md:flex-row items-center gap-16 md:gap-32 relative",
                                idx % 2 !== 0 && "md:flex-row-reverse"
                            )}>
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex-1 text-center md:text-left space-y-8 gpu-accelerated"
                                >
                                    <div className={clsx(
                                        "inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em]",
                                        step.textColor
                                    )}>
                                        <span className="w-12 h-12 rounded-2xl border-2 border-current flex items-center justify-center font-serif text-xl">
                                            {step.number}
                                        </span>
                                        {step.detail}
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-text-muted leading-relaxed font-light">
                                        {step.desc}
                                    </p>
                                    <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                                        <div className="h-px w-12 bg-secondary/30" />
                                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary">Sacred Process</span>
                                    </div>
                                </motion.div>

                                {/* Center Icon Hub */}
                                <div className="relative z-10 shrink-0">
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                                        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                        viewport={{ margin: "-50px" }}
                                        className={clsx(
                                            "w-40 h-40 md:w-56 md:h-56 rounded-[50px] flex items-center justify-center text-6xl md:text-8xl border-8 border-white transition-all duration-700 bg-white group relative shadow-2xl overflow-hidden",
                                            step.textColor
                                        )}
                                    >
                                        <div className={clsx("absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20", step.color)} />
                                        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                                            {step.icon}
                                        </div>

                                        {/* Decorative Ring */}
                                        <div className="absolute inset-4 border-2 border-current opacity-5 rounded-[40px]" />
                                    </motion.div>

                                    {/* Scroll Glow Pulse */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className={clsx(
                                            "absolute inset-0 -z-10 blur-3xl opacity-0 transition-opacity duration-1000",
                                            step.glow,
                                            "group-hover:opacity-100"
                                        )}
                                    />
                                </div>

                                {/* Placeholder for Symmetry */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conclusion Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-64 bg-primary p-16 md:p-32 rounded-[100px] text-center text-white relative overflow-hidden shadow-glow-primary"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 -mr-48 -mt-48 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 -ml-48 -mb-48 rounded-full blur-[120px]" />

                    <FiAward className="text-6xl text-secondary mx-auto mb-12 animate-pulse-subtle" />
                    <h3 className="text-4xl md:text-7xl font-serif font-bold mb-12 tracking-tight">Slow Food for a <span className="text-secondary italic">Conscious Life</span></h3>
                    <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light italic mb-20">
                        "In an era of mass-production, we choose the ritual. 32 hours of patience, 25 liters of devotion, and 0 compromises."
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto pt-16 border-t border-white/10">
                        <div className="space-y-4">
                            <div className="text-5xl font-serif font-bold text-secondary">32 hrs</div>
                            <div className="text-xs uppercase font-bold tracking-[0.3em] text-white/40">Vedic Crafting</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl font-serif font-bold text-secondary">25 L</div>
                            <div className="text-xs uppercase font-bold tracking-[0.3em] text-white/40">A2 Milk / Jar</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl font-serif font-bold text-secondary">Zero</div>
                            <div className="text-xs uppercase font-bold tracking-[0.3em] text-white/40">Industrialization</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default BilonaJourney;
