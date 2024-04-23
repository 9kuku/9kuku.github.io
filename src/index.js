/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { customBodyStyle } from "./shared/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={customBodyStyle} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
