export default function Navbar() {
  return (
    <div className="bg-white text-black fixed top-0 w-full flex flex-row justify-between px-20 p-4 items-center">
      <div>
        <h1 className="text-2xl font-semibold">Ecommerce</h1>
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          <li>Categorias</li>
          <li>Ingresa</li>
          <li>Acerca de</li>
        </ul>
      </div>
      <div className="flex flex-row">
        <div className="flex">
          <box-icon name="search-alt-2"></box-icon>
          <input className="bg-white" placeholder="Buscar" type="search" />
        </div>
        <box-icon name="cart"></box-icon>
        <box-icon name="user-circle"></box-icon>
      </div>
    </div>
  );
}
