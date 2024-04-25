export default function Card({ title, picture }) {
  return (
    <div
      className=" h-40 p-2 rounded-2xl"
      style={{
        background: `url(${picture})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
}
