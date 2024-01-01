import { useContext } from "react";
import Title from "../components/Title";
import { CountContext } from "../context/countContext";
// import UnorderedList from "../components/UnorderedList";

const About = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h1>{count}</h1>
      <Title name={"lakhan"} collegeName={"pce"} rollNo={12} />
      {/* <UnorderedList /> */}
      <Title name={"sham"} collegeName={"pillai"} rollNo={15} />
    </div>
  );
};
export default About;
