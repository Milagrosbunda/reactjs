import { useContext, useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";
import { ALERTS, MODAL_STYLES } from "../../constants/constants";
import { toast } from "react-toastify";
import { CgAdd } from "react-icons/cg";

function ModalComponent({ product }) {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(false);
  const [qty, setQty] = useState(1);
  const { addProduct, checkQty } = useContext(CartContext);

  const checkQtyInput = (newQty) => {
    setQty(checkQty(newQty));
  };

  const addToCart = (product) => {
    addProduct(product, qty);
    setOpenModal(false);
    toast.success(ALERTS.productAdded.message);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        <CgAdd /> Agregar
      </button>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Ya casi estamos..."
        style={MODAL_STYLES}
      >
        <div className="modal-products container text-center">
          <h3 className="mb-3">🛒 Agregar al carrito</h3>
          <h4 className="mb-2">{product.name}</h4>
          <p className="text-muted">{product.description}</p>
          <h6 className="mt-3">Precio unitario:</h6>
          <h3 className="mb-4 text-success">${product.price}</h3>

          <div className="input-group mb-4 justify-content-center">
            <div className="input-group-prepend">
              <span className="input-group-text">Cantidad</span>
            </div>
            <input
              className="form-control"
              style={{ maxWidth: "100px" }}
              id="qty"
              type="number"
              min="1"
              max="10"
              value={qty}
              onChange={(e) => checkQtyInput(Number(e.target.value))}
            />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-secondary"
              onClick={() => addToCart(product)}
              disabled={!qty}
            >
              Confirmar
            </button>
            <button
              className="btn btn-dark"
              onClick={() => setOpenModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
