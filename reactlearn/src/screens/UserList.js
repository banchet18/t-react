import Usercard from "../components/Usercard";
import data from "../utils";

const UserList = () => {
  return (
    <div>
      {data.map(({ name, collegeName, rollNo }) => {
        return (
          <Usercard name={name} collegeName={collegeName} rollNo={rollNo} />
        );
      })}
    </div>
  );
};
export default UserList;
