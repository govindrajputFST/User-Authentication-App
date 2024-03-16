import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <ul className="menu">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/about">About</Link>
        </li>
        <li className="item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="item">
          <Link to="/signIn">SignIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
