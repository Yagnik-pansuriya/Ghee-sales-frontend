import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Button from '../common/Button';
import Logo from '../common/Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = {
        shop: [
            { name: 'All Products', path: '/products' },
            { name: 'A2 Gir Cow Ghee', path: '/products' },
            { name: 'Raw Forest Honey', path: '/products' },
            { name: 'Gift Bundles', path: '/bundle-builder' },
        ],
        company: [
            { name: 'Our Story', path: '/about' },
            { name: 'Organic Rewards', path: '/loyalty' },
            { name: 'Wholesale / B2B', path: '/wholesale' },
            { name: 'Contact Us', path: '/contact' },
        ],
        support: [
            { name: 'Shipping Policy', path: '/shipping' },
            { name: 'Return Policy', path: '/returns' },
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
        ]
    };

    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="mb-6">
                            <Logo isScrolled={false} />
                        </div>
                        <p className="text-white/70 mb-8 max-w-sm leading-relaxed text-lg font-light">
                            Farm-to-home purity. We bring you the finest organic A2 Ghee and raw honey, untainted and traditional.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: FaInstagram, url: "https://instagram.com/farmbegin" },
                                { Icon: FaFacebookF, url: "https://facebook.com/farmbegin" },
                                { Icon: FaTwitter, url: "https://twitter.com/farmbegin" },
                                { Icon: FaLinkedinIn, url: "https://linkedin.com/company/farmbegin" }
                            ].map(({ Icon, url }, idx) => (
                                <a
                                    key={idx}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="font-serif text-xl mb-8 text-secondary">Shop</h4>
                        <ul className="space-y-4">
                            {links.shop.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-serif text-xl mb-8 text-secondary">Company</h4>
                        <ul className="space-y-4">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-4">
                        <h4 className="font-serif text-xl mb-8 text-secondary">Stay Connected</h4>
                        <p className="text-white/70 mb-6">Join our community for exclusive access to harvest updates and wellness tips.</p>

                        {/* Status Message */}
                        {(() => {
                            const [status, setStatus] = React.useState('idle');
                            const [email, setEmail] = React.useState('');

                            const handleSubmit = (e) => {
                                e.preventDefault();
                                setStatus('loading');
                                setTimeout(() => {
                                    setStatus('success');
                                    setEmail('');
                                }, 1500);
                            };

                            if (status === 'success') {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white/5 border border-secondary/20 rounded-2xl p-6 text-center"
                                    >
                                        <div className="text-secondary text-2xl mb-2">✓</div>
                                        <p className="text-sm font-bold text-white">Welcome to the family!</p>
                                        <p className="text-xs text-white/60 mt-1">Check your inbox for a special gift.</p>
                                    </motion.div>
                                );
                            }

                            return (
                                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address"
                                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-secondary text-white placeholder:text-white/30 transition-colors"
                                        />
                                    </div>
                                    <Button
                                        variant="secondary"
                                        className="w-full sm:w-auto self-start"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Joining...' : 'Subscribe'}
                                    </Button>
                                </form>
                            );
                        })()}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
                    <p>&copy; {currentYear} Farm Begin. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {links.support.map((link) => (
                            <Link key={link.name} to={link.path} className="hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
