export default function Counter({ value, onAdd }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl text-center">
      <p className="text-3xl text-green-400">{value}</p>
      <button
        onClick={onAdd}
        className="mt-4 px-4 py-2 bg-blue-500 rounded-lg"
      >
        เพิ่ม
      </button>
    </div>
  );
}
