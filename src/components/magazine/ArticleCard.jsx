import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const ArticleCard = ({ article, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
        >
            <Link to={`/magazine/${article.id}`} className="block overflow-hidden rounded-3xl mb-6 relative aspect-[4/3]">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
                    {article.category}
                </div>
            </Link>

            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-text-muted mb-3 font-medium uppercase tracking-wider">
                    <span>{article.publishedAt}</span>
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    <span className="flex items-center gap-1"><FiClock /> {article.readTime}</span>
                </div>

                <Link to={`/magazine/${article.id}`}>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                        {article.title}
                    </h3>
                </Link>

                <p className="text-text-muted line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                    {article.subtitle}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-primary/5">
                    <img src={article.author.image} alt={article.author.name} className="w-10 h-10 rounded-full object-cover border border-primary/10" />
                    <div>
                        <p className="text-sm font-bold text-primary">{article.author.name}</p>
                        <p className="text-xs text-text-muted">{article.author.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ArticleCard;
