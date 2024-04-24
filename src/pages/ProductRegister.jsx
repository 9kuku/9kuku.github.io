import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from "../api/client";

const ProductRegistration = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(''); // Changed to string
  const [productQuantity, setProductQuantity] = useState(''); // Changed to string
  const navigate = useNavigate();

  const handleProductRegisterSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      productName,
      productDescription,
      productPrice: parseFloat(productPrice), // Convert to number
      productQuantity: parseInt(productQuantity), // Convert to number
    };

    try {
      const response = await apiClient.post('/api/v1/sellers/products', productData, {
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `${localStorage.getItem('Authorization')}`,
        },
      });
      console.log(response.data);
      navigate('/products/allProducts');
    } catch (error) {
      if (error.response) {
        // 서버에서 ApiException을 통해 에러 메시지를 전달한 경우
        console.error(`Error! HTTP Status: ${error.response.status}, Message: ${error.response.data.message}`);
      } else if (error.request) {
        // 요청이 서버에 도달했지만, 응답을 받지 못한 경우
        console.error('No response was received', error.request);
      } else {
        // 요청을 생성하는 중에 에러가 발생한 경우
        console.error('Error', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleProductRegisterSubmit}>
      <label style={{ color: "white" }}>
        Product Name:
        <input type="text" value={productName} onChange={e => setProductName(e.target.value)} />
      </label>
      <br />
      <br />
      <label style={{ color: "white" }}>
        Product Description:
        <textarea value={productDescription} onChange={e => setProductDescription(e.target.value)} />
      </label>
      <br />
      <br />
      <label style={{ color: "white" }}>
        Product Price:
        <input type="text" value={productPrice} onChange={e => setProductPrice(e.target.value)} /> {/* Changed to text input */}
      </label>
      <br />
      <br />
      <label style={{ color: "white" }}>
        Product Quantity:
        <input type="text" value={productQuantity} onChange={e => setProductQuantity(e.target.value)} /> {/* Changed to text input */}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductRegistration;