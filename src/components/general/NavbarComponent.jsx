import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import { SectionContext } from "../../contexts/SectionContext";
import { SECTIONS } from "../../constants/constants";
import { CartContext } from "../../contexts/CartContext";

function NavBarComponent() {
  const { setSessionSection } = useContext(SectionContext);
  const navigate = useNavigate();
  const { userName, setSessionUser } = useContext(UserContext);
  const { sessionCart } = useContext(CartContext);
  const cartQty = sessionCart?.products?.length || 0;


  const loadCartPage = () => {
    setSessionSection("Carrito");
    navigate("/cart");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mx-3">
        <a class="navbar-brand">♍️ MarketPlace</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            {Object.entries(SECTIONS).map(([key, value]) => (
              <li class="nav-item">
                <a
                  class="nav-link"
                  href={"/" + key}
                  key={value}
                  onClick={() => setSessionSection(value)}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <button
              type="button"
              title="Cerrar sesion"
              onClick={() => setSessionUser("")}
              className={"btn btn-primary" + (userName == "" ? " d-none" : "")}
            >
              👪 {userName}
            </button>
            <button
              type="button"
              className={
                "mx-3 btn btn-" +
                (cartQty === 0 ? "secondary" : "success")
              }
              onClick={() => loadCartPage()}
              href="/cart"
            >
              Carrito de compras 🛍️
              <span class="badge badge-success">
                {cartQty}
              </span>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBarComponent;
/*
      <div className="my-5 row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mx-3">
          <div className="col-8">
            <a class="navbar-brand" href="#">
              MarketPlace
            </a>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                {sections.map((section) => (
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#"
                      key={section}
                      onClick={() => onSelection(section)}
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div>
              <button
                type="button"
                className={
                  "btn btn-primary" + (userName == "" ? " d-none" : "")
                }
              >
                {userName}
              </button>
            </div>
            <button
              type="button"
              className={"btn btn-" + (count > 0 ? "success" : "secondary")}
              //style={{ marginLeft: "75%" }}
              onClick={() => onSelection("Carrito")}
            >
              Carrito de compras 🛍️
              <span class="badge badge-success">{count}</span>
            </button>
          </div>
        </nav>
      </div>*/
