import { useState, useEffect } from "react";

export default function CalendarMain({ onSelectDate, leaves = [] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

  useEffect(() => {
    generateCalendarDays(currentDate);
  }, [currentDate]);

  function generateCalendarDays(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({ length: days }, (_, i) => i + 1);
    setDaysInMonth(daysArray);
  }

  function formatDate(date) {
    return date.toISOString().split("T")[0];
  }

  function dayColor(day) {
    const today = formatDate(new Date());
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    if (leaves.includes(dateStr)) {
      return "bg-red-500 text-white"; // Absent
    }
    if (dateStr === today) {
      return "bg-yellow-400 text-black"; // Current day
    }
    if (dateStr > today) {
      return "bg-gray-300 text-black"; // Future
    }
    if (dateStr < today) {
      return "bg-green-600 text-white"; // Completed
    }
    return "";
  }

  function onClickDate(day) {
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateStr);
    onSelectDate(dateStr);
  }

  return (
    <div className="bg-gradient-to-b from-green-100 to-blue-100 h-130 p-4 ml-10 rounded shadow w-130 ">
      <h2 className="font-semibold text-center mb-4">
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h2>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-5 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="font-bold">
            {d}
          </div>
        ))}

        {daysInMonth.map((day) => (
          <button
            key={day}
            className={`p-3 rounded-full ${dayColor(day)} ${
              selectedDate ===
              `${currentDate.getFullYear()}-${String(
                currentDate.getMonth() + 1
              ).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                ? "ring-2 ring-green-700"
                : ""
            }`}
            onClick={() => onClickDate(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-around mt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded"></span>
          <span>Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-yellow-400 rounded"></span>
          <span>Current</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-600 rounded"></span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
}
