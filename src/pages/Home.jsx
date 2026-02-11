import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import AboutPreview from '../components/sections/AboutPreview';
import ProductShowcase from '../components/sections/ProductShowcase';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Features />
            <AboutPreview />
            <ProductShowcase />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;
