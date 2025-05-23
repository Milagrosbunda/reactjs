import React, { createContext, useState, useContext } from "react";
import { ALERTS, USER_TYPES } from "../constants/constants";
import { SectionContext } from "./SectionContext";

export const UserContext = createContext();
export const useCustomProducts = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [customProducts, setCustomProducts] = useState([]);

  const setSessionUser = (name, email) => {
    setUserName(name);
    setUserEmail(email);
  };

  const loginAdmin = (name, pass) => {
    if (USER_TYPES.admin.user == name && USER_TYPES.admin.password == pass) {
      setUserName(name);
      setUserType(USER_TYPES.admin.type);
      return true;
    }
    return false;
  };

  const createProduct = (newName, newDesc, newPrice) => {
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name: newName,
      price: newPrice,
      description: newDesc,
      image: "https://picsum.photos/200",
    };
    setCustomProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <UserContext.Provider
      value={{
        userType,
        userName,
        userEmail,
        setSessionUser,
        setUserType,
        createProduct,
        customProducts,
        setCustomProducts,
        loginAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
