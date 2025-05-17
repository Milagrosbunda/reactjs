import { CartContext, useSessionCart } from "../contexts/CartContext";
import WelcomeComponente from "../components/banners/WelcomeComponent";
import { useContext } from "react";
import { ALERTS } from "../constants/constants";
import { SectionContext } from "../contexts/SectionContext";
import { UserContext } from "../contexts/UserContext";

function CartSection() {
  const { sessionCart } = useSessionCart();
  const { updateCart } = useContext(CartContext);
  const { showAlert } = useContext(SectionContext);
  const { userName } = useContext(UserContext);

  const shipping = 500;
  const subtotal =
    sessionCart?.products?.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    ) || 0;
  const discount = userName == "" ? 0.0 : subtotal * 0.1;
  const total = subtotal + shipping - discount;

  const changeQty = (index, newQty) => {
    if (newQty > 10) {
      newQty = 10;
      showAlert(ALERTS.qtyUpdated);
    }
    const updatedValue = [...sessionCart.products];
    updatedValue[index].qty = newQty;
    updateCart(updatedValue);
  };

  const removeProduct = (index) => {
    const updatedList = sessionCart.products.filter((_, i) => i !== index);
    updateCart(updatedList);
    showAlert(ALERTS.deletedEntry);
  };

  if (!sessionCart || sessionCart.products.length === 0) {
    return <h3 className="text-center mt-4">Tu carrito está vacío.</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de compras</h2>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group mb-3">
            {sessionCart.products.map((product, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      marginRight: 10,
                    }}
                  />
                  <div className="text-start">
                    <strong>{product.name}</strong>
                    <br />
                    <small>Precio unitario: ${product.price.toFixed(2)}</small>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={product.qty}
                    onChange={(e) => changeQty(index, parseInt(e.target.value))}
                    className="form-control form-control-sm mx-2"
                    style={{ width: "70px" }}
                  />

                  <span className="mx-2">
                  <strong>  ${(product.price * product.qty).toFixed(2)}</strong>
                  </span>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeProduct(index)}
                    title="Eliminar del carrito"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <div className="bg-light p-3 border rounded">
            <h5 className="mb-3">Resumen de compra</h5>
            <div className="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Envío:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Descuento:</span>
              <span>${discount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <WelcomeComponente />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
