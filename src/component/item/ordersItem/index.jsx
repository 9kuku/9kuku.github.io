import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <div>
      <h2>{order.orderId}</h2>
      <p>{order.address}</p>
      <p>{order.orderStatus}</p>
      <p>{order.orderDate}</p>
      {order.products.map((product, index) => (
        <div key={index}>
          <h3>{product.productName}</h3>
          <p>{product.productPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderItem; // default로 내보내기
