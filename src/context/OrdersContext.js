import { createContext, useReducer } from "react";
import orderReducer from "../helpers/useOrdersReducer";

export const dispatchOrderContext = createContext("");
export const ordersContext = createContext("");

const initOrders = [];

export default function OrderContextWrapper(props) {
  const [orders, dispatch] = useReducer(orderReducer, initOrders);

  return (
    <ordersContext.Provider value={orders}>
      <dispatchOrderContext.Provider value={dispatch}>{props.children}</dispatchOrderContext.Provider>
    </ordersContext.Provider>
  );
}