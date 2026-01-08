"use client"
import {Info} from "lucide-react"
function AvailabilityCard() {
  return (
    <div className="w-106 h-45.5 border border-black/25 rounded-xl p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h4 className="text-[20px] font-medium">Availability Control</h4>
        <Info className="w-5 h-5 text-black/60" />
      </div>

      <div className="bg-[#F9F9F9] border border-black/20 rounded-lg p-3 flex flex-col gap-2">
        <ToggleRow label="Chat availability" />
        <div className="h-px bg-black/10" />
        <ToggleRow label="Call availability" />
      </div>
    </div>
  );
}

function ToggleRow({ label }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[14px]">{label}</span>
      <div className="w-8 h-4 bg-[#186AFF] rounded-full relative">
        <span className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5" />
      </div>
    </div>
  );
}
export default AvailabilityCard