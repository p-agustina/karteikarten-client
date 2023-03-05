import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
// import Menu from "./Menu";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log(isLoggedIn);
  return (
    <nav className="Navbar">
      {isLoggedIn && (
        <>
          <span className="sign-container">
            <button onClick={logOutUser}>Logout</button>
            <span>{user && user.name}</span>
          </span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <span className="sign-container">
            <NavLink to="/signup" className="Link">
              <button>SIGN UP</button>
            </NavLink>
            <NavLink to="/login" className="Link">
              <button>LOG IN</button>
            </NavLink>
          </span>
        </>
      )}
    </nav>
  );
}

export default Navbar;
