import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FiEdit3 } from 'react-icons/fi';

const THEMES = [
    { id: 'gold', name: 'Royal Gold', bg: 'bg-[#1a1a1a]', text: 'text-[#D4AF37]', border: 'border-[#D4AF37]' },
    { id: 'floral', name: 'Vedic Floral', bg: 'bg-[#f8f5f2]', text: 'text-[#5D4037]', border: 'border-[#8D6E63]' },
    { id: 'minimal', name: 'Modern Pure', bg: 'bg-white', text: 'text-gray-800', border: 'border-gray-200' },
];

const FONTS = [
    { id: 'serif', name: 'Classic Serif', class: 'font-serif' },
    { id: 'hand', name: 'Handwritten', class: 'font-handwriting italic' }, // Assuming a handwriting font exists or using italic fallback
    { id: 'sans', name: 'Modern Sans', class: 'font-sans' },
];

const CardPersonalizer = ({ message, setMessage, theme, setTheme, font, setFont }) => {
    const activeTheme = THEMES.find(t => t.id === theme) || THEMES[0];
    const activeFont = FONTS.find(f => f.id === font) || FONTS[0];

    return (
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Controls */}
            <div className="space-y-8">
                <div>
                    <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Choose Card Theme</label>
                    <div className="grid grid-cols-3 gap-4">
                        {THEMES.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id)}
                                className={clsx(
                                    "p-4 rounded-xl border-2 transition-all text-sm font-bold",
                                    theme === t.id ? "border-secondary ring-2 ring-secondary/20" : "border-gray-100 hover:border-secondary/50"
                                )}
                            >
                                <div className={clsx("w-full h-8 rounded-lg mb-2 shadow-sm border", t.bg, t.border)}></div>
                                {t.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Typography Style</label>
                    <div className="grid grid-cols-3 gap-4">
                        {FONTS.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setFont(f.id)}
                                className={clsx(
                                    "p-4 rounded-xl border-2 transition-all text-lg",
                                    font === f.id ? "border-secondary bg-secondary/5" : "border-gray-100 hover:border-secondary/50",
                                    f.class
                                )}
                            >
                                Aa
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Your Message</label>
                    <div className="relative">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={250}
                            rows={4}
                            placeholder="Write a heartfelt note..."
                            className="w-full p-4 rounded-2xl border-2 border-primary/10 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none resize-none bg-cream/20 text-lg transition-all"
                        />
                        <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-400">
                            {message.length}/250
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview */}
            <div className="relative perspective-1000">
                <motion.div
                    layout
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className={clsx(
                        "aspect-[3/4] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center text-center justify-center relative overflow-hidden border-8",
                        activeTheme.bg,
                        activeTheme.text,
                        activeTheme.border
                    )}
                >
                    {theme === 'gold' && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)]" />}
                    {theme === 'floral' && <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />}

                    <div className="relative z-10 w-full">
                        <div className="mb-8 opacity-50">
                            <FiEdit3 className="mx-auto text-3xl" />
                        </div>
                        <h3 className={clsx("text-2xl md:text-3xl leading-relaxed whitespace-pre-wrap", activeFont.class)}>
                            {message || "Your message will appear here..."}
                        </h3>
                        <div className="mt-12 w-16 h-[2px] mx-auto bg-current opacity-30" />
                        <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] opacity-60">Sent with Love</p>
                    </div>
                </motion.div>

                {/* Decorative Shadow/Reflection */}
                <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/20 blur-xl rounded-[100%]" />
            </div>
        </div>
    );
};

export default CardPersonalizer;
