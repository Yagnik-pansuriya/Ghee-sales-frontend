import React from 'react';

const Hero = () => {
    return (
        <section style={{
            paddingTop: '12rem',
            paddingBottom: '8rem',
            background: 'radial-gradient(circle at top right, #FFFBF0 0%, #FFFCF5 100%)',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                <div className="animate-fade-in-up">
                    <div style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                        Est. 2024 • Traditional Vedic Methods
                    </div>
                    <h1 style={{ fontSize: '5.5rem', marginBottom: '2rem', color: 'var(--text-main)', lineHeight: 1.1 }}>
                        Nature's Purest <br /> <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Gift to You</span>
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '550px' }}>
                        Experience the rich aroma and grainy texture of hand-churned A2 Gir Cow Ghee, crafted with love from the finest pastures of India.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button className="btn btn-primary">Shop A2 Ghee</button>
                        <button className="btn btn-secondary">Our Story</button>
                    </div>
                </div>

                <div style={{ position: 'relative' }} className="animate-fade-in-up">
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'var(--primary)',
                        opacity: 0.03,
                        borderRadius: '50%',
                        zIndex: -1
                    }}></div>
                    <img
                        src="https://images.unsplash.com/photo-1610450949065-1f2841536730?auto=format&fit=crop&q=80&w=800"
                        alt="Premium Ghee"
                        style={{
                            width: '100%',
                            borderRadius: '24px',
                            boxShadow: '0 30px 60px -12px rgba(93, 64, 55, 0.2)',
                            transform: 'rotate(2deg)'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
