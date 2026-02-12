import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle, FiThumbsUp, FiAward, FiMessageSquare } from 'react-icons/fi';

const Reviews = ({ product }) => {
    const reviews = [
        {
            id: 1,
            user: "Amrita K.",
            rating: 5,
            date: "2 days ago",
            title: product?.category === 'Ghee' ? "Pure Liquid Gold" : "Absolutely Divine",
            comment: product?.category === 'Ghee'
                ? "The texture is perfectly granular, exactly like the homemade ghee we used to get in our village. The aroma fills the whole kitchen when I use it for tadka."
                : "The sweetness is so natural and balanced. You can really taste the variety of forest flowers. It's thick, rich, and dark.",
            verified: true
        },
        {
            id: 2,
            user: "Vikram S.",
            rating: 5,
            date: "1 week ago",
            title: "Authentic Quality",
            comment: "You can actually feel the difference in energy levels. It's thick, rich, and has that distinct premium quality. Highly recommended for daily ritual.",
            verified: true
        },
        {
            id: 3,
            user: "Deepak M.",
            rating: 4,
            date: "2 weeks ago",
            title: "Very Impressive",
            comment: "Excellent quality and packaging. The glass jar is solid and reusable. Deducted one star only because the delivery took a bit, but the product is worth it.",
            verified: true
        }
    ];

    return (
        <div className="mt-32 pt-24 border-t border-primary/5">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
                    <div className="space-y-4">
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs block">Ritual Feedback</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Customer Testimonials</h2>
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex text-secondary gap-1">
                                {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current w-5 h-5" />)}
                            </div>
                            <div className="flex items-center gap-4 text-primary font-bold text-xl">
                                4.9 <span className="text-text-muted text-sm font-normal">/ 5.0</span>
                            </div>
                            <button className="text-secondary text-sm font-bold flex items-center gap-2 hover:underline underline-offset-4">
                                <FiMessageSquare /> 124 reviews
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <button className="flex-1 bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-2xl font-bold hover:border-secondary transition-all shadow-sm flex items-center justify-center gap-2">
                            Write a Review
                        </button>
                        <div className="flex-1 bg-secondary/10 px-6 py-4 rounded-2xl border border-secondary/20 flex items-center gap-3">
                            <FiAward className="text-secondary text-2xl" />
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">Verified Purity</p>
                                <p className="text-xs font-bold text-primary">100% Transparency</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="grid gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-cream/10 p-10 md:p-14 rounded-[50px] border border-primary/5 hover:bg-cream/20 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-8 gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center text-2xl font-serif font-bold border-2 border-secondary/20">
                                        {review.user[0]}
                                    </div>
                                    <div>
                                        <div className="font-serif text-xl font-bold text-primary flex items-center gap-3">
                                            {review.user}
                                            {review.verified && (
                                                <span className="flex items-center gap-1.5 text-[9px] font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full uppercase tracking-widest border border-green-100">
                                                    <FiCheckCircle size={12} /> Verified
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex text-secondary text-xs gap-1 mt-2">
                                            {[...Array(review.rating)].map((_, i) => <FiStar key={i} className="fill-current" />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-text-muted text-xs font-bold uppercase tracking-widest bg-white px-4 py-2 rounded-full border border-primary/5 self-start">
                                    {review.date}
                                </div>
                            </div>

                            <h4 className="text-2xl font-serif font-bold text-primary mb-4 italic group-hover:text-secondary transition-colors leading-snug">"{review.title}"</h4>
                            <p className="text-text-muted text-lg leading-relaxed font-light mb-10">
                                {review.comment}
                            </p>

                            <div className="flex items-center gap-8 pt-8 border-t border-primary/5">
                                <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-secondary transition-all">
                                    <FiThumbsUp /> Helpful (12)
                                </button>
                                <button className="text-[10px] text-text-muted font-bold uppercase tracking-widest hover:text-red-400 transition-colors">
                                    Report Concern
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="mt-16 text-center">
                    <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-glow flex items-center gap-3 mx-auto">
                        View All 124 Rituals <FiStar />
                    </button>
                    <p className="mt-8 text-text-muted text-sm font-medium">98% of customers recommend our products based on quality and purity.</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
