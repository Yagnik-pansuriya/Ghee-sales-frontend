import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Wholesale from './pages/Wholesale';
import Certifications from './pages/Certifications';
import Checkout from './pages/Checkout';
import BundleBuilder from './pages/BundleBuilder';
import Wishlist from './pages/Wishlist';
import Purity from './pages/Purity';
import OrderTracking from './pages/OrderTracking';
import Loyalty from './pages/Loyalty';
import WisdomHub from './pages/WisdomHub';
import OrderSuccess from './pages/OrderSuccess';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Gifting from './pages/Gifting';
import Traceability from './pages/Traceability';
import Magazine from './pages/Magazine';
import ArticleReader from './pages/ArticleReader';

import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from './redux/toastSlice';

// Components
import SEO from './components/common/SEO';
import CartDrawer from './components/layout/CartDrawer';
import Toast from './components/common/Toast';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    className="relative"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/products/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/wholesale" element={<PageWrapper><Wholesale /></PageWrapper>} />
        <Route path="/certifications" element={<PageWrapper><Certifications /></PageWrapper>} />
        <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        <Route path="/bundle-builder" element={<PageWrapper><BundleBuilder /></PageWrapper>} />
        <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
        <Route path="/purity" element={<PageWrapper><Purity /></PageWrapper>} />
        <Route path="/track-order" element={<PageWrapper><OrderTracking /></PageWrapper>} />
        <Route path="/loyalty" element={<PageWrapper><Loyalty /></PageWrapper>} />
        <Route path="/wisdom" element={<PageWrapper><WisdomHub /></PageWrapper>} />
        <Route path="/order-success" element={<PageWrapper><OrderSuccess /></PageWrapper>} />
        <Route path="/magazine" element={<PageWrapper><Magazine /></PageWrapper>} />
        <Route path="/magazine/:id" element={<PageWrapper><ArticleReader /></PageWrapper>} />
        <Route path="/shipping" element={<PageWrapper><ShippingPolicy /></PageWrapper>} />
        <Route path="/returns" element={<PageWrapper><ReturnPolicy /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="/gifting" element={<PageWrapper><Gifting /></PageWrapper>} />
        <Route path="/traceability" element={<PageWrapper><Traceability /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const { isVisible, message } = useSelector(state => state.toast);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <SEO
            title="Premium Organic Output"
            description="Shop the finest A2 Gir Cow Ghee and Raw Organic Honey. 100% Pure, Lab Tested, and Traditional."
          />
          <Navbar />
          <CartDrawer />
          <Toast
            isVisible={isVisible}
            message={message}
            onHide={() => dispatch(hideToast())}
          />
          <main className="flex-grow overflow-hidden relative">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
