export default function PatientStats() {
  return (
    <div className=" rounded-xl shadow p-6 flex flex-col items-start min-w-[190px] bg-gradient-to-br from-green-10 to-green-200">
      <div className="font-bold text-lg mb-3">Current Patients</div>
      <div className="text-4xl font-bold mb-1">5</div>
      <div className="text-green-900">Actively undergoing therapy</div>
    </div>
  );
}