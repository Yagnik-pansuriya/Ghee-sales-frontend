import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const Toast = ({ message, isVisible, onHide }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onHide();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onHide]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    className="fixed bottom-10 left-1/2 z-[200] bg-primary text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10"
                >
                    <div className="w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center">
                        <FiCheckCircle size={20} />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
