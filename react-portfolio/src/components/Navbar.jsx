import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/project" className="link">
          Projects
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
