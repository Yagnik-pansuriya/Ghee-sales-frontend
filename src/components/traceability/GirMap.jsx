import React, { useState } from 'react';
import Hotspot from './Hotspot';
import LocationDetail from './LocationDetail';
import { motion } from 'framer-motion';

const LOCATIONS = [
    {
        id: 'farm',
        name: 'The Sacred Barn',
        type: 'Origin',
        x: 35,
        y: 45,
        coordinates: "21.1245° N, 70.8912° E",
        description: "Home to our 150+ free-grazing Gir cows. A sanctuary where traditional Vedic care meets modern ethical farming. The cows listen to flute music during milking.",
        image: "https://images.unsplash.com/photo-1596450514735-3b987625841e?q=80&w=800",
        stats: { temp: "28°C", aqi: "45", soil: "Rich Clay" }
    },
    {
        id: 'forest',
        name: 'Wildflower Zones',
        type: 'Foraging',
        x: 65,
        y: 30,
        coordinates: "21.1890° N, 70.9200° E",
        description: "Dense pockets of the Gir forest where our bees collect nectar from medicinal blooms during the flamboyant spring season.",
        image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd75?q=80&w=800",
        stats: { temp: "26°C", aqi: "30", soil: "Forest Loam" }
    },
    {
        id: 'river',
        name: 'Hiran River Bank',
        type: 'Water Source',
        x: 50,
        y: 60,
        coordinates: "21.1000° N, 70.8000° E",
        description: "The pristine water source for our farm. Mineral-rich river water ensures our fodder is nutrient-dense and our cows stay hydrated with the best.",
        image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=800",
        stats: { temp: "24°C", aqi: "35", soil: "Alluvial" }
    },
    {
        id: 'processing',
        name: 'Bilona Unit',
        type: 'Crafting',
        x: 25,
        y: 55,
        coordinates: "21.1250° N, 70.8950° E",
        description: "The heart of our operation. Here, curd is churned in earthen pots before sunrise to extract makkhan, which is then slow-boiled over firewood.",
        image: "https://images.unsplash.com/photo-1615485500624-9548ae4f1f51?q=80&w=800",
        stats: { temp: "30°C", aqi: "48", soil: "N/A" }
    }
];

const GirMap = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-[#F4F1EA] rounded-[40px] overflow-hidden shadow-inner border border-[#D4C5A5]/30">
            {/* SVG MAP */}
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
                preserveAspectRatio="none"
            >
                {/* Background Texture */}
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#D4C5A5" strokeWidth="0.5" opacity="0.3" />
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />

                {/* Abstract River - Hiran */}
                <motion.path
                    d="M 0 55 Q 20 65 40 50 T 80 55 T 100 45"
                    fill="none"
                    stroke="#A5C5D4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                />

                {/* Forest Area Blob */}
                <motion.path
                    d="M 60 20 Q 80 10 90 30 T 70 50 Q 55 45 60 20 Z"
                    fill="#D4EAC5"
                    opacity="0.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />
                {/* Another Forest Area */}
                <motion.path
                    d="M 10 30 Q 30 20 40 40 T 20 60 Q 5 55 10 30 Z"
                    fill="#D4EAC5"
                    opacity="0.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                />

                {/* Topo Lines (Decorative) */}
                <path d="M 0 80 Q 50 100 100 80" fill="none" stroke="#D4C5A5" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M 0 20 Q 50 0 100 20" fill="none" stroke="#D4C5A5" strokeWidth="0.5" strokeDasharray="2 2" />

            </svg>

            {/* Hotspots */}
            <div className="absolute inset-0">
                {LOCATIONS.map(loc => (
                    <Hotspot
                        key={loc.id}
                        {...loc}
                        isActive={selectedLocation?.id === loc.id}
                        onClick={() => setSelectedLocation(loc)}
                    />
                ))}
            </div>

            {/* Selected Detail View */}
            <LocationDetail
                location={selectedLocation}
                onClose={() => setSelectedLocation(null)}
            />

            {/* Map Legend / Info */}
            <div className="absolute top-8 left-8 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-[#D4C5A5]/50 max-w-xs pointer-events-none">
                <h3 className="font-serif font-bold text-primary text-lg">Gir Region, Gujarat</h3>
                <p className="text-xs text-text-muted mt-1 font-mono">21.135° N, 70.785° E</p>
                <div className="mt-4 flex gap-4 text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#D4EAC5]"></span> Forest</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#A5C5D4]"></span> River</span>
                </div>
            </div>
        </div>
    );
};

export default GirMap;
