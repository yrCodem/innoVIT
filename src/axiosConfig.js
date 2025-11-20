import axios from 'axios';

// Create a new axios instance with your configuration
const axiosConfig = axios.create({
  baseURL: import.meta.env.MODE === 'development'
    ? 'http://localhost:5000'
    : 'https://innovit-backend.onrender.com',
  withCredentials: false,
});

// Add interceptors to your instance
axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export the configured instance
export { axiosConfig };


// import axios from 'axios';

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Also, we don't need withCredentials anymore
// axios.defaults.withCredentials = false;
