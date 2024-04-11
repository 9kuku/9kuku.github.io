import { apiClient } from "./client";

export const getAllProductApi = async () => {
  return apiClient.get("/api/v1/products");
};
