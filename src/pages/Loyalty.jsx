import React from 'react';
import { motion } from 'framer-motion';
import { FiGift, FiStar, FiChevronRight, FiUsers, FiAward } from 'react-icons/fi';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';

const Loyalty = () => {
    const tiers = [
        { name: "Bronze Ritual", min: "0 Points", benefits: ["5% off every order", "Birthday surprise"], color: "bg-amber-100 text-amber-900 border-amber-200" },
        { name: "Silver Sanctity", min: "5,000 Points", benefits: ["10% off every order", "Early access to harvests", "Free shipping always"], color: "bg-slate-100 text-slate-900 border-slate-200" },
        { name: "Gold Greatness", min: "15,000 Points", benefits: ["15% off every order", "VIP Concierge", "Exclusive small-batch invites"], color: "bg-yellow-100 text-yellow-900 border-yellow-200" }
    ];

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero */}
            <header className="bg-primary pt-24 pb-40 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.15),transparent_50% * 2)]" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-md rounded-full text-secondary text-sm font-bold uppercase tracking-widest mb-8 border border-secondary/20"
                    >
                        <FiGift /> Organic Rewards
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8">Loyalty is <span className="text-secondary italic">Rewarded</span></h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                        Join our wellness community and earn points with every purchase. Redeem them for pure discounts and exclusive harvests.
                    </p>
                </div>
            </header>

            <SectionWrapper className="-mt-24">
                {/* How it Works */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        { title: "Earn Points", desc: "Get 5 points for every ₹100 spent on our pure farm products.", icon: <FiStar /> },
                        { title: "Refer a Friend", desc: "Give ₹250, get ₹250. Invite your friends to the organic lifestyle.", icon: <FiUsers /> },
                        { title: "Unlock Rituals", desc: "Climb our tiers to unlock deeper discounts and VIP perks.", icon: <FiAward /> }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[50px] shadow-2xl border border-primary/5 text-center group"
                        >
                            <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-3xl mb-8 mx-auto text-secondary group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h3>
                            <p className="text-text-muted leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tiers */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Experience Tiers</h2>
                        <div className="h-1 w-24 bg-secondary mx-auto" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {tiers.map((tier, i) => (
                            <div key={i} className={`p-12 rounded-[60px] border-2 flex flex-col items-center text-center transition-all hover:scale-105 ${tier.color}`}>
                                <h3 className="text-2xl font-serif font-bold mb-1">{tier.name}</h3>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-8">{tier.min}</div>
                                <div className="space-y-4 mb-12 flex-1">
                                    {tier.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-2 font-medium">
                                            <FiStar className="fill-current text-secondary" size={12} /> {benefit}
                                        </div>
                                    ))}
                                </div>
                                <Button variant="primary" className="w-full">Level Up</Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Referral CTA */}
                <div className="mt-32 bg-primary rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(212,175,55,0.1),transparent_50% )]" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Share the <span className="text-secondary italic">Wellness</span></h2>
                        <p className="text-white/70 text-xl mb-12 font-light">
                            Love our Bilona Ghee? Invite your friends and family. They get ₹250 off their first order, and you get ₹250 worth of points!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button variant="secondary" className="px-12 py-5 text-lg">Copy Referral Link</Button>
                            <Button variant="outline" className="px-12 py-5 text-lg border-white text-white hover:bg-white hover:text-primary">WhatsApp Invite</Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Loyalty;
