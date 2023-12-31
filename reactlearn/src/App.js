import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Register from "./screens/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
