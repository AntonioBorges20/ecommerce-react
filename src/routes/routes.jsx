import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AcercaDe from "../acercade";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/acercade",
        element: <AcercaDe />
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>
    }
])