import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

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
import OrderSuccess from './pages/OrderSuccess';

// Components
import SEO from './components/common/SEO';
import CartDrawer from './components/layout/CartDrawer';

const App = () => {
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
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wholesale" element={<Wholesale />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/bundle-builder" element={<BundleBuilder />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/purity" element={<Purity />} />
              <Route path="/track-order" element={<OrderTracking />} />
              <Route path="/loyalty" element={<Loyalty />} />
              <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
