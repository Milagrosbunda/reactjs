import ProductsComponent from "../components/products/ProductsComponent";
import { useNavigate } from "react-router-dom";

function PromoSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="pb-5">
        <h1 className="pt-5">Proximamente...</h1>
        <h4>
          <i class="fa-solid fa-screwdriver-wrench"></i> Estamos trabajando para
          darte las mejores promociones.{" "}
          <i class="fa-solid fa-screwdriver-wrench"></i>{" "}
        </h4>
      </div>

      <hr class="rounded" />

      <div class="col w-100 mt-">
        <ProductsComponent
          limited={true}
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
