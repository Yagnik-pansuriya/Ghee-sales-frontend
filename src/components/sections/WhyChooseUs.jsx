import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { GiMilkCarton, GiButterfly, GiTestTubes, GiFarmTractor } from 'react-icons/gi';

const features = [
    {
        id: 1,
        icon: GiMilkCarton,
        title: "Traditional Bilona Method",
        description: "Hand-churned from curd, ensuring the highest retention of nutrients and authentic aroma."
    },
    {
        id: 2,
        icon: GiTestTubes,
        title: "Lab Tested Purity",
        description: "Every batch is rigorously tested for 18+ parameters to ensure 0% adulteration."
    },
    {
        id: 3,
        icon: GiButterfly,
        title: "Cruelty Free",
        description: "We only take what's left. Our calves are fed first, and honey is harvested sustainably."
    },
    {
        id: 4,
        icon: GiFarmTractor,
        title: "Farm to Table",
        description: "Directly sourced from our network of organic farmers in the Gir forest region."
    }
];

const WhyChooseUs = () => {
    return (
        <SectionWrapper bgColor="bg-cream">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Purity You Can Trust</h2>
                <p className="text-text-muted text-lg">
                    We don't just sell products; we deliver a promise of health, tradition, and ethical farming.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 group text-center gpu-accelerated will-change-[transform,opacity]"
                    >
                        <div className="w-16 h-16 mx-auto bg-cream rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
                            <feature.icon className="text-3xl text-primary group-hover:text-secondary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-serif">{feature.title}</h3>
                        <p className="text-text-muted leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default WhyChooseUs;
