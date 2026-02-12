import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiClock, FiArrowRight, FiShoppingBag, FiStar } from 'react-icons/fi';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { showToast } from '../redux/toastSlice';
import clsx from 'clsx';

const ARTICLES = [
    {
        id: 1,
        title: "The Alchemy of A2 Gir Cow Ghee",
        subtitle: "Why the protein structure of A2 milk is a medicinal cornerstone in Ayurveda.",
        category: "Vedic Science",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1549462229-837c7620c57c?q=80&w=1200",
        featuredProduct: products.find(p => p.id === 1)
    },
    {
        id: 2,
        title: "Morning Rituals: The Ghee Coffee",
        subtitle: "How starting your day with healthy fats can stabilize hormones and sustain energy.",
        category: "Rituals",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200",
        featuredProduct: products.find(p => p.id === 2)
    },
    {
        id: 3,
        title: "Wild Forest Honey: Nature's Antibiotic",
        subtitle: "Uncovering the differences between processed honey and raw, wild-sourced nectar.",
        category: "Purity",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200",
        featuredProduct: products.find(p => p.id === 3)
    }
];

const WisdomHub = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        dispatch(showToast(`${product.name} added from Wisdom Hub!`));
    };

    return (
        <div className="pt-32 pb-32 bg-white min-h-screen">
            <SectionWrapper>
                {/* Editorial Header */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-primary/10"
                    >
                        <FiBookOpen /> The Wellness Journal
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-8 tracking-tighter">
                        Vedic <span className="text-secondary italic">Wisdom</span>
                    </h1>
                    <p className="text-xl text-text-muted font-light leading-relaxed">
                        Deep dives into the science of purity, traditional rituals, and the restorative <br className="hidden md:block" />
                        power of farm-fresh A2 nutrition.
                    </p>
                </div>

                {/* Article Grid */}
                <div className="grid gap-32">
                    {ARTICLES.map((article, idx) => (
                        <motion.section
                            key={article.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={clsx(
                                "flex flex-col lg:flex-row gap-16 items-center",
                                idx % 2 !== 0 && "lg:flex-row-reverse"
                            )}
                        >
                            {/* Imagery */}
                            <div className="lg:w-7/12 relative group">
                                <div className="aspect-[16/9] rounded-[60px] overflow-hidden shadow-2xl relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
                                </div>
                                {/* Floating Category Badge */}
                                <div className="absolute -top-6 -left-6 bg-secondary text-primary px-8 py-3 rounded-2xl font-bold shadow-xl border border-white/20 transform -rotate-3 group-hover:rotate-0 transition-transform">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-5/12 space-y-8">
                                <div className="flex items-center gap-4 text-text-muted font-bold text-xs uppercase tracking-widest">
                                    <span className="flex items-center gap-2"><FiClock /> {article.readTime}</span>
                                    <span className="w-1 h-1 rounded-full bg-primary/20" />
                                    <span className="text-secondary">Insight</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                                    {article.title}
                                </h2>
                                <p className="text-lg text-text-muted leading-relaxed font-light">
                                    {article.subtitle}
                                </p>

                                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                                    <Button variant="outline" className="rounded-2xl gap-2 group">
                                        Read Article <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </Button>

                                    {/* Shoppable Product Card Snippet */}
                                    {article.featuredProduct && (
                                        <div className="bg-cream/30 p-4 rounded-3xl border border-secondary/10 flex items-center gap-4 animate-pulse-subtle group/product relative overflow-hidden">
                                            <div className="w-12 h-12 bg-white rounded-xl p-1 shrink-0">
                                                <img
                                                    src={article.featuredProduct.image}
                                                    alt={article.featuredProduct.name}
                                                    className="w-full h-full object-contain mix-blend-multiply"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0 pr-8">
                                                <p className="text-[10px] uppercase font-bold text-secondary mb-0.5 tracking-wider">Shoppable Ritual</p>
                                                <h4 className="text-xs font-bold text-primary truncate">{article.featuredProduct.name}</h4>
                                            </div>
                                            <button
                                                onClick={() => handleAddToCart(article.featuredProduct)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-secondary rounded-lg flex items-center justify-center hover:scale-110 shadow-lg active:scale-90 transition-all opacity-0 group-hover/product:opacity-100"
                                            >
                                                <FiShoppingBag size={14} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-32 bg-primary rounded-[80px] p-16 md:p-32 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(212,175,55,0.08),transparent_50% )]" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            className="w-20 h-20 bg-secondary/20 rounded-[30px] flex items-center justify-center text-secondary text-4xl mb-12 mx-auto rotate-12"
                        >
                            <FiStar />
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8">Join the <span className="text-secondary italic">Circle</span></h2>
                        <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">
                            Every full moon, we share exclusive harvest notes, seasonal rituals, and deeper wisdom with our inner circle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your sacred email"
                                className="flex-1 px-8 py-5 rounded-[30px] bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-white/20"
                            />
                            <Button variant="secondary" className="px-12 py-5 rounded-[30px] text-lg font-bold">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default WisdomHub;
