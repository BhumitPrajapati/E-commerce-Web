import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import AddProduct from './addProduct';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="justify-center p-4">
      <button onClick={toggleModal} className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md">
        Add Product
      </button>
      <div className="flex justify-center p-4">
        <ul role="list" className="divide-y divide-gray-100 max-w-3xl w-full">
          {products.map((product) => (
            <li key={product.product_desc} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={product.product_image} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{product.product_name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.product_desc}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{product.product_price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AddProduct isOpen={isModalOpen} onClose={toggleModal} fetchProducts={fetchProducts} />
    </div>
  );
};

export default AdminDashboard;
