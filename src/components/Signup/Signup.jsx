import { useState } from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../InputControl/InputControl";

export function Signup() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({ name: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (resp) => {
        setSubmitButtonDisabled(false);
        const user = resp.user;
        await updateProfile(user, { displayName: values.name });
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
        <h1 className={styles.heading}>Registro</h1>
      </div>

      <InputControl
        label="Nombre"
        placeholder="Ingrese un nombre"
        onChange={(event) =>
          setvalues((prev) => ({ ...prev, name: event.target.value }))
        }
      />

      <InputControl
        label="Email"
        placeholder="Ingrese un correo"
        onChange={(event) =>
          setvalues((prev) => ({ ...prev, email: event.target.value }))
        }
      />

      <InputControl
        label="Contrasena"
        placeholder="Ingrese una contrasena"
        onChange={(event) =>
          setvalues((prev) => ({ ...prev, password: event.target.value }))
        }
      />

      <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
        <button onClick={registro} disabled={submitButtonDisabled}>
          Registrarse
        </button>
        <p>
          Si ya tienes una cuenta
          <span>
            <Link to="/login"> Inicia sesion</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
