import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../common/Button';
import { useForm } from 'react-hook-form';

const WholesaleInquiry = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Wholesale Inquiry:", data);
        alert("Thank you! We will get back to you shortly.");
    };

    return (
        <SectionWrapper bgColor="bg-primary text-white" className="relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Partner With Us</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Bring Purity to Your Customers</h2>
                    <p className="text-white/80 text-lg mb-8 leading-relaxed">
                        Join our network of premium retailers, hotels, and distributors.
                        We offer attractive wholesale rates, custom packaging, and reliable supply chains.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {['Bulk Orders', 'Corporate Gifting', 'White Labeling', 'Pan-India Delivery'].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="font-medium tracking-wide">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2 ml-1 text-secondary">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white"
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-400 text-xs ml-1">Required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 ml-1 text-secondary">Company</label>
                                <input
                                    type="text"
                                    {...register("company", { required: true })}
                                    className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white"
                                    placeholder="Business Name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1 text-secondary">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white"
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="text-red-400 text-xs ml-1">Required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1 text-secondary">Message</label>
                            <textarea
                                {...register("message")}
                                rows="3"
                                className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white"
                                placeholder="Tell us about your requirements..."
                            />
                        </div>

                        <Button variant="secondary" className="w-full mt-2">
                            Request Wholesale Pricing
                        </Button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default WholesaleInquiry;
