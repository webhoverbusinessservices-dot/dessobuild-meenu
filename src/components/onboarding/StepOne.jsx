"use client";

import { User } from "lucide-react";

const StepOne = ({ currentStep, setCurrentStep }) => {
  const handleNext = () => setCurrentStep(2); // explicitly go to Step 2
  const handleBack = () => setCurrentStep(1);

  return (
    <section
      className="
        bg-white
        rounded-3xl
        border border-[rgba(24,106,255,0.16)]
        shadow-[0px_186px_74px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.04),0px_46px_46px_rgba(0,0,0,0.07),0px_12px_26px_rgba(0,0,0,0.08)]
        p-10
        w-full
      "
    >
      {/* INNER WIDTH (Figma: 680px) */}
      <div className="max-w-[680px] mx-auto flex flex-col gap-8">
<p className="font-switzer text-[16px] leading-[27px] font-medium text-[#186AFF]">
          STEP {currentStep} OF 5
        </p>
        {/* TITLE + DESCRIPTION */}
        <div className="flex flex-col gap-2">
          <h2 className="font-switzer font-medium text-[32px] leading-[27px] text-black">
            Profile Information
          </h2>
          <p className="font-switzer text-[16px] leading-[24px] text-black/60">
            Let clients know who you are with your basic profile details. This helps us personalise your experience and keep your account secure.
          </p>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-8">

          {/* IMAGE + NAME ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-[201px_1fr] gap-6">

            {/* UPLOAD IMAGE */}
            <div className="flex flex-col gap-3">
              <div className="h-[115px] rounded-2xl border-[1.6px] border-dashed border-black/25 bg-[#F9F9F9] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-[1.6px] border-black/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-black/60" />
                </div>
              </div>

              <button
                type="button"
                className="h-10 rounded-xl border border-[#186AFF] text-[#186AFF] font-switzer font-medium text-[16px] leading-[27px] hover:bg-blue-50"
              >
                Upload Profile Image
              </button>
            </div>

            {/* NAME + DOB */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First name *" />
                <Input label="Last name *" />
              </div>

              <Input label="Date of Birth *" type="date" />
            </div>
          </div>

          {/* EMAIL */}
          <Input label="Email address *" />

          {/* STATE / CITY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="State *" />
            <Input label="City *" />
          </div>

          {/* ADDRESS / PINCODE */}
          <div className="grid grid-cols-[1fr_184px] gap-4">
            <Input label="Address *" />
            <Input label="Pincode *" />
          </div>

          {/* PHONE */}
          <Input label="Phone Number *" />
        </div>

       {/* ACTIONS */}
<div className="flex items-center justify-between pt-8 border-t border-black/10">
  
  {/* LEFT GROUP: Back + Skip */}
  <div className="flex items-center gap-6">
    <button
      onClick={handleBack}
      className="
        h-11
        px-5
        rounded-xl
        border border-black/20
        flex items-center gap-2
        text-[18px]
        font-medium
        text-black/60
        hover:bg-black/[0.02]
      "
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
    className="
      h-11
      px-6
      rounded-xl
      bg-[#186AFF]
      text-white
      text-[18px]
      font-medium
      hover:bg-blue-700
    "
  >
    Save & Continue
  </button>
</div>

      </div>
    </section>
  );
};

export default StepOne;

/* ---------- INPUT ---------- */
const Input = ({ label, type = "text" }) => (
  <label className="flex flex-col gap-1 font-switzer text-[16px] text-black">
    {label}
    <input
      type={type}
      className="
        h-10
        px-3
        rounded-lg
        border border-black/25
        bg-white
        focus:outline-none
        focus:ring-2
        focus:ring-[#186AFF]
      "
    />
  </label>
);
