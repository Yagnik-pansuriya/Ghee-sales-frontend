import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import FounderStory from '../components/sections/FounderStory';

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

            {/* Mission */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-primary">Our Philosophy</h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-8">
                            At Ghee & Honey, we believe that food is not just sustenance; it's a sacred offering to the body. Every jar we fill is a testament to our commitment to quality, tradition, and transparency.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed">
                            We bridge the gap between ancient Bharat and modern India, bringing you the finest superfoods prepared exactly as nature intended—slow, pure, and full of life.
                        </p>
                    </div>
                    <div className="rounded-[40px] overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
                            alt="Philosophy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </SectionWrapper>

            {/* Values Grid */}
            <SectionWrapper bgColor="bg-cream">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Core Values</h2>
                    <p className="max-w-2xl mx-auto text-text-muted">Guided by principles that put nature and health first.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Transparency", desc: "Know exactly where your food comes from. We provide full traceability for every batch." },
                        { title: "Sustainability", desc: "We support eco-friendly farming practices that enrich the soil rather than depleting it." },
                        { title: "Tradition", desc: "Modern technology is great, but some things are better done the old way—like our Bilona Ghee." },
                    ].map((val, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl shadow-soft hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{val.title}</h3>
                            <p className="text-text-muted leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
