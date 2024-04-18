import React from 'react';

const CouponItem = ({ coupon }) => {
  return (
    <div>
      <h3>쿠폰 정보</h3>
      <p>만료일: {coupon.expirationDate}</p>
      <p>수량: {coupon.quantity}</p>
    </div>
  );
};

export default CouponItem;
