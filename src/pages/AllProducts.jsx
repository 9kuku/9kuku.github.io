/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import ProductContextWrapper from "../context/ProductsContext";
import ProductsList from "../component/itemList/products";
import { getAllEventsApi } from "../api/events";
import EventContextWrapper from "../context/EventsContext";
import { getAllProductApi } from "../api/products";

const AllProducts = () => {
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
export default AllProducts;