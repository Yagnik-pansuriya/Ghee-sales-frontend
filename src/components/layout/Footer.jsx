import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../common/Logo';

const Footer = () => {
    const links = {
        shop: [
            { name: 'All Products', path: '/products' },
            { name: 'A2 Ghee', path: '/products/a2-ghee' },
            { name: 'Raw Honey', path: '/products/honey' },
            { name: 'Bundles', path: '/products/bundles' },
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Story', path: '/story' },
            { name: 'Certifications', path: '/certifications' },
            { name: 'Wholesale', path: '/wholesale' },
        ],
        support: [
            { name: 'Contact Us', path: '/contact' },
            { name: 'FAQs', path: '/faqs' },
            { name: 'Shipping Policy', path: '/shipping' },
            { name: 'Privacy Policy', path: '/privacy' },
        ]
    };

    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="mb-6">
                            <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-white">
                                Ghee & Honey
                            </Link>
                        </div>
                        <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
                            Bringing you the purest, ethically sourced organic ghee and honey from the heart of nature. Traditional methods, modern trust.
                        </p>
                        <div className="flex gap-4">
                            {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="font-serif text-lg mb-6 text-secondary">Shop</h4>
                        <ul className="space-y-3">
                            {links.shop.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-serif text-lg mb-6 text-secondary">Company</h4>
                        <ul className="space-y-3">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="font-serif text-lg mb-6 text-secondary">Stay Updated</h4>
                        <p className="text-white/70 mb-4">Subscribe for exclusive offers and organic lifestyle tips.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-4 py-3 focus:outline-none focus:border-secondary text-white placeholder:text-white/30"
                            />
                            <button className="bg-secondary text-primary-dark font-bold px-6 py-3 rounded-r-full hover:bg-white transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} Ghee & Honey. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white">Terms</Link>
                        <Link to="#" className="hover:text-white">Privacy</Link>
                        <Link to="#" className="hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
