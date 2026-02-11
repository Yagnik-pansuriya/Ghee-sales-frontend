import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../common/Button';

const Newsletter = () => {
    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Join the Organic Family</h2>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">
                    Subscribe to our newsletter for exclusive access to new harvests, healthy recipes, and special member-only offers.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-colors"
                    />
                    <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">
                        Subscribe
                    </Button>
                </form>

                <p className="text-white/40 text-sm mt-6">
                    No spam, ever. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
