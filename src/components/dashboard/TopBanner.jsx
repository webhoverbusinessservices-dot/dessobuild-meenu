"use client";
import React from "react";
function TopBanner() {
  return (
    <div className="flex flex-col gap-8">

      {/* BLUE STRIP */}
      <div className="h-[58px] bg-[#186AFF] rounded-lg flex items-center justify-between px-4">
        <p className="text-white font-medium text-[20px]">
          Please update your Public Profile View
        </p>

        <button className="h-[42px] px-4 bg-white rounded-lg text-[#186AFF] text-[14px] font-medium">
          Update your Profile
        </button>
      </div>

      {/* WELCOME + BALANCE */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-medium">Welcome, Nick</h2>

        <div className="flex items-center gap-2">
          <span className="text-[18px]">Balance: ₹0.00</span>
          <button className="px-3 py-1 rounded-full bg-[#186AFF29] text-[#186AFF] text-[12px]">
            Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;