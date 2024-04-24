import { apiClient } from "./client";

export const getAllOrderApi = async (page = 0, size = 5) => {
  return apiClient.get(`/api/v1/orders?page=${page}&size=${size}`, {
    headers: {
      Authorization: `${localStorage.getItem("Authorization")}`,
    },
  });
}
