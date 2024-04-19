/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ProductList from "../component/itemList/products";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllProductApi } from "../api/products";
import ProductContextWrapper from "../context/ProductsContext";
import ProductsList from "../component/itemList/products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  function handleSellerRegisterClick() {
    navigate("/users/seller-application");
  }
  function handleSellerProductClick() {
    navigate("/sellerproducts");
  }
  return (
    <>
      <section css={mainContainer}>
        <div onClick={handleSellerRegisterClick} style={{ cursor: "pointer", color: "white" }}>셀러등록</div>
        <div onClick={handleSellerProductClick} style={{ cursor: "pointer", color: "white" }}>회원조회</div>
        <div onClick={handleSellerProductClick} style={{ cursor: "pointer", color: "white" }}>비밀번호수정</div>
      </section>
    </>
  );
};
export default Products;