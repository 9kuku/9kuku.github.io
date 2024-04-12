import { createContext, useReducer } from "react";
import productsReducer from "../helpers/useProductsReducer";

export const dispatchProductContext = createContext("");
export const productsContext = createContext("");

const initProducts = [];

export default function ProductContextWrapper(props) {
  const [products, dispatch] = useReducer(productsReducer, initProducts);

  return (
    <productsContext.Provider value={products}>
      <dispatchProductContext.Provider value={dispatch}>{props.children}</dispatchProductContext.Provider>
    </productsContext.Provider>
  );
}