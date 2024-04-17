import { apiClient } from "./client";

export const getAllProductApi = async (page = 0) => {
  return apiClient.get(`/api/v1/products?page=${page}`);
};
export const getSellersProductApi = async (brandName, page = 0) => {
  return apiClient.get(`/api/v1/sellers/${brandName}/products?page=${page}`);
}
