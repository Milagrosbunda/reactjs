import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();
export const useSessionCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { userName } = useContext(UserContext);
  const [sessionCart, setSessionCart] = useState(null);

  useEffect(() => {
    if (!sessionCart) {
      const cart = {
        id: 1,
        owner: userName,
        products: [],
      };
      setSessionCart(cart);
    }
  }, [userName, sessionCart]);

  const checkQty = (qty) => {
    return qty <= 10 ? qty : 10;
  };

  const addProduct = (product, qty) => {
    if (!sessionCart) return;

    const existingProduct = sessionCart.products.find(
      (p) => p.sku === product.code
    );

    let updatedProducts;

    if (existingProduct) {
      updatedProducts = sessionCart.products.map((p) =>
        p.sku === product.code ? { ...p, qty: checkQty(p.qty + qty) } : p
      );
    } else {
      const newEntry = {
        sku: product.code,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: checkQty(qty),
      };
      console.log("adding value")
      updatedProducts = [...sessionCart.products, newEntry];
    }
    console.log(updatedProducts)
    const updatedCart = {
      ...sessionCart,
      products: updatedProducts,
    };
    setSessionCart(updatedCart);
  };

  const updateCart = (updatedList) => {
    setSessionCart({ ...sessionCart, products: updatedList });
  };

  return (
    <CartContext.Provider value={{ sessionCart, addProduct, updateCart, checkQty }}>
      {children}
    </CartContext.Provider>
  );
};
