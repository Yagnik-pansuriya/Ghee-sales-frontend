import React from 'react';

const InstagramFeed = () => {
    const feeds = [
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1511017049469-e0d1be0a1920?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1506484334402-40f21557d66a?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=300"
    ];

    return (
        <section style={{ padding: '8rem 0', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Follow Our Journey</h2>
                    <a href="#" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem' }}>@rosierfoods_india</a>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.5rem' }}>
                    {feeds.map((src, i) => (
                        <div key={i} style={{ aspectRatio: '1/1', borderRadius: '15px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                            <img src={src} alt="Feed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(93, 64, 55, 0.4)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                                ☘️
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
