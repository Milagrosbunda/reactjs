import ProductsComponent from "../components/products/ProductsComponent";
import { PRODUCT_REQUEST } from "../constants/constants";

function ProductsSection() {
  return (
    <>
      <ProductsComponent
        type={PRODUCT_REQUEST.FULL}
        title="Nuestros productos"
      />
    </>
  );
}

export default ProductsSection;
