import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Helmet } from 'react-helmet-async';

const ReturnPolicy = () => {
    return (
        <div className="pt-20 lg:pt-32">
            <Helmet>
                <title>Return Policy | Farm Begin</title>
                <meta name="description" content="Information about returns, refunds, and cancellations." />
            </Helmet>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-12">Return & Refund Policy</h1>

                    <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Cancellation Policy</h2>
                            <p>
                                You can cancel your order within 12 hours of placing it or before it has been shipped, whichever is earlier.
                                Once the order is shipped, it cannot be cancelled.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Returns & Replacements</h2>
                            <p>
                                Due to the consumable nature of our products (Ghee and Honey), we do not accept returns once the product
                                has been delivered. However, we offer free replacements in the following cases:
                            </p>
                            <ul className="list-disc ml-6 mt-4 space-y-2">
                                <li>Product received is damaged or leaked.</li>
                                <li>Incorrect product delivered.</li>
                                <li>Product has expired upon arrival.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">How to Request a Replacement</h2>
                            <p>
                                To request a replacement, please email us at <span className="font-bold">support@farmbegin.com</span> within
                                48 hours of delivery with photos of the damaged/incorrect product and your order ID.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Refunds</h2>
                            <p>
                                In cases where a replacement is not possible, we will process a refund to your original payment method.
                                It may take 5-7 business days for the refund to reflect in your account.
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ReturnPolicy;
