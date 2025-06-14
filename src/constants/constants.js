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
