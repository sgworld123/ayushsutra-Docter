import { useState } from "react";
import CalendarMain from "./CalendarMain";
import Schedule from "./Schedule";
import TherapyReference from "./TherapyReference";

const schedules = {
  "2025-09-10": [
    { time: "09:00 AM", title: "Panchakarma - A. Patel", type: "Therapy" },
    { time: "11:00 AM", title: "Consultation - New Patient", type: "Consultation" },
  ],
  "2025-09-20": [
    { time: "10:30 AM", title: "Panchakarma - R. Sharma", type: "Therapy" },
  ],
  "2025-09-22": [
    { time: "02:00 PM", title: "Consultation - Follow-up", type: "Consultation" },
  ],
};

const therapies = {
  Panchakarma: { duration: "60 min", description: "Detoxifying treatment" },
  Consultation: { duration: "30 min", description: "General check-up and diagnosis" },
  "Herbal Therapy": { duration: "45 min", description: "Treatment using herbal remedies" }, 
  "Yoga Session": { duration: "50 min", description: "Guided yoga practice" },
};

const leaves = ["2025-09-15", "2025-09-20"]; // leave days example

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-15 p-10 bg-white h-150 max-w-4x1 mx-auto">
        <CalendarMain onSelectDate={setSelectedDate} leaves={leaves} />
        <Schedule selectedDate={selectedDate} schedules={schedules} leaves={leaves} />
      </div>
      <TherapyReference therapies={therapies} />
    </>
  );
}
