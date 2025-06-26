import React, { createContext, useEffect, useState } from "react";
import { ALERTS, USER_TYPES } from "../constants/constants";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(() =>
    localStorage.getItem("userType")
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || ""
  );
  const [userEmail, setUserEmail] = useState(
    () => localStorage.getItem("userEmail") || ""
  );

  const setSessionUser = (name, email) => {
    toast.success(name == "" ? ALERTS.logOut.message : ALERTS.loginOk.message);
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

  useEffect(() => {
    localStorage.setItem("userType", userType || "");
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
  }, [userType, userName, userEmail]);

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
