export default function CardPhone({ title, picture, price }) {
  return (
    <div className="bg-[#4a4a4a] rounded-xl p-4 flex flex-col items-center gap-4">
    <img src={picture} className="w-full bg-cover rounded-xl" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-base">$ {price}</p>
    </div>
  );
}
