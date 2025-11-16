// PatientDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const patients = [
  {
    name: "Rohan Verma",
    therapy: "Abhyanga Therapy",
    progress: 75,
    room: "A-101",
    contact: "+91 9876543210",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    age: 35,
    condition: "Chronic back pain",
    notes: "Responding well to therapy, recommended weekly sessions.",
    missedAppointments: 2,
    schedule: [
      { day: "Mon", time: "10:00 AM", therapy: "Abhyanga", room: "A-101" },
      { day: "Wed", time: "10:00 AM", therapy: "Yoga", room: "Yoga Hall" },
    ],
    email: "",
    address: "",
  },
  // ... other patient objects unchanged
  {
    name: "Priya Singh",
    therapy: "Shirodhara",
    progress: 50,
    room: "B-203",
    contact: "+91 9876543211",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    age: 29,
    condition: "Stress and anxiety",
    notes: "Monitor progress monthly, consider adding meditation.",
  },
  {
    name: "Amit Patel",
    therapy: "Panchakarma",
    progress: 90,
    room: "A-102",
    contact: "+91 9876543212",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    age: 42,
    condition: "Detoxification",
    notes: "Near completion, prepare for maintenance phase.",
  },
  {
    name: "Sneha Reddy",
    therapy: "Nasya",
    progress: 60,
    room: "C-301",
    contact: "+91 9876543213",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
    age: 33,
    condition: "Sinus issues",
    notes: "Improving, schedule follow-up after next session.",
  },
  {
    name: "Vikram Rao",
    therapy: "Swedana",
    progress: 40,
    room: "B-204",
    contact: "+91 9876543214",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    age: 47,
    condition: "Joint pain",
    notes: "Needs additional support, advised therapy frequency increase.",
  },
];

export default function PatientDetails() {
  const { patientName } = useParams();
  const navigate = useNavigate();

  const patient = patients.find((p) => p.name === decodeURIComponent(patientName));

  if (!patient) {
    return (
      <div className="max-w-4xl mx-auto p-8 mt-20 bg-white rounded-md shadow-md text-center text-red-600 font-semibold">
        Patient not found.
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 pb-12">
      <div className="max-w-4xl mx-auto p-8 mt-12">
        <div className="flex items-center gap-4">
          <img
            src={patient.img}
            alt={patient.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-green-200"
          />
          <div>
            <h1 className="text-3xl font-bold text-green-900">{patient.name}</h1>
            <span className="text-green-700 font-semibold">{patient.therapy}</span>
          </div>
          <button
            onClick={() => {/* logic for editing timetable */}}
            className="ml-auto px-4 py-2 border border-green-700 text-green-700 rounded hover:bg-green-100"
          >
            Edit Timetable
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Therapy Progress */}
          <div className="col-span-2 bg-white rounded-md p-6 shadow">
            <h2 className="text-xl font-bold text-green-900 mb-2">Therapy Progress</h2>
            <p className="text-green-700 mb-1 text-sm">
              Real-time tracking of the patient's therapy completion.
            </p>
            <span className="block text-green-900 mb-2 font-semibold">
              Overall Progress
            </span>
            <div className="w-full bg-green-200 rounded-full h-5 mb-3 overflow-hidden">
              <div
                className="bg-green-700 h-5 rounded-full"
                style={{ width: `${patient.progress}%` }}
              />
            </div>
            <span className="text-green-900 font-bold text-lg">{patient.progress}%</span>
            {patient.missedAppointments > 0 && (
              <p className="mt-3 text-red-700 text-sm flex items-center">
                <span className="inline-block w-4 h-4 mr-2 border border-red-700 rounded-full text-center">!</span>
                Missed {patient.missedAppointments} appointment{patient.missedAppointments > 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-md p-6 shadow">
            <h2 className="text-xl font-bold text-green-900 mb-2">Contact Information</h2>
            <div className="mb-2 flex items-center gap-2 text-green-800">
              <span role="img" aria-label="phone">📞</span>
              {patient.contact}
            </div>
            <div className="mb-2 flex items-center gap-2 text-green-800">
              <span role="img" aria-label="email">✉️</span>
              {patient.email ? patient.email : "No email on file"}
            </div>
            <div className="flex items-center gap-2 text-green-800">
              <span role="img" aria-label="address">📍</span>
              {patient.address ? patient.address : "No address on file"}
            </div>
          </div>
        </div>

        {/* Current Timetable */}
        <div className="mt-8 bg-white rounded-md p-6 shadow">
          <h2 className="text-xl font-bold text-green-900 mb-3">Current Timetable</h2>
          <p className="text-green-700 mb-2 text-sm">
            Scheduled therapy sessions for the patient.
          </p>
          <table className="w-full text-left">
            <thead>
              <tr className="text-green-900">
                <th className="py-2">Day &amp; Time</th>
                <th className="py-2">Therapy</th>
                <th className="py-2">Room</th>
              </tr>
            </thead>
            <tbody>
              {patient.schedule && patient.schedule.map((s, idx) => (
                <tr key={idx} className="text-green-800 border-t">
                  <td className="py-2">{s.day} {s.time}</td>
                  <td className="py-2">
                    <span className="bg-green-100 rounded px-2 py-1">{s.therapy}</span>
                  </td>
                  <td className="py-2">{s.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
