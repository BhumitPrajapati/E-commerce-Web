import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import '../styles/ProductList.css';

const GetProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <a href={`/product/${product.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProductList;
