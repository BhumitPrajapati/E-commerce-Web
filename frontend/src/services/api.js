import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
});

export const getProducts = async (categoryId, productId) => {
    try {

        // if (categoryId) {
        //     url += `?categoryId=${categoryId}`;
        // } else if (productId) {
        //     url += `?productId=${productId}`;
        // }
        // return await axios.get(url);
        let finalData
        if (categoryId) {
            finalData = await api.get('/', { params: { categoryId } });
        } else if (productId) {
            finalData = await api.get('/', { params: { productId } });
        }
        else {
            finalData = await api.get('/');
        }
        console.log('Response from getProducts: ', finalData.data);


        // const response = await api.get('/', { params: { categoryId } });
        // console.log('Response from getProducts: ', response.data);

        return finalData.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};

export const adminLogin = async (username, password) => {
    try {
        console.log(username, password);
        const response = await api.post('/login', { username, password });
        console.log('Response from adminLogin: ', response.data);
        localStorage.setItem('authToken', response.data.token);
        window.location.href = '/admin-dashboard';
        // return response.data;
    } catch (error) {
        console.log('Error logging in: ', error);
        throw error;
    }
}