import axios from "axios";
import { useState } from "react";
import { productItemStyle, productItemNameStyle, productItemPriceStyle } from "./style";
import Modal from 'react-modal';

Modal.setAppElement('#root');
const ProductsItem = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");

  const handleBuyClick = async () => {
    const order = {
      products: [
        {
          productId: product.productId,
          quantity: quantity
        }
      ],
      address: address
    };

    try {
      const response = await axios.post("/api/v1/orders", order, {
        headers: {
          "Authorization": `${localStorage.getItem("Authorization")}`
        },
      });
      setModalIsOpen(false);
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <div css={productItemStyle}>
      <h2 css={productItemNameStyle}>{product.productId}</h2>
      <h2 css={productItemNameStyle}>{product.productName}</h2>
      <p css={productItemPriceStyle}>{product.productPrice}</p>
      <button onClick={() => setModalIsOpen(true)}>구매하기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>{product.productName}</h2>
        <p>{product.productPrice}</p>
        <a>수량  </a>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="수량" />
        <br />
        <a>주소  </a>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="주소" />
        <br />
        <button onClick={handleBuyClick}>주문하기</button>
        <button onClick={() => setModalIsOpen(false)}>닫기</button>
      </Modal>
    </div>
  );
};

export default ProductsItem;