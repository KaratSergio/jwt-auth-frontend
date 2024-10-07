import axios from 'axios';
import { AuthResponse } from '../service/types';

export const API_URL = 'http://localhost:5000/api';

const api = axios.create({ withCredentials: true, baseURL: API_URL });

api.interceptors.request.use((config) => {
  // Check for the presence of a token in localStorage
  const token = localStorage.getItem('token');
  if (token) {
    // If the token exists, add it to the Authorization header
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if this is an authorization error (401) and the request was not to /login or /register
    if (error.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      // Check if there is a token in localStorage (to avoid looping for unauthorized users)
      const token = localStorage.getItem('token');
      if (
        token &&
        originalRequest.url !== '/login' &&
        originalRequest.url !== '/register' &&
        originalRequest.url !== '/refresh'
      ) {
        try {
          // Attempt to refresh the token
          const response = await api.get<AuthResponse>('/refresh');
          localStorage.setItem('token', response.data.userData.accessToken);

          // Update the headers and retry the request
          originalRequest.headers.Authorization = `Bearer ${response.data.userData.accessToken}`;
          return api.request(originalRequest);
        } catch (err) {
          console.log('Token refresh error:', err);
        }
      }
    }

    throw error;
  }
);

export default api;
