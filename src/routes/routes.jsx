import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AcercaDe from "../acercade";
import Navbar from "../components/Navbar";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "",
                element: <App />
            },
            {
                path: "acercade",
                element: <AcercaDe />
            }
        ]
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>
    }
])