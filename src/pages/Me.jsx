import React, { useEffect, useState } from 'react';
import { getMeApi } from "../api/auth"; // Assuming you are using axios for http requests

const Me = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getMeApi();
        setUserInfo(res);
        console.log(res);
      } catch (err) {
        console.error("Error occurred:", err.message);
        setError(err.message); // 에러 메시지를 상태에 설정합니다.
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // 에러가 발생했을 때 에러 메시지를 출력합니다.
  }

  if (!userInfo) {
    return <div>Loading...</div>; // 데이터가 로딩 중일 때 로딩 메시지를 출력합니다.
  }

  return (
    <div>
      <h1>{userInfo.realName}</h1>
      <p>{userInfo.role}</p>
      <p>{userInfo.createdAt}</p>
    </div>
  );
};

export default Me;
