import React, { createContext, useState } from "react";
import ProductsSection from "../sections/ProductsSection";
import PromoSection from "../sections/PromoSection";
import CartSection from "../sections/CartSection";
import HomeSection from "../sections/HomeSection";
import { ALERTS, SECTIONS } from "../constants/constants";
import { useNavigate } from "react-router-dom";

export const SectionContext = createContext();
export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(SECTIONS.home);
  const navigate = useNavigate();
  const [showGlobalAlert, setshowGlobalAlert] = useState(ALERTS.none); 

  const showAlert = (code) => {
    setshowGlobalAlert(code);
    setTimeout(() => setshowGlobalAlert(null), 2000);
  };

  const setSessionSection = (name) => {
    setSection(name);
  };

  const loadCartPage = () => {
    setSessionSection("Cart");
    navigate("/cart");
  };

  return (
    <SectionContext.Provider
      value={{ section: section, setSessionSection, loadCartPage, showAlert, showGlobalAlert, setshowGlobalAlert }}
    >
      {children}
    </SectionContext.Provider>
  );
};
