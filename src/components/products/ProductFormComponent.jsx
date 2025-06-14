import ProductsComponent from "./ProductsComponent";
import { useContext, useEffect, useState } from "react";
import { SectionContext } from "../../contexts/SectionContext";
import { UserContext } from "../../contexts/UserContext";
import { ALERTS } from "../../constants/constants";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getProducts, updateProduct } from "../../contexts/API";

const ProductFormComponent = () => {
  const { createProduct } = useContext(UserContext);
  const { showAlert } = useContext(SectionContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const submitForm = async () => {
    const product = { name, description, price: parseFloat(price) };
    console.log(product);

    if (editingId) {
      await updateProduct(editingId, product);
      showAlert(ALERTS.productEdited);
    } else {
      await createProduct(product);
      showAlert(ALERTS.productCreated);
    }

    resetForm();
    fetchProducts();
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice(0.0);
  };

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const editProduct = (product) => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setEditingId(product.id);
  };

  const deleteProduct = async (id) => {
    await deleteProduct(id);
    showAlert(ALERTS.productDeleted);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="product-card mt-5">
        <div className="card">
          <h3 className="card-title pt-4">🔍 Crear o editar producto</h3>

          <form>
            <div className="form-group">
              <label className="py-1" for="nameInput">
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
              <label className="pt-3 px-5" for="descInput">
                Descripcion:
              </label>
              <textarea
                className="form-control pt-3"
                id="descInput"
                rows="2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div class="form-group">
              <label className="pt-3 px-5" for="priceInput">
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
              onClick={submitForm}
              disabled={name === "" || description === "" || price <= 0}
            >
              {editingId ? "Guardar cambios" : "Enviar"}
            </button>
            <button className="btn btn-secondary mx-3" onClick={resetForm}>
              Cancelar
            </button>
          </div>

          <div className="mt-4">
            <h4>🛒 Productos existentes</h4>
            <div className="table-responsive mx-2">
              <table className="table table-bordered table-hover w-100 mx-auto mt-3">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col" colSpan="2">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td key={product.id}>
                        <p className="m-2">
                          <strong className="m-2">{product.name}</strong>
                        </p>
                      </td>
                      <td>
                        <p className="m-2">${product.price}</p>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-info m-2"
                          onClick={() => editProduct(product)}
                        >
                          Editar
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger m-2"
                          onClick={() => deleteProduct(product.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFormComponent;
