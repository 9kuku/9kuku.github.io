/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ProductList from "../component/product/productList";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllProductApi } from "../api/product";
import ProductContextWrapper from "../context/ProductContext";

const Product = () => {
  useAuth();

  const [productData, setProductData] = useState();

  useEffect(() => {
    const getData = () => {
      getAllProductApi()
        .then((res) => {
          setProductData(res.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getData();
  }, []);

  return (
    <section css={mainContainer}>
      <ProductContextWrapper>
        <ProductList />
      </ProductContextWrapper>
    </section>
  );
};
export default Product;