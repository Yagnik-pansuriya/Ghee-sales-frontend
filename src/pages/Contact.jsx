import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form Data:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-primary">Get in Touch</h1>
                    <p className="text-text-muted text-lg">We'd love to hear from you. Queries, feedback, or just a hello!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div>
                        <div className="bg-primary text-white p-10 rounded-3xl shadow-xl relative overflow-hidden mb-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                            <h3 className="text-3xl font-serif font-bold mb-8 relative z-10 text-white">Contact Info</h3>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <FiMapPin size={24} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-lg mb-1">Our Farm</h5>
                                        <p className="text-white/80">Village Ramgarh, Dist. Jaipur<br />Rajasthan, India - 302001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <FiPhone size={24} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-lg mb-1">Call Us</h5>
                                        <p className="text-white/80">+91 98765 43210</p>
                                        <p className="text-white/80">Mon-Sat: 9am - 6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <FiMail size={24} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-lg mb-1">Email Us</h5>
                                        <p className="text-white/80">hello@gheeandhoney.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                        <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-text-main mb-2">Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-text-main mb-2">Email</label>
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-text-main mb-2">Subject</label>
                                <input
                                    {...register("subject", { required: true })}
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="How can we help?"
                                />
                                {errors.subject && <span className="text-red-500 text-xs mt-1">Subject is required</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-text-main mb-2">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Write your message here..."
                                />
                                {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>

                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-bold"
                                >
                                    Message sent successfully! We'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
