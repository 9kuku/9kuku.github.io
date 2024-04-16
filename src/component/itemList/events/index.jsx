/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from "react";
import { eventWrapper } from "./style";
import { dispatchEventContext, eventsContext } from "../../../context/EventsContext";
import { getAllEventsApi } from "../../../api/events";
import EventsItem from "../../item/eventsItem";

const itemList = () => {
  const eventData = useContext(eventsContext);
  const dispatch = useContext(dispatchEventContext);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0); // totalPages 값을 상태로 관리

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllEventsApi(page);
        dispatch({ type: "INIT", initEvents: res.data.content });
        setTotalPages(res.data.totalPages); // API 응답에서 totalPages 값을 가져와 상태를 업데이트
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [page]);

  return (
    <div>
      <article css={eventWrapper}>
        {Array.isArray(eventData) && eventData.map((event) => (
          <EventsItem key={event.id} event={event} />
        ))}
      </article>
      {page > 0 && <button onClick={() => setPage(prevPage => prevPage - 1)}>이전 페이지</button>}
      {page < totalPages - 1 && <button onClick={() => setPage(prevPage => prevPage + 1)}>다음 페이지</button>}
    </div>
  );
};

export default itemList;