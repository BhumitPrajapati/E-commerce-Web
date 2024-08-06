import React, { useState, useEffect } from 'react';
// import Navbar from './navbar';
import { getProducts } from '../services/api';
// import { useCart } from '../context/cart.context';
import ProductCard from '../components/cart/productCart'

const Home = ({ product }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let data = await getProducts();
                data = data.data[0];
                setProducts(data);
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
    }, []);

    return (
        <div>
            {/* <Navbar /> */}
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <img src="/mainHomepage.jpg" alt="Description" className="object-cover h-full w-full rounded-lg" />
                        </div>
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


export default Home;
