import React, { useState } from 'react';
import { getProductById } from '../data/products';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import { FiShoppingBag, FiStar, FiCheck, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="pt-32 text-center h-[70vh] flex flex-col items-center justify-center">
                <FiShoppingBag size={64} className="text-cream mb-6" />
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Product not found</h2>
                <Button as={Link} to="/products" variant="outline" className="gap-2">
                    <FiArrowLeft /> Back to Shop
                </Button>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity }));
    };

    return (
        <div className="pt-32 min-h-screen bg-white">
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Gallery */}
                    <div className="bg-cream rounded-[40px] p-10 aspect-square flex items-center justify-center relative overflow-hidden group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Premium</span>
                            <div className="flex items-center gap-1 text-secondary text-sm font-bold">
                                <FiStar className="fill-current" /> 4.9 (124 reviews)
                            </div>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">{product.name}</h1>
                        <p className="text-3xl text-primary font-bold mb-8">₹{product.price} <span className="text-lg text-text-muted font-normal">/ 500ml</span></p>

                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                            {product.desc}
                        </p>

                        <div className="mb-10 p-6 bg-cream rounded-2xl border border-secondary/20">
                            <h4 className="font-bold mb-4 font-serif text-primary">Key Benefits:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {(product.benefits || ["Pure & Authentic", "Lab Tested", "No Preservatives"]).map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                                        <span className="text-secondary"><FiCheck /></span> {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center border border-border rounded-full px-4 gap-4 bg-white justify-between sm:justify-start py-2 sm:py-0">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-xl font-bold text-primary p-2 hover:bg-cream rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                                >
                                    <FiMinus />
                                </button>
                                <span className="font-bold text-lg min-w-[30px] text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-xl font-bold text-primary p-2 hover:bg-cream rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                            <Button
                                variant="primary"
                                size="lg"
                                className="flex-1 gap-2 shadow-lg hover:shadow-xl py-4 sm:py-0"
                                onClick={handleAddToCart}
                            >
                                Add to Cart <FiShoppingBag />
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ProductDetail;
