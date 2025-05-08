import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function WelcomeComponente() {
  const { setSessionUser } = useContext(UserContext);
  const { userName } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      {console.log(userName == "")}
      <div class={"card text-center " + (userName == "" ? "" : " d-none")}>
        <div className="card-body">
          <h5 class="card-title">Accede a descuentos imperdibles</h5>

          <div class="input-group mb-3">
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
              class="form-control"
              placeholder="Ingresa tu email..."
              aria-label="Ingresa tu email..."
              aria-describedby="basic-addon2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => setSessionUser(name, email)}
                disabled={name == "" || email == ""}
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
