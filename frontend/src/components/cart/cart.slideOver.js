import React from 'react';
import { useCart } from '../../context/cart.context';

const CartSlideOver = ({ isOpen, toggleCart }) => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className={`fixed inset-0 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleCart}></div>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                    <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                            <div className="flex-1 py-6 px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                                    <div className="ml-3 h-7 flex items-center">
                                        <button
                                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={toggleCart}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {cart.map((product, index) => (
                                                <li key={index} className="py-6 flex">
                                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                        <img
                                                            src={product.product_image}
                                                            alt={product.product_name}
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex-1 flex flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">{product.product_name}</a>
                                                                </h3>
                                                                <p className="ml-4">${product.product_price}</p>
                                                            </div>
                                                            {/* <p className="mt-1 text-sm text-gray-500">{product.product_desc}</p> */}
                                                        </div>
                                                        <div className="flex-1 flex items-end justify-between text-sm">
                                                            <button
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                onClick={() => removeFromCart(product)}
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>
                                        ${cart.reduce((total, product) => {
                                            const price = parseFloat(product.product_price);
                                            // console.log(`Product: ${product.name}, Price: ${product.product_price}, Parsed Price: ${price}`);
                                            return total + price;
                                        }, 0).toFixed(2)}
                                    </p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                    <a
                                        href="/checkout"
                                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Checkout
                                    </a>
                                </div>
                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                    <p>
                                        or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500" onClick={toggleCart}>Continue Shopping</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSlideOver;
