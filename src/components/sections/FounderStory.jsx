import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';

const FounderStory = () => {
    return (
        <SectionWrapper bgColor="bg-white">
            <div className="grid md:grid-cols-2 gap-16 items-center">
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
                >
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Heart of our Brand</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary leading-tight">A Journey Back to Roots</h2>
                    <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                        <p>
                            It started with a simple realization: the ghee and honey our grandparents consumed was vastly different from what we find on supermarket shelves today. The soul of traditional nourishment was missing.
                        </p>
                        <p>
                            We spent years traveling to the heartlands, rediscovering the ancient Bilona method and finding bee colonies that feed on wild, untouched forest nectar.
                        </p>
                        <p>
                            Our mission is simple: to bring that same unadulterated purity back to your table, bridging the gap between ancient wisdom and modern wellness.
                        </p>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default FounderStory;
