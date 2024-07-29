import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import ProductDetails from './pages/product/getproduct';
// import Api from './services/api';
// import App from '../src/services/api';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ProductDetails />
  </React.StrictMode>
);
