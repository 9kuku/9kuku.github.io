import { apiClient } from "./client";

export const getAllEventsApi = async (page = 0, size = 10) => {
  return apiClient.get(`/api/v1/events?page=${page}&size=${size}`);
};