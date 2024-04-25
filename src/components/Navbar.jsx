import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-white dark:[#242424] text-black dark:text-white fixed top-0 w-full flex flex-row justify-between px-20 p-4 items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            {" "}
            <Link to={"/"}>
              <span className="text-black">Ecommerce</span>
            </Link>{" "}
          </h1>
        </div>
        <div>
          <ul className="flex flex-row gap-8">
            <li>Categorias</li>
            <li>Ingresa</li>
            <li>
              {" "}
              <Link to="/acercade">
                <span className="text-black">Acerca de</span>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-row">
          <div className="flex border-2 p-1 rounded-xl gap-2">
            <box-icon name="search-alt-2" color="gray"></box-icon>
            <input
              className="bg-white outline-none"
              placeholder="Buscar"
              type="search"
            />
          </div>
          <div className="flex items-center px-2 gap-4">
            <box-icon name="cart" color="gray"></box-icon>
            <box-icon name="user-circle" color="gray"></box-icon>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
