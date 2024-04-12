import { productItemStyle, productItemImageStyle, productItemNameStyle, productItemPriceStyle } from './style';

const ProductsItem = ({ product }) => {
  return (
    <div css={productItemStyle}>
      <img src={product.image} alt={product.name} css={productItemImageStyle} />
      <h2 css={productItemNameStyle}>{product.name}</h2>
      <p css={productItemPriceStyle}>{product.price}</p>
    </div>
  );
};

export default ProductsItem;