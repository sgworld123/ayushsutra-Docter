export default function DiseaseDistribution() {
  return (
    <div className="bg-gradient-to-b from-yellow-10 to-yellow-100 rounded-2xl shadow-md p-8 min-w-[600px]">
      <div className="font-semibold text-xl tracking-tight text-gray-900 mb-1">
        Disease Distribution
      </div>
      <div className="text-green-700 text-sm mb-6">
        Breakdown of patients by primary condition
      </div>
      {/* CSS donut chart */}
      <div className="flex justify-center items-center h-40">
        <div
          className="w-36 h-36 rounded-full border-8 border-green-100 flex items-center justify-center"
          style={{
            background:
              'conic-gradient(#195534 0 270deg, #b6dab6 270deg 315deg, #e5eee0 315deg 340deg, #19553499 340deg 360deg)',
          }}
        >
          <span className="text-2xl font-bold text-green-900">75%</span>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-8">
        <Legend color="#195534" label="Condition A" />
        <Legend color="#b6dab6" label="Condition B" />
        <Legend color="#e5eee0" label="Condition C" />
        <Legend color="#19553499" label="Other" />
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block w-3 h-3 rounded-full"
        style={{ background: color }}
      ></span>
      <span className="text-xs text-gray-700">{label}</span>
    </div>
  );
}
