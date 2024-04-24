/** @jsxImportSource @emotion/react */
import { mainContainer } from "../shared/globalStyle";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  function handleAllProductClick() {
    navigate("/orders/allorders");
  }
  function handleSellerProductClick() {
    navigate("/sellerproducts");
  }
  return (
    <>
      <section css={mainContainer}>
        <div onClick={handleAllProductClick} style={{ cursor: "pointer", color: "white"}}>주문 조회</div>
        <div onClick={handleSellerProductClick} style={{ cursor: "pointer", color: "white"}}>주문 취소</div>
      </section>
    </>
  );
};
export default Products;