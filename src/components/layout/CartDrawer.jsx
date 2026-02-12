import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag, FiTruck, FiGift, FiStar } from 'react-icons/fi';
import { setCartOpen, addItem, removeItem, deleteItem } from '../../redux/cartSlice';
import ProgressBar from '../common/ProgressBar';
import { products } from '../../data/products';

const FREE_SHIPPING_THRESHOLD = 2500;
const GIFT_THRESHOLD = 5000;

const CartDrawer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, totalAmount, isCartOpen } = useSelector((state) => state.cart);

    const handleCheckout = () => {
        dispatch(setCartOpen(false));
        navigate('/checkout');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => dispatch(setCartOpen(false))}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b flex items-center justify-between bg-primary text-secondary">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <FiShoppingBag size={28} />
                                    {items.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-secondary text-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                            {items.reduce((acc, item) => acc + item.quantity, 0)}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl font-serif font-bold tracking-tight">Your Ritual</h2>
                            </div>
                            <button
                                onClick={() => dispatch(setCartOpen(false))}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* Multi-Tier Rewards */}
                        {items.length > 0 && (
                            <div className="px-8 py-6 bg-cream/30 border-b space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <FiTruck className="text-secondary" />
                                    <ProgressBar
                                        current={totalAmount}
                                        total={FREE_SHIPPING_THRESHOLD}
                                        label="Free Shipping"
                                        successMsg="🎉 Shipping is on us!"
                                        className="flex-1"
                                    />
                                </div>
                                {totalAmount >= FREE_SHIPPING_THRESHOLD && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-3 text-primary"
                                    >
                                        <FiGift className="text-secondary" />
                                        <ProgressBar
                                            current={totalAmount}
                                            total={GIFT_THRESHOLD}
                                            label="Unlock Free Gift"
                                            successMsg="🎁 Free Honey Sample Unlocked!"
                                            className="flex-1"
                                        />
                                    </motion.div>
                                )}
                            </div>
                        )}

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-primary/10 relative">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center text-secondary border-2 border-dashed border-secondary/30">
                                        <FiShoppingBag size={48} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-serif font-bold text-primary">Your cart is empty</h3>
                                        <p className="text-text-muted max-w-[200px] mx-auto">Enhance your lifestyle with our Vedic offerings.</p>
                                    </div>
                                    <button
                                        onClick={() => dispatch(setCartOpen(false))}
                                        className="bg-primary text-secondary px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                                    >
                                        Start Your Journey
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="w-28 h-28 bg-cream rounded-3xl overflow-hidden shrink-0 border border-primary/5 p-2">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:rotate-6 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-serif font-bold text-primary text-lg leading-tight mb-1">{item.name}</h4>
                                                    <button
                                                        onClick={() => dispatch(deleteItem(item.id))}
                                                        className="text-text-muted hover:text-red-500 transition-colors p-1"
                                                    >
                                                        <FiTrash2 size={16} />
                                                    </button>
                                                </div>
                                                <p className="text-secondary font-bold text-sm">₹{item.price}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center border border-primary/10 rounded-xl bg-cream/20 overflow-hidden shadow-sm">
                                                    <button
                                                        onClick={() => dispatch(removeItem(item.id))}
                                                        className="p-2 px-3 hover:bg-cream transition-colors border-r border-primary/5"
                                                    >
                                                        <FiMinus size={12} />
                                                    </button>
                                                    <span className="px-4 py-1 text-sm font-bold min-w-[40px] text-center text-primary">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => dispatch(addItem(item))}
                                                        className="p-2 px-3 hover:bg-cream transition-colors border-l border-primary/5"
                                                    >
                                                        <FiPlus size={12} />
                                                    </button>
                                                </div>
                                                <span className="font-bold text-lg text-primary">
                                                    ₹{(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString('en-IN')}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}

                            {/* Upsell Section */}
                            {items.length > 0 && (
                                <div className="mt-16 pt-10 border-t border-primary/5">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Ritual Complements</h3>
                                        <div className="h-[1px] flex-1 bg-primary/5 ml-4" />
                                    </div>
                                    <div className="space-y-4">
                                        {products
                                            .filter(p => !items.find(item => item.id === p.id))
                                            .slice(0, 2)
                                            .map(product => (
                                                <div key={product.id} className="flex items-center gap-5 bg-cream/10 p-5 rounded-[28px] border border-primary/5 hover:border-secondary/30 transition-all group">
                                                    <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden shrink-0 shadow-sm p-2">
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-primary text-sm truncate mb-0.5">{product.name}</h4>
                                                        <p className="text-secondary font-bold text-xs">₹{product.price}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => dispatch(addItem(product))}
                                                        className="px-5 py-2.5 bg-primary text-secondary text-xs font-bold rounded-xl hover:bg-primary-dark transition-all shadow-glow active:scale-95"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-8 border-t bg-cream/20 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-sm text-text-muted">
                                        <span>Subtotal</span>
                                        <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-serif font-bold text-primary text-xl">Grand Total</span>
                                        <span className="text-3xl font-serif font-bold text-primary">₹{totalAmount.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-secondary bg-secondary/5 p-3 rounded-xl border border-secondary/10 mt-2">
                                        <FiStar size={14} className="fill-secondary" />
                                        <span>Earn {Math.floor(totalAmount / 20)} Vedic Gold points on this ritual</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-primary text-secondary py-5 rounded-2xl font-bold text-lg shadow-glow hover:bg-primary/95 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                                >
                                    Proceed to Checkout <FiX className="rotate-45" />
                                </button>

                                <p className="text-[10px] text-center text-text-muted font-bold uppercase tracking-widest opacity-60">
                                    Secure SSL Encrypted Checkout
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
