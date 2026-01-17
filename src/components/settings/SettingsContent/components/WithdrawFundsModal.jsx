"use client";

export default function WithdrawFundsModal({ onClose }) {
  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          fixed z-50
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[480px] h-[358px]
          bg-white rounded-[16px]
          p-[24px]
          flex flex-col gap-[32px]
        "
      >
        {/* TITLE */}
        <h3 className="text-[24px] leading-[32px] font-normal">
          Withdraw Funds
        </h3>

        {/* AMOUNT INPUT */}
        <div className="flex flex-col gap-[6px]">
          <label className="text-[16px]">
            Withdrawal Amount *
          </label>

          <input
            placeholder="Enter amount to withdraw"
            className="
              h-[40px] px-[8px]
              border border-black/25
              rounded-[8px]
              text-[16px]
              placeholder:text-black/60
            "
          />
        </div>

        {/* PLATFORM FEE */}
        <div className="flex justify-between text-[16px]">
          <span>Platform Fee (25%):</span>
          <span>₹0.00</span>
        </div>

        {/* YOU’LL RECEIVE */}
        <div className="flex justify-between text-[16px]">
          <span>You’ll Receive:</span>
          <span>₹0.00</span>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-[32px]">
          <button
            onClick={onClose}
            className="h-[41px] px-[10px] text-[16px] font-medium text-black/60"
          >
            Cancel
          </button>

          <button
            className="
              h-[41px] px-[24px]
              bg-[rgba(24,106,255,0.8)]
              rounded-[8px]
              text-white text-[16px] font-medium
            "
          >
            Submit Withdrawal
          </button>
        </div>
      </div>
    </>
  );
}
