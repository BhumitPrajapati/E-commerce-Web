import React, { useState } from 'react';
import { updateProduct } from '../../services/api';

const UpdateProductModal = ({ isOpen, onClose, product, fetchProducts }) => {
    const [name, setName] = useState(product.product_name);
    const [price, setPrice] = useState(product.product_price);
    const [description, setDesc] = useState(product.product_desc);

    const handleUpdate = async () => {
        const updatedFields = {};

        if (name !== product.product_name) {
            updatedFields.product_name = name
        } else {
            updatedFields.product_name = product.product_name
        }

        if (price !== product.product_price) {
            updatedFields.product_price = price
        } else {
            updatedFields.product_price = product.product_price
        }

        if (description !== product.product_desc) {
            updatedFields.product_desc = description
        } else {
            updatedFields.product_desc = product.product_desc
        }
        // console.log(`updatedFields: ${updatedFields}`);

        try {
            await updateProduct(product.product_id, updatedFields);
            // console.log(product.product_id, updatedFields);
            fetchProducts();
            onClose();
        } catch (error) {
            throw error;
            // console.log('Error updating product:', error);
        }
    };

    return isOpen ? (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
                <input
                    type="text"
                    className="w-full p-2 border mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                />
                <input
                    type="text"
                    className="w-full p-2 border mb-2"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Product Price"
                />
                <textarea
                    className="w-full p-2 border mb-2"
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Product Description"
                />
                <button
                    onClick={handleUpdate}
                    className="w-full p-2 bg-green-500 text-white rounded-md"
                >
                    Update
                </button>
                <button
                    onClick={onClose}
                    className="w-full p-2 bg-gray-500 text-white rounded-md mt-2"
                >
                    Cancel
                </button>
            </div>
        </div>
    ) : null;
};

export default UpdateProductModal;
