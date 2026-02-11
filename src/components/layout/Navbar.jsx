import { useState, useEffect } from 'react';
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const cartCount = items.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

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
        {
            name: 'Products',
            path: '/products',
            subItems: [
                { name: 'All Products', path: '/products' },
                { name: 'Bundle Builder', path: '/bundle-builder', isNew: true }
            ]
        },
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

                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group py-2">
                                <Link
                                    to={link.path}
                                    className={clsx(
                                        "font-medium transition-colors relative text-sm tracking-wide uppercase flex items-center gap-1",
                                        isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                                    )}
                                >
                                    {link.name}
                                    {link.subItems && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                    <span className={clsx(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                        isScrolled || location.pathname !== '/' ? 'bg-primary' : 'bg-secondary'
                                    )} />
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

                    {/* Icons & CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className={clsx(
                                "transition-colors hover:scale-110 duration-200",
                                isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                            )}
                        >
                            <FiSearch size={22} />
                        </button>
                        <Link
                            to="/wishlist"
                            className={clsx(
                                "transition-colors hover:scale-110 duration-200 relative",
                                isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                            )}
                        >
                            <FiHeart size={22} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white font-bold">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => dispatch(toggleCart())}
                            className={clsx(
                                "transition-colors hover:scale-110 duration-200 relative",
                                isScrolled || location.pathname !== '/' ? 'text-text-main hover:text-primary' : 'text-white hover:text-secondary'
                            )}
                        >
                            <FiShoppingBag size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white font-bold">
                                    {cartCount}
                                </span>
                            )}
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

                            <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-4">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        className="flex flex-col gap-2"
                                    >
                                        <Link
                                            to={link.path}
                                            className="text-xl font-serif font-bold text-text-main hover:text-primary transition-colors flex items-center justify-between group"
                                        >
                                            {link.name}
                                            {link.subItems ? (
                                                <span className="text-secondary text-xs font-sans font-bold py-1 px-2 bg-secondary/10 rounded-full">Explore</span>
                                            ) : (
                                                <span className="w-8 h-[1px] bg-border group-hover:bg-primary transition-colors" />
                                            )}
                                        </Link>

                                        {/* Mobile Sub Items */}
                                        {link.subItems && (
                                            <div className="flex flex-col gap-3 ml-4 mt-2 border-l-2 border-secondary/20 pl-4">
                                                {link.subItems.map(sub => (
                                                    <Link
                                                        key={sub.path}
                                                        to={sub.path}
                                                        className="text-lg font-medium text-text-muted hover:text-secondary transition-colors flex items-center gap-2"
                                                    >
                                                        {sub.name}
                                                        {sub.isNew && <span className="bg-secondary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span>}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="p-6 border-t border-border bg-white mt-auto">
                                <div className="flex justify-center gap-8 text-text-muted">
                                    <div
                                        onClick={() => setIsSearchOpen(true)}
                                        className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary transition-colors"
                                    >
                                        <FiSearch size={22} />
                                        <span className="text-xs uppercase tracking-wider">Search</span>
                                    </div>
                                    <Link
                                        to="/wishlist"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary transition-colors"
                                    >
                                        <div className="relative">
                                            <FiHeart size={22} />
                                            {wishlistCount > 0 && (
                                                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-secondary text-[8px] text-white font-bold">
                                                    {wishlistCount}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xs uppercase tracking-wider">Saved</span>
                                    </Link>
                                    <div
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            dispatch(toggleCart());
                                        }}
                                        className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary transition-colors"
                                    >
                                        <div className="relative">
                                            <FiShoppingBag size={22} />
                                            {cartCount > 0 && (
                                                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-secondary text-[8px] text-white font-bold">
                                                    {cartCount}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xs uppercase tracking-wider">Cart</span>
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

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Navbar;
