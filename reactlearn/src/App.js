import "./App.css";
import About from "./screens/About";
// import Contact from "./screens/Contact";
import Registers from "./screens/Registers";
// import UserList from "./screens/UserList";
import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(rootReducer);

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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
