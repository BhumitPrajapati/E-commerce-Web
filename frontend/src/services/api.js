import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
});

export const getProducts = async (categoryId, productId) => {
    try {
        let finalData
        if (categoryId) {
            finalData = await api.get('/', { params: { categoryId } });
        } else if (productId) {
            finalData = await api.get('/', { params: { productId } });
        }
        else {
            finalData = await api.get('/');
        }
        return finalData.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};

export const adminLogin = async (username, password) => {
    try {
        const response = await api.post('/login', { username, password });
        localStorage.setItem('authToken', response.data.token);
        window.location.href = '/admin-dashboard';
    } catch (error) {
        console.log('Error logging in: ', error);
        throw error;
    }
}

export const addProduct = async (formData) => {
    try {
        const response = await api.post('/upload', formData);
        return response.data;
    } catch (error) {
        console.log('Error adding product: ', error);
        throw error;
    }
};

export const updateProduct = async (id, formData) => {
    try {
        const response = await api.put(`/updateProduct/${id}`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteProduct = async (id, inputData) => {
    try {
        const response = await api.delete(`/deleteProduct/${id}`, inputData);
        return response.data;
    } catch (error) {
        console.log('Error Deleting product: ', error);
        throw error;
    }
};
