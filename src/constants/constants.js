export const SECTIONS = {
  home: "Home",
  products: "Productos",
  promos: "Ofertas",
};

export const USER_TYPES = {
  admin: {
    type: "admin",
    user: "admin",
    password: "nimda",
  },
  client: {
    type: "client",
  },
};

export const PRODUCT_REQUEST = {
  LIMITED: "LIMITED",
  FULL: "FULL",
  PROMOS: "PROMOS",
  SEARCH: "SEARCH",
};

export const ERRORS = {
  NOT_FOUND: "No pudimos encontrar resultados para tu búsqueda.",
  FAILED:
    "Tuvimos un error al obtener los productos. Por favor, reintente más tarde.",
  GENERAL: "Error interno. Por favor, reintente más tarde.",
  FORM_ERROR: "❌ No pudimos crear el producto. Por favor, reintente más tarde.",
  NEGATIVE_PRICE: "El precio debe ser mayor a 0",
};

export const ALERTS = {
  productAdded: {
    type: "success",
    message:
      "🛒 El producto fue agregado correctamente al carrito de compras! ",
  },
  productError: {
    type: "error",
    message: "‼️ Hubo un error al agregar el producto.",
  },
  productCreated: {
    type: "success",
    message: "✅ El producto fue creado correctamente!",
  },
  successUpdated: {
    type: "success",
    message: "🛍️ Cantidad actualizada.",
  },
  qtyUpdated: {
    type: "warning",
    message: "🛍️ Cantidad ajustada según el stock disponible.",
  },
  deletedEntry: {
    type: "success",
    message: "🧨 Producto eliminado del carrito.",
  },
  loginOk: {
    type: "success",
    message: "🔑 Pudiste iniciar sesión correctamente!",
  },
  logOut: {
    type: "success",
    message: "🔑 Has cerrado sesión!",
  },
  productEdited: {
    type: "success",
    message: "📝 Producto editado correctamente.",
  },
  productDeleted: {
    type: "success",
    message: "📝 Producto eliminado correctamente.",
  },
  emptySearch: {
    type: "info",
    message: "No se encontraron resultados para tu búsqueda.",
  },
};

export const MODAL_STYLES = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#fff",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1000,
  },
};
