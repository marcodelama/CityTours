import React, { useState } from "react";
import { Link } from "LINK DE REACT"; 

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "usuario" && password === "contraseña") {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p>Bienvenido, has iniciado sesión.</p>
      ) : (
        <div>
          <form>
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </form>
          <Link to="/Register">Registrarse</Link>
        </div>
      )}
    </div>
  );
}

export default Login;