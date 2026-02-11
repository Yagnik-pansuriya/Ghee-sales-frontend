import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "A2 Gir Cow Ghee",
        price: "₹1,499",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
        tag: "Bestseller"
    },
    {
        id: 2,
        name: "Raw Forest Honey",
        price: "₹850",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
        tag: "New"
    },
    {
        id: 3,
        name: "Spiced Turmeric Ghee",
        price: "₹950",
        image: "https://images.unsplash.com/photo-1620610996147-32128b9d4c2b?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        name: "Wildflower Honey",
        price: "₹650",
        image: "https://images.unsplash.com/photo-1587049352847-81a45d05c3d9?auto=format&fit=crop&q=80&w=800",
    }
];

const ProductShowcase = () => {
    return (
        <SectionWrapper bgColor="bg-cream">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Shop Favorites</span>
                    <h2 className="text-4xl md:text-5xl mt-3 font-serif">Curated for Wellness</h2>
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
                        className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-card transition-all duration-300 relative"
                    >
                        {product.tag && (
                            <span className="absolute top-6 left-6 z-10 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {product.tag}
                            </span>
                        )}

                        <Link to={`/products/${product.id}`} className="block overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-cream">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                        </Link>

                        <div className="px-2">
                            <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">{product.price}</span>
                                <button className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                    +
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
