const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const values = [60, 65, 70, 75, 80, 90];

// Maximum expected value for scaling, adjust as needed (e.g., 100 for percentage)
const maxValue = 100;

export default function OverallProgress() {
  return (
    <div className="bg-gradient-to-b from-yellow-10 to-yellow-100 rounded-2xl shadow-md p-8 min-w-[550px]">
      <div className="font-semibold text-xl mb-1 text-gray-900 tracking-tight">
        Overall Progress
      </div>
      <div className="text-green-700 text-sm mb-6">
        Average patient progress over the last 6 months
      </div>
      <div className="flex items-end h-40 gap-4 mb-2">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Show the value */}
            <span className="mb-1 text-green-800 font-semibold text-xs">{v}%</span>
            {/* Bar with dynamic height */}
            <div
              style={{
                width: '70px',
                height: `${(v / maxValue) * 160}px`, // Scaled height, 160px is max bar height
                borderRadius: '24px',
                background: 'linear-gradient(180deg, #195534 80%, #c1e1c1 100%)',
                boxShadow: '0 4px 16px #19553410'
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-green-800 font-medium mt-3">
        {months.map(m => (<span key={m}>{m}</span>))}
      </div>
    </div>
  );
}
