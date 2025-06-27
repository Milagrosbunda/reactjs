import ProductsComponent from "../components/products/ProductsComponent";
import { PRODUCT_REQUEST } from "../constants/constants";
import SEOComponent from "../components/general/SEOComponent";

function PromoSection() {
  return (
    <>
      <SEOComponent title="Promociones" />
      <ProductsComponent
        type={PRODUCT_REQUEST.PROMOS}
        title="Precios imperdibles"
      />
    </>
  );
}

export default PromoSection;
