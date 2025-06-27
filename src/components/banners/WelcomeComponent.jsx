import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import AlertComponent from "../general/AlertComponent";

function WelcomeComponente() {
  const { setSessionUser, userName } = useContext(UserContext);
  const [form, setForm] = useState({ name: "", email: "" });
  const [formUsed, setFormUsed] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = form.name.trim() !== "" && isValidEmail(form.email);

  const loginUser = () => {
    setSessionUser(form.name, form.email);
    setForm({ name: "", email: "" });
    setFormUsed(false);
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "email") setFormUsed(true);
  };

  if (userName !== "") return null;

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Accede a descuentos imperdibles</h5>

        {!isValidEmail(form.email) && formUsed && <AlertComponent />}

        <div className="input-group my-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Ingresa tu nombre..."
            value={form.name}
            onChange={handleValueChange}
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingresa tu email..."
            value={form.email}
            onChange={handleValueChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              disabled={!isFormValid}
              onClick={loginUser}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponente;
