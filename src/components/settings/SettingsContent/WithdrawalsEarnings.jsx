"use client";
import { useState } from "react";
import WithdrawFundsModal from "./components/WithdrawFundsModal";


export default function WithdrawalsEarnings() {

const [openWithdraw, setOpenWithdraw] = useState(false);

  const transactions = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    base: 1000,
    commissionPercent: 25,
    commissionAmount: 250,
    finalAmount: 750,
    status: "Successful",
    time: "12/18/2025, 11:53:08 AM",
  }));

  return (
    <div className="w-full lg:w-218.25 flex flex-col gap-8">

      {/* HEADER */}
      <div className="flex flex-col gap-2">
        <h2 className="text-[24px] lg:text-[28px] font-normal">
          Withdrawals & Earnings
        </h2>
        <p className="text-[14px] text-black/80">
          Withdraw your available balance and track payout status and transaction history.
        </p>
      </div>

      {/* AVAILABLE BALANCE CARD */}
      <div className="border border-black/10 rounded-xl p-6 flex flex-col gap-4">

        <div className="flex flex-col gap-1">
          <p className="text-[16px] text-black/60">Available Balance</p>
          <h3 className="text-[24px] font-medium">₹0.00</h3>
        </div>

        <div>
          <button
  onClick={() => setOpenWithdraw(true)}
  className="h-10.25 px-6 bg-[#186AFF] text-white rounded-lg text-[16px] font-medium"
>
  Withdraw Funds
</button>

        </div>
      </div>

      {/* TRANSACTION TABLE */}
<div className="w-full max-w-218.25 bg-white border border-black/10 rounded-xl overflow-hidden">

  {/* TABLE */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">

      {/* HEADER */}
      <thead className="bg-[#F9F9F9]">
        <tr className="h-11 text-[12px] font-medium text-black/80">
          <th className="px-3 text-left w-11.5">#</th>
          <th className="px-3 text-left w-30">Base Amount</th>
          <th className="px-3 text-left w-30">Commission %</th>
          <th className="px-3 text-left w-36">Commission Amount</th>
          <th className="px-3 text-left w-30">Final Amount</th>
          <th className="px-3 text-left w-30">Status</th>
          <th className="px-3 text-left w-50.75">Day & Time</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="text-[12px] text-black">
        {transactions.map((t) => (
          <tr
            key={t.id}
            className="h-8.5 border-t border-black/5"
          >
            <td className="px-3 text-center">{t.id}</td>
            <td className="px-3">₹{t.base}</td>
            <td className="px-3">{t.commissionPercent}%</td>
            <td className="px-3">₹{t.commissionAmount}</td>
            <td className="px-3">₹{t.finalAmount}</td>

            <td className="px-3">
              <span className="inline-flex items-center justify-center px-2 py-[2px] rounded-full bg-[#B3ECBF] text-[#155724] text-[8px] leading-[11px]">
                {t.status}
              </span>
            </td>

            <td className="px-3">
              {t.time}
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>

  {/* FOOTER */}
  <div className="h-13 flex items-center justify-between px-4 border-t border-black/10 text-[12px] text-black/80">
    <span>Displaying 1–10 of 34 results</span>

    <div className="flex items-center gap-3">
      <button className="w-7 h-7 border border-black/10 rounded-[4.66px] flex items-center justify-center">
        ‹
      </button>
      <button className="w-7 h-7 border border-black/10 rounded-[4.66px] flex items-center justify-center">
        ›
      </button>
    </div>
  </div>

</div>
{openWithdraw && (
  <WithdrawFundsModal onClose={() => setOpenWithdraw(false)} />
)}

    </div>
  );
}
