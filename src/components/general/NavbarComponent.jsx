import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { SectionContext } from "../../contexts/SectionContext";
import { SECTIONS } from "../../constants/constants";
import { useSessionCart } from "../../contexts/CartContext";
import AlertComponent from "./AlertComponent";
import { Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import { CgUserAdd } from "react-icons/cg";


function NavBarComponent() {
  const { setSessionSection, loadCartPage, section } =
    useContext(SectionContext);
  const { userName, setSessionUser, userType } = useContext(UserContext);
  const { sessionCart } = useSessionCart();
  const cartQty = sessionCart?.products?.length || 0;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
        <a className="navbar-brand">♍️ MarketPlace</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {Object.entries(SECTIONS).map(([key, value]) => (
              <li className="nav-item" key={key}>
                <Link
                  to={"/" + key}
                  className={
                    "nav-link " + (section == value ? "active-section" : "")
                  }
                  key={value}
                  onClick={() => setSessionSection(value)}
                >
                  {value}
                </Link>
              </li>
            ))}
            {userType && (
              <li className="nav-item">
                <Link
                  to={"/admin"}
                  className={
                    "nav-link " + (section == "Admin" ? "active-section" : "")
                  }
                  key="Admin"
                  onClick={() => setSessionSection("Admin")}
                >
                  Gestionar productos
                </Link>
              </li>
            )}
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <button
              type="button"
              title="Cerrar sesion"
              onClick={() => setSessionUser("")}
              className={"btn btn-primary" + (userName == "" ? " d-none" : "")}
            >
              <CgUserAdd/> {userName}
            </button>

            {userName == "" && <LoginComponent />}

            <button
              type="button"
              className={
                "cart-icon mx-3 btn btn-" + (cartQty === 0 ? "info" : "success")
              }
              onClick={() => loadCartPage()}
              href="/cart"
            >
              Carrito de compras 🛍️
              <span className="badge badge-success">{cartQty}</span>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBarComponent;
