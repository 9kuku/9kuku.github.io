import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
apiClient.interceptors.request.use((config) => {
  const Authorization = localStorage.getItem("Authorization");

  if (Authorization && config.headers) {
    console.log("Authorization : " + Authorization);
    console.log("config.headers : " + config.headers);
  }

  if (Authorization && config.headers) {
    config.headers["authorization"] = `Bearer ${Authorization.trim()}`;
    console.log("config.headers[authorization] : " + config.headers["authorization"]);
  }
  return config;
});
