import { useContext, useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";
import { SectionContext } from "../../contexts/SectionContext";
import { ALERTS, USER_TYPES } from "../../constants/constants";
import WelcomeComponente from "../banners/WelcomeComponent";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { loginAdmin } = useContext(UserContext);
  const [showError, setShowError] = useState(false);
  const { showAlert, setSessionSection } = useContext(SectionContext);
  const navigate = useNavigate();

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "2rem 2rem 1rem 2rem",
      width: "40%",
      textAlign: "center",
      borderRadius: "50px",
      backgroundColor: "rgb(250, 249, 198)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
  };

  const loginAsAdmin = (e) => {
    if (!loginAdmin(userName, pass)) {
      e.preventDefault();
      setShowError(true);
      setOpenModal(true);
    } else {
      setShowError(false);
      setOpenModal(false);
      showAlert(ALERTS.loginOk);
      setSessionSection("Admin");
      navigate("/admin");
    }
  };

  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        title="Login"
        onClick={() => setOpenModal(true)}
      >
        👪 Login
      </button>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Ya casi estamos..."
        style={modalStyles}
      >
        <div>
          {showError && (
            <div className="alert alert-danger mt-2 text-center">
              {ALERTS.failedLogin.message}
            </div>
          )}

          {!isAdmin ? (
            <WelcomeComponente />
          ) : (
            <form className="login-form p-2" onSubmit={loginAsAdmin}>
              <div className="mb-3">
                <label className="form-label px-2">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={pass == "" || userName == ""}
              >
                Ingresar
              </button>
            </form>
          )}

          <div className="form-check my-2 d-flex align-items-center justify-content-end gap-3 mx-3">
            <p
              className="text-primary mt-3 link mx-3"
              onClick={() => setIsAdmin((prev) => !prev)}
            >
              {isAdmin
                ? "O continuar como cliente"
                : "O ingresar como administrador"}
            </p>

            <button
              className="btn btn-outline-secondary"
              onClick={() => setOpenModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginComponent;
