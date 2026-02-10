import React from 'react';

const Newsletter = () => {
    return (
        <section style={{ padding: '10rem 0', backgroundColor: 'var(--bg-cream)' }}>
            <div className="container">
                <div className="glass-card" style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '5rem',
                    textAlign: 'center',
                    background: 'var(--primary)',
                    color: 'white'
                }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Join the Rosier Family</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
                        Receive traditional recipes, wellness tips, and exclusive offers straight to your inbox.
                    </p>
                    <form style={{ display: 'flex', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            style={{
                                flex: 1,
                                padding: '1.2rem 2.5rem',
                                borderRadius: '100px',
                                border: 'none',
                                outline: 'none',
                                fontSize: '1.1rem'
                            }}
                        />
                        <button className="btn" style={{ background: 'var(--secondary)', color: 'var(--primary)', border: 'none' }} type="button">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
