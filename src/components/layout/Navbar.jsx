import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import Logo from '../common/Logo';
import clsx from 'clsx';
import Button from '../common/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Why Us', path: '/#why-us' },
        { name: 'Wholesale', path: '/#wholesale' },
        { name: 'Certifications', path: '/#certifications' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                    isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-border/50' : 'bg-transparent py-5'
                )}
            >
                <div className="container mx-auto flex items-center justify-between">
                    <Logo />

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-text-main hover:text-primary font-medium transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Icons & CTA */}
                    <div className="hidden md:flex items-center gap-5">
                        <button className="text-text-main hover:text-primary transition-colors">
                            <FiSearch size={22} />
                        </button>
                        <button className="text-text-main hover:text-primary transition-colors relative">
                            <FiShoppingBag size={22} />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white">
                                0
                            </span>
                        </button>
                        <Button size="sm" variant="primary" className="ml-2">
                            Shop Now
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-text-main hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <HiMenuAlt3 size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col"
                    >
                        <div className="p-5 flex items-center justify-between border-b border-border/50">
                            <Logo />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-text-main hover:text-primary p-2 bg-cream rounded-full"
                            >
                                <HiX size={24} />
                            </button>
                        </div>

                        <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-2xl font-serif font-medium text-text-main hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col gap-4 w-full mt-8"
                            >
                                <Button className="w-full">Shop Now</Button>
                                <div className="flex justify-center gap-6 text-text-muted mt-4">
                                    <FiSearch size={24} />
                                    <FiShoppingBag size={24} />
                                </div>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
