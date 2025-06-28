import { useEffect, useState } from "react";
import SEOComponent from "../components/general/SEOComponent";
import ProductsComponent from "../components/products/ProductsComponent";
import { PRODUCT_REQUEST } from "../constants/constants";
import SearchComponent from "../components/general/SearchComponent";

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
        <SearchComponent
          handleChange={setSearchTerm}
          showButton={true}
          handleReturn={goBack}
          searchTerm={searchTerm}
        />

        <ProductsComponent type={PRODUCT_REQUEST.SEARCH} term={searchTerm} />
      </div>
    </>
  );
}

export default SearchSection;
