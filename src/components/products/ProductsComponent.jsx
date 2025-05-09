import React, { useContext, useState, useEffect } from "react";
import ModalComponent from "../cart/ModalComponent";
import { SectionContext } from "../../contexts/SectionContext";
import { useCustomProducts } from "../../contexts/UserContext";

const ProductsComponent = ({ title, limited }) => {
  //TODO: Delete mock after testing
  const { customProducts, setCustomProducts } = useCustomProducts();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(limited ? "?limit=3" : "");

  const mockData = () => [
    {
      id: 1,
      name: "Producto 1",
      desc: "Descripción del producto 1",
      price: 19.99,
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Producto 2",
      desc: "Descripción del producto 2",
      price: 29.99,
      image: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Producto 3",
      desc: "Descripción del producto 3",
      price: 39.99,
      image: "https://picsum.photos/200",
    },
  ];

  const [products, setProducts] = useState(() => [
    ...customProducts,
    ...mockData(),
  ]);

  /*useEffect(() => {
    fetch("https://fakestoreapi.com/products" + params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener la informacion de productos");
        }
        return response.json();
      })
      .then((data) => {
        const results = data.map((product) => ({
          id: Math.random(),
          name: product.title,
          desc: product.description,
          price: product.price,
          image: product.image,
        }));
        setProducts((prevProducts) => [...prevProducts, results]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    setLoading(false);
  }, []);*/

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {console.log(customProducts)}
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
