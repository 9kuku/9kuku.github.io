/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ProductList from "../component/products/productsList";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllProductApi } from "../api/products";
import ProductContextWrapper from "../context/ProductsContext";
import ProductsList from "../component/products/productsList";

const Products = () => {
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
        <ProductsList />
      </ProductContextWrapper>
    </section>
  );
};
export default Products;