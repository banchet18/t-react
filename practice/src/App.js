// import Home from "./screens/Home";
import Register from "./screens/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";

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
