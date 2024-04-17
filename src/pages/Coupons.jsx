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
  function handleAllProductClick() {
    navigate("/products/allProducts");
  }
  function handleSellerProductClick() {
    navigate("/sellerproducts");
  }
  return (
    <>
      <section css={mainContainer}>
        <div>쿠폰은 어떤게 들어가야 할지 모르곘네요</div>
      </section>
    </>
  );
};
export default Products;