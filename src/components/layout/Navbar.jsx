import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiShoppingBag, FiSearch, FiPhone, FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/cartSlice';
import Logo from '../common/Logo';
import Button from '../common/Button';
import SearchOverlay from '../common/SearchOverlay';
import clsx from 'clsx';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const lastScrollY = useRef(0);
    const location = useLocation();

    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const cartCount = items.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Handle background change (scrolled state)
            setIsScrolled(currentScrollY > 30);

            // Handle visibility (hide on scroll down, show on scroll up)
            if (currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Products',
            path: '/products',
            subItems: [
                { name: 'All Products', path: '/products' },
                { name: 'Bundle Builder', path: '/bundle-builder', isNew: true },
                { name: 'Gift a Ritual', path: '/gifting', isNew: true }
            ]
        },
        {
            name: 'The Farm',
            path: '/about',
            subItems: [
                { name: 'Our Story', path: '/about' },
                { name: 'Wisdom Hub', path: '/wisdom', isNew: true },
                { name: 'Trace the Source', path: '/traceability', isNew: true },
                { name: 'The Vedic Life', path: '/magazine', isNew: true }
            ]
        },
        { name: 'Wholesale', path: '/wholesale' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -110 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 gpu-accelerated will-change-[transform,padding,background-color,backdrop-filter]",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200 py-0.5"
                        : "bg-transparent py-1.5"
                )}
            >
                {/* MAIN CONTAINER */}
                <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Logo isScrolled={isScrolled} />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group py-2">
                                <Link
                                    to={link.path}
                                    className={clsx(
                                        "text-sm tracking-wider uppercase font-medium transition-all duration-300 relative flex items-center gap-1",
                                        isScrolled || location.pathname !== '/'
                                            ? "text-gray-700 hover:text-amber-700"
                                            : "text-white hover:text-amber-300"
                                    )}
                                >
                                    {link.name}
                                    {link.subItems && (
                                        <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
                                </Link>

                                {/* Dropdown Menu */}
                                {link.subItems && (
                                    <div className="absolute left-0 mt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                                        <div className="bg-white rounded-2xl shadow-2xl border border-border p-3 overflow-hidden">
                                            {link.subItems.map((sub) => (
                                                <Link
                                                    key={sub.path}
                                                    to={sub.path}
                                                    className="block px-4 py-3 text-sm font-medium text-primary hover:bg-cream rounded-xl transition-colors relative"
                                                >
                                                    {sub.name}
                                                    {sub.isNew && (
                                                        <span className="ml-2 px-2 py-0.5 bg-secondary text-white text-[8px] font-bold rounded-full">
                                                            NEW
                                                        </span>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-6">

                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className={clsx(
                                "transition hover:scale-110 duration-200",
                                isScrolled || location.pathname !== '/'
                                    ? "text-gray-700 hover:text-amber-700"
                                    : "text-white hover:text-amber-300"
                            )}
                        >
                            <FiSearch size={20} />
                        </button>

                        <Link
                            to="/wishlist"
                            className="relative transition hover:scale-110 duration-200"
                        >
                            <FiHeart size={20} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => dispatch(toggleCart())}
                            className="relative transition hover:scale-110 duration-200"
                        >
                            <FiShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <Link to="/products">
                            <Button size="sm" variant="primary">
                                Shop Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <HiMenuAlt3 />
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
                        className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-semibold">Menu</h2>
                                <HiX
                                    className="text-2xl cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map(link => (
                                    <div key={link.name} className="flex flex-col gap-2">
                                        <Link
                                            to={link.path}
                                            className="text-lg font-medium hover:text-amber-600 transition flex items-center justify-between"
                                            onClick={() => !link.subItems && setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                            {link.subItems && <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-1 rounded-full font-bold uppercase">Explore</span>}
                                        </Link>

                                        {/* Mobile Sub Items */}
                                        {link.subItems && (
                                            <div className="flex flex-col gap-3 ml-4 mt-2 border-l border-amber-600/20 pl-4">
                                                {link.subItems.map(sub => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-base font-medium text-gray-500 hover:text-amber-600 transition flex items-center gap-2"
                                                    >
                                                        {sub.name}
                                                        {sub.isNew && <span className="bg-amber-600 text-white text-[8px] px-2 py-0.5 rounded-full font-bold">NEW</span>}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SearchOverlay
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    );
};

export default Navbar;
