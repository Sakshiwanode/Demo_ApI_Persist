import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',  // Fake API for demonstration
  timeout: 5000,
});

export default axiosInstance;
