/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from "react";
import { dispatchProductContext, productsContext } from "../../../context/ProductsContext";
import { productWrapper } from "./style";
import { getAllProductApi } from "../../../api/products";
import ProductItem from "../../item/productsItem";

const itemList = () => {
  const productData = useContext(productsContext);
  const dispatch = useContext(dispatchProductContext);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0); // totalPages 값을 상태로 관리

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllProductApi(page); // page 상태 값을 인자로 전달
        dispatch({ type: "INIT", initProducts: res.data.content });
        console.log(res.data)
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [page]);

  return (
    <div>
      <article css={productWrapper}>
        {Array.isArray(productData) && productData.map((product) => (
          <ProductItem key={product.productId} product={product} />
        ))}
      </article>
      {page > 0 && <button onClick={() => setPage(prevPage => prevPage - 1)}>이전 페이지</button>}
      {page < totalPages - 1 && <button onClick={() => setPage(prevPage => prevPage + 1)}>다음 페이지</button>}
    </div>
  );
};

export default itemList;