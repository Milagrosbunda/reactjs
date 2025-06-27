import { useContext, useState } from "react";
import Modal from "react-modal";
import { SectionContext } from "../../contexts/SectionContext";
import { ALERTS, MODAL_STYLES } from "../../constants/constants";
import WelcomeComponente from "../banners/WelcomeComponent";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AlertComponent from "../general/AlertComponent";

function LoginComponent() {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { loginAdmin } = useContext(UserContext);
  const [showError, setShowError] = useState(false);
  const { setSessionSection } = useContext(SectionContext);
  const navigate = useNavigate();
  const [usedUser, setUsedUser] = useState(false);
  const [usedPass, setUsedPass] = useState(false);
  const validForm = userName.trim() !== "" && pass.trim() !== "";

  const loginAsAdmin = (e) => {
    if (!loginAdmin(userName, pass)) {
      e.preventDefault();
      setShowError(true);
      setOpenModal(true);
    } else {
      setShowError(false);
      setOpenModal(false);
      setSessionSection("Admin");
      navigate("/admin");
    }
    toast.success(ALERTS.loginOk.message);
  };

  const changeMode = () => {
    setUsedPass(false);
    setUsedUser(false);
    setIsAdmin((prev) => !prev);
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
        style={MODAL_STYLES}
      >
        <div>
          {showError && (
            <div className="alert alert-danger mt-2 text-center">
              {ALERTS.failedLogin.message}
            </div>
          )}
          <div>{!validForm && usedUser && usedPass && <AlertComponent />}</div>

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
                  onBlur={() => setUsedUser(true)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••"
                  onChange={(e) => setPass(e.target.value)}
                  onBlur={() => setUsedPass(true)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!validForm}
              >
                Ingresar
              </button>
            </form>
          )}

          <div className="form-check my-2 d-flex align-items-center justify-content-end gap-3 mx-3">
            <p
              className="text-primary mt-3 link mx-3"
              onClick={() => changeMode()}
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
