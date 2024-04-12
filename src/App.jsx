/** @jsxImportSource @emotion/react */
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { mainContainer } from "./shared/globalStyle";
import Products from "./pages/Products";

const Product = lazy(() => import("./pages/Products"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route
        path="/products"
        element={
          <Suspense fallback={<div css={mainContainer}>...로딩중</div>}>
            <Products />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
