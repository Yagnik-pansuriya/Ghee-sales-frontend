import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = ({ children }) => {
    // Stable floating elements using project-related themes
    const elements = useMemo(() => [
        { id: 1, type: 'cow', size: 60, top: '10%', left: '8%', duration: 25 },
        { id: 2, type: 'pot', size: 50, top: '20%', left: '82%', duration: 20 },
        { id: 3, type: 'bee', size: 30, top: '35%', left: '12%', duration: 12 },
        { id: 4, type: 'jar', size: 45, top: '15%', left: '45%', duration: 18 },
        { id: 5, type: 'cow', size: 50, top: '55%', left: '88%', duration: 28 },
        { id: 6, type: 'pot', size: 40, top: '65%', left: '15%', duration: 22 },
        { id: 7, type: 'jar', size: 55, top: '75%', left: '75%', duration: 16 },
        { id: 8, type: 'bee', size: 25, top: '5%', left: '60%', duration: 14 },
        { id: 9, type: 'cow', size: 45, top: '85%', left: '10%', duration: 30 },
        { id: 10, type: 'pot', size: 48, top: '90%', left: '50%', duration: 19 },
    ], []);

    // Stable golden particles
    const particles = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
    })), []);

    return (
        <div className="relative w-full">
            {/* Global Animation Layer (Fixed to viewport) */}
            <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
                {/* Large Project-Related Elements */}
                {elements.map((el) => (
                    <motion.div
                        key={el.id}
                        className="absolute opacity-[0.2] text-secondary filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        style={{ top: el.top, left: el.left }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: el.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {el.type === 'cow' && (
                            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                                <path d="M12 21c-2.5 0-5-1-6-3-1-2-1-5 0-7 .5-1 1.5-2 3-2.5 1-.5 2-1 3-1s2 .5 3 1c1.5.5 2.5 1.5 3 2.5 1 2 1 5 0 7-1 2-3.5 3-6 3z" />
                                <ellipse cx="8.5" cy="12" rx="1" ry="1.5" fill="currentColor" />
                                <ellipse cx="15.5" cy="12" rx="1" ry="1.5" fill="currentColor" />
                                <path d="M7 6c-1-1-3-1-3 1s1 3 2 3M17 6c1-1 3-1 3 1s-1 3-2 3" />
                                <path d="M11 16c0 .5.5 1 1 1s1-.5 1-1" />
                            </svg>
                        )}
                        {el.type === 'pot' && (
                            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 8v10c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4V8" />
                                <path d="M4 6h16c1.1 0 2 .9 2 2v0c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v0c0-1.1.9-2 2-2z" fill="currentColor" opacity="0.2" />
                                <path d="M12 11c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-3z" />
                            </svg>
                        )}
                        {el.type === 'jar' && (
                            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="7" y="6" width="10" height="14" rx="2" />
                                <path d="M8 4h8" strokeWidth="3" strokeLinecap="round" />
                                <path d="M8 10h8M8 14h8" opacity="0.5" />
                            </svg>
                        )}
                        {el.type === 'bee' && (
                            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 9c-2-3-6-3-6 0 0 3 4 5 6 8 2-3 6-5 6-8 0-3-4-3-6 0z" />
                                <path d="M12 15s-2 1-2 2 1 1 2 1 2-1 2-2-1-1-2-1z" opacity="0.6" />
                            </svg>
                        )}
                    </motion.div>
                ))}

                {/* Particles */}
                {particles.map((p) => (
                    <motion.div
                        key={`p-${p.id}`}
                        className="absolute bg-secondary/70 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -200, 0],
                            x: [0, 100, 0],
                            opacity: [0.4, 0.9, 0.4],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default FloatingBackground;
