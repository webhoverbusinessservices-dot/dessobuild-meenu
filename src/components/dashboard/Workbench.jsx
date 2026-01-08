"use client";
import WorkbenchCard from "./WorkbenchCard";
import AvailabilityCard from "./AvailabilityCard";  

function Workbench() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[28px] font-medium">Your Workbench</h3>

      <div className="flex gap-6">

        <WorkbenchCard
          title="Consultation Inbox"
          desc="Chat with clients who need quick help."
          btn="Open Inbox"
        />

        <WorkbenchCard
          title="Active Projects"
          desc="Track your ongoing client work."
          btn="View Projects"
        />

        <AvailabilityCard />

      </div>
    </div>
  );
}

export default Workbench;
