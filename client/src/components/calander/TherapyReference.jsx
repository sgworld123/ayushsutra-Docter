export default function TherapyReference({ therapies }) {
  return (
    <div className="bg-gradient-to-b from-yellow-10 to-yellow-100 p-4 rounded shadow mt-6 max-w-4x2 mx-auto">
      <h3 className="font-bold text-2xl mb-3 text-green-900">Therapy Reference</h3>
      <p className="text-sm text-gray-500 mb-2">Quick reference for standard therapies.</p>
      <div className="grid grid-cols-3 font-semibold border-b pb-2 mb-2">
        <span>Therapy</span>
        <span>Duration</span>
        <span>Description</span>
      </div>
      {Object.entries(therapies).map(([name, details]) => (
        <div key={name} className="grid grid-cols-3 py-1 text-sm">
          <span>{name}</span>
          <span>{details.duration}</span>
          <span>{details.description}</span>
        </div>
      ))}
    </div>
  );
}
