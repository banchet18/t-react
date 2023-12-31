import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Registers from "./screens/Registers";
import UserList from "./screens/UserList";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/register",
    element: <Registers />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
