export default function Schedule({ selectedDate, schedules, leaves }) {
  const today = new Date().toISOString().split("T")[0];

  // Determine text color for schedule entries based on date
  function getTextColor(date) {
    if (leaves.includes(date)) {
      return "text-red-600";
    }
    if (date === today) {
      return "text-yellow-600";
    }
    if (date <= today) {
      return "text-green-600";
    }
    return "text-gray-700";
  }

  const isPastOrToday = selectedDate <= today;

  // Only show schedules for today or past dates (including leaves)
  const showSchedule = isPastOrToday || leaves.includes(selectedDate);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-3 rounded shadow w-130 h-130 col-span-2">
      <h2 className="font-semibold mb-3 text-[#0284c7] tracking-tight p-5 text-3xl">
        Schedule for {new Date(selectedDate).toDateString()}
      </h2>
      <div className="space-y-2 min-h-[100px] text-sm">
        {showSchedule && schedules[selectedDate] ? (
          schedules[selectedDate].map((item, idx) => (
            <div key={idx} className="p-2 rounded border-l-4 border-gray-300 bg-[#F6F1E9]">
              <p className={`text-2xl ${getTextColor(selectedDate)}`}>{item.time}</p>
              <p className={`font-medium ${getTextColor(selectedDate)}`}>{item.title}</p>
              <span className={`text-2xl px-2 py-0.5 rounded ${getTextColor(selectedDate)} bg-opacity-0`}>
                {item.type}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-xs">No schedule for this day.</p>
        )}
      </div>
    </div>
  );
}
