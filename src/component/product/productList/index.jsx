/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from "react";
import { dispatchProductContext, productContext } from "../../../context/ProductContext";
import { productWrapper } from "./style";
import { getAllProductApi } from "../../../api/product";
import ProductItem from "../productItem";

const ProductList = () => {
  const productData = useContext(productContext);
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
        <ProductItem key={product.id} product={product} />
      ))}
    </article>
  );
};

export default ProductList;