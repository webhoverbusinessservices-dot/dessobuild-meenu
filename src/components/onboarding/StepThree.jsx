"use client";

import { useState } from "react";
import { X } from "lucide-react";

const StepThree = ({ currentStep, setCurrentStep }) => {
  const handleNext = () => setCurrentStep(4);
  const handleBack = () => setCurrentStep(2);

  const [bio, setBio] = useState("");
  const [roles, setRoles] = useState(["Residential Architect"]);

  const options = [
    "Landscape Architect",
    "Commercial Architect",
    "Renovation Expert",
    "CAD Specialist",
    "Others",
  ];

  const toggleRole = (role) => {
    setRoles(
      roles.includes(role)
        ? roles.filter((r) => r !== role)
        : [...roles, role]
    );
  };

  return (
    <section
      className="
        bg-white
        rounded-3xl
        border border-[rgba(24,106,255,0.16)]
        shadow-[0px_186px_74px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.04),0px_46px_46px_rgba(0,0,0,0.07),0px_12px_26px_rgba(0,0,0,0.08)]
        p-6 sm:p-8 lg:p-10
        w-full
      "
    >
      <div className="max-w-[680px] mx-auto flex flex-col gap-6 sm:gap-8">

        <p className="text-[14px] sm:text-[16px] font-medium text-[#186AFF]">
          STEP {currentStep} OF 5
        </p>

        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium">
            Bio & Details
          </h2>
          <p className="text-[14px] sm:text-[16px] text-black/60">
            Tell clients more about your background and working style.
          </p>
        </div>

        {/* BIO */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-[14px] sm:text-[16px]">
            Your Bio *
          </label>

          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="I’m a detail-driven architect..."
            className="
              h-36 sm:h-40
              resize-none
              rounded-lg
              border border-black/25
              p-3
              text-[14px]
              focus:ring-2 focus:ring-[#186AFF]
            "
          />

          <span className="absolute -bottom-5 right-0 text-[12px] text-black/50">
            At least 100 characters
          </span>
        </div>

        {/* ROLES */}
        <div className="flex flex-col gap-4 pt-4 sm:pt-6">
          <label className="text-[14px] sm:text-[16px]">
            Expertise & Roles *
          </label>

          <div className="min-h-[40px] border border-black/25 rounded-lg px-2 flex flex-wrap gap-2">
            {roles.map((role) => (
              <Chip key={role} active onClick={() => toggleRole(role)}>
                {role}
              </Chip>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {options.map(
              (opt) =>
                !roles.includes(opt) && (
                  <Chip key={opt} onClick={() => toggleRole(opt)}>
                    {opt}
                  </Chip>
                )
            )}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-6 border-t border-black/10">
          <div className="flex gap-4 sm:gap-6">
            <button
              onClick={handleBack}
              className="h-11 px-5 rounded-xl border border-black/20 text-[16px] sm:text-[18px]"
            >
              ← Back
            </button>

            <button className="text-[16px] sm:text-[18px] text-black/60">
              Skip for now
            </button>
          </div>

          <button
            onClick={handleNext}
            className="h-11 px-6 rounded-xl bg-[#186AFF] text-white text-[16px] sm:text-[18px]"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepThree;

const Chip = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className="
      flex items-center gap-2
      px-3 sm:px-4 py-1.5
      rounded-full
      border border-black/25
      bg-[#F9F9F9]
      text-[14px] sm:text-[16px]
    "
  >
    {children}
    {active && <X size={12} />}
  </button>
);
