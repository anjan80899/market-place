import ProductDisplay from "../src/components/productdisplay/productdisplay";
import { products } from "../src/Assets/products.js";

export default function MainContent() {
  return (
    <div className="maincontent">
      {products?.map((product, index) => (
        <ProductDisplay product={product} key={index} />
      ))}
    </div>
  );
}
