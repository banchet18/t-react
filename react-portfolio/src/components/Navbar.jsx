import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <img
          className="imglogo"
          src="https://logos.textgiraffe.com/logos/logo-name/Chetan-designstyle-smoothie-m.png"
          alt=""
        />
      </div>
      <nav className="nav">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/project" className="link">
          Projects
        </Link>
      </nav>
      <div>
        <Link to="./contact" className="link">
          Contact Me
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
