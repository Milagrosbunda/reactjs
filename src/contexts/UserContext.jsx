import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const setSessionUser = (name, email) => {
    setUserName(name);
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userName, userEmail, setSessionUser }}>
      {children}
    </UserContext.Provider>
  );
};
