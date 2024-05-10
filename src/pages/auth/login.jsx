import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Bienvenido</h1>
        <p className="text-xl">Inicia sesión para continuar </p>
        <span>
          <Link to={"/"}>Volver al inicio</Link>
        </span>
      </div>
      <form className="flex flex-col gap-2 mt-8">
        <div className="flex flex-col">
          <label className="mb-2">Correo electronico</label>
          <div className="flex flex-row items-center justify-center bg-black p-1 rounded-md border-2">
            <box-icon name="envelope" color="#ffffff"></box-icon>
            <input
              className="border-none outline-none rounded-md p-1"
              type="email"
              placeholder="Correo electronico"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Contraseña</label>
          <div className="flex flex-row items-center justify-center bg-black p-1 rounded-md border-2">
            <box-icon name="key" color="#ffffff"></box-icon>
            <input
              className="border-none outline-none rounded-md p-1"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <button className="mt-2 rounded-md py-2">Iniciar sesión</button>
      </form>
      <p className="mt-2 font-bold">¿No tienes cuenta? <Link  to={"/register"} className="text-blue-500">Registrate</Link></p>
    </div>
  );
}
