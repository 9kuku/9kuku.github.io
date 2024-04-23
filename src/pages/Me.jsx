import React, { useEffect, useState } from 'react';
import { getMeApi } from "../api/auth"; // Assuming you are using axios for http requests

const Me = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getData = () => {
      getMeApi()
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getData();
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userInfo.realName}</h1>
      <p>{userInfo.role}</p>
      {/* Render other user info as needed */}
    </div>
  );
};

export default Me;