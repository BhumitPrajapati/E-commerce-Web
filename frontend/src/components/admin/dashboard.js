import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../services/api';
import AddProduct from './addProduct';
import UpdateProductModal from './updateProduct';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      let data = await getProducts();
      data = data.data[0];
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="justify-center p-4">
      <div className="flex justify-center p-4">
        <button onClick={toggleAddModal} className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md">
          Add Product
        </button>
      </div>
      <div className="flex justify-center p-4">
        <ul role="list" className="divide-y divide-gray-100 max-w-3xl w-full">
          {products.map((product) => (
            <li key={product.product_id} className="flex justify-between gap-x-6 py-5">
              <img alt="" src={product.product_image} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{product.product_name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.product_desc}</p>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{product.product_price}</p>
              </div>
              <button
                onClick={() => toggleEditModal(product)}
                className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.product_id)}
                className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <AddProduct isOpen={isAddModalOpen} onClose={toggleAddModal} fetchProducts={fetchProducts} />
      {selectedProduct && (
        <UpdateProductModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={selectedProduct}
          fetchProducts={fetchProducts}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
