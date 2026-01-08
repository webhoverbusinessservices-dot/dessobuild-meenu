"use client";
import React from "react";
function WorkbenchCard({ title, desc, btn }) {
  return (
    <div className="w-106 h-45.5 border border-black/25 rounded-xl p-6 flex flex-col justify-between">
      <div>
        <h4 className="text-[20px] font-medium">{title}</h4>
        <p className="text-[14px] text-black/60">{desc}</p>
      </div>

      <button className="w-fit px-4 py-3 bg-[#186AFF] rounded-lg text-white text-[14px]">
        {btn}
      </button>
    </div>
  );
}
export default WorkbenchCard;