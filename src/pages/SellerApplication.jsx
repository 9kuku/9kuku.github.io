import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiClient } from "../api/client";

const SellerApplication = () => {
  const [brandName, setBrandName] = useState('');
  const [domainName, setDomainName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSellerApplicationSubmit = async (event) => {
    event.preventDefault();

    const sellerData = {
      brandName,
      domainName,
      introduce,
      email,
      phoneNumber,
    };

    try {
      const response = await apiClient.post('/api/v1/users/seller-application', sellerData, {
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `${localStorage.getItem('Authorization')}`,
        },
      });
      alert("셀러등록이 정상적으로 완료 되었습니다. 재로그인 해주세요.");
      navigate('/');
      localStorage.removeItem('Authorization');
    } catch (error) {
      if (error.response) {
        // 서버에서 ApiException을 통해 에러 메시지를 전달한 경우
        console.error(`Error! HTTP Status: ${error.response.status}, Message: ${error.response.data.message}`);
        alert(error.response.data.message);
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
    <form onSubmit={handleSellerApplicationSubmit}>
      <p style={{ color: "white" }}>소문자 대문자 숫자 및 한글 또는 '_' 을 이용하여 브랜드 이름을 입력해주세요. </p>
      <label style={{ color: "white" }}>
        Brand Name:
        <input type="text" value={brandName} onChange={e => setBrandName(e.target.value)} />
      </label>
      <br />
      <p style={{ color: "white" }}>도메인 이름은 소문자로 3자이상 12자 이하로 입력해주세요. </p>
      <br />
      <label style={{ color: "white" }}>
        Domain Name:
        <textarea value={domainName} onChange={e => setDomainName(e.target.value)} />
      </label>
      <br />
      <p style={{ color: "white" }}>브랜드 소개글을 10자 이상 200자 이하로 적어주세요. </p>
      <br />
      <label style={{ color: "white" }}>
        Introduce:
        <textarea value={introduce} onChange={e => setIntroduce(e.target.value)} />
      </label>
      <br />
      <p style={{ color: "white" }}>판매자 문의용 이메일을 입력해주세요. </p>
      <br />
      <label style={{ color: "white" }}>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <p style={{ color: "white" }}>-없이 판매자 연락용 전화번호를 입력해주세요. </p>
      <br />
      <label style={{ color: "white" }}>
        PhoneNumber:
        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SellerApplication;
