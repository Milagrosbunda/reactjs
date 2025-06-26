import React, { createContext, useState } from "react";
import { SECTIONS } from "../constants/constants";
import { useNavigate } from "react-router-dom";

export const SectionContext = createContext();
export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(SECTIONS.home);
  const navigate = useNavigate();

  const setSessionSection = (name) => {
    setSection(name);
  };

  const loadCartPage = () => {
    setSessionSection("Cart");
    navigate("/cart");
  };

  return (
    <SectionContext.Provider
      value={{ section: section, setSessionSection, loadCartPage }}
    >
      {children}
    </SectionContext.Provider>
  );
};
