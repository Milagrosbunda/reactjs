import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();
export const useSessionCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { userName } = useContext(UserContext);
  const [sessionCart, setSessionCart] = useState(null);

  useEffect(() => {
    if (sessionCart) {
      localStorage.setItem("cart", JSON.stringify(sessionCart));
    }
  }, [sessionCart]);

  useEffect(() => {
    if (!userName) {
      localStorage.removeItem("cart");
    }
  }, [userName]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setSessionCart(JSON.parse(savedCart));
    } else {
      const initialCart = {
        id: 1,
        owner: userName,
        products: [],
      };
      setSessionCart(initialCart);
      localStorage.setItem("cart", JSON.stringify(initialCart));
    }
  }, [userName]);

  const checkQty = (qty) => {
    return qty <= 10 ? qty : 10;
  };

  const addProduct = (product, qty) => {
    if (!sessionCart) return;

    const existingProduct = sessionCart.products.find(
      (p) => p.code === product.code
    );

    let updatedProducts;

    if (existingProduct) {
      updatedProducts = sessionCart.products.map((p) =>
        p.code === product.code ? { ...p, qty: checkQty(p.qty + qty) } : p
      );
    } else {
      const newEntry = {
        code: product.code,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: checkQty(qty),
      };
      updatedProducts = [...sessionCart.products, newEntry];
    }
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
    <CartContext.Provider
      value={{ sessionCart, addProduct, updateCart, checkQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
