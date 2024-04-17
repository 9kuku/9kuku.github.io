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
    navigate("/events/allEvents");
  }

  return (
    <>
      <section css={mainContainer}>
        <div onClick={handleAllProductClick} style={{ cursor: "pointer", color: "white"}}>이벤트 전체 조회</div>
      </section>
    </>
  );
};
export default Products;