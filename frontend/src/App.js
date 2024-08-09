import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home';
import Getsony from "./components/categorywiseProduct";
import Navbar from './components/navbar';
import CartSlideOver from './components/cart/cart.slideOver';
import ProductDetail from './components/productDetails';
import Checkout from './components/Checkout';
import AdminLogin from './components/admin/adminLogin';
import AdminDashboard from './components/admin/dashboard';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const location = useLocation();
  // console.log('Location:', location);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/getSony/:categoryId" element={<Getsony />} />
        <Route path="/products/getCanon/:categoryId" element={<Getsony />} />
        <Route path="/productId/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      <CartSlideOver isOpen={isCartOpen} toggleCart={toggleCart} />
    </Router>
  );
};

export default App;
