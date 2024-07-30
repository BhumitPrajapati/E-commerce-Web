import React, { useEffect, useState } from 'react';
import { getProductById, getProducts } from '../services/api';
import '../styles/ProductDetails.css';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts();
      setProduct(data);
    };

    fetchProduct();
  }, [match.params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;
