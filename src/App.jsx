import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { mainContainer } from "./shared/globalStyle";
import Products from "./pages/Products";
import Main from "./pages/Main";
import AllEvents from "./pages/AllEvents";
import Users from "./pages/Users";
import Sellers from "./pages/Sellers";
import Orders from "./pages/Orders";
import Coupons from "./pages/Coupons";
import AllProducts from "./pages/AllProducts";
import Events from "./pages/Events";
import SellersProducts from "./pages/SellersProducts";
import ProductRegister from "./pages/ProductRegister";
import SellerApplication from "./pages/SellerApplication";
import Me from "./pages/Me";
import LoginHandeler from "./component/auth/login/LoginHandeler";


function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Auth />} />

      <Route
        path="/auth/kakao/callback"
        element={<LoginHandeler />}
      />

      <Route
        path="/main"
        element={
          <Suspense fallback={<div css={mainContainer}>...로딩중</div>}>
            <Main />
          </Suspense>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/products/allproducts" element={<AllProducts />} />
      <Route path="/products/sellersproducts" element={<SellersProducts />} />

      <Route path="/events" element={<Events />} />
      <Route path="/events/allevents" element={<AllEvents />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/me" element={<Me />} />
      <Route path="/sellers" element={<Sellers />} />

      <Route path="/orders" element={<Orders />} />

      <Route path="/coupons" element={<Coupons />} />

      <Route path="/seller/product-register" element={<ProductRegister />} />

      <Route path="/users/seller-application" element={<SellerApplication />} />

    </Routes>
  );
}

export default App;