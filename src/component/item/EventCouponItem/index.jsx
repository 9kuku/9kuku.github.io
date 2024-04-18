import React from 'react';

const EventProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.productName}</h3>
      <p>{product.productDescription}</p>
      <p>가격: {product.productPrice}</p>
      <p>브랜드: {product.brandName}</p>
    </div>
  );
};

export default EventProductItem;
