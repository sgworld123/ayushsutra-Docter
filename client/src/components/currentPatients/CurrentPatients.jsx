import React from "react";
import { useNavigate } from "react-router-dom";

const patients = [
  {
    name: "Rohan Verma",
    therapy: "Abhyanga",
    progress: 75,
    room: "A-101",
    contact: "+91 9876543210",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    therapy: "Shirodhara",
    progress: 50,
    room: "B-203",
    contact: "+91 9876543211",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Amit Patel",
    therapy: "Panchakarma",
    progress: 90,
    room: "A-102",
    contact: "+91 9876543212",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Sneha Reddy",
    therapy: "Nasya",
    progress: 60,
    room: "C-301",
    contact: "+91 9876543213",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Vikram Rao",
    therapy: "Swedana",
    progress: 40,
    room: "B-204",
    contact: "+91 9876543214",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

export default function CurrentPatients() {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/patient/${encodeURIComponent(name)}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-green-900 mb-6">Current Patients</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-green-800 border-b border-green-300">
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Therapy Type</th>
            <th className="text-left py-3 px-4">Progress</th>
            <th className="text-left py-3 px-4">Room</th>
            <th className="text-left py-3 px-4">Contact</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(({ name, therapy, progress, room, contact, img }, i) => (
            <tr
              key={name}
              className={`cursor-pointer ${
                i === 0 ? "bg-green-50" : ""
              } border-b last:border-b-0 border-green-200 hover:bg-green-100 transition`}
              onClick={() => handleClick(name)}
            >
              <td className="flex items-center gap-3 py-3 px-4">
                <img
                  src={img}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="text-green-900 font-medium">{name}</span>
              </td>
              <td className="py-3 px-4 text-green-800">{therapy}</td>
              <td className="py-3 px-4 w-40">
                <div className="w-full bg-green-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-green-700 h-4 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="ml-2 text-green-700 font-mono">{progress}%</span>
              </td>
              <td className="py-3 px-4 text-green-900 font-medium">{room}</td>
              <td
                className="py-3 px-4 flex items-center gap-2 text-green-900 font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8m-9 5v2m0-10v2m0-2c-1.1 0-2 .9-2 2m2-2c1.1 0 2 .9 2 2M3 8h18" />
                </svg>
                <a href={`tel:${contact}`} className="hover:underline">
                  {contact}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
