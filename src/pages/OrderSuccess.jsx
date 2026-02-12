import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPackage, FiTruck, FiShare2, FiHome, FiArrowRight } from 'react-icons/fi';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { Helmet } from 'react-helmet-async';

const OrderSuccess = () => {
    const location = useLocation();
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setOrderId(params.get('id') || `#FB-${Math.floor(Math.random() * 90000) + 10000}`);
        setEmail(params.get('email') || 'your email');

        // Scroll to top
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="pt-32 pb-20 bg-cream/30 min-h-screen">
            <Helmet>
                <title>Order Confirmed | Farm Begin</title>
            </Helmet>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[60px] shadow-2xl border border-secondary/10 overflow-hidden relative"
                    >
                        {/* Hero Banner */}
                        <div className="bg-primary p-12 md:p-20 text-center text-white relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.2),transparent_70%)]" />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                                className="w-24 h-24 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-secondary relative z-10"
                            >
                                <FiCheckCircle size={48} />
                            </motion.div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 relative z-10">Order Confirmed!</h1>
                            <p className="text-xl text-white/70 font-light relative z-10">
                                Your journey to pure wellness has officially begun.
                            </p>
                        </div>

                        {/* Order Details */}
                        <div className="p-8 md:p-16">
                            <div className="grid md:grid-cols-2 gap-12 mb-16">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">Order Details</h3>
                                        <div className="bg-cream/50 p-6 rounded-3xl border border-primary/5">
                                            <div className="flex justify-between mb-4 pb-4 border-b border-primary/5">
                                                <span className="text-text-muted">Order ID:</span>
                                                <span className="font-bold text-primary">{orderId}</span>
                                            </div>
                                            <div className="flex justify-between mb-4 pb-4 border-b border-primary/5">
                                                <span className="text-text-muted">Status:</span>
                                                <span className="text-green-600 font-bold flex items-center gap-1">
                                                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" /> Processing
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-text-muted">Confirmation sent to:</span>
                                                <span className="font-bold text-primary truncate max-w-[150px]">{email}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">Estimated Delivery</h3>
                                        <div className="bg-cream/50 p-6 rounded-3xl border border-primary/5 flex items-center gap-6">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                                <FiTruck size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-lg">3-5 Business Days</p>
                                                <p className="text-sm text-text-muted">Standard Farm-to-Home Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                        <FiPackage className="text-primary text-3xl mb-4" />
                                        <h4 className="text-xl font-serif font-bold text-primary mb-4">What's Next?</h4>
                                        <ul className="space-y-4">
                                            {[
                                                "We're preparing your pure farm items.",
                                                "Quality check & sustainable packaging.",
                                                "Courier pickup within 24 hours.",
                                                "Real-time tracking link via SMS."
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-text-muted font-medium">
                                                    <span className="text-secondary font-bold">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Button as={Link} to="/track-order" variant="primary" size="lg" className="flex-1 shadow-glow">
                                    <FiTruck className="mr-2" /> Track My Order
                                </Button>
                                <Button as={Link} to="/" variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
                                    <FiHome className="mr-2" /> Back to Home
                                </Button>
                            </div>

                            <div className="mt-12 pt-12 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                <div>
                                    <h4 className="font-bold text-primary mb-2">Share the Purity</h4>
                                    <p className="text-sm text-text-muted">Let your community know about your healthy choice.</p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                                        <FiShare2 /> Share on WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Upsell/Newsletter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-text-muted mb-6">Enjoyed your experience?</p>
                        <Link to="/products" className="text-primary font-bold hover:text-secondary flex items-center justify-center gap-2 group transition-colors">
                            Continue shopping our new arrivals <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default OrderSuccess;
