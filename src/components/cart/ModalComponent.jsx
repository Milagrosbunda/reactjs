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
        <CgAdd/> Agregar
      </button>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Ya casi estamos..."
        style={MODAL_STYLES}
      >
        <div className="modal-products">
          <h3>🛒 Agregar al carrito de compras: </h3>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h6>Precio unitario: </h6> <h3>${product.price}</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Cantidad</span>
            </div>
            <input
              className="form-control"
              id="qty"
              type="number"
              min="1"
              max="10"
              defaultValue={1}
              value={qty}
              onChange={(e) => checkQtyInput(Number(e.target.value))}
            />
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
