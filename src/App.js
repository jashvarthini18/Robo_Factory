import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { AuthProvider } from './pages/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import OrdersAndReturns from './pages/OrdersAndReturns';
import Electronics from './pages/Electronics';
import Radios from './pages/Radios';
import MotorsAndGearboxes from './pages/MotorsAndGearboxes';
import Battery from './pages/Battery';
import ChargerAndAccessories from './pages/ChargerAndAccessories';
import RoboKits from './pages/RoboKits';
import Tools from './pages/Tools';
import Merchandise from './pages/Merchandise';
import WiresCablesConnections from './pages/WiresCablesConnections';
import Mechanical from './pages/Mechanical';
import Contact from './pages/Contact';
import CustomerDashboard from './pages/CustomerDashboard';
import CustomerSupport from './pages/CustomerSupport';
import ProductDetail from './pages/ProductDetail'; // Import ProductDetail component
import Cart from './pages/Cart'; // Import Cart component
import TermsOfService from './pages/TermsOfService';
import ReturnsAndRefunds from './pages/ReturnsAndRefunds';
import PrivacyPolicy from './pages/PrivacyPolicy';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div id="root">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/orders" element={<OrdersAndReturns />} />
              <Route path="/customerdashboard" element={<CustomerDashboard />} />
              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="/shop/electronics" element={<Electronics />} />
              <Route path="/shop/radios" element={<Radios />} />
              <Route path="/shop/motor-and-gearboxes" element={<MotorsAndGearboxes />} />
              <Route path="/shop/battery" element={<Battery />} />
              <Route path="/shop/charger-accessories" element={<ChargerAndAccessories />} />
              <Route path="/shop/robokits" element={<RoboKits />} />
              <Route path="/shop/tools" element={<Tools />} />
              <Route path="/shop/merchandise" element={<Merchandise />} />
              <Route path="/shop/wires-cables-connections" element={<WiresCablesConnections />} />
              <Route path="/shop/mechanical" element={<Mechanical />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/returns-and-refunds" element={<ReturnsAndRefunds />} />

              {/* Route for product detail page */}
              <Route path="/product/:index" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
