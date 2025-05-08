import React, { createContext, useState } from "react";
import ProductsSection from "../sections/ProductsSection";
import PromoSection from "../sections/PromoSection";
import CartSection from "../sections/CartSection";
import HomeSection from "../sections/HomeSection";
import { SECTIONS } from "../constants/constants";

export const SectionContext = createContext();
export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(SECTIONS.home);

  const setSessionSection = (name) => {
    setSection(name);
  };

  /* const renderContent = () => {
  switch (section) {
      case SECTIONS.products:
        return <ProductsSection limited={false} />;
      case SECTIONS.promos:
        return <PromoSection />;
      case SECTIONS.cart:
        return <CartSection />;
      default:
        return <HomeSection />;
    }
  };*/

  return (
    <SectionContext.Provider value={{ section: section, setSessionSection }}>
      {children}
    </SectionContext.Provider>
  );
};
