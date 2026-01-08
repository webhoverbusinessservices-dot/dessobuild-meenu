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
        shadow-[0px_186px_74px_rgba(0,0,0,0.01),
                0px_105px_63px_rgba(0,0,0,0.04),
                0px_46px_46px_rgba(0,0,0,0.07),
                0px_12px_26px_rgba(0,0,0,0.08)]
        p-10
        w-full
      "
    >
      {/* INNER WIDTH */}
      <div className="max-w-170 mx-auto flex flex-col gap-8">

        {/* STEP */}
        <p className="font-switzer text-[16px] leading-6.75 font-medium text-[#186AFF]">
          STEP {currentStep} OF 5
        </p>

        {/* TITLE */}
        <div className="flex flex-col gap-2">
          <h2 className="font-switzer font-medium text-[32px] leading-6.75 text-black">
            Bio & Details
          </h2>
          <p className="font-switzer text-[16px] leading-6 text-black/60">
            Tell clients more about your background and working style. A strong bio increases your chances of getting hired.
          </p>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-8">

          {/* BIO */}
          <div className="flex flex-col gap-2 relative">
            <label className="font-switzer text-[16px] leading-5.25 text-black">
              Your Bio *
            </label>

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="I’m a detail-driven architect specializing in thoughtful residential and commercial spaces..."
              className=" h-40.75 resize-none rounded-lg border border-black/25 p-2 text-[14px] leading-5.25 text-black/70 focus:outline-none focus:ring-2 focus:ring-[#186AFF]
              "
            />

            <span className="absolute -bottom-5.5 right-0 text-[12px] text-black/50">
              At least 100 characters
            </span>
          </div>

          {/* ROLES */}
          <div className="flex flex-col gap-4 pt-6">
            <label className="font-switzer text-[16px] leading-5.25 text-black">
              Expertise & Roles *
            </label>

            {/* Selected */}
            <div className="min-h-10 border border-black/25 rounded-lg px-2
                            flex items-center flex-wrap gap-2">
              {roles.map((role) => (
                <Chip key={role} active onClick={() => toggleRole(role)}>
                  {role}
                </Chip>
              ))}
            </div>

            {/* Options */}
            <div className="flex flex-wrap gap-3">
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
        </div>

    {/* ACTIONS */}
<div className="flex items-center justify-between pt-8 border-t border-black/10">
  
  {/* LEFT GROUP: Back + Skip */}
  <div className="flex items-center gap-6">
    <button
      onClick={handleBack}
      className=" h-11 px-5 rounded-xl border border-black/20 flex items-center gap-2 text-[18px] font-medium text-black/60 hover:bg-black/2"
    >
      ← Back
    </button>

    <button
      type="button"
      className="text-[18px] font-medium text-black/60 hover:text-black"
    >
      Skip for now
    </button>
  </div>

  {/* RIGHT: Save */}
  <button
    onClick={handleNext}
    className=" h-11 px-6 rounded-xl bg-[#186AFF] text-white text-[18px] font-medium hover:bg-blue-700
    "
  >
    Save & Continue
  </button>
</div>

      </div>
    </section>
  );
};

export default StepThree;

/* ---------------- CHIP ---------------- */

const Chip = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className=" flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/25 bg-[#F9F9F9] text-[16px] leading-5.25 hover:bg-black/5
    "
  >
    {children}
    {active && <X size={12} />}
  </button>
);
