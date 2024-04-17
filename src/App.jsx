import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { mainContainer } from "./shared/globalStyle";
import Products from "./pages/Products";
import Main from "./pages/Main";
import Events from "./pages/Events";
import Users from "./pages/Users";
import Sellers from "./pages/Sellers";
import Orders from "./pages/Orders";
import Coupons from "./pages/Coupons";


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
      <Route path="/users" element={<Users />} />
      <Route path="/sellers" element={<Sellers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/coupons" element={<Coupons />} />
    </Routes>
  );
}

export default App;