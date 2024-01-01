// import Home from "./screens/Home";
import Register from "./screens/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "redux";
import rootReducer from "./reducers";

const store = configureStore(rootReducer);

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};
export default App;
