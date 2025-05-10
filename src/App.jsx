import "./App.css";
import "./styles/custom.scss";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/general/NavbarComponent";
import CartSection from "./sections/CartSection";
import ProductsSection from "./sections/ProductsSection";
import PromoSection from "./sections/PromoSection";
import HomeSection from "./sections/HomeSection";
import FooterComponent from "./components/general/FooterComponent";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBarComponent />
        <main className="flex-fill pt-5">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/home" element={<HomeSection />} />
            <Route
              path="/products"
              element={<ProductsSection limited={false} />}
            />
            <Route path="/promos" element={<PromoSection />} />
            <Route path="/cart" element={<CartSection />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
