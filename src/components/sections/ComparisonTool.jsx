import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const ComparisonTool = () => {
    const features = [
        { name: 'Preparation Method', fb: 'Vedic Bilona Churned', generic: 'Machine Processed' },
        { name: 'Purity Level', fb: '100% Raw & Unheated', generic: 'Highly Pasteurized' },
        { name: 'Adulterants', fb: 'Zero Chemicals/Sugar', generic: 'Likely Mixed with Fillers' },
        { name: 'Source', fb: 'Direct from Trusted Farms', generic: 'Industrial Mass Sourcing' },
        { name: 'Aroma & Taste', fb: 'Natural, Rich & Nutty', generic: 'Artificial Flavors Added' },
        { name: 'Nutrition', fb: 'Intact Enzymes & Vitamins', generic: 'Denatured by High Heat' },
    ];

    return (
        <div className="py-16 md:py-24">
            <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">The Gold Standard</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Know Your Purity</h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                    See why Farm Begin is trusted by thousands of families across India for their daily wellness.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="overflow-x-auto rounded-[30px] md:rounded-[40px] shadow-2xl border border-secondary/10 bg-white custom-scrollbar relative">
                    <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 md:p-8 font-serif text-lg md:text-xl border-r border-white/10">Features</th>
                                <th className="p-4 md:p-8 font-serif text-lg md:text-xl text-center bg-secondary/90">Farm Begin</th>
                                <th className="p-4 md:p-8 font-serif text-lg md:text-xl text-center border-l border-white/10 opacity-60">Generic Brands</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((f, idx) => (
                                <motion.tr
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={idx % 2 === 0 ? 'bg-white' : 'bg-cream/20'}
                                >
                                    <td className="p-4 md:p-8 font-bold text-primary border-r border-primary/5 text-sm md:text-base">{f.name}</td>
                                    <td className="p-4 md:p-8 text-center bg-secondary/5 border-r border-primary/5">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="p-1 px-3 md:px-4 text-[10px] md:text-xs font-bold text-secondary bg-secondary/10 rounded-full flex items-center gap-1">
                                                <FiCheck /> Premium
                                            </span>
                                            <span className="font-bold text-primary text-sm md:text-base">{f.fb}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 md:p-8 text-center text-text-muted opacity-70">
                                        <div className="flex flex-col items-center gap-2">
                                            <FiX className="text-red-400" />
                                            <span className="text-xs md:text-sm">{f.generic}</span>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-cream rounded-[40px] border border-secondary/20">
                    <div className="max-w-md">
                        <h4 className="text-2xl font-serif font-bold text-primary mb-2">Our Quality Commitment</h4>
                        <p className="text-text-muted">Every jar batch is lab-tested and verified for purity. We stand by our promise of honest quality at a fair price.</p>
                    </div>
                    <div className="flex gap-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft p-3">
                                <img src={`https://cdn-icons-png.flaticon.com/512/3233/3233${482 + i}.png`} alt="Check" className="w-full h-full opacity-50" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTool;
