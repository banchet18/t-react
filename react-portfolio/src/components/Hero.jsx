import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const Hero = () => {
  const SOCIAL = [
    { id: 1, link: "sad", icon: <FaTwitter /> },
    { id: 1, link: "sad", icon: <FaFacebook /> },
    { id: 1, link: "sad", icon: <FaLinkedin /> },
  ];

  return (
    <section>
      <h2>Chetan </h2>
      <h3>Software engineer</h3>
      <p>
        hello <span className="animate-pulse text-4xl">👋</span>
        welcome to site, I am a freelace software engineer. I love to work on
        web dev, Mobile dev & automation projects.
      </p>
    </section>
  );
};
export default Hero;
