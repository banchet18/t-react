import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
      </nav>
    </header>
  );
};
export default Navbar;
