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
        p-6 sm:p-8 lg:p-10
        w-full
      "
    >
      {/* INNER */}
      <div className="max-w-[680px] mx-auto flex flex-col gap-6 sm:gap-8">

        {/* STEP */}
        <p className="text-[14px] sm:text-[16px] font-medium text-[#186AFF]">
          STEP {currentStep} OF 5
        </p>

        {/* TITLE */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-black">
            Documentation Proof
          </h2>
          <p className="text-[14px] sm:text-[16px] text-black/60 leading-6">
            Upload your documents to verify your identity and qualification.
            This keeps your profile credible and helps clients trust your expertise.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* QUALIFICATION */}
          <div className="flex flex-col gap-3">
            <label className="text-[14px] sm:text-[16px] font-medium">
              Qualification Proof *
            </label>
            <p className="text-[13px] sm:text-[14px] text-black/50 leading-5">
              Upload your degree, certificate, or any relevant training document.
            </p>

            <UploadBox />
          </div>

          {/* AADHAAR + PAN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* AADHAAR */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] sm:text-[16px] font-medium">
                Aadhaar Verification *
              </label>
              <p className="text-[13px] sm:text-[14px] text-black/50 leading-5">
                We require Aadhaar for identity verification and account safety.
                Your documents are encrypted and never shared with clients.
              </p>

              <UploadBox />
            </div>

            {/* PAN */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] sm:text-[16px] font-medium">
                PAN Verification *
              </label>
              <p className="text-[13px] sm:text-[14px] text-black/50 leading-5">
                Required for payments and financial compliance before payouts.
              </p>

              <UploadBox />
            </div>

          </div>
        </div>

        {/* ACTIONS */}
        <div className="
          flex flex-col sm:flex-row
          items-start sm:items-center
          justify-between
          gap-4
          pt-6 sm:pt-8
          border-t border-black/10
        ">
          {/* LEFT */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={handleBack}
              className="
                h-11 px-5
                rounded-xl
                border border-black/20
                text-[16px] sm:text-[18px]
                font-medium text-black/60
              "
            >
              ← Back
            </button>

            <button
              type="button"
              className="text-[16px] sm:text-[18px] font-medium text-black/60"
            >
              Skip for now
            </button>
          </div>

          {/* RIGHT */}
          <button
            onClick={handleNext}
            className="
              h-11 px-6
              rounded-xl
              bg-[#186AFF]
              text-white
              text-[16px] sm:text-[18px]
              font-medium
            "
          >
            Save & Continue
          </button>
        </div>

      </div>
    </section>
  );
};

export default StepFour;

/* ---------------- UPLOAD BOX ---------------- */

const UploadBox = () => (
  <div
    className="
      flex flex-col items-center justify-center
      gap-3
      bg-[#F9F9F9]
      border border-dashed border-black/25
      rounded-3xl
      h-40 sm:h-46
      px-4
    "
  >
    <div className="w-12 h-12 rounded-full border border-black/20
                    flex items-center justify-center bg-[#F9F9F9]">
      <FileText className="w-6 h-6 text-black/60" />
    </div>

    <p className="text-[13px] sm:text-[14px] text-black/50 text-center max-w-xs">
      Upload clear JPG, PNG, or PDF files.
      <br />
      Max size: 10MB per file.
    </p>

    <button
      type="button"
      className="
        h-10 px-6
        rounded-xl
        border border-[#186AFF]
        text-[#186AFF]
        text-[14px] sm:text-[16px]
        font-medium
      "
    >
      Browse file
    </button>
  </div>
);
