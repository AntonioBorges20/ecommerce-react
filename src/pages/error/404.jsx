import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="flex flex-col items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-semibold">404 Not Found</h1>
            <p className="text-xl">La página que buscas no existe</p>
            <Link to={"/"}>Volver al inicio</Link>
        </div>
        </div>
    );
}