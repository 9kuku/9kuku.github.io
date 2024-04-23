/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import OrderList from "../component/itemList/orders";
import { getAllOrderApi } from "../api/orders";
import OrderContextWrapper from "../context/OrdersContext";

const AllOrders = () => {
  useAuth();

  const [orderData, setOrderData] = useState();

  useEffect(() => {
    const getData = () => {
      getAllOrderApi()
        .then((res) => {
          setOrderData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getData();
  }, []);

  return (
    <>
      <OrderContextWrapper>
        <section css={mainContainer}>
          <OrderList fetchOrders={getAllOrderApi} orderData={orderData} />
        </section>
      </OrderContextWrapper>
    </>
  );
};
export default AllOrders;