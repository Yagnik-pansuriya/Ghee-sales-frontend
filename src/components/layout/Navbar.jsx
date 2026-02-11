import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiShoppingBag, FiSearch, FiPhone } from 'react-icons/fi';
import Logo from '../common/Logo';
import Button from '../common/Button';
import clsx from 'clsx';

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
        { name: 'Our Story', path: '/about' },
        { name: 'Wholesale', path: '/wholesale' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-border/50'
                        : 'bg-transparent py-5 lg:py-6'
                )}
            >
                <div className="container mx-auto flex items-center justify-between">
                    <Logo isScrolled={isScrolled} />

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    "font-medium transition-colors relative group text-sm tracking-wide uppercase",
                                    isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                                )}
                            >
                                {link.name}
                                <span className={clsx(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                    isScrolled || location.pathname !== '/' ? 'bg-primary' : 'bg-secondary'
                                )} />
                            </Link>
                        ))}
                    </nav>

                    {/* Icons & CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button className={clsx(
                            "transition-colors hover:scale-110 duration-200",
                            isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                        )}>
                            <FiSearch size={22} />
                        </button>
                        <button className={clsx(
                            "transition-colors hover:scale-110 duration-200 relative",
                            isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                        )}>
                            <FiShoppingBag size={22} />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white font-bold">
                                2
                            </span>
                        </button>
                        <Button
                            size="sm"
                            variant={isScrolled || location.pathname !== '/' ? 'primary' : 'secondary'}
                            className="ml-2"
                        >
                            Shop Now
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={clsx(
                            "lg:hidden transition-colors p-2",
                            isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                        )}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <HiMenuAlt3 size={28} />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-cream shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 flex items-center justify-between border-b border-border">
                                <span className="font-serif text-2xl font-bold text-primary">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-text-muted hover:text-primary p-2 bg-white rounded-full shadow-sm"
                                >
                                    <HiX size={24} />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className="text-xl font-serif font-medium text-text-main hover:text-primary transition-colors flex items-center justify-between group"
                                        >
                                            {link.name}
                                            <span className="w-8 h-[1px] bg-border group-hover:bg-primary transition-colors" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="p-6 border-t border-border bg-white mt-auto">
                                <Button className="w-full mb-4 shadow-lg">Shop Now</Button>
                                <div className="flex justify-center gap-8 text-text-muted">
                                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                                        <FiSearch size={22} />
                                        <span className="text-xs uppercase tracking-wider">Search</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                                        <FiShoppingBag size={22} />
                                        <span className="text-xs uppercase tracking-wider">Cart (2)</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                                        <FiPhone size={22} />
                                        <span className="text-xs uppercase tracking-wider">Call</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
