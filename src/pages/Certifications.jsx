import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
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
        <path d="M40 35 L60 35 M50 25 L50 45" stroke="#f57c00" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const ISOLogo = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="#0d47a1" />
        <text x="50" y="45" textAnchor="middle" className="fill-white font-bold text-[24px]">ISO</text>
        <text x="50" y="75" textAnchor="middle" className="fill-white font-medium text-[16px]">22000</text>
    </svg>
);

const certs = [
    {
        title: "FSSAI",
        id: "1001234567890",
        desc: "Licensed by the Food Safety and Standards Authority of India.",
        color: "bg-green-50/50",
        image: "/images/certs/fssai.png"
    },
    {
        title: "NPOP Organic",
        id: "ORG-002345",
        desc: "Certified Organic under the National Programme for Organic Production.",
        color: "bg-orange-50/50",
        Logo: IndiaOrganicLogo
    },
    {
        title: "ISO 22000",
        id: "ISO-CERT-9988",
        desc: "International standard for food safety management systems.",
        color: "bg-blue-50/50",
        Logo: ISOLogo
    }
];

const Certifications = () => {
    return (
        <div className="pt-20 lg:pt-32">
            <div className="bg-cream/30 py-24 text-center">
                <div className="container mx-auto px-4">
                    <span className="text-secondary font-bold tracking-[0.25em] h-px w-12 bg-secondary inline-block align-middle mr-4"></span>
                    <span className="text-secondary font-bold tracking-[0.25em] uppercase text-sm inline-block">Quality Standards</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mt-6 mb-8 text-primary">Certified Purity</h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                        Our commitment to excellence is verified by independent labs and international safety standards.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-12 rounded-[2.5rem] border border-stone-100 text-center ${cert.color} hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-2 transition-all duration-500`}
                        >
                            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft mb-8 p-6 group">
                                {cert.image ? (
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                                ) : (
                                    <cert.Logo />
                                )}
                            </div>
                            <h3 className="font-serif font-bold text-3xl mb-3 text-primary">{cert.title}</h3>
                            <p className="font-sans font-bold text-xs text-secondary/60 mb-6 tracking-[0.2em] uppercase">{cert.id}</p>
                            <p className="text-text-muted leading-relaxed text-lg">{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Verification Section */}
            <SectionWrapper bgColor="bg-cream/20">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary/5 rounded-[3rem] blur-2xl" />
                        <img
                            src="/images/certs/lab-test.jpg"
                            alt="Lab Testing Process"
                            className="relative z-10 rounded-[2.5rem] shadow-2xl w-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-primary">Scientifically Verified</h2>
                        <div className="space-y-10">
                            {[
                                { t: "Purity Testing", d: "Rigorous checks for fats, moisture, and absence of synthetic additives." },
                                { t: "Nutrient Profiles", d: "Testing for essential Omega fatty acids and vitamin content." },
                                { t: "Batch Traceability", d: "Every jar is traceable back to the farm and batch of production." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="w-14 h-14 bg-white border border-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-3 text-primary">{item.t}</h4>
                                        <p className="text-text-muted leading-relaxed text-lg">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Certifications;
