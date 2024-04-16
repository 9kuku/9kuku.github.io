import {
  eventItemStyle,
  eventItemNameStyle
} from "./style";

const EventsItem = ({ event }) => {
  return (
    <div css={eventItemStyle}>
      <h2 css={eventItemNameStyle}>{event.id}</h2>
    </div>
  );
};

export default EventsItem;