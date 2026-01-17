"use client";

import { useState } from "react";

export default function OTPModal({ onClose }) {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

      <div className="w-full max-w-[480px] bg-white border border-black/25 rounded-[12px] p-6 flex flex-col gap-8">

        {/* CONTENT */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[20px] leading-[40px]">
            Enter OTP
          </h3>
          <p className="text-[14px] text-black/70">
            We sent a 6-digit code to +91 ******42
          </p>
        </div>

        {/* OTP INPUTS */}
        <div className="flex justify-between gap-2">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-[48px] h-[48px] border border-black/25 rounded-[6px] text-center text-[18px] outline-none"
            />
          ))}
        </div>

        <p className="text-[14px] text-black/60 text-center">
          Resend in 00:25
        </p>

        {/* ACTIONS */}
        <div className="flex justify-between items-center gap-6">
          <button
            onClick={onClose}
            className="text-black/60 font-medium"
          >
            Cancel
          </button>

          <button className="px-6 h-[41px] bg-[#186AFF] text-white rounded-[8px] font-medium">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
