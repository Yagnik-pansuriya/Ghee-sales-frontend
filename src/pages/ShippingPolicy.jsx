import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
    return (
        <div className="pt-20 lg:pt-32">
            <Helmet>
                <title>Shipping Policy | Farm Begin</title>
                <meta name="description" content="Read about our shipping and delivery policies." />
            </Helmet>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-12">Shipping Policy</h1>

                    <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Delivery Timeline</h2>
                            <p>
                                We strive to deliver your orders as quickly as possible. Most orders are processed within 24-48 hours.
                                Delivery usually takes 3-7 business days depending on your location across India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Shipping Charges</h2>
                            <p>
                                We offer Free Shipping on all orders above ₹2,500. For orders below this amount, a flat shipping fee
                                will be calculated at checkout based on the delivery address and order weight.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Order Tracking</h2>
                            <p>
                                Once your order is shipped, you will receive a tracking ID via email and SMS. You can track your
                                shipment status on our <Link to="/track-order" className="text-secondary font-bold underline">Order Tracking</Link> page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Packaging</h2>
                            <p>
                                Our products are carefully packed in eco-friendly, secure packaging to ensure they reach you in
                                perfect condition. Ghee and Honey jars are cushioned with sustainable materials to prevent breakage.
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ShippingPolicy;
