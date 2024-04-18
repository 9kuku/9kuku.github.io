import { apiClient } from "./client";

export const getCouponApi = async (couponId) => {
  return apiClient.get(`/api/v1/coupons/${couponId}`);
};

export const issueCouponApi = async (couponId) => {
  return apiClient.patch('/api/v1/coupons/${couponId}/issued-coupons');
};