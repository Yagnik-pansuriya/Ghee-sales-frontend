import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, getRelatedArticles } from '../data/articles';
import SectionWrapper from '../components/layout/SectionWrapper';
import ReadingProgressBar from '../components/magazine/ReadingProgressBar';
import ArticleCard from '../components/magazine/ArticleCard';
import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ArticleReader = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id));
    const related = article ? getRelatedArticles(article.id) : [];

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) return <div className="min-h-screen flex items-center justify-center">Article not found</div>;

    return (
        <div className="bg-white min-h-screen">
            <ReadingProgressBar />

            {/* Header Image */}
            <div className="h-[50vh] md:h-[70vh] relative w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 pb-16 pt-32 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="container px-4 mx-auto max-w-4xl text-center text-white">
                        <Link to="/magazine" className="inline-flex items-center gap-2 text-white/80 hover:text-secondary transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
                            <FiArrowLeft /> Back to Journal
                        </Link>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            {article.subtitle}
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm font-medium">
                            <div className="flex items-center gap-3">
                                <img src={article.author.image} alt={article.author.name} className="w-10 h-10 rounded-full border border-white/30" />
                                <div className="text-left">
                                    <p className="text-white">{article.author.name}</p>
                                    <p className="text-secondary text-xs uppercase tracking-wider">{article.author.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-6 opacity-80">
                                <span className="flex items-center gap-2"><FiCalendar /> {article.publishedAt}</span>
                                <span className="flex items-center gap-2"><FiClock /> {article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <div
                    className="prose prose-lg md:prose-xl prose-stone prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary prose-p:text-text-muted prose-p:leading-loose prose-a:text-secondary prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-cream/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic focus:outline-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                        {article.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-cream text-primary rounded-full text-sm font-bold"># {tag}</span>
                        ))}
                    </div>
                </div>

                {/* Share */}
                <div className="mt-12 flex items-center justify-between p-6 bg-cream/20 rounded-2xl border border-primary/5">
                    <span className="font-serif font-bold text-lg text-primary">Share this story</span>
                    <div className="flex gap-4 text-xl text-primary/60">
                        <button className="hover:text-secondary transition-colors"><FiTwitter /></button>
                        <button className="hover:text-secondary transition-colors"><FiFacebook /></button>
                        <button className="hover:text-secondary transition-colors"><FiLinkedin /></button>
                        <button className="hover:text-secondary transition-colors"><FiShare2 /></button>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            <div className="bg-cream py-24">
                <div className="container px-4 mx-auto">
                    <h3 className="text-3xl font-serif font-bold text-center mb-16">Continue Reading</h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {related.map((item, index) => (
                            <ArticleCard key={item.id} article={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleReader;
