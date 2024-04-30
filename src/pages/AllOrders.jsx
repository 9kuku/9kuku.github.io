/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllOrderApi } from "../api/orders";
import OrderContextWrapper from "../context/OrdersContext";
import OrderList from "../component/itemList/orders"; // 경로 수정

const AllOrders = () => {
  // useAuth();
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    const getData = () => {
      getAllOrderApi()
        .then((res) => {
          setOrderData(res.data);
        })
        .catch((err) => {
          throw new Error(err);
        })

    };
    getData();
  }, []);

  return (
    <>
      <OrderContextWrapper>
        <section css={mainContainer}>
          <OrderList fetchOrders={getAllOrderApi} />
        </section>
      </OrderContextWrapper>
    </>
  );
};

export default AllOrders;
