import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { FiShield, FiAward, FiSun, FiDroplet } from 'react-icons/fi';

const features = [
    {
        icon: FiAward,
        title: "100% Pure & Organic",
        description: "Certified organic with zero additives, preservatives, or artificial colors."
    },
    {
        icon: FiSun,
        title: "Traditional Bilona",
        description: "Hand-churned from curd using the ancient Vedic method for superior quality."
    },
    {
        icon: FiDroplet,
        title: "Lab Tested Purity",
        description: "Every batch is rigorously tested for up to 30 quality parameters."
    },
    {
        icon: FiShield,
        title: "Ethically Sourced",
        description: "Sourced directly from farmers ensuring fair trade and sustainability."
    }
];

const Features = () => {
    return (
        <SectionWrapper bgColor="bg-white">
            <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl mt-3 font-serif">The Purity Promise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="text-center p-6 rounded-2xl hover:bg-cream transition-colors duration-300 group"
                    >
                        <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <feature.icon />
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-3 text-text-main">{feature.title}</h3>
                        <p className="text-text-muted leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Features;
