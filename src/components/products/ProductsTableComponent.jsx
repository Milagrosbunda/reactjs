import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductsTableComponent = ({ products, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="table-responsive mx-2">
      <table className="table table-bordered table-hover w-100 mx-auto mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Imagen</th>
            <th scope="col" colSpan="2">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <p className="m-2">
                  <strong
                    className="m-2 link-name"
                    onClick={() =>
                      navigate(`/product/${product.id}`, {
                        state: { product },
                      })
                    }
                  >
                    {product.name}
                  </strong>
                </p>
              </td>
              <td>
                <p className="m-2">${product.price}</p>
              </td>
              <td>
                <img
                  className="img-table"
                  src={product.image}
                  alt={product.name}
                ></img>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-info m-2"
                  onClick={() => onEdit(product)}
                >
                  <FaEdit /> Editar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger m-2"
                  onClick={() => onDelete(product.id)}
                >
                  <FaTrash /> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTableComponent;
