import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Registers from "./screens/Registers";
import UserList from "./screens/UserList";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },
  {
    path: "/about",
    element: <div>about!</div>,
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
