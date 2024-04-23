import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      kakaoLogin();
    }
  }, [code, navigate]);

  const kakaoLogin = async () => {
    try {
      const response = await axios.get(`https://9oods.store/api/v1/auth/kakao/callback?code=${code}`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      console.log(response);

      localStorage.setItem("Authorization", response.headers['authorization']);

      navigate("/main");
    } catch (error) {
      console.error("로그인 에러:", error);

      alert("로그인 중 오류가 발생했습니다. 재 시도 또는다른 방식의 로그인으로 접속해주세요.");

      navigate("/")
      // 에러 처리를 원하는 방식으로 추가하세요.
    }
  };


  return (
    <div className="LoginHandler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandler;
