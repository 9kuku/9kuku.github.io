/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from "react";
import { dispatchOrderContext, ordersContext } from "../../../context/OrdersContext"; // 경로 수정
import { orderWrapper } from "./style";
import OrderItem from "../../item/ordersItem";

const OrderList = ({ fetchOrders }) => {
  const orderData = useContext(ordersContext)
  const dispatch = useContext(dispatchOrderContext);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchOrders(page);
        dispatch({ type: "INIT", initOrders: res.data.content });
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [page, fetchOrders]);

  return (
    <div>
      <article css={orderWrapper}>
        {Array.isArray(orderData) && orderData.map((order) => (
          <OrderItem key={order.orderId} order={order} />
        ))}
      </article>
      {page > 0 && <button onClick={() => setPage(prevPage => prevPage - 1)}>이전 페이지</button>}
      {page < totalPages - 1 && <button onClick={() => setPage(prevPage => prevPage + 1)}>다음 페이지</button>}
    </div>
  );
};

export default OrderList; // default로 내보내기
