import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.VITE_API_URL1 ||'http://localhost:3000', 
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;