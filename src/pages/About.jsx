import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/layout/SectionWrapper';
import FounderStory from '../components/sections/FounderStory';
import ComparisonTool from '../components/sections/ComparisonTool';
import { FiShield, FiHeart, FiStar, FiZap, FiCheckCircle, FiSun } from 'react-icons/fi';
import { GiCow, GiHoneyJar } from 'react-icons/gi';

const About = () => {
    const valueProps = [
        {
            title: "Direct Sourcing",
            desc: "Zero middlemen. Every jar is sourced directly from trusted farm clusters.",
            icon: <FiStar />,
            color: "text-amber-500"
        },
        {
            title: "Traditional Method",
            desc: "Bilona churning for Ghee & unheated methods for Honey.",
            icon: <GiCow />,
            color: "text-secondary"
        },
        {
            title: "Zero Additives",
            desc: "100% natural purity. No sugar mix, no shortcuts, no compromises.",
            icon: <FiShield />,
            color: "text-emerald-600"
        },
        {
            title: "Health First",
            desc: "Preserving bioactive enzymes and vital medicinal nutrients.",
            icon: <FiHeart />,
            color: "text-rose-500"
        },
        {
            title: "Lab Certified",
            desc: "NABL accredited testing for every batch produced.",
            icon: <FiCheckCircle />,
            color: "text-blue-500"
        },
        {
            title: "Community Trust",
            desc: "Built on transparency, honesty, and ancestral wisdom.",
            icon: <FiZap />,
            color: "text-indigo-500"
        },
    ];

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
                <div className="container relative z-10 px-4">
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

            {/* Mission & Philosophy */}
            <SectionWrapper bgColor="bg-cream/30">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-primary">Mission & <span className="text-secondary italic">Philosophy</span></h2>
                        <div className="space-y-8 text-lg text-text-muted leading-relaxed font-light">
                            <p>
                                Farm Begin was founded on a singular realization: purity in modern food is no longer a given. Our mission is to bridge the gap between ancestral food wisdom and modern convenience.
                            </p>
                            <p>
                                By offering A2 Gir Cow Ghee and Natural Raw Honey, we aren't just selling products—we are reviving a culture of health and integrity. Every batch is a testament to our commitment to honesty.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 bg-secondary/5 rounded-[60px] blur-3xl -z-10" />
                        <div className="rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-primary/5">
                            <img
                                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
                                alt="Philosophy"
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[2s]"
                            />
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Comparison Section */}
            <ComparisonTool />

            {/* Vision & Why Choose Us */}
            <SectionWrapper className="py-32">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Foundation</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-primary">Why Choose Farm Begin?</h2>
                    <p className="text-text-muted text-xl font-light">
                        Our vision is to make every home healthier by providing pure food products that people can trust without a shadow of a doubt.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {valueProps.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white p-10 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] hover:-translate-y-3 transition-all duration-500 border border-primary/5"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 ${val.color}`}>
                                {val.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{val.title}</h3>
                            <p className="text-text-muted leading-relaxed font-light">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
