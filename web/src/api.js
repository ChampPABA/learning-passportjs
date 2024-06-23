import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8887",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginWithGoogle = () => {
  window.location.href = "http://localhost:8887/auth/google";
};

export const loginWithFacebook = () => {
  window.location.href = "http://localhost:8887/auth/facebook";
};

export default api;
