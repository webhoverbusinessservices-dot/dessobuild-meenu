"use client";

import { FileText } from "lucide-react";

const StepFour = ({ currentStep, setCurrentStep }) => {
  const handleNext = () => setCurrentStep(5);
  const handleBack = () => setCurrentStep(3);

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
      {/* INNER */}
      <div className="max-w-170 mx-auto flex flex-col gap-8">

        {/* STEP */}
        <p className="font-switzer text-[16px] leading-6.75 font-medium text-[#186AFF]">
          STEP {currentStep} OF 5
        </p>

        {/* TITLE */}
        <div className="flex flex-col gap-2">
          <h2 className="font-switzer font-medium text-[32px] leading-6.75 text-black">
            Documentation Proof
          </h2>
          <p className="font-switzer text-[16px] leading-6 text-black/60">
            Upload your documents to verify your identity and qualification. This keeps your profile credible and helps clients trust your expertise.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-8">

          {/* QUALIFICATION */}
          <div className="flex flex-col gap-3">
            <label className="font-switzer text-[16px] leading-5.25 text-black">
              Qualification Proof *
            </label>
            <p className="text-[14px] leading-5.25 text-black/50">
              Upload your degree, certificate, or any relevant training document. This helps us confirm your professional background.
            </p>

            <UploadBox full />
          </div>

          {/* AADHAAR + PAN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <label className="font-switzer text-[16px] leading-5.25 text-black">
                Aadhaar Verification *
              </label>
              <div  className="text-[14px] leading-5.25 text-black/50  min-h-15.75 w-81   ">
                <p className="text-[14px] leading-5.25 text-black/50 ">
                We require Aadhaar for identity verification and account safety. Your documents are encrypted and never shared with clients.
              </p>
              </div>

              <UploadBox />
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-switzer text-[16px] leading-5.25 text-black">
                PAN Verification *
              </label>
             <div  className="text-[14px] leading-5.25 text-black/50  min-h-15.75 w-81">
                 <p className="text-[14px] leading-5.25 text-black/50">
                Required for payments and financial compliance. This helps us verify your identity before payouts.
              </p>
             </div>

              <UploadBox />
            </div>
          </div>
        </div>

    {/* ACTIONS */}
<div className="flex items-center justify-between pt-8 border-t border-black/10">
  
  {/* LEFT GROUP: Back + Skip */}
  <div className="flex items-center gap-6">
    <button
      onClick={handleBack}
      className=" h-11 px-5 rounded-xl border border-black/20 flex items-center gap-2 text-[18px] font-medium text-black/60 hover:bg-black/2">
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
    className=" h-11 px-6 rounded-xl bg-[#186AFF] text-white text-[18px] font-medium hover:bg-blue-700">
    Save & Continue
  </button>
</div>

      </div>
    </section>
  );
};

export default StepFour;

/* ---------------- UPLOAD BOX ---------------- */

const UploadBox = ({ full }) => (
  <div
    className={`
      flex flex-col items-center justify-center
      gap-3
      bg-[#F9F9F9]
      border border-dashed border-black/25
      rounded-3xl
      ${full ? "h-46.5" : "h-46.5"}
    `}
  >
    <div className="w-12 h-12 rounded-full border border-black/20
                    flex items-center justify-center bg-[#F9F9F9]">
      <FileText className="w-6 h-6 text-black/60" />
    </div>

    <p className="text-[14px] leading-5.25 text-black/50 text-center max-w-65">
      Upload clear JPG, PNG, or PDF files.
      <br />
      Max size: 10MB per file.
    </p>

    <button
      type="button"
      className="h-10 px-6 rounded-xl border border-[#186AFF]
                 text-[#186AFF] text-[16px] font-medium"
    >
      Browse file
    </button>
  </div>
);
