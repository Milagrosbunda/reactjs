import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-modal";
import ProductFormComponent from "../components/products/ProductFormComponent";
import ProductsTableComponent from "../components/products/ProductsTableComponent";
import {
  getProducts,
  updateProduct,
  createProduct,
  deleteProductById,
  getProductsSize,
  searchProducts,
} from "../contexts/API";
import { ERRORS, ALERTS, MODAL_STYLES } from "../constants/constants";
import PaginationComponent from "../components/general/PaginationComponent";
import SearchComponent from "../components/general/SearchComponent";

const AdminSection = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const formPosition = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const [totalPages, setTotalPages] = useState(1);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async (isSearch) => {
    try {
      const total = await getProductsSize();
      setTotalPages(Math.ceil(total / limit));
      const data = await (isSearch
        ? searchProducts(input)
        : getProducts(limit, currentPage));
      const sortedData = data.sort((a, b) => Number(b.id) - Number(a.id));
      setProducts(sortedData);
    } catch (error) {
      switch (error.status) {
        case 404:
          toast.warning(ALERTS.emptySearch.message);
          fetchProducts(false);
          break;
        default:
          toast.error(ERRORS.FAILED);
          break;
      }
    }
  };

  const submitProduct = async (productData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
        toast.success(ALERTS.productEdited.message);
      } else {
        await createProduct(productData);
        toast.success(ALERTS.productCreated.message);
      }
      setEditingProduct(null);
      fetchProducts();
    } catch {
      toast.error(ERRORS.FORM_ERROR);
    }
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    if (formPosition.current) {
      formPosition.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDeleteModal = (id) => {
    setOpenModal(true);
    setDeleteId(id);
  };

  const confirmDelete = async () => {
    try {
      await deleteProductById(deleteId);
      setOpenModal(false);
      toast.success(ALERTS.productDeleted.message);
      fetchProducts(false);
    } catch {
      toast.error(ERRORS.GENERAL);
    }
  };

  const cancelEdit = () => {
    setEditingProduct(null);
  };

  const handleInput = (value) => {
    setInput(value);
    fetchProducts(true);
  };

  return (
    <div className="product-card mt-5">
      <div className="card">
        <h3 className="card-title pt-4" ref={formPosition}>
          🔍 Crear o editar producto
        </h3>

        <ProductFormComponent
          initialProduct={editingProduct}
          onSubmit={submitProduct}
          onCancel={cancelEdit}
          formPosition={formPosition}
        />

        <div className="mt-4">
          <h4>🛒 Productos existentes</h4>

          <SearchComponent
            handleChange={handleInput}
            className="d-flex align-items-center justify-content-center my-4"
          />

          <ProductsTableComponent
            products={products}
            onEdit={editProduct}
            onDelete={openDeleteModal}
          />
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Confirmar..."
        style={MODAL_STYLES}
      >
        <h3>Seguro queres eliminar este producto?</h3>
        <p>‼️ Esta accion no puede revertirse ‼️</p>
        <button className="btn btn-danger m-2" onClick={confirmDelete}>
          Confirmar
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </button>
      </Modal>
    </div>
  );
};

export default AdminSection;
