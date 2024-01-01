import Register from "./screens/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { store } from "./store/Store";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
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
