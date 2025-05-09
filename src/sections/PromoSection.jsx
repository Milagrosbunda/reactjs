import { useContext } from "react";
import Banner from "../components/banners/BannerComponent";
import PanelComponent from "../components/products/PanelComponent";
import { SectionContext } from "../contexts/SectionContext";
import ProductsComponent from "../components/products/ProductsComponent";

function PromoSection() {
  const { loadCartPage } = useContext(SectionContext);

  return (
    <>
    <div className="pb-5">
      <h1>Proximamente...</h1>
      <h4>
        <i class="fa-solid fa-screwdriver-wrench"></i> Estamos trabajando para
        darte las mejores promociones.{" "}
        <i class="fa-solid fa-screwdriver-wrench"></i>{" "}
      </h4>
      </div>

      <hr class="rounded"/>

      <div class="col w-100 mt-">
        <ProductsComponent
          limited={true}
          title="Mientras tanto podes ver estos productos..."
        />
        <button
          style={{ width: "100%" }}
          type="button"
          className="btn btn-primary"
          onClick={() => loadCartPage()}
        >
          Ver todos los productos
        </button>
      </div>
    </>
  );
}

export default PromoSection;
