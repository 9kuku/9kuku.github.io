/** @jsxImportSource @emotion/react */
import { mainContainer } from "../shared/globalStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [brandName, setBrandName] = useState('');
  function handleAllProductClick() {
    navigate("/products/allProducts");
  }
  function handleSellerProductClick() {
    navigate("/products/sellersproducts", { state: { brandName } });
  }
  function handleBrandNameChange(event) {
    setBrandName(event.target.value);
  }
  return (
    <>
      <section css={mainContainer}>
        <div onClick={handleAllProductClick} style={{ cursor: "pointer", color: "white" }}>상품 전체 조회</div>
<br/><br/>
        <input type="text" value={brandName} onChange={handleBrandNameChange} placeholder="Brand Name" />
        <div onClick={handleSellerProductClick} style={{ cursor: "pointer", color: "white" }}>상품 셀러별 조회</div>
      </section>
    </>
  );
};
export default Products;