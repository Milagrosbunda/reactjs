import { useNavigate } from "react-router-dom";
import { getProducts } from "../../contexts/API";
import { useEffect, useState } from "react";
import PLPComponent from "./PLPComponent";

const SuggestionComponent = () => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoadingSuggestions(true);
        const data = await getProducts(3);
        const results = data.map((product) => ({
          code: product.id,
          name: product.name,
          desc: product.description,
          price: product.price,
          image: product.image,
        }));
        setSuggestions(results);
      } catch (err) {
        console.error("Error al obtener productos: ", err);
      } finally {
        setLoadingSuggestions(false);
      }
    };
    fetchSuggestions();
  }, []);

  if (loadingSuggestions) {
    return <div className="m-5">⏳ Cargando... ⏳</div>;
  }

  return (
    <>
      <div className="col w-100 ">
        <PLPComponent
          products={suggestions}
          title="Quizas te pueda interesar..."
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
};

export default SuggestionComponent;
