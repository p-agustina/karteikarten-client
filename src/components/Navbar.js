import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    console.log(isLoggedIn)
  return (
    <nav className="Navbar">
      {isLoggedIn && (
        <>
          {/* <Link to="/projects">
            <button>Projects</button>
          </Link> */}
        
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}
    
      {!isLoggedIn && (
        <>
          <NavLink to="/signup" className="Link">
            <button>SIGN UP</button>
          </NavLink>
          <NavLink to="/login" className="Link">
            <button>LOG IN</button>
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
