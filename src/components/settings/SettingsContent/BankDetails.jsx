"use client";

import { useState } from "react";
import OTPModal from "@/components/settings/SettingsContent/components/OTPModal.jsx";

export default function BankDetails() {
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="w-full lg:w-[873px] flex flex-col gap-8">

      {/* HEADER */}
      <div className="max-w-[644px] flex flex-col gap-1">
        <h2 className="text-[24px] lg:text-[28px] font-normal leading-[40px]">
          Bank Details
        </h2>
        <p className="text-[14px] leading-[21px] text-black/80">
          Add or update bank information to receive payouts securely and without delays.
        </p>
      </div>

      {/* CARD */}
      <div className="w-full max-w-[640px] border border-black/25 rounded-[16px] p-6 flex flex-col gap-8">

        <Field label="Account Holder *">
          <input className="input" />
        </Field>

        <Field label="Account Number *">
          <input className="input" />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Bank Name *">
            <input className="input" />
          </Field>

          <Field label="Branch Name *">
            <input className="input" />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1.7fr_1fr] gap-4">
          <Field label="IFSC Code *">
            <input className="input" />
          </Field>

          <Field label="PAN Card Number *">
            <input className="input" />
          </Field>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-8">
          <button
            onClick={() => setShowOtp(true)}
            className="h-[41px] px-6 border border-[#186AFF] text-[#186AFF] rounded-[8px] font-medium"
          >
            Update
          </button>

          <button className="h-[41px] text-black/60 font-medium">
            Cancel
          </button>
        </div>
      </div>

      {/* OTP MODAL */}
      {showOtp && <OTPModal onClose={() => setShowOtp(false)} />}
    </div>
  );
}

/* -------- SMALL COMPONENTS -------- */

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label className="text-[16px]">{label}</label>
      {children}
    </div>
  );
}
