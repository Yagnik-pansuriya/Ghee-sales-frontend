import React from 'react';

const Navbar = ({ scrolled, onOpenCart }) => {
    return (
        <header className={scrolled ? 'scrolled' : ''} style={{
            padding: '2rem 0',
            position: 'fixed',
            width: '100%',
            zIndex: 100,
            transition: 'all 0.4s var(--easing)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-1px', cursor: 'pointer' }}>
                    ROSIER <span style={{ color: 'var(--secondary)' }}>FOODS</span>
                </div> */}

                <div style={{ display: 'flex', gap: '3rem', fontWeight: 500, alignItems: 'center' }}>
                    <a href="#shop" style={{ color: 'var(--text-main)' }}>Shop</a>
                    <a href="#story" style={{ color: 'var(--text-main)' }}>Story</a>
                    <a href="#benefits" style={{ color: 'var(--text-main)' }}>Benefits</a>

                    <button onClick={onOpenCart} style={{
                        background: 'none',
                        position: 'relative',
                        padding: '5px',
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        <span style={{
                            position: 'absolute',
                            top: '-2px',
                            right: '-2px',
                            background: 'var(--secondary)',
                            color: 'white',
                            fontSize: '10px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700
                        }}>0</span>
                    </button>
                </div>
            </div>
        </header>
        // <></>
    );
};

export default Navbar;
