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

const IndiaOrganicLogo = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#2e7d32" strokeWidth="2" />
        <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="#2e7d32" opacity="0.1" />
        <text x="50" y="55" textAnchor="middle" className="text-[12px] font-bold fill-[#1b5e20]">INDIA</text>
        <text x="50" y="70" textAnchor="middle" className="text-[10px] font-bold fill-[#1b5e20]">ORGANIC</text>
    </svg>
);

const ISOLogo = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="#0d47a1" />
        <text x="50" y="45" textAnchor="middle" className="fill-white font-bold text-[24px]">ISO</text>
        <text x="50" y="75" textAnchor="middle" className="fill-white font-medium text-[16px]">9001</text>
    </svg>
);

const certs = [
    { name: "FSSAI Certified", Logo: FSSAILogo },
    { name: "India Organic", Logo: IndiaOrganicLogo },
    { name: "ISO 9001:2015", Logo: ISOLogo }
];

const Certifications = () => {
    return (
        <SectionWrapper bgColor="bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Certified Goodness</span>
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">Lab Tested & Certified</h2>
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
                                <cert.Logo />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
                    <img
                        src="/images/certs/lab-test.jpg"
                        alt="Lab Testing"
                        className="relative z-10 rounded-2xl shadow-card max-w-sm w-full object-cover aspect-square"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
