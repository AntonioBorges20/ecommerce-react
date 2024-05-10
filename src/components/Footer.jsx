export default function Footer() {
    return (
        <footer className="bg-[#141414] items-start justify-evenly gap-8 p-8 w-full botton-0 flex flex-row py-36">
        <div>
          <h3 className="text-2xl font-semibold">Acerca de</h3>
          <ul className="pt-6 flex flex-col gap-1">
            <li>¿Quienes somos?</li>
            <li>¿Donde estamos?</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Mi cuenta</h3>
          <ul className="pt-6 flex flex-col gap-1">
            <li>Mi perfil</li>
            <li>Mis favoritos</li>
            <li>Mis compras</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Tienda</h3>
          <ul className="pt-6 flex flex-col gap-1">
            <li>Categorias</li>
            <li>Celulares?</li>
            <li>Laptops</li>
            <li>Tablets</li>
            <li>Accesorios</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Contactanos</h3>
          <ul className="flex flex-row gap-4 pt-6">
            <li>
              <box-icon name="facebook-circle" type="logo" color="#ffffff"></box-icon>
            </li>
            <li>
              <box-icon name="instagram" type="logo" color="#ffffff"></box-icon>
            </li>
            <li>
              <box-icon name="twitter" type="logo" color="#ffffff"></box-icon>
            </li>
            <li>
              <box-icon name="tiktok" type="logo" color="#ffffff"></box-icon>
            </li>
          </ul>
          <div className="flex flex-row items-center justify-center">
            <input className="p-2 bg-white rounded-sm" type="text" placeholder="Correo electronico" />
            <button>Enviar</button>
          </div>
        </div>
      </footer>
    )
}