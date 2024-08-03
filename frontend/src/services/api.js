import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
});

export const getProducts = async (categoryId) => {
    try {
        const response = await api.get('/', { params: { categoryId } });
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};