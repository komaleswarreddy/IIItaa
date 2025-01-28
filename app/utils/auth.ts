// Check if user is authenticated
export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  
  const token = localStorage.getItem('token');
  return !!token;
};

// Get user token
export const getToken = () => {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem('token');
};

// Remove token and user data (logout)
export const logout = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('token');
};

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: 'http://localhost:5000/api/auth/login',
  SIGNUP: 'http://localhost:5000/api/auth/signup',
};
