import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-light)', borderTop: '1px solid #eee' }}>
            <div className="container">
                <div style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>ROSIER FOODS</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#">About Us</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <p>© 2024 Rosier Foods India. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
