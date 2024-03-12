import React from 'react'
import ReactDOM from 'react-dom/client'
import PageOne from './compoment/page_one.jsx'
import Login from './compoment/login.jsx'
import Tina from './compoment/tina.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <PageOne />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Tina />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);