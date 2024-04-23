import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import productRegist from './css/productRegist.module.css';

const ProductRegistration = () => {
  const [sellerId, setSellerId] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const navigate = useNavigate();

  // 로그인한 사용자의 엑세스 토큰을 사용하여 sellerId를 가져옵니다.
  useEffect(() => {
    const fetchSellerId = async () => {
      try {
        const response = await axios.get('/api/v1/sellers/seller-check', {
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': `${localStorage.getItem('Authorization')}`,
          },
        });
        setSellerId(response.data.sellerId);
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

    fetchSellerId();
  }, []);

  const handleProductRegisterSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      sellerId,
      productName,
      productDescription,
      productPrice,
      productQuantity,
    };

    try {
      const response = await axios.post('/api/v1/sellers/products', productData, {
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
        <button className={productRegist.button} type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

export default ProductRegistration;
