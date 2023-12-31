import { incrementByAmount } from "../store/reducer";
import store from "../store/store";

const Contact = () => {
  store.dispatch(incrementByAmount(5));
  return (
    <button
      onClick={() => {
        store.dispatch(incrementByAmount(5));
        console.log("state updated");
      }}
    >
      This is contact screen
    </button>
  );
};
export default Contact;
