import React from 'react';

const OurStory = () => {
    return (
        <section id="story" style={{ padding: '10rem 0', backgroundColor: 'var(--bg-white)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                        alt="Our Heritage"
                        style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)' }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '-40px',
                        right: '-40px',
                        width: '300px',
                        height: '300px',
                        background: 'var(--secondary)',
                        borderRadius: '40px',
                        zIndex: -1,
                        opacity: 0.1
                    }}></div>
                </div>
                <div>
                    <div style={{ color: 'var(--secondary)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '2px' }}>OUR HERITAGE</div>
                    <h2 style={{ fontSize: '4.5rem', marginBottom: '2.5rem', lineHeight: 1.1 }}>Preserving the <span style={{ color: 'var(--primary)' }}>Spirit of Bharat</span></h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Rosier Foods was born from a deep reverence for the ancient Indian wisdom of wellness. We noticed the world moving towards processed, soul-less food, and we decided to take a step back—to the roots.
                    </p>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        In the heart of Gir, our cows are treated as family. We follow the sacred Vedic Bilona process, ensuring that every jar of ghee is charged with positive energy and life-sustaining nutrients.
                    </p>
                    <button className="btn btn-primary">Discover Our Journey</button>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
