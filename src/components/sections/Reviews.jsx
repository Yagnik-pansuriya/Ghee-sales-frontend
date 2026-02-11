import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle, FiThumbsUp } from 'react-icons/fi';

const reviews = [
    {
        id: 1,
        user: "Amrita K.",
        rating: 5,
        date: "2 days ago",
        title: "Pure Liquid Gold",
        comment: "The texture is perfectly granular, exactly like the homemade ghee we used to get in our village. The aroma fills the whole kitchen when I use it for tadka.",
        verified: true
    },
    {
        id: 2,
        user: "Vikram S.",
        rating: 5,
        date: "1 week ago",
        title: "Best Raw Honey",
        comment: "You can actually feel the difference in energy levels. It's thick, rich, and has that distinct wildflower notes. Highly recommended.",
        verified: true
    },
    {
        id: 3,
        user: "Deepak M.",
        rating: 4,
        date: "2 weeks ago",
        title: "Very Authentic",
        comment: "Excellent quality. Deducted one star only because the delivery took 4 days, but the product itself is 10/10.",
        verified: true
    }
];

const Reviews = () => {
    return (
        <div className="mt-24 pt-24 border-t border-primary/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                <div>
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">Customer Rituals</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex text-secondary">
                            {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
                        </div>
                        <span className="text-primary font-bold">4.9 / 5.0</span>
                        <span className="text-text-muted text-sm border-l border-primary/10 pl-4">Based on 124 reviews</span>
                    </div>
                </div>
                <button className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-2xl font-bold hover:border-secondary transition-all shadow-sm">
                    Write a Review
                </button>
            </div>

            <div className="grid gap-8">
                {reviews.map((review, idx) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-cream/20 p-8 md:p-12 rounded-[40px] border border-primary/5 hover:bg-cream/40 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                    {review.user[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-primary flex items-center gap-2">
                                        {review.user}
                                        {review.verified && (
                                            <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                                <FiCheckCircle size={10} /> Verified Buyer
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex text-secondary text-xs gap-1 mt-1">
                                        {[...Array(review.rating)].map((_, i) => <FiStar key={i} className="fill-current" />)}
                                    </div>
                                </div>
                            </div>
                            <div className="text-text-muted text-sm font-medium">{review.date}</div>
                        </div>

                        <h4 className="text-xl font-serif font-bold text-primary mb-3">"{review.title}"</h4>
                        <p className="text-text-muted leading-relaxed mb-8">
                            {review.comment}
                        </p>

                        <div className="flex items-center gap-6 pt-6 border-t border-primary/5">
                            <button className="flex items-center gap-2 text-xs font-bold text-primary/60 hover:text-secondary transition-colors">
                                <FiThumbsUp /> Helpful
                            </button>
                            <span className="text-xs text-primary/30 underline decoration-primary/10">Report</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button className="text-secondary font-bold hover:text-primary transition-colors underline underline-offset-8 decoration-secondary/30">
                    Load More Reviews
                </button>
            </div>
        </div>
    );
};

export default Reviews;
