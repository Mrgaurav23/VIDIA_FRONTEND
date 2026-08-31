import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://backend-t39j.onrender.com/api/v1',
  withCredentials: true,
});

console.log(api)

export default api;
