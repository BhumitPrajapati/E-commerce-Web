import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart.context'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {

    const { addToCart } = useCart();
    const handleAddToCart = (event) => {
        event.stopPropagation();
        addToCart(product);
    };

    return (
        <div className="relative bg-white border rounded-lg shadow-md p-4">
            {/* <a href={`/productId/${product.product_id}`} className="block"></a> */}
            
             {/* <h1>`{product.product_id}`</h1> */}
            <img src={product.product_image} alt={product.product_name} className="w-full h-60 object-cover rounded-md" />
            <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.product_name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.product_price}</p>
            </div>
            <button
                onClick={handleAddToCart}
                className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", }} />

            </button>
            <button>
                {/* Add to bag */}
             <Link to={`/productId/${product.product_id}`}className="className=mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Details</Link>
              </button>
        </div>
    );
};

export default ProductCard;
