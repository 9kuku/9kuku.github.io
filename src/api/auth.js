import { apiClient } from "./client";

export const loginApi = async (username, password) => {
  return apiClient.post("/api/v1/auth/login", { username, password });
};

export const signUpApi = async (realName, username, password) => {
  return apiClient.post("/api/v1/users/signup", { realName,username, password });
};
export const verifyTokenApi = (token) => {
  // Your code to verify the token goes here.
  // This is just a placeholder and will not actually verify a token.
  return new Promise((resolve, reject) => {
    if (token === "validToken") {
      resolve({ isValid: true });
    } else {
      reject({ isValid: false });
    }
  });
};
