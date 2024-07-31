import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import CategoryList from './components/Category';
// import ProductList from './components/ProductList';
import '../src/styles/App.css';
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<ProductList />} /> */}
          <Route path="/products/getCategory" element={<CategoryList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
