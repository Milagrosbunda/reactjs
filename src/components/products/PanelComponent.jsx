import ProductsComponent from "./ProductsComponent";
import WelcomeComponente from "../banners/WelcomeComponent";
import { useContext } from "react";
import { SectionContext } from "../../contexts/SectionContext";

const PanelComponent = () => {
  const { loadCartPage } = useContext(SectionContext);

  return (
    <>
      <div class="row">
        <div class="col">
          <WelcomeComponente />
        </div>
        <div class="w-100"></div>
        <div class="col w-100">
          <ProductsComponent limited={true} title="Trending" />
          <button
            style={{ width: "100%" }}
            type="button"
            className="btn btn-primary"
            onClick={() => loadCartPage()}
          >
            Ver todos los productos
          </button>
        </div>
      </div>
    </>
  );
};

export default PanelComponent;
