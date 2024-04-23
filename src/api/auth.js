import { apiClient } from "./client";


export const loginApi = async (email, password) => {
  return apiClient.post("/api/v1/auth/login", { email, password });
};



export const signUpApi = async (realName, email, password) => {
  return apiClient.post("/api/v1/users/signup", { realName,email, password });
};
export const getMeApi = async () => {
  return apiClient.get("/api/v1/users/me", {
    headers: {
      'Authorization': `${localStorage.getItem('Authorization')}`,
    },
  });
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
