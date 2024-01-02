import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const Hero = () => {
  const SOCIAL = [
    { id: 1, link: "sad", icon: <FaTwitter /> },
    { id: 1, link: "sad", icon: <FaFacebook /> },
    { id: 1, link: "sad", icon: <FaLinkedin /> },
  ];

  return (
    <section className="min-h-screen flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">Chetan </h2>
      <h3 className="py-3 text-2xl">Software engineer</h3>
      <p className=" max-w-xl font-light text-gray-500">
        hello <span className="animate-pulse text-4xl">👋</span>
        welcome to site, I am a freelace software engineer. I love to work on
        web dev, Mobile dev & automation projects.
      </p>
    </section>
  );
};
export default Hero;
