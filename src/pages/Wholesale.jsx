import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import { FiBox, FiTruck, FiUsers } from 'react-icons/fi';

const Wholesale = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("B2B Form Data:", data);
        alert("Thank you for your business inquiry! Our wholesale team will contact you within 24 hours.");
    };

    return (
        <div className="pt-20">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-4">Partner With Us</span>
                    <h1 className="text-3xl md:text-6xl font-serif font-bold mb-6 px-4">Wholesale & B2B Inquiries</h1>
                    <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto px-4">
                        Bring the purity of Ghee & Honey to your customers. We supply to hotels, restaurants, and retail chains across India.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: FiBox, title: "Bulk Packaging", desc: "Available in 5kg, 15kg tins and barrels for industrial use." },
                        { icon: FiTruck, title: "Pan-India Logistics", desc: "Reliable shipping partner network ensuring timely delivery." },
                        { icon: FiUsers, title: "Custom Branding", desc: "White-labelling options available for select partners." },
                    ].map((feat, i) => (
                        <div key={i} className="bg-cream p-8 rounded-2xl text-center border border-border">
                            <feat.icon className="mx-auto text-4xl text-primary mb-4" />
                            <h3 className="font-serif font-bold text-xl mb-3">{feat.title}</h3>
                            <p className="text-text-muted">{feat.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-card border border-border">
                    <h2 className="text-3xl font-serif font-bold mb-8 text-center">Business Inquiry Form</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-text-main mb-2">Company Name</label>
                                <input
                                    {...register("company", { required: true })}
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
                                    placeholder="Your Business Name"
                                />
                                {errors.company && <span className="text-red-500 text-xs">Required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-main mb-2">GST Number</label>
                                <input
                                    {...register("gst")}
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
                                    placeholder="Optional"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-text-main mb-2">Contact Person</label>
                                <input
                                    {...register("name", { required: true })}
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
                                    placeholder="Full Name"
                                />
                                {errors.name && <span className="text-red-500 text-xs">Required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-main mb-2">Phone</label>
                                <input
                                    {...register("phone", { required: true })}
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
                                    placeholder="+91"
                                />
                                {errors.phone && <span className="text-red-500 text-xs">Required</span>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-text-main mb-2">Requirement Details</label>
                            <textarea
                                {...register("requirement", { required: true })}
                                rows="4"
                                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none resize-none"
                                placeholder="Please describe your volume requirements and frequency..."
                            />
                            {errors.requirement && <span className="text-red-500 text-xs">Required</span>}
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Request Quote
                        </Button>
                    </form>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Wholesale;
