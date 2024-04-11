import { apiClient } from "./client";

export const loginApi = async (username, password) => {
  return apiClient.post("/api/v1/auth/login", { username, password });
};

export const signUpApi = async (realName, username, password) => {
  return apiClient.post("/api/v1/users/signup", { realName,username, password });
};
