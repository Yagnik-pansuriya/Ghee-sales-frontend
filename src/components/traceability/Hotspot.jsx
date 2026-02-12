import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FiMapPin } from 'react-icons/fi';

const Hotspot = ({ x, y, label, onClick, isActive }) => {
    return (
        <div
            className="absolute z-10 cursor-pointer group"
            style={{ top: `${y}%`, left: `${x}%` }}
            onClick={onClick}
        >
            {/* Pulse Effect */}
            <span className="absolute -inset-2 rounded-full bg-secondary/30 animate-ping group-hover:bg-secondary/50 transition-colors" />

            {/* Pin Icon */}
            <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className={clsx(
                    "relative w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg border-2 transition-colors duration-300",
                    isActive
                        ? "bg-secondary border-white text-primary"
                        : "bg-white border-secondary text-secondary group-hover:bg-secondary group-hover:text-white"
                )}
            >
                <FiMapPin className="text-sm md:text-base font-bold" />
            </motion.div>

            {/* Label Tooltip */}
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className={clsx(
                    "absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl text-xs font-bold border border-primary/10 transition-all duration-300",
                    isActive ? "scale-110 border-secondary/50 text-primary" : "text-text-main group-hover:scale-110"
                )}
            >
                {label}
            </motion.div>

            {/* Connector Line (optional visual) */}
            <div className={`absolute top-full left-1/2 w-px h-4 bg-secondary/50 -translate-x-1/2 origin-top transition-all duration-300 ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100'}`} />
        </div>
    );
};

export default Hotspot;
