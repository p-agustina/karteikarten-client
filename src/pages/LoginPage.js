import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken); 
        authenticateUser();
        navigate("/profile"); 
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
    <div className="authContainer">
      <h1>Login</h1>

      <form className="authForm" onSubmit={handleLoginSubmit}>
        <label className="authLabel">
        <input className="authInput" placeholder="Email Address" type="email" name="email" value={email} onChange={handleEmail} />
</label>
        <label className="authLabel">
        <input
        className="authInput"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </label>

        <button className="authBtn" type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}><button className="authBtn">Sign Up</button></Link>
      </div>
    </div>
  );
}

export default LoginPage;
