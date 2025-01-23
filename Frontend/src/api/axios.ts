import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-beta-lake-45.vercel.app//api',
    withCredentials: true,
});
export default api;
