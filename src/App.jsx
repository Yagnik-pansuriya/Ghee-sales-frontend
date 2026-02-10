import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import OurStory from './components/OurStory';
import ProductShowcase from './components/ProductShowcase';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <Hero />
        <Benefits />
        <OurStory />
        <ProductShowcase onOpenCart={() => setIsCartOpen(true)} />
        <Process />
        <Testimonials />
        <InstagramFeed />
        <Newsletter />
      </main>

      <Footer />

      {/* Cart Sidebar */}
      <div className={`overlay ${isCartOpen ? 'active' : ''}`} onClick={() => setIsCartOpen(false)} />
      <div className={`sidebar ${isCartOpen ? 'active' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Your Basket</h2>
          <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', fontSize: '1.5rem', color: 'var(--text-muted)' }}>&times;</button>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-muted)' }}>
          <p style={{ marginBottom: '1.5rem' }}>Your basket is currently empty.</p>
          <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>Start Shopping</button>
        </div>
      </div>
    </div >
  );
};

export default App;
