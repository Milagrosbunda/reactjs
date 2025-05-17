import { useState, useContext, useRef } from "react";
import { UserContext } from "../../contexts/UserContext";

function WelcomeComponente() {
  const { setSessionUser } = useContext(UserContext);
  const { userName } = useContext(UserContext);
  const emailRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validForm, setValidForm] = useState(name != "" && email != "");

  const login = () => {
    setSessionUser(name, email);
    setName("");
    setEmail("");
  };

  const checkForm = (value) => {
    setEmail(value);
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidForm(mailRegex.test(value));
  };

  return (
    <>
      <div class={"card text-center " + (userName == "" ? "" : " d-none")}>
        <div className="card-body">
          <h5 class="card-title">Accede a descuentos imperdibles</h5>

          <div class="input-group my-3">
            <input
              type="text"
              class="form-control"
              placeholder="Ingresa tu nombre..."
              aria-label="Ingresa tu nombre..."
              aria-describedby="basic-addon2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              ref={emailRef}
              class="form-control"
              placeholder="Ingresa tu email..."
              aria-label="Ingresa tu email..."
              aria-describedby="basic-addon2"
              value={email}
              onChange={(e) => checkForm(e.target.value)}
            />

            <div class="input-group-append">
              <button
                class="btn btn-primary"
                type="button"
                onClick={() => login()}
                disabled={!validForm}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WelcomeComponente;
