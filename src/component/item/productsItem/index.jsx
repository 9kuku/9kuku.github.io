import { productItemStyle, productItemImageStyle, productItemNameStyle, productItemPriceStyle } from './style';

const ProductsItem = ({ product }) => {
  return (
    <div css={productItemStyle}>
      <h2 css={productItemNameStyle}>{product.productId}</h2>
      <h2 css={productItemNameStyle}>{product.productName}</h2>
      <p css={productItemPriceStyle}>{product.productPrice}</p>
    </div>
  );
};

export default ProductsItem;