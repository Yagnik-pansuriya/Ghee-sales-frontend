import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { articles } from '../data/articles';
import ArticleCard from '../components/magazine/ArticleCard';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Magazine = () => {
    const featuredArticle = articles[0];
    const recentArticles = articles.slice(1);

    return (
        <div className="min-h-screen bg-cream">
            {/* Header / Hero */}
            <div className="pt-32 pb-12 text-center container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm border border-secondary/10"
                >
                    <FiBookOpen /> The Vedic Life
                </motion.div>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-primary mb-6">
                    Journal
                </h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                    Stories of heritage, health, and the harmony between nature and soul.
                </p>
            </div>

            <SectionWrapper className="!pt-0">
                {/* Featured Content */}
                <div className="mb-20">
                    <div className="relative rounded-[40px] overflow-hidden group aspect-[16/9] md:aspect-[21/9]">
                        <img
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 text-white">
                            <div className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-wider">
                                <span className="bg-secondary text-primary px-3 py-1 rounded-md">{featuredArticle.category}</span>
                                <span>{featuredArticle.readTime}</span>
                            </div>
                            <Link to={`/magazine/${featuredArticle.id}`}>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight group-hover:text-secondary transition-colors">
                                    {featuredArticle.title}
                                </h2>
                            </Link>
                            <p className="text-white/80 text-lg md:text-xl line-clamp-2 md:line-clamp-none mb-8">
                                {featuredArticle.subtitle}
                            </p>
                            <div className="flex items-center gap-3">
                                <img src={featuredArticle.author.image} alt={featuredArticle.author.name} className="w-12 h-12 rounded-full border-2 border-white/20" />
                                <div>
                                    <p className="font-bold">{featuredArticle.author.name}</p>
                                    <p className="text-xs opacity-70 uppercase tracking-widest">{featuredArticle.author.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {['All Stories', 'Rituals', 'Recipes', 'Wellness', 'Sustainability'].map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary hover:bg-primary/5 border border-primary/5'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {recentArticles.map((article, index) => (
                        <ArticleCard key={article.id} article={article} index={index} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Magazine;
