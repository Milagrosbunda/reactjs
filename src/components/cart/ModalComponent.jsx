import { useContext, useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";
import { SectionContext } from "../../contexts/SectionContext";
import { ALERTS } from "../../constants/constants";

function ModalComponent({ product }) {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(false);
  const [qty, setQty] = useState(1);
  const { addProduct, checkQty } = useContext(CartContext);
  const {showAlert} = useContext(SectionContext)
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "2rem",
      width: "30%",
      textAlign: "center",
      borderRadius: "50px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
  };

  const checkQtyInput = (newQty) => {
    setQty(checkQty(newQty))
  }

  const addToCart = (product) => {
    addProduct(product, qty);
    setOpenModal(false);
    showAlert(ALERTS.productAdded);
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
        style={modalStyles}
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
