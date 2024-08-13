import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/api';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    console.log(useParams());
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProducts(null, productId);
                setProduct(response.data[0][0]);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white">
            <div className="pt-6">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                        <div className="flex justify-center lg:col-span-1 lg:row-span-2">
                            <img src={product.product_image} alt={product.product_name} className="w-full h-full object-center object-cover rounded-lg" />
                        </div>
                        <div className="lg:col-span-1">
                            <h1 className="text-3xl font-bold text-gray-900">{product.product_name}</h1>
                            <p className="text-lg text-gray-900 mt-4">${product.product_price}</p>
                            <p className="text-md text-gray-500 mt-4">{product.product_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
