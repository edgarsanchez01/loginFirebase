import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../firebase"

function salir() {
    return auth.signOut()
    navigate("/")
}

export function Home(props) {
  return (
    <div>
      <div>
        <div>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/signup">SignUp</Link>
          </h1>
        </div>
      </div>
      <h2>{props.name ? `Bienvenido - ${props.name}` : "Inicie sesion"}</h2>
      <button onClick={salir}>Salir</button>
    </div>
  );
}
