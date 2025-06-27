import { CartContext, useSessionCart } from "../contexts/CartContext";
import WelcomeComponente from "../components/banners/WelcomeComponent";
import { useContext } from "react";
import { ALERTS } from "../constants/constants";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";
import { RiShoppingBasket2Line } from "react-icons/ri";
import SEOComponent from "../components/general/SEOComponent";

function CartSection() {
  const { sessionCart } = useSessionCart();
  const { updateCart } = useContext(CartContext);
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();

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
      toast.info(ALERTS.qtyUpdated.message);
    }
    const updatedValue = [...sessionCart.products];
    updatedValue[index].qty = newQty;
    updateCart(updatedValue);
    toast.success(ALERTS.successUpdated.message);
  };

  const removeProduct = (index) => {
    const updatedList = sessionCart.products.filter((_, i) => i !== index);
    updateCart(updatedList);
    toast.success(ALERTS.deletedEntry.message);
  };

  if (!sessionCart || sessionCart.products.length === 0) {
    return <h3 className="text-center mt-4">Tu carrito está vacío.</h3>;
  }

  return (
    <>
      <SEOComponent title="Cart" />
      <div className="container mt-4">
        <h2 className="mb-4">
          <RiShoppingBasket2Line /> Carrito de compras <RiShoppingBasket2Line />
        </h2>

        <div className="row gy-4">
          <div className="col-12 col-md-8 order-md-1">
            <ul className="list-group">
              {sessionCart.products.map((product, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div className="d-flex align-items-center col-12 col-md-6 mb-2 mb-md-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="me-2"
                      style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <strong
                        className="link-name"
                        onClick={() =>
                          navigate(`/product/${product.code}`, {
                            state: { product },
                          })
                        }
                      >
                        {product.name}
                      </strong>
                      <br />
                      <small>
                        Precio unitario: ${parseFloat(product.price).toFixed(2)}
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center col-12 col-md-6 justify-content-md-end">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={product.qty}
                      onChange={(e) =>
                        changeQty(index, parseInt(e.target.value))
                      }
                      className="form-control form-control-sm mx-2"
                      style={{ width: "70px" }}
                    />
                    <span className="mx-2 fw-bold">
                      ${(product.price * product.qty).toFixed(2)}
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeProduct(index)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-4 order-md-2">
            <div className="bg-light p-3 border rounded">
              <h5 className="mb-3">
                <FaReceipt /> Resumen de compra
              </h5>
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
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <WelcomeComponente />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSection;
