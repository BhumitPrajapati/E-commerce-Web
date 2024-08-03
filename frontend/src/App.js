import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Getsony from "./components/categorywiseProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/getSony/:categoryId" element={<Getsony />} />
        <Route path="/products/getCanon/:categoryId" element={<Getsony />} />
      </Routes>
    </Router>
  );
};

export default App;
