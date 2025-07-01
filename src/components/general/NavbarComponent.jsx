import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { SectionContext } from "../../contexts/SectionContext";
import { SECTIONS } from "../../constants/constants";
import { useSessionCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { CgUserAdd } from "react-icons/cg";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import LoginComponent from "./LoginComponent";

function NavBarComponent() {
  const { setSessionSection, loadCartPage, section } =
    useContext(SectionContext);
  const { userName, setSessionUser, userType } = useContext(UserContext);
  const { sessionCart } = useSessionCart();
  const cartQty = sessionCart?.products?.length || 0;

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm px-3">
      <Container fluid>
        <Navbar.Brand>♍️ MarketPlace</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {Object.entries(SECTIONS).map(([key, value]) => (
              <Nav.Link
                as={Link}
                to={"/" + key}
                key={key}
                active={section === value}
                onClick={() => setSessionSection(value)}
              >
                {value}
              </Nav.Link>
            ))}

            {userType && (
              <Nav.Link
                as={Link}
                to="/admin"
                active={section === "Admin"}
                onClick={() => setSessionSection("Admin")}
              >
                Gestionar productos
              </Nav.Link>
            )}
          </Nav>

          <div className="d-flex align-items-center">
            {userName ? (
              <Button
                variant="primary"
                className="me-2"
                title="Cerrar sesión"
                onClick={() => setSessionUser("")}
              >
                <CgUserAdd className="me-1" />
                {userName}
              </Button>
            ) : (
              <LoginComponent />
            )}

            <Button
              variant={cartQty === 0 ? "info" : "success"}
              className="ms-2"
              onClick={() => loadCartPage()}
            >
              Carrito de compras 🛍️{" "}
              <Badge bg="success" className="ms-1">
                {cartQty}
              </Badge>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
