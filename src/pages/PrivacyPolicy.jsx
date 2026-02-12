import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div className="pt-20 lg:pt-32">
            <Helmet>
                <title>Privacy Policy | Farm Begin</title>
                <meta name="description" content="How we handle your data and protect your privacy." />
            </Helmet>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-12">Privacy Policy</h1>

                    <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us, such as when you create an account, make a purchase,
                                sign up for our newsletter, or contact us. This includes your name, email address, phone number, and
                                shipping address.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">How We Use Your Data</h2>
                            <p>
                                We use the information to process your orders, communicate with you about your delivery, send you
                                promotional offers (if you've opted in), and improve our website experience. We do not sell your personal
                                information to third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your data. All payment transactions are processed
                                through secure, encrypted gateways.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Cookies</h2>
                            <p>
                                Our website uses cookies to enhance your browsing experience, remember your cart items, and analyze site traffic.
                                You can choose to disable cookies in your browser settings if you wish.
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default PrivacyPolicy;
