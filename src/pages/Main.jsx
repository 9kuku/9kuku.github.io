/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/products");
  };

  const handleEventClick = () => {
    navigate("/event");
  };

  return (
    <>
      <div> 메인 </div>
      <div onClick={handleProductClick} style={{cursor: 'pointer'}}> 상품 </div>
      <div> 주문 </div>
      <div onClick={handleEventClick} style={{cursor: 'pointer'}}> 이벤트 </div>
    </>
  );
};
export default Main;