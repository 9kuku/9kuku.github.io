import { apiClient } from "./client"

export const createProductApi = async (productName, productDescription, productPrice, productQuantity) => {
    return apiClient.post(
        '/api/v1/sellers/products',
        {productName, productDescription, productPrice, productQuantity});
}