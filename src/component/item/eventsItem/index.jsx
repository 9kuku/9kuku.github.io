import { eventItemStyle, eventItemNameStyle } from "./style";
import CouponItem from "../couponItem";
import EventProductItem from "../EventCouponItem";

const EventsItem = ({ event }) => {
  return (
    <div css={eventItemStyle}>
      <h2 css={eventItemNameStyle}>{event.title}</h2>
      <h2 css={eventItemNameStyle}>{event.content}</h2>
      <h2 css={eventItemNameStyle}>{event.openAt}</h2>
      <CouponItem coupon={event.coupon} />
      {event.eventProducts.map((product, index) => (
        <EventProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default EventsItem;
