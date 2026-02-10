import React from 'react';

const ProductShowcase = ({ onOpenCart }) => {
    const products = [
        { id: 1, name: 'Premium A2 Gir Cow Ghee', price: '₹1,499', originalPrice: '₹1,800', image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=400', tag: 'Best Seller' },
        { id: 2, name: 'Himalayan Wild Forest Honey', price: '₹650', originalPrice: '₹800', image: 'https://images.unsplash.com/photo-1587049352847-81a56d773cae?auto=format&fit=crop&q=80&w=400', tag: 'Organic' },
        { id: 3, name: 'Cold Pressed Yellow Mustard Oil', price: '₹350', originalPrice: '₹450', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400', tag: 'Traditional' }
    ];

    return (
        <section id="shop" style={{ padding: '10rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
                    <div>
                        <div style={{ color: 'var(--secondary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '2px' }}>SHOP OUR RANGE</div>
                        <h2 style={{ fontSize: '3.5rem' }}>Direct from the Farm</h2>
                    </div>
                    <a href="#" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '5px' }}>Explore All Products</a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
                    {products.map(product => (
                        <div key={product.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ position: 'relative', height: '350px', marginBottom: '2rem', borderRadius: '15px', overflow: 'hidden' }}>
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--secondary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>{product.tag}</div>
                            </div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{product.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.5rem' }}>{product.price}</span>
                                <span style={{ textDecoration: 'line-through', color: '#AAA', fontSize: '1.1rem' }}>{product.originalPrice}</span>
                            </div>
                            <button
                                onClick={onOpenCart}
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1.2rem' }}
                            >
                                Add to Basket
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
