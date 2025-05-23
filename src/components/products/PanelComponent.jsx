import ProductsComponent from "./ProductsComponent";
import WelcomeComponente from "../banners/WelcomeComponent";
import { useNavigate } from "react-router-dom";

const PanelComponent = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate("/products")}
          >
            Ver todos los productos
          </button>
        </div>
      </div>
    </>
  );
};

export default PanelComponent;
