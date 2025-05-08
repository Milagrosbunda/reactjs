import React, { useContext, useState} from "react";
import ModalComponent from "../cart/ModalComponent";
import { SectionContext } from "../../contexts/SectionContext";

const ProductsComponent = ({ title, limited }) => {
  const mockData = () => {
    const mockData = [
      {
        id: 1,
        title: "Producto 1",
        description: "Descripción del producto 1",
        price: 19.99,
        image: "https://picsum.photos/200",
      },
      {
        id: 2,
        title: "Producto 2",
        description: "Descripción del producto 2",
        price: 29.99,
        image: "https://picsum.photos/200",
      },
      {
        id: 3,
        title: "Producto 3",
        description: "Descripción del producto 3",
        price: 39.99,
        image: "https://picsum.photos/200",
      },
    ];

    const results = mockData.map((product) => ({
      id: product.id,
      name: product.title,
      desc: product.description,
      price: product.price,
      image: product.image,
    }));
    return results;
  };


  const [products, setProducts] = useState(mockData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(limited ? "?limit=3" : "");


  /* useEffect(() => {
   fetch("https://fakestoreapi.com/products***" + params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener la informacion de productos");
        }
        return response.json();
      })
      .then((data) => {
        const results = data.map((product) => ({
          id: product.id,
          name: product.title,
          desc: product.description,
          price: product.price,
          image: product.image,
        }));

        setProducts(results);
        //  setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        //   setLoading(false);
      });
    setLoading(false);
  }, []
  setProducts(mockData);
  setLoading(false);
}

);*/

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <h1 className="card-title p-3">{title}</h1>
        <div className="card-group products-grid">
          {products.map((product) => (
            <div className="card">
              <img
                className="card-img-top product-img"
                // src={"https://picsum.photos/200"}
                src={product.image}
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title product-title">{product.name}</h5>
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
