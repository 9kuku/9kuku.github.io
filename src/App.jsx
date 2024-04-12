import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { mainContainer } from "./shared/globalStyle";
import Products from "./pages/Products";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route
        path="/main"
        element={
          <Suspense fallback={<div css={mainContainer}>...로딩중</div>}>
            <Main />
          </Suspense>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/event" element={<div>이벤트</div>} />
    </Routes>
  );
}

export default App;