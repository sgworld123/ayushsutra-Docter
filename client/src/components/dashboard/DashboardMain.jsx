import OverallProgress from './OverallProgress';
import DiseaseDistribution from './DiseaseDistribution';
import PatientStats from './PatientStats';
import PatientCommunication from './PatientCommunication';
import TherapySchedule from './TherapySchedule';
import SearchBarWithProfile from './SearchBar';
import TotalPatientStats from './TotalPatientStats';
import Meetings from './Meetings';

export default function DashboardMain() {
  return (
    <div className="flex-1 p-8 space-y-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div><h1 className="text-4xl font-semibold text-[#4F200D]">Dashboard</h1>
        <h2 className="text-lg text-gray-600">Plan, prioritize and accomplish your schedule with ease</h2>
        </div >
        <div className="-mt-20"><SearchBarWithProfile /></div>
      </div>

      {/* Patient Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TotalPatientStats />
        <PatientStats />
        <Meetings />
      </div>

      {/* Therapy Schedule */}
      <div>
        <TherapySchedule />
      </div>

      {/* Progress + Disease Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OverallProgress />
        <DiseaseDistribution />
      </div>

      {/* Patient Communication */}
      <div>
        <PatientCommunication />
      </div>
    </div>
  );
}
