import { incrementByAmount } from "../store/reducer";
import store from "../store/store";

const Contact = () => {
  store.dispatch(incrementByAmount);
  return <div>This is contact screen</div>;
};
export default Contact;
