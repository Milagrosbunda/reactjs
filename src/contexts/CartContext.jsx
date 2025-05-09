import React, { createContext, useContext, useState, useEffect } from "react";
import ProductsSection from "../sections/ProductsSection";
import PromoSection from "../sections/PromoSection";
import CartSection from "../sections/CartSection";
import HomeSection from "../sections/HomeSection";
import { UserContext } from "./UserContext";

export const CartContext = createContext();
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

  const addProduct = (product, qty) => {
    if (!sessionCart) return;
    const entry = {
      sku: product.code,
      name: product.name,
      price: product.price,
      qty: qty,
    };

    const updatedCart = {
      ...sessionCart,
      products: [...sessionCart.products, entry],
    };

    setSessionCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ sessionCart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
