export default function TotalPatientStats() {
  return (
    <div className=" rounded-xl shadow p-6 flex flex-col items-start min-w-[190px] bg-gradient-to-br from-green-10 to-green-200">
      <div className="font-bold text-lg mb-3">Total Patients</div>
      <div className="text-4xl font-bold mb-1">22</div>
      <div className="text-green-900">Increased from Last Month</div>
    </div>
  );
}