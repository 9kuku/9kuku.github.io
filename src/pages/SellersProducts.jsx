/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import ProductContextWrapper from "../context/ProductsContext";
import ProductsList from "../component/itemList/products";
import { getAllProductApi, getSellersProductApi } from "../api/products";
import { useLocation } from "react-router-dom"; // Added this line

const SellersProducts = () => {
  useAuth();
  const location = useLocation();
  const brandName = location.state.brandName;

  const [productData, setProductData] = useState();

  useEffect(() => {
    const getData = () => {
      getSellersProductApi(brandName)
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
          <ProductsList fetchProducts={() => getSellersProductApi(brandName)} productData={productData} />
        </section>
      </ProductContextWrapper>
    </>
  );
};
export default SellersProducts;