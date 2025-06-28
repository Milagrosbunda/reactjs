import ModalComponent from "../cart/ModalComponent";
import { useNavigate } from "react-router-dom";

const PLPComponent = ({ products, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {title && <h3 className="card-title p-3">{title}</h3>}
        <div className="card-group products-grid">
          {products.map((product) => (
            <div className="card" key={product.code}>
              <img
                className="card-img-top product-img"
                src={product.image}
                alt={product.name}
              ></img>
              <div className="card-body">
                <h5
                  className="card-title product-title link-name"
                  onClick={() => navigate(`/product/${product.code}`)}
                >
                  {product.name}
                </h5>
                <p className="card-text">${product.price}</p>
                <ModalComponent product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PLPComponent;
