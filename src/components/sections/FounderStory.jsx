import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';

const FounderStory = () => {
    return (
        <SectionWrapper bgColor="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] blur-2xl transform -rotate-3" />
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                        alt="Our Founder"
                        className="relative z-10 rounded-[2.5rem] shadow-2xl w-full aspect-[4/5] object-contain bg-cream"
                    />
                    <div className="absolute -bottom-8 -right-8 z-20 bg-primary p-8 rounded-2xl shadow-xl text-white hidden lg:block max-w-[240px]">
                        <p className="font-serif italic text-lg mb-2">"Purity isn't just a promise, it's our legacy."</p>
                        <p className="text-secondary font-bold text-sm tracking-widest uppercase">— Founder's Note</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Heart of Farm Begin</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-primary leading-tight">Authenticity in Every Drop</h2>
                    <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                        <p>
                            We proudly offer **A2 Gir Cow Ghee** prepared using the traditional **Bilona method**, preserving its natural aroma, high nutritional value, and medicinal benefits. This is real Vedic ghee, exactly as shared by our ancestors.
                        </p>
                        <p>
                            Our **Natural Raw Honey** is 100% unprocessed, unheated, and free from any sugar mix or artificial flavors. Collected naturally from beehives, it retains all enzymes and nutrients as nature intended.
                        </p>
                        <p>
                            Farm Begin stands for trust and honesty. Our vision is simple: to make every home healthier by providing pure food products that you can trust without any doubt.
                        </p>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default FounderStory;
