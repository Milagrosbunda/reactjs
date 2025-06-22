import ProductsComponent from "../components/products/ProductsComponent";
import { useNavigate } from "react-router-dom";
import { PRODUCT_REQUEST } from "../constants/constants";

function PromoSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="pb-5">
        <h1 className="pt-5">Ups...</h1>
        <h4>
          <i class="fa-solid fa-screwdriver-wrench"></i> Estamos trabajando para
          solucionar este problema.
          <i class="fa-solid fa-screwdriver-wrench"></i>
        </h4>
      </div>

      <hr class="rounded" />

      <div class="col w-100 mt-">
        <ProductsComponent
          type={PRODUCT_REQUEST.LIMITED}
          title="Mientras tanto podes ver estos productos..."
        />
        <button
          style={{ width: "100%" }}
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/products")}
        >
          Ver todos los productos
        </button>
      </div>
    </>
  );
}

export default PromoSection;
