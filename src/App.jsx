import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { mainContainer } from "./shared/globalStyle";
import Products from "./pages/Products";
import Main from "./pages/Main";
import Events from "./pages/Events";

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
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
      <Route path="/event" element={<Events />} />
    </Routes>
  );
}

export default App;