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
                {/* <nav aria-label="Breadcrumb"> */}
                    {/* <ol role="list" className="max-w-7xl mx-auto flex items-center space-x-4 px-4 sm:px-6 lg:px-8"> */}
                        {/* <li> */}
                            {/* <div className="flex items-center">
                                <a href="/" className="mr-4 text-sm font-medium text-gray-900">Home</a>
                                <svg className="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div> */}
                        {/* </li> */}
                        {/* <li>
                            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">{product.product_category_id}</a>
                        </li> */}
                    {/* </ol> */}
                {/* </nav> */}

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
