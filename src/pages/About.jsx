import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import FounderStory from '../components/sections/FounderStory';
import ComparisonTool from '../components/sections/ComparisonTool';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero/about-hero.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-[0.25em] mb-6 block text-sm md:text-base uppercase">
                            Established 1998
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Roots of Purity</h1>
                        <p className="text-xl max-w-2xl mx-auto text-white/90">
                            A journey from the heart of India's forests to your kitchen shelf.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Story Section */}
            <FounderStory />

            {/* Mission & Philosophy */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-primary">Mission & Philosophy</h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-8">
                            Farm Begin was started with one simple mission — to bring pure, natural, and chemical-free food from the farm to your home. We proudly offer A2 Gir Cow Ghee and Natural Raw Honey, made using traditional methods and sourced directly from trusted farms.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed">
                            In today’s market, where food purity is often compromised, Farm Begin stands for trust, purity, and honesty. We believe in providing real Vedic ghee and raw honey, just like our grandparents used.
                        </p>
                    </div>
                    <div className="rounded-[40px] overflow-hidden hover:shadow-2xl transition-shadow duration-500 shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
                            alt="Philosophy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </SectionWrapper>

            {/* Comparison Section */}
            <SectionWrapper>
                <ComparisonTool />
            </SectionWrapper>

            {/* Vision & Why Choose Us */}
            <SectionWrapper bgColor="bg-cream">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary">Why Choose Farm Begin?</h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-lg">
                        Our vision is to make every home healthier by providing pure food products that people can trust without doubt.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Direct from Farm", desc: "We source our products directly from trusted farms, ensuring zero adulteration." },
                        { title: "Traditional Methods", desc: "From the Bilona method for Ghee to unheated Honey, we stick to ancestral techniques." },
                        { title: "No Chemicals", desc: "100% natural. No shortcuts, no sugar mix, and no artificial flavors ever." },
                        { title: "Health Focused", desc: "Retaining all natural enzymes and medicinal properties for your wellness." },
                        { title: "Fair Pricing", desc: "Honest quality at a fair price, because health shouldn't be a luxury." },
                        { title: "Trusted by Families", desc: "A brand built on the foundation of trust, purity, and absolute honesty." },
                    ].map((val, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-soft hover:-translate-y-2 transition-transform duration-300 border border-secondary/10">
                            <h3 className="text-xl font-serif font-bold mb-3 text-primary">{val.title}</h3>
                            <p className="text-text-muted leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
