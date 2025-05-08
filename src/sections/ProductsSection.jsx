import Banner from "../components/banners/BannerComponent";
import PanelComponent from "../components/products/PanelComponent";
import ProductsComponent from "../components/products/ProductsComponent";

function ProductsSection() {
  return (
    <>
      <ProductsComponent limited={false} title="Ver todos los productos" />
    </>
  );
}

export default ProductsSection;
