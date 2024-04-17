/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllProductApi } from "../api/products";
import { Route, Routes } from "react-router-dom";

//셀러등록 회원조회 비밀번호 수정
const Users = () => {
  function handleRegiSellerClick() {
    navigate("/regiseller");
  }

  function handleMyInfoClick() {
    navigate("/myinfo");
  }

  function handleUpdatePasswordClick() {
    navigate("/updatepassword");
  }

  return (
    <>
      {/*<Routes basename={process.env.PUBLIC_URL}"/users">*/}
      {/*  <Route path="/" element={<Users />} />*/}
      {/*  <Route path="/regiseller" element={<RegiSeller />} />*/}
      {/*  <Route path="/myinfo" element={<MyInfo />} />*/}
      {/*  <Route path="/updatepassword" element={<UpdatePassword />} />*/}
      {/*</Routes>*/}
      {/*<div onClick={handleRegiSellerClick} style={{ cursor: "pointer" }}> 셀러등록 </div>*/}
      {/*<div onClick={handleMyInfoClick} style={{ cursor: "pointer" }}> 내 정보 </div>;*/}
      {/*<div onClick={handleUpdatePasswordClick} style={{ cursor: "pointer" }}> 비밀번호 수정 </div>;*/}
    </>

  );
};
export default Users;