"use client";

import { useState } from "react";
import { X } from "lucide-react";

const StepTwo = ({ currentStep, setCurrentStep }) => {
  const handleNext = () => setCurrentStep(3);
  const handleBack = () => setCurrentStep(1);

  const [specialization, setSpecialization] = useState(["Architect"]);
  const [experience, setExperience] = useState("0-2 years");
  const [languages, setLanguages] = useState(["English"]);

  const toggleMulti = (value, list, setList) => {
    setList(
      list.includes(value)
        ? list.filter((i) => i !== value)
        : [...list, value]
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
      {/* INNER WIDTH */}
      <div className="max-w-[680px] mx-auto flex flex-col gap-6 sm:gap-8">

        {/* STEP */}
        <p className="font-switzer text-[14px] sm:text-[16px] leading-[27px] font-medium text-[#186AFF]">
          STEP {currentStep} OF 5
        </p>

        {/* TITLE */}
        <div className="flex flex-col gap-2">
          <h2 className="font-switzer font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[27px] text-black">
            Specialization & Language
          </h2>
          <p className="font-switzer text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-black/60">
            Choose what you’re best at and the languages you can confidently work in.
          </p>
        </div>

        {/* FORM CONTENT */}
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* SPECIALIZATION */}
          <Field label="Select your specialization *">
            <ChipInput
              selected={specialization}
              options={["Architect", "Interior Designer", "Vastu Expert"]}
              onToggle={(v) =>
                toggleMulti(v, specialization, setSpecialization)
              }
            />
          </Field>

          {/* EXPERIENCE */}
          <Field label="Your experience level *">
            <ChipGroup
              selected={experience}
              options={["0-2 years", "2-5 years", "5-7 years", "7+ years"]}
              onSelect={setExperience}
            />
          </Field>

          {/* LANGUAGES */}
          <Field label="Languages you speak *">
            <ChipInput
              helper="Add all languages you can communicate in."
              selected={languages}
              options={["English", "Hindi", "Other"]}
              onToggle={(v) => toggleMulti(v, languages, setLanguages)}
            />
          </Field>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 sm:pt-8 border-t border-black/10">
          
          {/* LEFT */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={handleBack}
              className="
                h-11
                px-5
                rounded-xl
                border border-black/20
                flex items-center gap-2
                text-[16px] sm:text-[18px]
                font-medium
                text-black/60
                hover:bg-black/[0.02]
              "
            >
              ← Back
            </button>

            <button
              type="button"
              className="text-[16px] sm:text-[18px] font-medium text-black/60 hover:text-black"
            >
              Skip for now
            </button>
          </div>

          {/* RIGHT */}
          <button
            onClick={handleNext}
            className="
              h-11
              px-6
              rounded-xl
              bg-[#186AFF]
              text-white
              text-[16px] sm:text-[18px]
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

export default StepTwo;

/* ----------------- COMPONENTS ----------------- */

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-3 sm:gap-4">
    <label className="font-switzer text-[14px] sm:text-[16px] leading-[21px] text-black">
      {label}
    </label>
    {children}
  </div>
);

const ChipInput = ({ selected, options, onToggle, helper }) => (
  <>
    {/* Selected */}
    <div
      className="
        min-h-[40px]
        border border-black/25
        rounded-lg
        px-2
        flex items-center flex-wrap gap-2
      "
    >
      {selected.map((item) => (
        <Chip key={item} active onClick={() => onToggle(item)}>
          {item}
        </Chip>
      ))}
    </div>

    {helper && (
      <p className="text-[12px] sm:text-[14px] leading-[18px] text-black/50">
        {helper}
      </p>
    )}

    {/* Options */}
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {options.map(
        (opt) =>
          !selected.includes(opt) && (
            <Chip key={opt} onClick={() => onToggle(opt)}>
              {opt}
            </Chip>
          )
      )}
    </div>
  </>
);

const ChipGroup = ({ selected, options, onSelect }) => (
  <>
    <div
      className="
        min-h-[40px]
        border border-black/25
        rounded-lg
        px-2
        flex items-center
      "
    >
      <Chip active>{selected}</Chip>
    </div>

    <div className="flex flex-wrap gap-2 sm:gap-3">
      {options.map(
        (opt) =>
          opt !== selected && (
            <Chip key={opt} onClick={() => onSelect(opt)}>
              {opt}
            </Chip>
          )
      )}
    </div>
  </>
);

const Chip = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2
      px-3 sm:px-4 py-1.5
      rounded-full
      text-[14px] sm:text-[16px] leading-[21px]
      border
      ${
        active
          ? "border-black/25 bg-[#F9F9F9]"
          : "border-black/25 bg-[#F9F9F9] hover:bg-black/5"
      }
    `}
  >
    {children}
    {active && <X size={12} />}
  </button>
);
