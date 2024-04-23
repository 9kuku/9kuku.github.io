/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ProductList from "../component/itemList/products";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllProductApi } from "../api/products";
import ProductContextWrapper from "../context/ProductsContext";
import ProductsList from "../component/itemList/products";
import { useNavigate } from "react-router-dom";
import seller from "./css/seller.module.css";

const Products = () => {
  const navigate = useNavigate();
  function handleProductRegisterClick() {
    navigate("/seller/product-regist");
  }
  function handleProductUpdateClick() {
    navigate("/seller/product-update");
  }
  function handleProductStatisticsClick() {
    navigate("/seller/product-statistics")
  }
  function handleProductSearchClick() {
    navigate("seller/product-search")
  }
  return (
    <>
    <div className={seller.container}>
      <div className={seller.create} onClick={handleProductRegisterClick} >
        <span className={seller.label}>상품등록</span>
      </div>
      <div className={seller.update} onClick={handleProductUpdateClick} >
        <span className={seller.label}>상품수정</span>
      </div>
            <div className={seller.statistics} onClick={handleProductStatisticsClick} >상품통계</div>
            <div className={seller.search} onClick={handleProductSearchClick}>상품 검색</div>
    </div>
    </>
  );
};
export default Products;