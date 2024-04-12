/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from "react";
import { dispatchProductContext, productsContext } from "../../../context/ProductsContext";
import { productWrapper } from "./style";
import { getAllProductApi } from "../../../api/products";
import ProductItem from "../productsItem";

const ProductsList = () => {
  const productData = useContext(productsContext);
  const dispatch = useContext(dispatchProductContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllProductApi();
        dispatch({ type: "INIT", initProducts: res.data });
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <article css={productWrapper}>
      {productData?.map((product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </article>
  );
};

export default ProductsList;