import { useContext, useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";

function ModalComponent({ product }) {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(false);
  const [qty, setQty] = useState(1);
  const { addProduct } = useContext(CartContext);

  const addToCart = (product) => {
    addProduct(product, qty);
    setOpenModal(false);
  };

  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        Agregar
      </button>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Ya casi estamos..."
        className="modal-products"
      >
        <div className="modal-products">
          <h3>🛒 Agregar al carrito de compras: </h3>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h6>Precio unitario: </h6> <h3>${product.price}</h3>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Cantidad</span>
            </div>
            <input
              className="form-control"
              list="stockLimit"
              id="qty"
              type="number"
              min="1"
              max="10"
              defaultValue={1}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
            <datalist id="stockLimit">
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1} />
              ))}
            </datalist>
          </div>
          <button
            className="btn btn-dark"
            onClick={() => addToCart(product)}
            disabled={qty == ""}
          >
            Confirmar
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setOpenModal(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
