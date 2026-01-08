"use client";
import { Check } from "lucide-react";

/* ===== SVG ICONS (STATIC) ===== */

const ProfileIcon = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M4 20c0-4 4-6 8-6s8 2 8 6"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const BioIcon = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M5 4h14M5 10h14M5 16h10"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const DocumentIcon = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M6 2h8l4 4v16H6z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const SpecializationIcon = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const RateIcon = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M3 7h18M3 12h18M3 17h18"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default function ProfileStep({ title, completed, active, locked }) {
  const Icon =
    title.includes("Profile")
      ? STEP_ICONS.profile
      : title.includes("Bio")
      ? STEP_ICONS.bio
      : title.includes("Document")
      ? STEP_ICONS.document
      : title.includes("Specialization")
      ? STEP_ICONS.specialization
      : STEP_ICONS.rate;

  return (
    <div
      className={`w-[251px] h-[98px] rounded-xl border border-black/20 p-4 flex flex-col justify-between
        ${completed ? "bg-[#EBFFFA]" : active ? "bg-white" : "bg-[#FAFAFA]"}
      `}
    >
      {/* TOP ROW */}
      <div className="flex items-center justify-between">
        {/* ICON */}
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center
            ${
              completed
                ? "bg-[#27A344]"
                : active
                ? "border border-[#186AFF]"
                : "border border-black/40"
            }
          `}
        >
          {completed ? (
            <Check className="w-4 h-4 text-white" />
          ) : (
            <Icon
              className={`w-4 h-4 ${
                active ? "text-[#186AFF]" : "text-black/60"
              }`}
            />
          )}
        </div>

        {/* STATUS */}
        <span
          className={`text-[12px] px-3 py-1 rounded-full
            ${completed && "bg-[#B3ECBF] text-[#155724]"}
            ${active && "bg-[#186AFF29] text-[#186AFF]"}
            ${locked && "bg-black/10 text-black/60"}
          `}
        >
          {completed ? "Completed" : active ? "Continue" : "Locked"}
        </span>
      </div>

      {/* TITLE */}
      <p className={`text-[20px] font-medium ${locked && "text-black/50"}`}>
        {title}
      </p>
    </div>
  );
}
