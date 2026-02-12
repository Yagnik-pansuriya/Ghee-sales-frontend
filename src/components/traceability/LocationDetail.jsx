import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiWind, FiSun, FiDroplet } from 'react-icons/fi';

const LocationDetail = ({ location, onClose }) => {
    if (!location) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-8 flex justify-center pointer-events-none"
            >
                <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 p-6 md:p-8 w-full max-w-4xl pointer-events-auto relative overflow-hidden">

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
                    >
                        <FiX size={20} />
                    </button>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Image */}
                        <div className="w-full md:w-1/2 h-48 md:h-auto rounded-2xl overflow-hidden relative group">
                            <img
                                src={location.image}
                                alt={location.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-xs font-bold uppercase tracking-widest bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg inline-block mb-1">
                                    Coordinates
                                </p>
                                <p className="font-mono text-xs opacity-80">{location.coordinates}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-secondary font-bold text-sm tracking-widest uppercase mb-2">{location.type}</h3>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{location.name}</h2>
                            <p className="text-text-muted leading-relaxed mb-6">{location.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                                <div className="text-center">
                                    <FiSun className="mx-auto text-amber-500 mb-2" />
                                    <p className="text-xs text-gray-400 uppercase font-bold">Temp</p>
                                    <p className="font-bold text-primary">{location.stats.temp}</p>
                                </div>
                                <div className="text-center border-l border-gray-100">
                                    <FiWind className="mx-auto text-blue-400 mb-2" />
                                    <p className="text-xs text-gray-400 uppercase font-bold">Air</p>
                                    <p className="font-bold text-primary">{location.stats.aqi} AQI</p>
                                </div>
                                <div className="text-center border-l border-gray-100">
                                    <FiDroplet className="mx-auto text-cyan-500 mb-2" />
                                    <p className="text-xs text-gray-400 uppercase font-bold">Soil</p>
                                    <p className="font-bold text-primary">{location.stats.soil}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LocationDetail;
