import React from 'react';

const Benefits = () => {
    return (
        <section id="benefits" style={{ backgroundColor: '#F9F6F0', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div style={{ color: 'var(--secondary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '2px' }}>WHY ROSIER?</div>
                    <h2 style={{ fontSize: '3.5rem', maxWidth: '800px', margin: '0 auto' }}>A Tradition of Purity in Every Drop</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
                    {[
                        { icon: '🐄', title: 'Pure A2 Gir Milk', desc: 'Sourced from grass-fed Gir cows, our ghee contains only A2 beta-casein protein, making it easily digestible and heart-healthy.' },
                        { icon: '🌀', title: 'Vedic Bilona Method', desc: 'Hand-churned from curd, not cream. This slow, traditional process preserves sensitive nutrients and the natural grainy texture.' },
                        { icon: '🌿', title: '100% Preservative Free', desc: 'No additives, no artificial colors, no fillers. Just pure, golden ghee as nature intended, packed with Omega-3 and vitamins.' }
                    ].map((benefit, index) => (
                        <div key={index} className="glass-card" style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{benefit.icon}</div>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>{benefit.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
