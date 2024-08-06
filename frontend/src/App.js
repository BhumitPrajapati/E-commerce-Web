import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Getsony from "./components/categorywiseProduct";
import Navbar from './components/navbar';
import CartSlideOver from './components/cart/cart.slideOver';
import ProductDetail from './components/productDetails';
import Checkout from './components/Checkout';
import AdminLogin from './components/adminLogin';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      </Routes>
      <CartSlideOver isOpen={isCartOpen} toggleCart={toggleCart} />
    </Router>
  );
};

export default App;
