import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Registrate</h1>
        <p className="text-xl">Crea una cuenta para empezar a comprar.</p>
        <span>
          <Link to={"/"}>Volver al inicio</Link>
        </span>
      </div>
      <form className="flex flex-col gap-2 mt-8">
        <div className="flex flex-col">
          <label className="mb-2">Nombre</label>
          <div className="flex flex-row items-center justify-center bg-black p-1 rounded-md border-2">
            <box-icon name="user" color="#ffffff"></box-icon>
            <input
              className="border-none outline-none rounded-md p-1"
              type="text"
              placeholder="Nombre"
            />
          </div>
        </div>
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
            name="password"
              className="border-none outline-none rounded-md p-1"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex flex-row items-center justify-center bg-black p-1 rounded-md border-2 mt-2">
            <box-icon name="key" color="#ffffff"></box-icon>
            <input
            name="password-confirm"
              className="border-none outline-none rounded-md p-1"
              type="password"
              placeholder="Repite contraseña"
            />
          </div>
        </div>
        <button className="mt-2 rounded-md py-2">Registrate</button>
      </form>
      <p className="mt-2 font-bold">
        ¿Ya tienes cuenta?{" "}
        <Link to={"/login"} className="text-blue-500">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
