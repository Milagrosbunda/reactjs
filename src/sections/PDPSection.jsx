import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { SectionContext } from "../contexts/SectionContext";
import { ALERTS } from "../constants/constants";
import { useLocation } from "react-router-dom";

function PDPSection() {
  const location = useLocation();
  const product = location.state?.product;
  const [qty, setQty] = useState(1);
  const { addProduct, checkQty } = useContext(CartContext);
  const { showAlert } = useContext(SectionContext);

  const checkQtyInput = (newQty) => {
    setQty(checkQty(newQty));
  };

  const addToCart = (product) => {
    addProduct(product, qty);
    showAlert(ALERTS.productAdded);
  };

  return (
    <>
      {console.log("producto " + product)}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p className="text-muted">
              {product.description ||
                "No contamos con información sobre este artículo. Contactate con nuestro soporte para más información."}
            </p>
            <h4>${product.price.toFixed(2)}</h4>

            <div className="d-flex align-items-center justify-content-center my-3">
              <label htmlFor="qty" className="me-2">
                Cantidad:
              </label>
              <input
                type="number"
                id="qty"
                min="1"
                max="10"
                className="form-control w-25"
                value={qty}
                onChange={(e) => checkQtyInput(Number(e.target.value))}
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
              disabled={qty == ""}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PDPSection;
