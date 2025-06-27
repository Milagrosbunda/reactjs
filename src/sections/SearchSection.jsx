import { useEffect, useState } from "react";
import SEOComponent from "../components/general/SEOComponent";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ProductsComponent from "../components/products/ProductsComponent";
import { PRODUCT_REQUEST } from "../constants/constants";

function SearchSection({ input, handleChange, setInput }) {
  const [searchTerm, setSearchTerm] = useState(input);

  const goBack = () => {
    handleChange(false);
    setInput("");
  };
  useEffect(() => {
    setSearchTerm(input);
  }, [input]);

  return (
    <>
      <SEOComponent title="Resultados de busqueda" />
      <div className="container pt-5">
        <div class="input-group mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => goBack()}
          >
            <IoArrowBackCircleOutline />
          </button>
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Buscar:
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Buscar"
            aria-describedby="inputGroup-sizing-default"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ProductsComponent
          type={PRODUCT_REQUEST.SEARCH}
          term={searchTerm}
        />
      </div>
    </>
  );
}

export default SearchSection;
