import { useState } from 'react';

const patients = [
  {
    name: "Priya Singh",
    msg: "Feeling a bit of a headache after today's Shirodhara session. Is this normal?",
    time: "2 hours ago"
  },
  {
    name: "Rohan Verma",
    msg: "The Abhyanga massage was so relaxing! My joint pain feels much less severe now. Thank you!",
    time: "5 hours ago"
  }
];

export default function PatientCommunication() {
  const [message, setMessage] = useState('');
  return (
    <div className="bg-gradient-to-b from-yellow-10 to-yellow-100 rounded-xl shadow p-8 max-w-1xl w-full">
      <div className="font-bold text-xl mb-1">Patient Communication</div>
      <div className="text-green-900 text-sm mb-4">Real-time messages and AI-powered analysis.</div>
      <div>
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-green-300 mr-4"></div>
            <div>
              <div className="font-bold">{p.name}</div>
              <div className="text-green-900 text-sm">{p.msg}</div>
              <div className="text-xs text-green-400">{p.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="font-bold text-base mb-2">AI Message Analysis</div>
        <input
          placeholder="Enter a new patient message to analyze..."
          className="w-full py-2 px-3 rounded border border-green-200 mb-2 bg-[#F6F1E9] font-serif"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}
