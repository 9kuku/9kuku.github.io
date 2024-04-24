import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
apiClient.interceptors.request.use((config) => {
  const Authorization = localStorage.getItem("authorization");

  if (Authorization && config.headers) {
    config.headers["authorization"] = `Bearer ${Authorization.trim()}`;
  }
  return config;
});