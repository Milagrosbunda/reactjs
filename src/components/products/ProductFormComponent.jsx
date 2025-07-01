import { useEffect, useState } from "react";

const ProductFormComponent = ({ initialProduct, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0.0);
  const [hasPromo, setHasPromo] = useState(false);
  const invalidForm =
    name === "" || description === "" || description.length <= 10 || price <= 0;

  useEffect(() => {
    if (initialProduct) {
      setName(initialProduct.name);
      setDescription(initialProduct.description);
      setImage(initialProduct.image);
      setPrice(initialProduct.price);
      setHasPromo(initialProduct.hasPromo);
    } else {
      resetForm();
    }
  }, [initialProduct]);

  const resetForm = () => {
    setName("");
    setDescription("");
    setImage("");
    setHasPromo(false);
    setPrice(0.0);
  };

  const sumbmitForm = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      image,
      price: parseFloat(price),
      hasPromo,
    };
    onSubmit(productData);
    resetForm();
  };

  const cancelForm = () => {
    resetForm();
    onCancel();
  };

  return (
    <>
      <form onSubmit={sumbmitForm}>
        <div className="form-group">
          <label className="py-1" htmlFor="nameInput">
            Nombre del producto:
          </label>
          <input
            type="text"
            className="form-control mt-3"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de tu producto..."
          />
        </div>

        <div className="form-group">
          <label className="pt-3 px-5" htmlFor="descInput">
            Descripción:
          </label>
          <textarea
            className="form-control mt-3"
            id="descInput"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            minLength={10}
            placeholder="Describe tu producto en al menos 10 caracteres..."
          ></textarea>
        </div>

        <div className="form-group">
          <label className="pt-3 px-5" htmlFor="imageInput">
            URL de la imagen:
          </label>
          <input
            type="text"
            className="form-control mt-3"
            id="imageInput"
            rows="2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Link a tu imagen..."
          ></input>
        </div>

        <div className="form-group">
          <label className="pt-3 px-5" htmlFor="priceInput">
            Precio unitario:
          </label>
          <input
            type="number"
            className="form-control mt-3"
            id="priceInput"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="py-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={invalidForm}
          >
            {initialProduct ? "Guardar cambios" : "Enviar"}
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-3"
            onClick={cancelForm}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductFormComponent;
