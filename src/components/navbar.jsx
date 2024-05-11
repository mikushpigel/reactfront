import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/context";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Mika <i className="bi bi-camera-reels-fill"></i> Editing
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {user?.biz && (
            <>
              <li className="nav-item">
                <NavLink to="allcards" className="nav-link">
                  Cards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="createcard" className="nav-link">
                  Create
                </NavLink>
              </li>
            </>
          )}
          {user ? (
            <li className="nav-item">
              <NavLink to="logout" className="nav-link">
                Log Out
              </NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="signin" className="nav-link">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="signup" className="nav-link">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="signupbiz" className="nav-link">
                  Sign Up Biz
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
