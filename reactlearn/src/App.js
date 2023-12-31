import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Registers from "./screens/Registers";
import UserList from "./screens/UserList";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
