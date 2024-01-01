import Register from "./screens/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./screens/Home";

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
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
