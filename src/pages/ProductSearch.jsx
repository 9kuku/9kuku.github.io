import { useState } from "react";
import search from "./css/ProductSearch.module.css";
import { apiClient } from "../api/client";
import Loading from "./Loading";

const ProductSearch = () => {
  const [productSearchText, setProductSearchText] = useState("");
  const [brandSearchText, setBrandSearchText] = useState("");
  const [productData, setProductData] = useState(null);
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleProductSearchChange = (e) => {
    setProductSearchText(e.target.value);
  };
  const handleBrandSearchChange = (e) => {
    setBrandSearchText(e.target.value);
  };

  const handleProductSearchSubmit = async (e) => {
    e.preventDefault();
    await getProductSearch();
  };
  const handleBrandSearchSubmit = async (e) => {
    e.preventDefault();
    await getBrandSearch();
  };

  const getProductSearch = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get(`/api/v1/search/products?keyword=${productSearchText}`);
      setProductData(response.data);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoading(false);
    }
  };
  const getBrandSearch = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get(`/api/v1/search/brands?keyword=${brandSearchText}`);
      setBrandData(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={search.container}>
      <div className={search.searchContainer}>
        <form className={search.formContainer} onSubmit={handleProductSearchSubmit}>
          <input
            className={search.searchBox}
            type="text"
            placeholder="상품 검색"
            value={productSearchText}
            onChange={handleProductSearchChange}
          />
          <button type="submit" className={search.searchButton}>
            검색
          </button>
        </form>
        <div className={search.dataContainer}>
          {loading && (
            <p>
              <Loading />
            </p>
          )}
          {productData &&
            productData.map((product) => (
              <div key={product.id}>
                <p>상품명 : {product.productName}</p>
                <p>상품 설명 : {product.introduce}</p>
                <p>가격 : {product.price}</p>
                <p>수량 : {product.quantity}</p>
              </div>
            ))}
        </div>
      </div>
      <div className={search.searchContainer}>
        <form className={search.formContainer} onSubmit={handleBrandSearchSubmit}>
          <input
            className={search.searchBox}
            type="text"
            placeholder="브랜드 검색"
            value={brandSearchText}
            onChange={handleBrandSearchChange}
          />
          <button type="submit" className={search.searchButton}>
            검색
          </button>
        </form>
        <div className={search.dataContainer}>
          {loading && (
            <p>
              <Loading />
            </p>
          )}
          {brandData &&
            brandData.map((brand) => (
              <div key={brand.id}>
                <p>브랜드명 : {brand.brandName}</p>
                <p>브랜드 설명 : {brand.introduce}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
