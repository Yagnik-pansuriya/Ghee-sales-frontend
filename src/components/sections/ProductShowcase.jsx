import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiEye } from 'react-icons/fi';

const products = [
    {
        id: 1,
        name: "A2 Gir Cow Ghee",
        price: "₹1,499",
        image: "/images/products/ghee-1.jpg",
        tag: "Bestseller",
        desc: "Traditional Bilona method"
    },
    {
        id: 2,
        name: "Raw Forest Honey",
        price: "₹850",
        image: "/images/products/honey-1.jpg",
        tag: "New",
        desc: "Unprocessed & Wild"
    },
    {
        id: 3,
        name: "Spiced Turmeric Ghee",
        price: "₹950",
        image: "/images/products/ghee-2.jpg",
        desc: "Infused with curcumin"
    },
    {
        id: 4,
        name: "Wildflower Honey",
        price: "₹650",
        image: "/images/products/honey-2.jpg",
        desc: "Multi-floral nectar"
    }
];

const ProductShowcase = () => {
    return (
        <SectionWrapper bgColor="bg-cream">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm animate-fade-in-up">Shop Favorites</span>
                    <h2 className="text-4xl md:text-5xl mt-3 font-serif text-primary">Curated for Wellness</h2>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    View All Products
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-white rounded-3xl p-4 shadow-soft hover:shadow-card transition-all duration-300 relative border border-transparent hover:border-secondary/20"
                    >
                        {product.tag && (
                            <span className="absolute top-6 left-6 z-20 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                {product.tag}
                            </span>
                        )}

                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-cream group-hover:bg-cream/50 transition-colors">
                            <Link to={`/products/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                                    loading="lazy"
                                />
                            </Link>

                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg" title="Quick View">
                                    <FiEye size={20} />
                                </button>
                                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg" title="Add to Cart">
                                    <FiShoppingBag size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="px-2 pb-2 text-center sm:text-left">
                            <p className="text-secondary text-xs uppercase font-bold tracking-wider mb-1">{product.desc}</p>
                            <h3 className="font-serif text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </h3>
                            <div className="flex items-center justify-center sm:justify-between px-2 sm:px-0">
                                <span className="text-xl font-bold text-primary-dark">{product.price}</span>
                                <button className="hidden sm:flex text-sm font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ProductShowcase;
