import "../styles/Main.css";
import { FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <div className="hero">
        <h1>Hi, My Name is Chetan Banjara</h1>
        <p>A software developer with a passion for learning and creating.</p>
        <FaLinkedin />
      </div>
      <div className="heroimg"></div>
    </div>
  );
};
export default Main;
