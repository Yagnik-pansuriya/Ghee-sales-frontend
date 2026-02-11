import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <SectionWrapper>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Image Grid */}
                <div className="relative">
                    <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1623657731940-2c8e3ccfe8b6?auto=format&fit=crop&q=80&w=800"
                            alt="Farmer with cow"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-[40px] overflow-hidden border-8 border-cream shadow-xl hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1599818815949-9fd0b2408b07?auto=format&fit=crop&q=80&w=800"
                            alt="Fresh Honey"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-10 -left-10 bg-white p-6 rounded-2xl shadow-card max-w-[200px] hidden md:block">
                        <p className="font-serif text-3xl font-bold text-primary mb-1">25+</p>
                        <p className="text-sm text-text-muted">Years of Farming Heritage</p>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Story</span>
                    <h2 className="text-4xl md:text-5xl mt-3 font-serif mb-8 text-text-main">Legacy of Purity,<br /> Rooted in Tradition</h2>
                    <p className="text-text-muted text-lg leading-relaxed mb-6">
                        Born from a desire to bring the goodness of ancient India to modern tables. We work directly with small-scale farmers who treat their land and livestock with reverence.
                    </p>
                    <p className="text-text-muted text-lg leading-relaxed mb-10">
                        Our Ghee is made using the 3000-year-old 'Bilona' method, and our honey is harvested sustainably from deep forests, ensuring you get nothing but nature's best.
                    </p>
                    <Link to="/about">
                        <Button variant="primary">Read Our Full Story</Button>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutPreview;
