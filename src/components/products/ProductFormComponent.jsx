import ProductsComponent from "./ProductsComponent";
import { useContext, useState } from "react";
import { SectionContext } from "../../contexts/SectionContext";
import { UserContext } from "../../contexts/UserContext";
import { ALERTS } from "../../constants/constants";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductFormComponent = () => {
  const { createProduct } = useContext(UserContext);
  const { showAlert } = useContext(SectionContext);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0.0);

  const createNewProduct = () => {
    createProduct(name, desc, price);
    showAlert(ALERTS.productCreated);
    setName("");
    setDesc("");
    setPrice(0.0);
  };

  return (
    <>
      <>
        <div className="card">
          <h3 className="card-title pt-5">
            🔍 Podes crear tu producto custom...
          </h3>
          <div className="card-body"></div>

          <form>
            <div className="form-group">
              <label className="pt-1" for="nameInput">
                Nombre del producto:
              </label>
              <input
                type="text"
                className="form-control pt-3"
                id="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label className="pt-3" for="descInput">
                Descripcion:
              </label>
              <textarea
                className="form-control pt-3"
                id="descInput"
                rows="2"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div class="form-group">
              <label className="pt-3" for="priceInput">
                Precio unitario:
              </label>
              <input
                type="number"
                className="form-control pt-3"
                id="priceInput"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </form>
          <div className="py-4">
            <button
              className="btn btn-primary"
              onClick={createNewProduct}
              disabled={name == "" || desc == "" || price == 0.0 || price < 0.0}
            >
              Enviar
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductFormComponent;
