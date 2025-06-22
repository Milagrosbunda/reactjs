import ProductsComponent from "../components/products/ProductsComponent";
import { PRODUCT_REQUEST } from "../constants/constants";

function PromoSection() {
  return (
    <>
      <ProductsComponent
        type={PRODUCT_REQUEST.PROMOS}
        title="Precios imperdibles"
      />
    </>
  );
}

export default PromoSection;
