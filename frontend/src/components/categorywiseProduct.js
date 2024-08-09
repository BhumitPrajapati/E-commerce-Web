import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Navbar from './navbar';
import { getProducts } from '../services/api';
import ProductCard from '../components/cart/productCart'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Getsony = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    console.log(useParams());

    const categoryContent = {
        1: { title: 'Sony Products', description: 'Discover the latest Sony products.' },
        2: { title: 'Canon Products', description: 'Explore the best Canon products.' }
    };

    const { title, description } = categoryContent[categoryId];
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let data = await getProducts(categoryId);
                data = data.data[0];

                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [categoryId]);

    return (
        <div>
            {/* <Navbar /> */}
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
                        <p className="text-lg text-gray-600">{description}</p>
                    </div>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">Products</h2>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {products.map((product) => (
                                    <ProductCard key={product.product_name} product={product} />

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Getsony;
