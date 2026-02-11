import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiCheckCircle, FiTruck, FiCreditCard, FiPackage, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { clearCart } from '../redux/cartSlice';

const STEPS = [
    { id: 'shipping', title: 'Shipping', icon: FiTruck },
    { id: 'payment', title: 'Payment', icon: FiCreditCard },
    { id: 'review', title: 'Review', icon: FiCheckCircle },
];

const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { items, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const shippingFee = totalAmount > 2000 ? 0 : 99;
    const tax = totalAmount * 0.05; // 5% GST
    const finalTotal = totalAmount + shippingFee + tax;

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            paymentMethod: 'UPI'
        }
    });

    const formData = watch();

    const onSubmitShipping = (data) => {
        setCurrentStep(1);
    };

    const handlePlaceOrder = () => {
        const orderId = `FB-${Math.floor(Math.random() * 90000) + 10000}`;
        const email = formData.email;

        // Dispatch clear cart
        dispatch(clearCart());

        // Redirect to success page
        navigate(`/order-success?id=${orderId}&email=${email}`);
    };

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center text-secondary mb-6">
                    <FiShoppingBag size={40} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Your cart is empty</h2>
                <p className="text-text-muted mb-8 max-w-md">Add some pure goodness to your cart before checking out.</p>
                <Button as={Link} to="/products" variant="primary">
                    Shop Products
                </Button>
            </div>
        );
    }


    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Flow */}
                    <div className="flex-1">
                        {/* Stepper */}
                        <div className="flex items-center justify-between mb-12 max-w-md mx-auto relative px-4">
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0"></div>
                            {STEPS.map((step, idx) => {
                                const Icon = step.icon;
                                const isActive = currentStep >= idx;
                                return (
                                    <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-primary text-white shadow-glow' : 'bg-white border-2 border-border text-text-muted'}`}>
                                            <Icon size={18} />
                                        </div>
                                        <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-text-muted'}`}>
                                            {step.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Step Content */}
                        <AnimatePresence mode="wait">
                            {currentStep === 0 && (
                                <motion.div
                                    key="shipping"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h2 className="text-3xl font-serif font-bold text-primary mb-8">Shipping Address</h2>
                                    <form onSubmit={handleSubmit(onSubmitShipping)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Full Name</label>
                                            <input
                                                {...register("fullName", { required: "Full name is required" })}
                                                className={`w-full p-4 bg-cream/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all ${errors.fullName ? 'border-red-500' : 'border-border'}`}
                                                placeholder="John Doe"
                                            />
                                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Email</label>
                                            <input
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                                })}
                                                className={`w-full p-4 bg-cream/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all ${errors.email ? 'border-red-500' : 'border-border'}`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Phone Number</label>
                                            <input
                                                {...register("phone", { required: "Phone is required" })}
                                                className={`w-full p-4 bg-cream/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all ${errors.phone ? 'border-red-500' : 'border-border'}`}
                                                placeholder="+91 98765 43210"
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Street Address</label>
                                            <input
                                                {...register("address", { required: "Address is required" })}
                                                className={`w-full p-4 bg-cream/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all ${errors.address ? 'border-red-500' : 'border-border'}`}
                                                placeholder="House No., Street name"
                                            />
                                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">City</label>
                                            <input
                                                {...register("city", { required: "City is required" })}
                                                className={`w-full p-4 bg-cream/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all ${errors.city ? 'border-red-500' : 'border-border'}`}
                                                placeholder="Bangalore"
                                            />
                                            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Zip Code</label>
                                            <input
                                                {...register("zipCode", { required: "Zip code is required" })}
                                                className={`w-full p-4 bg-cream/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all ${errors.zipCode ? 'border-red-500' : 'border-border'}`}
                                                placeholder="560001"
                                            />
                                            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
                                        </div>

                                        <div className="md:col-span-2 mt-4">
                                            <Button type="submit" variant="primary" className="w-full py-4 rounded-2xl group">
                                                Continue to Payment <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}

                            {currentStep === 1 && (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h2 className="text-3xl font-serif font-bold text-primary mb-8">Payment Method</h2>
                                    <div className="space-y-4">
                                        {['UPI', 'Card', 'Cash on Delivery'].map((method) => (
                                            <label key={method} className={`flex items-center justify-between p-6 border-2 rounded-2xl cursor-pointer transition-all ${formData.paymentMethod === method ? 'border-secondary bg-secondary/5 shadow-md' : 'border-border hover:border-secondary/30'}`}>
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === method ? 'border-secondary' : 'border-border'}`}>
                                                        {formData.paymentMethod === method && <div className="w-3 h-3 bg-secondary rounded-full" />}
                                                    </div>
                                                    <span className="font-bold text-primary">{method}</span>
                                                </div>
                                                <input
                                                    type="radio"
                                                    value={method}
                                                    {...register("paymentMethod")}
                                                    className="hidden"
                                                />
                                                {method === 'UPI' && <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">Popular</span>}
                                            </label>
                                        ))}
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-12">
                                        <Button variant="outline" className="flex-1" onClick={() => setCurrentStep(0)}>
                                            Back
                                        </Button>
                                        <Button variant="primary" className="flex-[2] py-4" onClick={() => setCurrentStep(2)}>
                                            Review Order
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="review"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h2 className="text-3xl font-serif font-bold text-primary mb-8">Review Your Order</h2>

                                    <div className="space-y-8">
                                        {/* Shipping Info Review */}
                                        <div className="bg-cream/40 p-6 rounded-3xl border border-secondary/10">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-serif font-bold text-primary text-xl flex items-center gap-2">
                                                    <FiTruck className="text-secondary" /> Shipping to
                                                </h3>
                                                <button onClick={() => setCurrentStep(0)} className="text-secondary text-sm font-bold underline">Edit</button>
                                            </div>
                                            <div className="text-text-muted">
                                                <p className="font-bold text-primary">{formData.fullName}</p>
                                                <p>{formData.address}</p>
                                                <p>{formData.city}, {formData.zipCode}</p>
                                                <p>{formData.phone}</p>
                                            </div>
                                        </div>

                                        {/* Payment Review */}
                                        <div className="bg-cream/40 p-6 rounded-3xl border border-secondary/10">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-serif font-bold text-primary text-xl flex items-center gap-2">
                                                    <FiCreditCard className="text-secondary" /> Payment via
                                                </h3>
                                                <button onClick={() => setCurrentStep(1)} className="text-secondary text-sm font-bold underline">Edit</button>
                                            </div>
                                            <p className="text-primary font-bold">{formData.paymentMethod}</p>
                                        </div>

                                        <Button variant="primary" className="w-full py-6 text-xl rounded-3xl mt-8 shadow-glow" onClick={handlePlaceOrder}>
                                            Confirm & Place Order
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Summary Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="bg-cream/30 rounded-[40px] p-8 border border-secondary/10 sticky top-32">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-2">
                                <FiPackage className="text-secondary" /> Order Summary
                            </h3>

                            <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 bg-white rounded-xl border border-border overflow-hidden shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-primary text-sm truncate">{item.name}</h4>
                                            <p className="text-text-muted text-xs">Qty: {item.quantity}</p>
                                            <p className="text-secondary font-bold text-sm">₹{(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 border-t border-border pt-6">
                                <div className="flex justify-between text-text-muted">
                                    <span>Subtotal</span>
                                    <span className="font-bold">₹{totalAmount.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-text-muted">
                                    <span>Shipping</span>
                                    <span className="font-bold">{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
                                </div>
                                <div className="flex justify-between text-text-muted">
                                    <span>TAX (GST 5%)</span>
                                    <span className="font-bold">₹{tax.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between pt-4 border-t border-primary/10">
                                    <span className="text-xl font-serif font-bold text-primary">Total</span>
                                    <span className="text-3xl font-serif font-bold text-secondary">₹{finalTotal.toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-secondary/20">
                                <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                                    <FiArrowLeft className="rotate-180" />
                                </div>
                                <p className="text-xs text-text-muted leading-tight font-medium">
                                    <span className="text-primary font-bold">100% Purity Guarantee.</span> Direct farm sourcing ensuring zero adulteration.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Checkout;
