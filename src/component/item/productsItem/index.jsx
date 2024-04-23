import axios from "axios";
import { productItemStyle, productItemNameStyle, productItemPriceStyle } from "./style";

const ProductsItem = ({ product }) => {
  const handleBuyClick = async () => {
    const order = {
      products: [
        {
          productId: product.productId,
          quantity: 1 // 수량은 원하는대로 설정하세요.
        }
      ],
      address: "경기도 안산시 상록구 사동" // 주소는 원하는대로 설정하세요.
    };

    try {
      const response = await axios.post("https://9oods.store/api/v1/orders", order, {
        headers: {
          "Authorization": `${localStorage.getItem("Authorization")}`
        },
      });
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <div css={productItemStyle}>
      <h2 css={productItemNameStyle}>{product.productId}</h2>
      <h2 css={productItemNameStyle}>{product.productName}</h2>
      <p css={productItemPriceStyle}>{product.productPrice}</p>
      <button onClick={handleBuyClick}>구매하기</button>
    </div>
  );
};

export default ProductsItem;