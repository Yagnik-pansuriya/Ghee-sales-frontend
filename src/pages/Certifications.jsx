import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';

const Certifications = () => {
    return (
        <div className="pt-20">
            <div className="bg-cream py-20 text-center">
                <div className="container mx-auto px-4">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-4">Quality Assurance</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Certified Pure</h1>
                    <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
                        Our commitment to quality is backed by rigorous testing and certifications from leading food safety authorities.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "FSSAI",
                            id: "1001234567890",
                            desc: "Licensed by the Food Safety and Standards Authority of India.",
                            color: "bg-green-50"
                        },
                        {
                            title: "NPOP Organic",
                            id: "ORG-002345",
                            desc: "Certified Organic under the National Programme for Organic Production.",
                            color: "bg-orange-50"
                        },
                        {
                            title: "ISO 22000",
                            id: "ISO-CERT-9988",
                            desc: "International standard for food safety management systems.",
                            color: "bg-blue-50"
                        }
                    ].map((cert, i) => (
                        <div key={i} className={`p-10 rounded-3xl border border-border text-center ${cert.color} hover:-translate-y-2 transition-transform duration-300`}>
                            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 font-bold text-xl text-primary border-4 border-double border-primary/20">
                                {cert.title}
                            </div>
                            <h3 className="font-serif font-bold text-2xl mb-2">{cert.title}</h3>
                            <p className="font-mono text-sm text-text-muted mb-4 tracking-wider">{cert.id}</p>
                            <p className="text-text-muted text-sm">{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Certifications;
