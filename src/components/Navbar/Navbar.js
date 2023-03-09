import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import "./Navbar.css";
import logo from "./logo.png";
// import { ThemeContext } from "../../context/theme.context";
// import Menu from "./Menu";

function Navbar() {
  // const value = useContext(ThemeContext);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="Navbar">
    <div className="NavbarContainer">
    <div className="logoContainer"><img src={logo} alt="logo"/></div>
      {isLoggedIn && (
        <div className="NavbarLinksContainer">
        <div>
            <NavLink to="/">Home</NavLink>
            
            <NavLink to="/profile">{user && user.name}</NavLink> 
            <NavLink to="/" onClick={logOutUser}>Logout</NavLink>
            {/* <NavLink to="/profile"><Menu logOutUser={logOutUser} user={user}/></NavLink>  */}
            </div>
        </div>
      )}

      {!isLoggedIn && (
        <div className="NavbarLinksContainer">
          <span className="sign-container">
            <NavLink to="/signup" className="Link">
              <button>SIGN UP</button>
            </NavLink>
            <NavLink to="/login" className="Link">
              <button>LOG IN</button>
            </NavLink>
          </span>
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
