import React, { useState, useEffect } from "react";
import ModalComponent from "../cart/ModalComponent";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  getPromoProducts,
  getProductsSize,
  searchProducts,
} from "../../contexts/API";
import { ERRORS, PRODUCT_REQUEST } from "../../constants/constants";
import { toast } from "react-toastify";
import PaginationComponent from "../general/PaginationComponent";

const ProductsComponent = ({ title, type, term }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      setLoading(true);
      let total = 0;
      let data = [];

      try {
        switch (type) {
          case PRODUCT_REQUEST.FULL:
            total = await getProductsSize();
            setTotalPages(Math.ceil(total / limit));
            data = await getProducts(limit, currentPage);
            break;
          case PRODUCT_REQUEST.LIMITED:
            data = await getProducts(3);
            break;
          case PRODUCT_REQUEST.PROMOS:
            data = await getPromoProducts();
            break;
          case PRODUCT_REQUEST.SEARCH:
            if (term != "") data = await searchProducts(term);
            break;
          default:
            data = [];
        }
        const results = data.map((product) => ({
          code: product.id,
          name: product.name,
          desc: product.description,
          price: product.price,
          image: product.image,
        }));
        const sortedData = results.sort(
          (a, b) => Number(b.code) - Number(a.code)
        );
        setProducts(sortedData);
      } catch (error) {
        switch (error.status) {
          case 404:
            setError(ERRORS.NOT_FOUND);
            setSuggestions(true);
            break;
          case 500:
            setError(ERRORS.FAILED);
            toast.error(ERRORS.GENERAL);
            break;
          default:
            setError(ERRORS.GENERAL);
            toast.error(ERRORS.GENERAL);
            break;
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, type, term]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (loading) {
    return <div className="m-5">⏳ Cargando... ⏳</div>;
  }

  if (error) {
    return (
      <>
        <h4 className="m-5">🚨 {error} 🚨</h4>
        <div class="col w-100">
          <ProductsComponent
            type={PRODUCT_REQUEST.LIMITED}
            title="Quizas te puede interesar..."
          />
          <button
            style={{ width: "100%" }}
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Ver todos los productos
          </button>
        </div>
      </>
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

        {type == PRODUCT_REQUEST.FULL && (
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </>
  );
};

export default ProductsComponent;
