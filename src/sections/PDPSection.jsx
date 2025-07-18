import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ALERTS } from "../constants/constants";
import { useParams } from "react-router-dom";
import { getProduct } from "../contexts/API";
import { toast } from "react-toastify";
import SEOComponent from "../components/general/SEOComponent";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 1rem;
`;

const ProductImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const QtyInput = styled.input`
  width: 80px;
  margin-left: 1rem;
`;

const Price = styled.h4`
  font-weight: bold;
  color: #333;
`;

function PDPSection() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addProduct, checkQty } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getProduct(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="m-5">⏳ Cargando... ⏳</div>;
  }

  if (!product) {
    return (
      <h4 className="m-5"> 🚨 Tuvimos un error al obtener el producto.🚨</h4>
    );
  }

  const checkQtyInput = (newQty) => {
    setQty(checkQty(newQty));
  };

  const addToCart = (product) => {
    addProduct(product, qty);
    toast.success(ALERTS.productAdded.message);
  };

  return (
    <>
      <SEOComponent title={product.name} description={product.description} />
      <Container className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <ProductImg src={product.image} alt={product.name} />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p className="text-muted">
              {product.description ||
                "No contamos con información sobre este artículo. Contactate con nuestro soporte para más información."}
            </p>
            <Price>${parseFloat(product.price).toFixed(2)}</Price>
            <p>Precio unitario</p>
            <div className="d-flex align-items-center justify-content-center my-3">
              <label htmlFor="qty" className="me-2">
                Cantidad:
              </label>
              <QtyInput
                type="number"
                id="qty"
                min="1"
                max="10"
                value={qty}
                onChange={(e) => checkQtyInput(Number(e.target.value))}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
              disabled={qty == ""}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PDPSection;
