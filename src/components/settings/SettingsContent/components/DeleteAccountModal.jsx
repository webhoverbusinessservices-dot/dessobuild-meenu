"use client";

import { useEffect, useState } from "react";

export default function DeleteAccountModal({ open, onClose, onConfirm }) {
  const [checked, setChecked] = useState(false);

  // Lock scroll when modal open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative
          w-[92%] sm:w-[480px]
          bg-white
          border border-black/25
          rounded-[12px]
          p-6
          flex flex-col gap-8
          shadow-[0px_190px_76px_rgba(0,0,0,0.01),0px_107px_64px_rgba(0,0,0,0.03),0px_47px_47px_rgba(0,0,0,0.05),0px_12px_26px_rgba(0,0,0,0.06)]
        "
      >

        {/* CONTENT */}
        <div className="flex flex-col gap-3">

          <h3 className="text-[20px] leading-[40px] font-normal">
            Are you sure you want to delete your account?
          </h3>

          <div className="border-t border-black/10" />

          <p className="text-[14px] leading-[21px] text-black/80">
            Permanently remove your account and all associated data. This action
            cannot be undone.
          </p>

          <p className="text-[14px] leading-[21px] text-black/80">
            If you have an active balance or ongoing projects, please resolve
            them before deleting your account.
          </p>
        </div>

        {/* CHECKBOX */}
        <label className="flex gap-2 items-start cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="
              mt-[2px]
              w-[22px] h-[22px]
              border-2 border-black/80
              rounded-[2px]
              accent-black
            "
          />
          <span className="text-[16px] leading-[21px] text-black/80">
            I understand that this action is permanent and cannot be undone.
          </span>
        </label>

        {/* ACTIONS */}
        <div className="flex justify-between items-center gap-8">

          <button
            onClick={onClose}
            className="h-[41px] px-4 text-[16px] font-medium text-black/60"
          >
            Cancel
          </button>

          <button
            disabled={!checked}
            onClick={onConfirm}
            className={`
              h-[41px]
              px-6
              rounded-[8px]
              text-[16px]
              font-medium
              text-white
              transition
              ${
                checked
                  ? "bg-[#E00B10] hover:bg-[#c90a0f]"
                  : "bg-[#E00B10]/40 cursor-not-allowed"
              }
            `}
          >
            Yes, Delete My Account
          </button>

        </div>

      </div>
    </div>
  );
}
