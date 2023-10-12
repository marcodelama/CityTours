import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(true);
  };

  return (
    <div>
      {registered ? (
        <p>Registro exitoso. Puedes iniciar sesión ahora.</p>
      ) : (
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
          <button type="button" onClick={handleRegister}>
            Registrarse
          </button>
        </form>
      )}
    </div>
  );
}

export default Register;
