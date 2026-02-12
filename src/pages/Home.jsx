import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Certifications from '../components/sections/Certifications';
import ProductShowcase from '../components/sections/ProductShowcase';
import ComparisonTool from '../components/sections/ComparisonTool';
import SelectionGuide from '../components/sections/SelectionGuide';
import Testimonials from '../components/sections/Testimonials';
import WholesaleInquiry from '../components/sections/WholesaleInquiry';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { FiArrowRight, FiGift } from 'react-icons/fi';
import BrandStory from '../components/sections/BrandStory';
import FAQ from '../components/sections/FAQ';
import BilonaJourney from '../components/sections/BilonaJourney';

const Home = () => {
    return (
        <div className="home-page overflow-x-hidden relative">
            <Helmet>
                <title>Farm Begin | Pure A2 Gir Cow Ghee & Raw Honey</title>
                <meta name="description" content="Discover the purest Bilona Ghee and Wild Forest Honey. Ethically sourced, lab-tested, and 100% organic. Shop now for health and tradition." />
            </Helmet>

            <Hero />

            <div id="why-us">
                <WhyChooseUs />
            </div>

            <div id="bilona-journey">
                <BilonaJourney />
            </div>

            <div id="products">
                <ProductShowcase />
            </div>

            {/* Bundle Builder Promotion */}
            <div className="py-20 bg-primary overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-sm p-10 md:p-16 rounded-[60px] border border-white/10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 text-secondary font-bold mb-4">
                                <FiGift className="text-2xl" />
                                <span className="uppercase tracking-widest text-sm">Bundle & Save</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                Build Your Own <br />
                                <span className="text-secondary">Custom Wellness Pack</span>
                            </h2>
                            <p className="text-white/70 text-lg mb-10 leading-relaxed">
                                Mix and match your favorite A2 Ghee and Organic Honey varieties.
                                Create a custom bundle of 3 or 5 jars and enjoy exclusive discounts up to 15%.
                            </p>
                            <Link to="/bundle-builder">
                                <Button variant="secondary" size="lg" className="rounded-2xl group">
                                    Start Building <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative w-full max-w-sm aspect-square">
                            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1549462229-837c7620c57c?q=80&w=800&auto=format&fit=crop"
                                alt="Bundle Box"
                                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="comparison">
                <ComparisonTool />
            </div>

            <SelectionGuide />

            <div id="certifications">
                <Certifications />
            </div>

            <Testimonials />

            <div id="wholesale">
                <WholesaleInquiry />
            </div>

            <FAQ />
        </div>
    );
};

export default Home;
