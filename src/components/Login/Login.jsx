import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { InputControl } from "../InputControl/InputControl";
import { useState } from "react";
useState;
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const Iniciar = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (resp) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          placeholde="Ingresa tu correo"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputControl
          label="Contrasena"
          placeholde="Ingresa tu contrasena"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={Iniciar} disabled={submitButtonDisabled}>Login btn</button>
          <p>
            Crear cuenta
            <span>
              <Link to="/signup">Registrar</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
