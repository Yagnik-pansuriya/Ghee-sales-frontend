import React from 'react';

const Process = () => {
    return (
        <section style={{ padding: '10rem 0', background: 'var(--primary)', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <div style={{ color: 'var(--secondary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '2px' }}>THE BILONA JOURNEY</div>
                    <h2 style={{ fontSize: '3.5rem', maxWidth: '800px', margin: '0 auto' }}>Sacred Preparation, Pure Results</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem', position: 'relative' }}>
                    {[
                        { step: '01', title: 'A2 Gir Milk', desc: 'Fresh, pure milk collected from our native Gir cows at dawn.' },
                        { step: '02', title: 'Setting Curd', desc: 'Milk is boiled and converted into curd using a natural starter.' },
                        { step: '03', title: 'Churning', desc: 'The curd is hand-churned bidirectionally with a wooden Bilona.' },
                        { step: '04', title: 'Slow Cooking', desc: 'Makkhan is melted on slow wood fire to reveal the golden elixir.' }
                    ].map((item, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <div style={{ fontSize: '5rem', fontWeight: 900, color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '-40px', left: '0' }}>{item.step}</div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: 'var(--secondary)' }}>{item.title}</h3>
                                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
