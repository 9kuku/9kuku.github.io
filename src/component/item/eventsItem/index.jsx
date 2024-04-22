import { eventItemStyle, eventItemNameStyle } from "./style";
import CouponItem from "../couponItem";
import EventProductItem from "../EventCouponItem";
import axios from 'axios';
import React from 'react';

const EventsItem = ({ event }) => {
  const issueCoupon = async () => {
    try {
      const response = await axios.patch(`https://9oods.store/api/v1/coupons/${event.coupon.couponId}/issued-coupons`,null , {
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `${localStorage.getItem('Authorization')}`,
        },
      });
      console.log(response.data);
      alert('쿠폰이 성공적으로 발급되었습니다.');
    } catch (error) {
      console.error(error);
      alert('쿠폰 발급에 실패하였습니다.');
    }
  };

  return (
    <div css={eventItemStyle}>
      <h2 css={eventItemNameStyle}>{event.title}</h2>
      <h2 css={eventItemNameStyle}>{event.content}</h2>
      <h2 css={eventItemNameStyle}>{event.openAt}</h2>
      <CouponItem coupon={event.coupon} />
      <button onClick={issueCoupon}>쿠폰 발급</button>
      {event.eventProducts.map((product, index) => (
        <EventProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default EventsItem;
