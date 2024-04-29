import axios from "axios";
import { useState, useEffect } from "react";
import { productItemStyle, productItemNameStyle, productItemPriceStyle } from "./style";
import Modal from 'react-modal';
import { apiClient } from "../../../api/client";

Modal.setAppElement('#root');
const ProductsItem = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [productDetail, setProductDetail] = useState(null); // 상품 상세 정보를 저장할 상태

  useEffect(() => {
    if (modalIsOpen) {
      // 모달이 열릴 때 상품의 상세 정보를 가져옵니다.
      const fetchProductDetail = async () => {
        const response = await apiClient.get(`api/v1/sellers/${product.domainName}/products/${product.productId}`);
        setProductDetail(response.data);
      };

      fetchProductDetail();
    }
  }, [modalIsOpen]);

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
      const response = await apiClient.post("/api/v1/orders", order, {
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
        {productDetail && (
          <>
            <h2>{productDetail.productName}</h2>
            <p>{productDetail.productPrice}</p>
            <p>{productDetail.productDescription}</p>
            <a>수량 </a>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="수량" />
            <br />
            <a>주소 </a>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="주소" />
            <br />
            <button onClick={handleBuyClick}>주문하기</button>
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProductsItem;