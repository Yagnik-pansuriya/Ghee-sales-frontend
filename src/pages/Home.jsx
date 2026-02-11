import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Certifications from '../components/sections/Certifications';
import ProductShowcase from '../components/sections/ProductShowcase';
import Testimonials from '../components/sections/Testimonials';
import WholesaleInquiry from '../components/sections/WholesaleInquiry';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="home-page overflow-x-hidden">
            <Helmet>
                <title>Rosier Foods | Premium Organic A2 Ghee & Raw Honey</title>
                <meta name="description" content="Discover the purest Bilona Ghee and Wild Forest Honey. Ethically sourced, lab-tested, and 100% organic. Shop now for health and tradition." />
            </Helmet>

            <Hero />

            <div id="why-us">
                <WhyChooseUs />
            </div>

            <div id="products">
                <ProductShowcase />
            </div>

            <div id="certifications">
                <Certifications />
            </div>

            <Testimonials />

            <div id="wholesale">
                <WholesaleInquiry />
            </div>
        </div>
    );
};

export default Home;
