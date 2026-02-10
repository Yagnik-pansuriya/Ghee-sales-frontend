import React from 'react';

const Testimonials = () => {
    return (
        <section style={{ padding: '10rem 0', backgroundColor: '#FDFCFB' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div style={{ color: 'var(--secondary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '2px' }}>TESTIMONIALS</div>
                    <h2 style={{ fontSize: '3.5rem' }}>Whispers of Satisfaction</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
                    {[
                        { name: 'Ananya Sharma', text: 'The texture and aroma of Rosier Ghee reminds me of the ghee my grandmother used to make. Truly authentic!', rating: 5 },
                        { name: 'Rajesh Patel', text: 'I\'ve switched to A2 Gir Ghee for my kids, and the difference in quality is remarkable compared to store-bought ones.', rating: 5 },
                        { name: 'Mehta Family', text: 'We use it for our daily Ayurvedic rituals. The purity is evident in the golden glow and the rich taste.', rating: 5 }
                    ].map((t, i) => (
                        <div key={i} className="glass-card" style={{ padding: '3rem' }}>
                            <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>{'★'.repeat(t.rating)}</div>
                            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2.5rem', color: 'var(--text-main)', lineHeight: 1.6 }}>"{t.text}"</p>
                            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>— {t.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
