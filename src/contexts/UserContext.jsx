import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();
export const useCustomProducts = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [customProducts, setCustomProducts] = useState([]);

  const setSessionUser = (name, email) => {
    setUserName(name);
    setUserEmail(email);
  };

  const createProduct = (newName, newDesc, newPrice) => {
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name: newName,
      price: newPrice,
      description: newDesc,
      image: "https://picsum.photos/200"
    };
    setCustomProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <UserContext.Provider
      value={{ userName, userEmail, setSessionUser, createProduct, customProducts, setCustomProducts }}
    >
      {children}
    </UserContext.Provider>
  );
};
