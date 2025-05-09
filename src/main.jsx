import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { SectionProvider } from "./contexts/SectionContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <SectionProvider>
            <App />
          </SectionProvider>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);
