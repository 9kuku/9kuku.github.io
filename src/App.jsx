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
import ProductRegist from "./pages/ProductRegist";
import ProductUpdate from "./pages/ProductUpdate";
import ProductStatistics from "./pages/ProductStatistics";
import ProductSearch from "./pages/ProductSearch";
import SellerApplication from "./pages/SellerApplication";
import Me from "./pages/Me";
import LoginHandeler from "./component/auth/login/LoginHandeler";
import AllOrders from "./pages/AllOrders";
import ModifyPassword from "./pages/ModifyPassword";


function App() {
  console.log(
    "   999999999999999999\n"+
    "  99999999999999999999\n"+
    "999999            999999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "9999                9999\n"+
    "  9999999999999999999999\n"+
    "   999999999999999999999\n"+
    "                    9999\n"+
    "                    9999\n"+
    "                    9999\n"+
    "                    9999\n"+
    "                    9999\n"+
    "                    9999\n"+
    "                    9999\n"+
    "                  999999\n"+
    "   9999999999999999999\n"+
    "   99999999999999999\n");
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
      <Route path="/users/update-password" element={<ModifyPassword />} />
      <Route path="/sellers" element={<Sellers />} />

      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/allorders" element={<AllOrders />} />

      <Route path="/coupons" element={<Coupons />} />

      <Route path="/seller/product-regist" element={<ProductRegist />} />
      <Route path="/seller/product-update" element={<ProductUpdate />} />
      <Route path="/seller/product-statistics" element={<ProductStatistics />} />
      <Route path="/seller/product-search" element={<ProductSearch />} />

      <Route path="/users/seller-application" element={<SellerApplication />} />
    </Routes>
  );
}

export default App;