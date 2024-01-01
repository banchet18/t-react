import { useContext } from "react";
import Title from "../components/Title";
import { CountContext } from "../context/countContext";
// import UnorderedList from "../components/UnorderedList";

const About = () => {
  const value = useContext(CountContext);
  return (
    <div>
      <h1>{value}</h1>
      <Title name={"lakhan"} collegeName={"pce"} rollNo={12} />
      {/* <UnorderedList /> */}
      <Title name={"sham"} collegeName={"pillai"} rollNo={15} />
    </div>
  );
};
export default About;
