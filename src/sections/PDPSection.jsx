import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { SectionContext } from "../contexts/SectionContext";
import { ALERTS } from "../constants/constants";
import { useParams } from "react-router-dom";
import { getProduct } from "../contexts/API";

function PDPSection() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addProduct, checkQty } = useContext(CartContext);
  const { showAlert } = useContext(SectionContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getProduct(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="m-5">⏳ Cargando... ⏳</div>;
  }

  if (!product) {
    return (
      <h4 className="m-5"> 🚨 Tuvimos un error al obtener el producto.🚨</h4>
    );
  }

  const checkQtyInput = (newQty) => {
    setQty(checkQty(newQty));
  };

  const addToCart = (product) => {
    addProduct(product, qty);
    showAlert(ALERTS.productAdded);
  };

  return (
    <>
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
            <h4>${parseFloat(product.price)}</h4> <p>Precio unitario</p>
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
