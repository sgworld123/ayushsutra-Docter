// src/components/TherapySchedule.jsx
import React from "react";

const TherapySchedule = () => {
  const schedule = [
    { patient: "Rohan Verma", therapy: "Abhyanga", room: "A-101", time: "10:00 AM" },
    { patient: "Priya Singh", therapy: "Shirodhara", room: "B-203", time: "11:30 AM" },
    { patient: "Amit Patel", therapy: "Panchakarma", room: "A-102", time: "02:00 PM" },
  ];

  return (
    <div className="max-w-3x3 mx-auto mt-10 bg-gradient-to-b from-yellow-10 to-yellow-100 border border-green-100 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-green-900">Today's Therapy Schedule</h2>
      <p className="text-sm text-gray-600 mb-4">
        An overview of scheduled sessions for today.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-700">
              <th className="py-2 px-3">Patient</th>
              <th className="py-2 px-3">Therapy</th>
              <th className="py-2 px-3">Room</th>
              <th className="py-2 px-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="py-2 px-3 text-gray-800">{item.patient}</td>
                <td className="py-2 px-3 text-gray-800">{item.therapy}</td>
                <td className="py-2 px-3">
                  <span className="text-greay-800 px-2 py-1 rounded-md text-sm font-medium">
                    {item.room}
                  </span>
                </td>
                <td className="py-2 px-3 text-gray-800">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TherapySchedule;
