import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
    return (
        <div className="pt-20 lg:pt-32">
            <Helmet>
                <title>Terms of Service | Farm Begin</title>
                <meta name="description" content="Terms and conditions for using our website." />
            </Helmet>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-12">Terms of Service</h1>

                    <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Acceptance of Terms</h2>
                            <p>
                                By accessing and using the Farm Begin website, you agree to be bound by these Terms of Service and all
                                applicable laws and regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Product Availability</h2>
                            <p>
                                All our products are subject to availability. As we deal with seasonal harvests of raw honey and
                                small-batch production of A2 Ghee, some items may be temporarily out of stock.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Pricing and Payment</h2>
                            <p>
                                We reserve the right to change prices at any time without prior notice. Payment must be made in full
                                at the time of placing the order through our secure payment partners.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and images, is the property of Farm Begin
                                and is protected by intellectual property laws.
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default TermsOfService;
