import Footer from "../../components/Footer";

export default function AcercaDe() {
  return (
    <div>
      <div className=" bg-[#0e21a2] p-10 flex flex-col items-center justify-center gap-8 rounded-2xl h-96 max-w-6xl w-full m-auto">
        <h1 className="text-white font-semibold text-center">
          Bienvenido a nuestra tienda de productos electrónicos.
        </h1>
        <p>
          TechMate es un e-commerce dedicado para la comercializacion de equipos
          de computo y electronicos
        </p>
        <div className="flex flex-row gap-2">
          <box-icon name="mouse" color="#ffffff"></box-icon>
          <p>Desliza hacia abajo</p>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full max-w-6xl m-auto py-12">
        <div className="w-2/4">
          <img
            className="rounded-[10px_0px_0px_10px]"
            src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="bg-[#4a4a4a] flex flex-col items-start justify-center p-8 gap-4 rounded-[0px_10px_10px_0px]">
          <h2>
            <span className="text-3xl text-white">
              Encuentra tus productos electronicos.
            </span>
            <p>
              Desde telefonos moviles, tablets, laptops y accesorios
              tecnologicos
            </p>
          </h2>
          <button className="">Empezar ahora</button>
        </div>
      </div>

      <div className="bg-[#4a4a4a] flex flex-col justify-center items-center h-40 mt-4 ">
        <h2 className="text-2xl text-center">
          Crea tu cuenta, empieza a buscar el producto que mas te guste y
          empieza a comprar.
        </h2>
        <p>Si necesitas ayuda o tienes alguna duda no dudes en contactarnos.</p>
        <button className="my-4">Contactanos</button>
      </div>

      <Footer />
    </div>
  );
}
