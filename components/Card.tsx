export default function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-gray p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-white-600">{text}</p>
    </div>
  );
}