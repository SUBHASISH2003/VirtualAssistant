import axios from 'axios';

const asiosInstance = axios.create({
    baseURL:"https://virtualassistant-9qd7.onrender.com",
    withCredentials: true,
})

export default asiosInstance;