import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiPackage, FiTruck, FiBox, FiCheckCircle, FiClock } from 'react-icons/fi';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleTrack = (e) => {
        e.preventDefault();
        if (!orderId) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setResult({
                id: orderId,
                status: "In Transit",
                date: "Aug 24, 2024",
                steps: [
                    { title: "Order Placed", date: "Aug 20, 2:30 PM", status: "complete", icon: <FiClock /> },
                    { title: "Processing", date: "Aug 21, 10:15 AM", status: "complete", icon: <FiBox /> },
                    { title: "Packed & Ship-ready", date: "Aug 22, 4:00 PM", status: "complete", icon: <FiPackage /> },
                    { title: "In Transit", date: "Aug 23, 11:30 AM", status: "active", icon: <FiTruck /> },
                    { title: "Out for Delivery", date: "Pending", status: "pending", icon: <FiCheckCircle /> }
                ]
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="pt-20 min-h-screen bg-cream/30">
            {/* Header */}
            <header className="bg-primary pt-24 pb-32 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Track Your Order</h1>
                    <p className="text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed">
                        Enter your Order ID to see the status of your wellness delivery.
                    </p>
                </div>
            </header>

            <SectionWrapper className="-mt-20">
                <div className="max-w-4xl mx-auto">
                    {/* Search Bar */}
                    <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 mb-12">
                        <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 text-xl" />
                                <input
                                    type="text"
                                    placeholder="Order ID (e.g. #FB-1234)"
                                    value={orderId}
                                    onChange={(e) => setOrderId(e.target.value)}
                                    className="w-full pl-16 pr-8 py-5 bg-cream/30 border border-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-bold text-primary"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="primary"
                                className="md:px-12 py-5 rounded-2xl h-full flex items-center justify-center gap-3"
                                disabled={loading}
                            >
                                {loading ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                                    />
                                ) : "Track Delivery"}
                            </Button>
                        </form>
                    </div>

                    {/* Results */}
                    <AnimatePresence mode="wait">
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white rounded-[50px] shadow-2xl border border-primary/5 p-8 md:p-16"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-primary/5 pb-12">
                                    <div>
                                        <div className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2">Order Status</div>
                                        <h2 className="text-3xl font-serif font-bold text-primary">In Transit</h2>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-primary font-bold text-lg">{result.id}</div>
                                        <div className="text-sm text-text-muted">Estimated Delivery: Aug 28, 2024</div>
                                    </div>
                                </div>

                                {/* Tracking Timeline */}
                                <div className="relative">
                                    {/* Line */}
                                    <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-primary/5 md:-translate-x-1/2" />

                                    <div className="space-y-12">
                                        {result.steps.map((step, index) => (
                                            <div key={index} className={`flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                                {/* Content */}
                                                <div className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                                                    <div className={`text-lg font-bold ${step.status === 'active' ? 'text-secondary' : step.status === 'complete' ? 'text-primary' : 'text-text-muted opacity-40'}`}>
                                                        {step.title}
                                                    </div>
                                                    <div className="text-sm text-text-muted">{step.date}</div>
                                                </div>

                                                {/* Node */}
                                                <div className="relative z-10">
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-xl ${step.status === 'active'
                                                                ? 'bg-secondary text-primary ring-8 ring-secondary/10'
                                                                : step.status === 'complete'
                                                                    ? 'bg-primary text-white shadow-primary/20'
                                                                    : 'bg-white border-2 border-primary/5 text-primary/20'
                                                            }`}
                                                    >
                                                        {step.icon}
                                                    </motion.div>
                                                </div>

                                                {/* Mobile Info & Desktop Spacer */}
                                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                                                    <div className="md:hidden">
                                                        <div className={`text-lg font-bold ${step.status === 'active' ? 'text-secondary' : step.status === 'complete' ? 'text-primary' : 'text-text-muted opacity-40'}`}>
                                                            {step.title}
                                                        </div>
                                                        <div className="text-sm text-text-muted">{step.date}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-20 p-8 bg-cream/30 rounded-3xl border border-secondary/10 text-center">
                                    <p className="text-text-muted">Need help with your delivery?</p>
                                    <button className="text-primary font-bold hover:text-secondary transition-colors underline underline-offset-4 mt-2">
                                        Chat with Support
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default OrderTracking;
