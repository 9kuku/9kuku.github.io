/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ProductList from "../component/itemList/products";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllProductApi } from "../api/products";
import ProductContextWrapper from "../context/ProductsContext";
import ProductsList from "../component/itemList/products";

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
    <>
      <ProductContextWrapper>
        <section css={mainContainer}>
          <ProductsList productData={productData} />
        </section>
      </ProductContextWrapper>
    </>
  );
};
export default Products;