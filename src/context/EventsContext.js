import { createContext, useReducer } from "react";
import eventsReducer from "../helpers/useEventsReducer";

export const dispatchEventContext = createContext("");
export const eventsContext = createContext("");

const initEvents = [];

export default function EventContextWrapper(props) {
  const [events, dispatch] = useReducer(eventsReducer, initEvents);

  return (
    <eventsContext.Provider value={events}>
      <dispatchEventContext.Provider value={dispatch}>{props.children}</dispatchEventContext.Provider>
    </eventsContext.Provider>
  );
}