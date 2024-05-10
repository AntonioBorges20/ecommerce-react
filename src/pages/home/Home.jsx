import "boxicons";

import CardPhone from "../../components/CardPhone";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

export default function App() {
  return (
    <div className="">
      <div className="bg-fondo bg-blue-500 p-10 flex flex-col items-center justify-center gap-8 rounded-2xl h-96 max-w-6xl w-full m-auto">
        <h1 className="text-white font-semibold text-center">
          Compra buenos productos <br /> a buenos precios
        </h1>
        <button className="bg-gray-200">Comprar</button>
      </div>

      <div className="grid grid-cols-6 gap-4 pt-8 max-w-6xl w-full m-auto">
        <Card
          title="Celulares"
          picture={
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          title="Laptops"
          picture={
            "https://images.unsplash.com/photo-1622774161048-863b17ed0d8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          title="Tablets"
          picture={
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          title="Accesorios"
          picture={
            "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          title="Audifonos"
          picture={
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          title="Cargadores"
          picture={
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>

      <div className="flex items-center justify-center h-80">
        <h2 className="text-5xl font-semibold text-center">
          Accesorios!! Busca los <br /> accesorios que necesitas para <br /> tu
          celular.
        </h2>
      </div>

      <div className="flex flex-row justify-center w-full max-w-6xl m-auto">
        <div className="w-2/4">
          <img
            className="rounded-[10px_0px_0px_10px]"
            src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="bg-[#4a4a4a] flex flex-col items-start justify-center p-8 gap-4 rounded-[0px_10px_10px_0px]">
          <h2>
            <span className="text-3xl text-white">Tienda.</span>
            <span className="text-gray-300 text-2xl">
              Compra tus productos de <br />
              manera online.
            </span>
          </h2>
          <button className="">Ver más.</button>
        </div>
      </div>

      <div className="flex flex-col justify-center pt-8 max-w-6xl w-full m-auto">
        <h2 className="font-semibold text-2xl text-center">
          Los mejores dispositivos
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <CardPhone
            title="iphone 15"
            price={21000}
            picture={
              "https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <CardPhone
            title="iphone 15"
            price={21000}
            picture={
              "https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <CardPhone
            title="iphone 15"
            price={21000}
            picture={
              "https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <CardPhone
            title="iphone 15"
            price={21000}
            picture={
              "https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>

      <div className="bg-[#4a4a4a] flex flex-col justify-center items-center h-40 mt-4 ">
        <h2 className="text-2xl text-center">
          Crea tu cuenta, empieza a buscar el producto que mas te guste y
          empieza a comprar.
        </h2>
        <button>Registrate</button>
      </div>

      <Footer />
    </div>
  );
}
