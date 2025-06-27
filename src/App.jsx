import "./App.css";
import "./styles/custom.scss";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/general/NavbarComponent";
import CartSection from "./sections/CartSection";
import ProductsSection from "./sections/ProductsSection";
import PromoSection from "./sections/PromoSection";
import HomeSection from "./sections/HomeSection";
import FooterComponent from "./components/general/FooterComponent";
import AdminSection from "./sections/AdminSection";
import ProtectedRoute from "./contexts/ProtectedRoute";
import PDPSection from "./sections/PDPSection";
import { PRODUCT_REQUEST } from "./constants/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <NavBarComponent />
        <main className="flex-fill pt-5">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/home" element={<HomeSection />} />
            <Route
              path="/products"
              element={<ProductsSection type={PRODUCT_REQUEST.FULL} />}
            />
            <Route path="/product/:id" element={<PDPSection />} />
            <Route path="/promos" element={<PromoSection />} />
            <Route path="/cart" element={<CartSection />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <AdminSection />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
