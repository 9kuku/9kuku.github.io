import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import productRegist from './css/ProductRegist.module.css';

const ProductRegistration = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const navigate = useNavigate();

  const handleProductRegisterSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      productName,
      productDescription,
      productPrice,
      productQuantity,
    };

    try {
      const response = await axios.post('/api/v1/sellers/products', productData, {
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `${localStorage.getItem('Authorization')}`,
        },
      }).then(() => {
        alert("상품 등록 성공");
      });
      navigate('/sellers');
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

  const OnReset = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductQuantity('');
  }

  return (
    <>
      <form className={productRegist.container} onSubmit={handleProductRegisterSubmit}>
        <div className={productRegist.inputContainer}>
          <span className={productRegist.label}>
            상품명
          </span>
          <input 
            type="text" 
            value={productName} 
            onChange={e => setProductName(e.target.value)}
            placeholder='상품 이름을 입력하세요' />
        </div>
        <div className={productRegist.inputContainer}>
          <span className={productRegist.label}>
            상품 설명
          </span>
          <textarea
            value={productDescription} 
            onChange={e => setProductDescription(e.target.value)}
            placeholder='상품 설명을 입력하세요' />
        </div>
        <div className={productRegist.inputContainer}>
          <span className={productRegist.label}>
            상품 가격
          </span>
          <input 
            type="number" 
            value={productPrice} 
            onChange={e => setProductPrice(e.target.value)}
            placeholder='상품 가격을 입력하세요' />
        </div>
        <div className={productRegist.inputContainer}>
          <span className={productRegist.label}>
            상품 수량
          </span>
          <input 
            type="number" 
            value={productQuantity} 
            onChange={e => setProductQuantity(e.target.value)}
            placeholder='상품 수량을 입력하세요' />
        </div>
        <div className={productRegist.buttonContainer}>
          <button className={productRegist.button} onClick={OnReset}>취소</button>
          <button className={productRegist.button} type="submit">저장</button>
        </div>
      </form>
    </>
  );
};

export default ProductRegistration;
