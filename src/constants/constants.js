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
};

export const ERRORS = {
  NOT_FOUND: "No pudimos encontrar resultados para tu busqueda.",
  FAILED:
    "Tuvimos un error al obtener los productos. Por favor reintente mas tarde.",
  GENERAL: "Error interno. Por favor reintente mas tarde.",
};

export const ALERTS = {
  productAdded: {
    type: "success",
    message: "El producto fue agregado correctamente al ",
    link: {
      href: "/cart",
      text: "carrito de compras",
    },
  },
  productError: {
    type: "error",
    message: "Hubo un error al agregar el producto.",
  },
  productCreated: {
    type: "success",
    message: "El producto fue creado correctamente!",
  },
  successUpdated: {
    type: "success",
    message: "Cantidad actualizada.",
  },
  qtyUpdated: {
    type: "warning",
    message: "Cantidad ajustada segun el stock disponible.",
  },
  deletedEntry: {
    type: "warning",
    message: "Producto eliminado del carrito.",
  },
  loginOk: {
    type: "success",
    message: "Pudiste iniciar sesion correctamente!",
  },
  productEdited: {
    type: "success",
    message: "Producto editado correctamente.",
  },
  productDeleted: {
    type: "success",
    message: "Producto eliminado correctamente.",
  },
};
