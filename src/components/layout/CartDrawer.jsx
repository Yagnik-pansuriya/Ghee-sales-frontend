import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { setCartOpen, addItem, removeItem, deleteItem } from '../../redux/cartSlice';
import ProgressBar from '../common/ProgressBar';
import { products } from '../../data/products';

const FREE_SHIPPING_THRESHOLD = 2500;

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
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b flex items-center justify-between bg-primary text-white">
                            <div className="flex items-center gap-3">
                                <FiShoppingBag size={24} />
                                <h2 className="text-xl font-serif font-bold">Your Cart ({items.length})</h2>
                            </div>
                            <button
                                onClick={() => dispatch(setCartOpen(false))}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* Progress Bar / Rewards */}
                        {items.length > 0 && (
                            <div className="px-6 py-4 bg-cream/30 border-b">
                                <ProgressBar
                                    current={totalAmount}
                                    total={FREE_SHIPPING_THRESHOLD}
                                    label="Free Shipping"
                                    successMsg="🎉 You've unlocked Free Shipping!"
                                />
                            </div>
                        )}

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center text-secondary">
                                        <FiShoppingBag size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-primary">Your cart is empty</h3>
                                        <p className="text-text-muted mt-2">Looks like you haven't added anything yet.</p>
                                    </div>
                                    <button
                                        onClick={() => dispatch(setCartOpen(false))}
                                        className="text-secondary font-bold underline underline-offset-4 hover:text-primary transition-colors"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="w-24 h-24 bg-cream rounded-2xl overflow-hidden shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-serif font-bold text-primary text-lg">{item.name}</h4>
                                                    <button
                                                        onClick={() => dispatch(deleteItem(item.id))}
                                                        className="text-text-muted hover:text-red-500 transition-colors"
                                                    >
                                                        <FiTrash2 size={18} />
                                                    </button>
                                                </div>
                                                <p className="text-secondary font-bold">₹{item.price}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center border border-border rounded-lg bg-white overflow-hidden">
                                                    <button
                                                        onClick={() => dispatch(removeItem(item.id))}
                                                        className="p-1 px-2 hover:bg-cream transition-colors border-r"
                                                    >
                                                        <FiMinus size={14} />
                                                    </button>
                                                    <span className="px-4 py-1 text-sm font-bold min-w-[40px] text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => dispatch(addItem(item))}
                                                        className="p-1 px-2 hover:bg-cream transition-colors border-l"
                                                    >
                                                        <FiPlus size={14} />
                                                    </button>
                                                </div>
                                                <span className="font-bold text-primary">
                                                    ₹{(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString('en-IN')}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}

                            {/* Upsell Section */}
                            {items.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-primary/5">
                                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 opacity-60">Complete Your Ritual</h3>
                                    <div className="space-y-4">
                                        {products
                                            .filter(p => !items.find(item => item.id === p.id))
                                            .slice(0, 2)
                                            .map(product => (
                                                <div key={product.id} className="flex items-center gap-4 bg-cream/20 p-4 rounded-2xl border border-primary/5 group">
                                                    <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0 shadow-sm p-1">
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-primary text-sm truncate">{product.name}</h4>
                                                        <p className="text-secondary font-bold text-xs">₹{product.price}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => dispatch(addItem(product))}
                                                        className="px-4 py-2 bg-white text-primary text-xs font-bold rounded-xl border border-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
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
                            <div className="p-6 border-t bg-cream/50 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted font-medium">Subtotal</span>
                                    <span className="text-2xl font-bold text-primary">₹{totalAmount.toLocaleString('en-IN')}</span>
                                </div>
                                <p className="text-xs text-text-muted italic">
                                    Shipping and taxes calculated at checkout.
                                </p>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-glow hover:bg-primary-dark transition-all transform hover:-translate-y-1 active:scale-95"
                                >
                                    Secure Checkout
                                </button>
                                <button
                                    onClick={() => dispatch(setCartOpen(false))}
                                    className="w-full text-center text-sm font-bold text-secondary hover:text-primary transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
