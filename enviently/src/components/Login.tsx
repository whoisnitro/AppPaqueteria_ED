import "./Login.css";
import { users } from "../data/user";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleSubmit = () => {
    const foundUser = users.find(
      (value) => value.username === username && value.password === password
    );
    if (foundUser) {
      console.log('entra');
      setLoggedIn(true);
    } else {
      setError(true);
  
      setTimeout(() => {
        setError(false);
        setUsername('');
        setPassword('');
      }, 2000);
    }
  };
  

  if (loggedIn) {
    navigate('/menu');
  }

  useEffect(() => {}, [username, password]);

  return (
    <div className="login">
      <div className="login-title">
        <h1 className="title">Bienvenido a Enviently</h1>
      </div>
      <div className="login-form">
        {error && (
          <p className="error">El usuario o la contraseña son incorrectos</p>
        )}
        <label className="form-title" htmlFor="usuario">
          - Usuario -
        </label>
        <input
          type="text"
          className="form-input"
          id="usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-password" htmlFor="password">
          - Password -
        </label>
        <input
          type="text"
          className="form-input"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
