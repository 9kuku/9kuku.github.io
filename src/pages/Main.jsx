/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/products");
  };

  const handleEventClick = () => {
    navigate("/events");
  };
  const handleUserClick = () => {
    navigate("/users");
  };

  function handleSellerClick() {
    navigate("/sellers");
  }

  function handleOrderClick() {
    navigate("/orders");
  }

  function handleCouponClick() {
    navigate("/coupons");
  }

  return (
    <>
      <div onClick={handleUserClick} style={{ cursor: "pointer", color: "white"}}> 회원</div>
      <div onClick={handleSellerClick} style={{ cursor: "pointer", color: "white"}}> 셀러</div>
      <div onClick={handleOrderClick} style={{ cursor: "pointer", color: "white"}}> 주문</div>
      <div onClick={handleEventClick} style={{ cursor: "pointer", color: "white"}}> 이벤트</div>
      <div onClick={handleCouponClick} style={{ cursor: "pointer", color: "white"}}> 쿠폰</div>
      <div onClick={handleProductClick} style={{ cursor: "pointer", color: "white"}}> 상품</div>
    </>
  );
};
export default Main;