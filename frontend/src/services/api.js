import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
});

export const getProducts = async () => {
    try {
        const response = await api.get('/getProduct');
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
};

// export default api;