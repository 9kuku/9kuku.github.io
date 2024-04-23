import { apiClient } from "./client";


export const loginApi = async (email, password) => {
  return apiClient.post("/api/v1/auth/login", { email, password });
};



export const signUpApi = async (realName, email, password) => {
  return apiClient.post("/api/v1/users/signup", { realName,email, password });
};
export const getMeApi = async () => {
  try {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      throw new Error('Authorization token is not available');
    }

    const response = await apiClient.get("/api/v1/users/me", {
      headers: {
        'Authorization': `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    throw error;
  }
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
