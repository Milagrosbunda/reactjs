import React, { useContext, useState, useEffect } from "react";
import ModalComponent from "../cart/ModalComponent";
import { SectionContext } from "../../contexts/SectionContext";
import { useCustomProducts } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { getProducts, getLimitedProducts } from "../../contexts/API";

const ProductsComponent = ({ title, limited }) => {
  const { customProducts, setCustomProducts } = useCustomProducts();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (limited ? getLimitedProducts(3) : getProducts())
      .then((data) => {
        console.log(data);
        const results = data.map((product) => ({
          code: product.id,
          name: product.name,
          desc: product.description,
          price: product.price,
          image: product.image,
        }));
        setProducts([...customProducts, ...results]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [customProducts]);

  if (loading) {
    return <div className="m-5">⏳ Cargando... ⏳</div>;
  }

  if (error) {
    return (
      <h4 className="m-5">
        {" "}
        🚨 Tuvimos un error al obtener los productos. Por favor reintente mas
        tarde. 🚨
      </h4>
    );
  }

  return (
    <>
      <div>
        <h3 className="card-title p-3">{title}</h3>
        <div className="card-group products-grid">
          {products.map((product) => (
            <div className="card">
              <img
                className="card-img-top product-img"
                src={product.image}
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5
                  className="card-title product-title link-name"
                  onClick={() =>
                    navigate(`/product/${product.code}`)
                  }
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

export default ProductsComponent;
