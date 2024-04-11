import { createContext, useReducer } from "react";
import productReducer from "../helpers/useProductReducer";

export const dispatchProductContext = createContext("");
export const productContext = createContext("");

const initProducts = [];

export default function ProductContextWrapper(props) {
  const [products, dispatch] = useReducer(productReducer, initProducts);

  return (
    <productContext.Provider value={products}>
      <dispatchProductContext.Provider value={dispatch}>{props.children}</dispatchProductContext.Provider>
    </productContext.Provider>
  );
}