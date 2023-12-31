import { useSelector } from "react-redux";
import { incrementByAmount } from "../store/reducer";
import store from "../store/store";

const Contact = () => {
  const value = useSelector((state) => state.value);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          store.dispatch(incrementByAmount(5));
          console.log("state updated");
        }}
      >
        This is contact screen
      </button>
    </div>
  );
};
export default Contact;
