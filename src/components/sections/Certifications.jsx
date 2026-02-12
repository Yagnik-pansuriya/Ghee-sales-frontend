import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';

// SVG Logo Components for reliability
const FSSAILogo = () => (
    <svg viewBox="0 0 100 40" className="w-full h-full">
        <text x="50" y="25" textAnchor="middle" className="font-sans font-black italic fill-[#1a237e] text-[18px]">fssai</text>
        <rect x="15" y="28" width="70" height="2" fill="#f57c00" />
        <rect x="15" y="32" width="70" height="2" fill="#2e7d32" />
        <circle cx="85" cy="15" r="3" fill="#f57c00" />
    </svg>
);

const certs = [
    { name: "FSSAI Certified", image: "/images/certs/fssai.png" },
    { name: "India Organic", image: "/images/certs/organic.png" },
    { name: "ISO 9001:2015", image: "/images/certs/iso.png" }
];

const Certifications = () => {
    return (
        <SectionWrapper bgColor="bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Certified Goodness</span>
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary leading-tight">Lab Tested & Certified</h2>
                    <p className="text-text-muted text-lg mb-8">
                        Our commitment to quality is backed by rigorous testing and government certifications.
                        We ensure every jar meets the highest standards of safety and purity.
                    </p>
                    <div className="flex flex-wrap gap-8 items-center opacity-80 hover:opacity-100 transition-all duration-500">
                        {certs.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                className="h-16 w-24 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <img src={cert.image} alt={cert.name} className="h-full object-contain" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
                    <img
                        src="/images/certs/lab-test.jpg"
                        alt="Lab Testing"
                        className="relative z-10 rounded-2xl shadow-card max-w-[280px] sm:max-w-sm w-full object-cover aspect-square mx-auto"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
