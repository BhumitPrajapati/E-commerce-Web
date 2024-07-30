import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
});

// export const getProducts = async () => {
//     try {
//         const response = await api.get('/getProduct');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching products: ', error);
//         throw error;
//     }
// };

export const getProducts = async () => {
    try {
        const response = await api.get('/getProduct');
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
    // const response = await api.get('/products');
    // return response.data;
};

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/getProduct/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by id: ', error);
        throw error;
    }
    // const response = await api.get(`/products/${id}`);
    // return response.data;
};

export const getCategories = async () => {
    try {
        const response = await api.get('/products/getCategory');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories: ', error);
        throw error;
    }
    // const response = await api.get('/products/categories');
    // return response.data;
};

// export default api;