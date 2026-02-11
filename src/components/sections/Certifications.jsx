import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';

const certs = [
    { name: "FSSAI Certified", icon: "/images/certs/fssai.png" }, // Placeholder logos, replace with local assets in prod
    { name: "India Organic", icon: "/images/certs/organic-india.png" },
    { name: "Jaivik Bharat", icon: "/images/certs/jaivik.png" },
    { name: "ISO 9001:2015", icon: "/images/certs/iso.png" }
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
                    <div className="flex flex-wrap gap-8 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {certs.map((cert, idx) => (
                            <motion.img
                                key={idx}
                                src={cert.icon}
                                alt={cert.name}
                                className="h-12 object-contain"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            />
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
