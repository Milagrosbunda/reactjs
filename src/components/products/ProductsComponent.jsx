import React, { useContext, useState, useEffect } from "react";
import ModalComponent from "../cart/ModalComponent";
import { SectionContext } from "../../contexts/SectionContext";
import { useCustomProducts } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  getLimitedProducts,
  getPromoProducts,
} from "../../contexts/API";
import { ERRORS, PRODUCT_REQUEST } from "../../constants/constants";

const ProductsComponent = ({ title, type }) => {
  const { customProducts, setCustomProducts } = useCustomProducts();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchData;
    switch (type) {
      case PRODUCT_REQUEST.FULL:
        fetchData = getProducts();
        break;
      case PRODUCT_REQUEST.LIMITED:
        fetchData = getLimitedProducts(3);
        break;
      case PRODUCT_REQUEST.PROMOS:
        fetchData = getPromoProducts();
        break;
      default:
        fetchData = Promise.resolve([]);
    }
    fetchData
      .then((data) => {
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
        console.log(error);
        switch (error.status) {
          case 404:
            setError(ERRORS.NOT_FOUND);
            break;
          case 500:
            setError(ERRORS.FAILED);
            break;
          default:
            setError(ERRORS.GENERAL);
            break;
        }
        setLoading(false);
      });
  }, [customProducts]);

  if (loading) {
    return <div className="m-5">⏳ Cargando... ⏳</div>;
  }

  if (error) {
    return <h4 className="m-5">🚨 {error} 🚨</h4>;
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

export default ProductsComponent;
