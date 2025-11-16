// PastPatients.jsx
import React from "react";

const pastPatients = [
  {
    name: "Anjali Mehta",
    package: "Rejuvenation",
    phone: "+91 9876543215",
    address: "123, MG Road, Bangalore",
    completionDate: "2023-05-20",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Rajesh Kumar",
    package: "Detox",
    phone: "+91 9876543216",
    address: "456, Park Street, Kolkata",
    completionDate: "2023-04-15",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Sunita Gupta",
    package: "Stress Relief",
    phone: "+91 9876543217",
    address: "789, Marine Drive, Mumbai",
    completionDate: "2023-03-10",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
  },
];

export default function PastPatients() {
  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-md shadow-md p-8">
        <h1 className="text-2xl font-bold text-green-900 mb-1">Past Patients</h1>
        <p className="text-green-700 mb-6">
          Archive of patients who have completed their therapy packages.
        </p>
        <table className="w-full text-left">
          <thead>
            <tr className="text-green-900 border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Package Taken</th>
              <th className="py-2">Phone Number</th>
              <th className="py-2">Address</th>
              <th className="py-2">Completion Date</th>
            </tr>
          </thead>
          <tbody>
            {pastPatients.map((patient, idx) => (
              <tr key={idx} className="border-t text-green-800">
                <td className="py-3 flex items-center gap-3">
                  <img
                    src={patient.img}
                    alt={patient.name}
                    className="w-10 h-10 rounded-full object-cover bg-green-200"
                  />
                  {patient.name}
                </td>
                <td className="py-3">
                  <span className="bg-green-100 rounded px-3 py-1 font-semibold">
                    {patient.package}
                  </span>
                </td>
                <td className="py-3">{patient.phone}</td>
                <td className="py-3">{patient.address}</td>
                <td className="py-3">{patient.completionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
