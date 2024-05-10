import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AcercaDe from "../pages/home/acercade";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/login";
import E404 from "../pages/error/404";
import Register from "../pages/auth/register";
import Catalog from "../pages/catalog/Catalog";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "acercade",
        element: <AcercaDe />,
      },
      {
        path: "catolos",
        element : <Catalog />
      }
    ],
  },
  {
    path: "*",
    element: <E404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
