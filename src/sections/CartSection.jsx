import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import BannerComponent from "../components/banners/BannerComponent";
import PanelComponent from "../components/products/PanelComponent";
import WelcomeComponente from "../components/banners/WelcomeComponent";

function CartSection() {
  const { sessionCart } = useContext(CartContext);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const shipping = 500;
  const subtotal =
    sessionCart?.products?.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    ) || 0;
  const discount = sessionCart?.owner == "" ? 0.0 : subtotal * 0.1;
  const total = subtotal + shipping - discount;

  if (!sessionCart || sessionCart.products.length === 0) {
    return <p className="text-center mt-4">Tu carrito está vacío.</p>;
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
                  <div>
                    <strong>{product.name}</strong>
                    <br />
                    <small>Cantidad: {product.qty}</small>
                  </div>
                </div>
                <span>${(product.price * product.qty).toFixed(2)}</span>
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
