import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiMail, FiSend } from 'react-icons/fi';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                    <circle cx="90" cy="10" r="20" fill="currentColor" />
                </svg>
            </div>

            <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    {status !== 'success' ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-secondary text-sm font-bold uppercase tracking-widest mb-10 border border-white/10">
                                <FiMail /> Join the Organic Family
                            </div>
                            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 text-white">Cultivating <span className="text-secondary italic">Wellness</span></h2>
                            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Subscribe to receive seasonal harvest updates, Vedic recipes, and exclusive access to small-batch productions.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-white/5 p-3 rounded-[32px] border border-white/10 focus-within:border-secondary/50 transition-all">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="flex-1 px-8 py-4 rounded-[24px] bg-transparent text-white placeholder:text-white/30 focus:outline-none transition-colors font-medium"
                                />
                                <Button
                                    type="submit"
                                    variant="secondary"
                                    className="rounded-[24px] px-12 py-4 h-full flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <>Join Now <FiSend /></>
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-12 flex flex-col items-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                                className="w-24 h-24 bg-secondary text-primary rounded-full flex items-center justify-center text-4xl mb-8 shadow-glow"
                            >
                                <FiCheck />
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">Welcome Home</h2>
                            <p className="text-white/70 text-xl font-light">
                                You're now part of the Farm Begin family. Check your inbox for your welcome gift.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <p className="text-white/20 text-xs mt-10 tracking-widest uppercase font-bold">
                    No Adulteration. No Spam. Unsubscribe Anytime.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
