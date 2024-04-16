/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import ProductContextWrapper from "../context/ProductsContext";
import EventsList from "../component/itemList/events";
import { getAllEventsApi } from "../api/events";
import EventContextWrapper from "../context/EventsContext";

const Events = () => {
  useAuth();

  const [eventData, setEventData] = useState();

  useEffect(() => {
    const getData = () => {
      getAllEventsApi()
        .then((res) => {
          setEventData(res.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getData();
  }, []);

  return (
    <>
      <EventContextWrapper>
        <section css={mainContainer}>
          <EventsList eventData={eventData} />
        </section>
      </EventContextWrapper>
    </>
  );
};
export default Events;