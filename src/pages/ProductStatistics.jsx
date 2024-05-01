import DatePicker from "react-datepicker";
import statistics from "./css/ProductStatistics.module.css";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { getSoldProductQuantityTopTenApi, getSoldProductSumPriceApi } from "../api/seller";
import { format } from "date-fns";
import Loading from "./Loading";

const ProductStatistics = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [formattedStartDate, setFormattedStartDate] = useState(null);
  const [formattedEndDate, setFormattedEndDate] = useState(null);
  const [totalPriceResponse, setTotalPriceResponse] = useState(null);
  const [topTenResponse, setTopTenResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const getStatistics = async () => {
    try {
      setLoading(true);
      const formattedStartDate = format(startDate, "yyyy-MM-dd");
      const formattedEndDate = format(endDate, "yyyy-MM-dd");
      setFormattedStartDate(formattedStartDate);
      setFormattedEndDate(formattedEndDate);

      const [totalPriceResponse, topTenRespose] = await Promise.all([
        getSoldProductSumPriceApi(formattedStartDate, formattedEndDate),
        getSoldProductQuantityTopTenApi(formattedStartDate, formattedEndDate),
      ]);

      setTotalPriceResponse(totalPriceResponse);
      setTopTenResponse(topTenRespose);

      console.log(totalPriceResponse, topTenRespose);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoading(false); // 데이터 요청 완료 시 로딩 상태를 false로 변경
    }
  };

  return (
    <>
      <div className={statistics.container}>
        <div className={statistics.calendarContainer}>
          <div className={statistics.calendar}>
            <span className={statistics.explan}>조회하고 싶은 날짜 선택</span>
            <DatePicker
              className={statistics.calendarInfo}
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
            />
            <button className={statistics.button} type="submit" onClick={getStatistics}>
              조회
            </button>
          </div>
          <div className={statistics.priceTitle}>
            <span className={statistics.name}>💸 총 판매 금액 💸</span>
            <div>
              {loading ? (
                <Loading />
              ) : (
                totalPriceResponse !== null &&
                formattedStartDate !== null &&
                formattedEndDate !== null && (
                  <div>
                    <div>
                      {formattedStartDate} ~ {formattedEndDate} 기간 동안 <br />
                      <span>{totalPriceResponse.brandName} 의 총 판매 금액은</span>
                    </div>
                    <div>
                      <span>{totalPriceResponse.totalPrice.toLocaleString()} 원 입니다.</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className={statistics.toptenTitle}>
          <span className={statistics.name}>🎉 판매된 상품 TOP TEN 🎉</span>
          {loading ? (
            <Loading />
          ) : (
            topTenResponse && (
              <div className={statistics.table}>
                <span>
                  {formattedStartDate} ~ {formattedEndDate} 기간 동안 <br /> 판매된 상품 TOP 10
                </span>
                <div className={statistics.row}>
                  <span className={statistics.header}>상품명</span>
                  <span className={statistics.header}>판매 수량</span>
                </div>
                {topTenResponse.map((item, index) => (
                  <div className={statistics.row} key={index}>
                    <span className={statistics.cell}>{item.productName}</span>
                    <span className={statistics.cell}>
                      {item.productQuantity.toLocaleString()} 개
                    </span>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductStatistics;
