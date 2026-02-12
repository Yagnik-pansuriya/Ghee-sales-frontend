import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FiCheck } from 'react-icons/fi';

const WRAPPINGS = [
    {
        id: 'gold_foil',
        name: 'Royal Gold Foil',
        description: 'Luxurious matte gold paper with black satin ribbon.',
        price: 150,
        image: 'https://images.unsplash.com/photo-1549462229-837c7620c57c?q=80&w=600&auto=format&fit=crop' // Placeholder
    },
    {
        id: 'jute_eco',
        name: 'Sustainable Jute',
        description: 'Hand-woven jute bag with dried flower decoration.',
        price: 200,
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop' // Placeholder
    },
    {
        id: 'minimal_box',
        name: 'Signature Box',
        description: 'Our classic sturdy white box with gold embossing.',
        price: 0,
        image: 'https://images.unsplash.com/photo-1607344645830-6e3619aa9033?q=80&w=600&auto=format&fit=crop' // Placeholder
    }
];

const WrappingSelector = ({ selected, onSelect }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {WRAPPINGS.map((wrap) => (
                <motion.button
                    key={wrap.id}
                    onClick={() => onSelect(wrap.id)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className={clsx(
                        "relative group rounded-3xl overflow-hidden text-left border-2 transition-all",
                        selected === wrap.id ? "border-secondary ring-4 ring-secondary/10" : "border-transparent hover:border-secondary/30"
                    )}
                >
                    <div className="aspect-square relative overflow-hidden bg-cream">
                        <img
                            src={wrap.image}
                            alt={wrap.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={clsx(
                            "absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300",
                            selected === wrap.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}>
                            {selected === wrap.id && (
                                <div className="bg-secondary text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform scale-100">
                                    <FiCheck size={24} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-6 bg-white border-t border-primary/5">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif font-bold text-lg text-primary">{wrap.name}</h3>
                            <span className={clsx("text-xs font-bold px-2 py-1 rounded-lg", wrap.price > 0 ? "bg-secondary/10 text-secondary" : "bg-green-50 text-green-700")}>
                                {wrap.price > 0 ? `+₹${wrap.price}` : 'FREE'}
                            </span>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">{wrap.description}</p>
                    </div>
                </motion.button>
            ))}
        </div>
    );
};

export default WrappingSelector;
export { WRAPPINGS };
