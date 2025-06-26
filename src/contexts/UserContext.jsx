import React, { createContext, useState } from "react";
import { ALERTS, USER_TYPES } from "../constants/constants";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const setSessionUser = (name, email) => {
    setUserName(name);
    setUserEmail(email);
    setUserType(null);
  };

  const loginAdmin = (name, pass) => {
    if (USER_TYPES.admin.user == name && USER_TYPES.admin.password == pass) {
      setUserName(name);
      setUserType(USER_TYPES.admin.type);
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider
      value={{
        userType,
        userName,
        userEmail,
        setSessionUser,
        setUserType,
        loginAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
