import "boxicons";
import Card from "./components/card";

export default function App() {
  return (
    <div className="max-w-6xl w-full m-auto">
      <div className="bg-fondo bg-blue-500 p-10 flex flex-col items-center justify-center gap-8 rounded-2xl h-96">
        <h1 className="text-white font-semibold text-center">Compra buenos productos <br /> a buenos precios</h1>
        <button className="bg-gray-200">Comprar</button>
      </div>

      <div className="grid grid-cols-6 gap-4 pt-8">
        <Card title="Celulares" picture={'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <Card title="Laptops" picture={'https://images.unsplash.com/photo-1622774161048-863b17ed0d8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <Card title="Tablets"picture={'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <Card title="Accesorios"picture={'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <Card title="Audifonos" picture={'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <Card title="Cargadores" picture={'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
      </div>
    </div>
  );
}
