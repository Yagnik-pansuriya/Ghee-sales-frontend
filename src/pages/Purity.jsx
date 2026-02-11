import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield, FiFileText, FiCheckCircle, FiDownload, FiExternalLink } from 'react-icons/fi';
import { GiCow, GiHoneyJar } from 'react-icons/gi';
import SectionWrapper from '../components/layout/SectionWrapper';

const reports = [
    {
        id: "GHEE-2024-001",
        name: "A2 Gir Cow Ghee - Batch #88",
        date: "Feb 2024",
        type: "Ghee",
        status: "Certified Pure",
        parameters: [
            { label: "Free Fatty Acids", value: "0.25%", limit: "< 0.5%", pass: true },
            { label: "Moisture Content", value: "0.12%", limit: "< 0.3%", pass: true },
            { label: "Peroxide Value", value: "0.4 meq/kg", limit: "< 1.0", pass: true },
            { label: "Baudouin Test", value: "Negative", limit: "Negative", pass: true }
        ]
    },
    {
        id: "HNY-2024-012",
        name: "Wild Forest Honey - Harvest #4",
        date: "Jan 2024",
        type: "Honey",
        status: "Certified Pure",
        parameters: [
            { label: "Fructose/Glucose Ratio", value: "1.2", limit: "> 1.0", pass: true },
            { label: "HMF Content", value: "12 mg/kg", limit: "< 40 mg/kg", pass: true },
            { label: "Antibiotic Residue", value: "Not Detected", limit: "Absent", pass: true },
            { label: "Added Sugar", value: "0%", limit: "0%", pass: true }
        ]
    }
];

const Purity = () => {
    const [activeReport, setActiveReport] = useState(reports[0]);

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <header className="bg-primary pt-24 pb-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-secondary text-sm font-bold uppercase tracking-widest mb-8 border border-white/10"
                    >
                        <FiShield /> 100% Transparency
                    </motion.div>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6">Purity is Non-Negotiable</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                        Every batch of Farm Begin products is lab-tested and certified by NABL accredited labs. Download detailed reports here.
                    </p>
                </div>
            </header>

            <SectionWrapper className="-mt-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Report Selector */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-xl font-serif font-bold text-primary mb-6">Recent Lab Reports</h3>
                        {reports.map((report) => (
                            <button
                                key={report.id}
                                onClick={() => setActiveReport(report)}
                                className={`w-full p-6 rounded-3xl text-left transition-all duration-300 border ${activeReport.id === report.id
                                        ? 'bg-primary text-white border-primary shadow-xl scale-105'
                                        : 'bg-white text-primary border-primary/10 hover:border-secondary/50'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-3 rounded-full ${activeReport.id === report.id ? 'bg-secondary' : 'bg-cream text-secondary'}`}>
                                        {report.type === "Ghee" ? <GiCow size={20} /> : <GiHoneyJar size={20} />}
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-60 uppercase tracking-widest font-bold">{report.date}</div>
                                        <div className="font-serif font-bold">{report.name}</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="opacity-80">Ref: {report.id}</span>
                                    <FiExternalLink className={activeReport.id === report.id ? 'opacity-100' : 'opacity-0'} />
                                </div>
                            </button>
                        ))}

                        <div className="p-8 bg-cream/50 rounded-[40px] border border-secondary/10 mt-8">
                            <h4 className="font-serif font-bold text-primary mb-3">Don't See Your Batch?</h4>
                            <p className="text-sm text-text-muted mb-4">If you have a batch ID not listed here, please contact us with your order details.</p>
                            <button className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                Request Report <FiFileText />
                            </button>
                        </div>
                    </div>

                    {/* Report Viewer */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeReport.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white rounded-[50px] border border-primary/5 shadow-2xl p-8 md:p-12 overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -translate-y-1/2 translate-x-1/2 rotate-45" />

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-primary/5 pb-8">
                                    <div>
                                        <div className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2">Detailed Analysis</div>
                                        <h2 className="text-3xl font-serif font-bold text-primary">{activeReport.name}</h2>
                                    </div>
                                    <button className="bg-primary text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-primary-dark transition-all font-bold text-sm shadow-lg">
                                        <FiDownload /> Download Certificate (PDF)
                                    </button>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-cream/40 p-6 rounded-3xl">
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-2">Audit Status</div>
                                        <div className="flex items-center gap-2 text-green-600 font-bold">
                                            <FiCheckCircle /> {activeReport.status}
                                        </div>
                                    </div>
                                    <div className="bg-cream/40 p-6 rounded-3xl">
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-2">Batch Reference</div>
                                        <div className="text-primary font-bold">{activeReport.id}</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-serif font-bold text-primary text-lg mb-6">Physical & Chemical Analysis</h3>
                                    {activeReport.parameters.map((param, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border border-primary/5 hover:bg-cream/20 transition-colors">
                                            <div className="mb-2 sm:mb-0">
                                                <div className="text-primary font-bold">{param.label}</div>
                                                <div className="text-xs text-text-muted">Standard Limit: {param.limit}</div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <div className="font-bold text-primary text-lg">{param.value}</div>
                                                    <div className="text-[10px] text-green-600 font-black uppercase tracking-widest">Passed</div>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                                    <FiCheckCircle />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t border-primary/5 flex items-center gap-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/2/23/FSSAI_logo.png" alt="FSSAI" className="h-10 grayscale opacity-40" />
                                    <div className="h-8 w-[1px] bg-primary/10" />
                                    <div className="text-xs text-text-muted leading-relaxed">
                                        Tested at NABL Accredited Laboratory. Analyzed according to FSSAI Standards for quality and safety.
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Purity;
