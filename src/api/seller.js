import { apiClient } from "./client";

export const getSoldProductSumPriceApi = async (startDate, endDate) => {
    try {
        const token = localStorage.getItem('Authorization');
        if (!token) {
          throw new Error('Authorization token is not available');
        }
        const response = await apiClient.get(`/api/v1/sellers/products/sold/price?startDate=${startDate}&endDate=${endDate}`, {
            headers: {
                'Authorization': `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error : ", error);
    }
}

export const getSoldProductQuantityTopTenApi = async (startDate, endDate) => {
    try {
        const token = localStorage.getItem('Authorization');
        if (!token) {
          throw new Error('Authorization token is not available');
        }
        const response = await apiClient.get(`/api/v1/sellers/products/sold/topten?startDate=${startDate}&endDate=${endDate}`, {
            headers: {
                'Authorization': `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error : ", error);
    }
}