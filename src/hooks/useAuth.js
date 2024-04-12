import { useEffect } from "react";
import { useNavigate } from "react-router";

import { verifyTokenApi } from "../api/auth"; // 토큰을 검증하는 API 함수

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Authorization"); // 로컬 스토리지에서 토큰을 가져옵니다.
    if (!token) {
      navigate("/");
      return;
    }

    verifyTokenApi(token) // 토큰을 검증하는 API 요청을 보냅니다.
      .then((res) => {

        if (res.isValid) { // 토큰이 유효하면 /products로 이동합니다.
          // navigate("/products");
        } else { // 토큰이 유효하지 않으면 로그인 페이지로 이동합니다.
          // navigate("/");
        }
      })
      .catch((err) => { // API 요청 중 에러가 발생하면 로그인 페이지로 이동합니다.
        // navigate("/");
      });
  }, []);

  return;
};

export default useAuth;