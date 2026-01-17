"use client";

import Image from "next/image";
import { Check, User, Star, AlignLeft, FileText, Tag } from "lucide-react";

const SideBar = ({ currentStep }) => {
  const steps = [
    {
      id: 1,
      title: "Create your Profile",
      description:
        "A clear profile helps clients trust you. We use this info to verify your identity and secure your account.",
      icon: User,
    },
    {
      id: 2,
      title: "Specialization & Language",
      description:
        "Select your expertise and working languages so clients find the right match.",
      icon: Star,
    },
    {
      id: 3,
      title: "Bio & Details",
      description:
        "Share your style, experience, and what makes your work unique.",
      icon: AlignLeft,
    },
    {
      id: 4,
      title: "Documentation Proof",
      description:
        "Upload certificates and ID proofs to verify your profession.",
      icon: FileText,
    },
    {
      id: 5,
      title: "Rate",
      description:
        "Set your pricing across multiple services—consultation, residential, commercial, and landscape.",
      icon: Tag,
    },
  ];

  return (
    <div className="lg:sticky lg:top-8 h-fit w-full">
      <aside
        className="
          bg-[#F9F9F9]
          rounded-3xl
          shadow-[0px_12px_26px_rgba(0,0,0,0.12)]
          p-6 sm:p-8 lg:p-10
          space-y-6 lg:space-y-8
          w-full
        "
      >
        {/* INFO */}
        <div className="flex items-start gap-2 text-[14px] sm:text-[16px] leading-[24px] sm:leading-[27px] text-black/70">
          <Image
            src="/images/clarity_error-line.png"
            alt="Info"
            width={24}
            height={24}
            className="shrink-0"
          />
          <p>Get started by setting up your profile details</p>
        </div>

        {/* STEPS */}
        <div className="space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div key={step.id} className="flex gap-3 sm:gap-4 relative">
                {/* ICON + LINE */}
                <div className="flex flex-col items-center">
                  {/* CIRCLE */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isCompleted
                        ? "bg-blue-600 border-blue-600"
                        : isCurrent
                        ? "border-blue-600 bg-white"
                        : "border-black/20 bg-white"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-white" />
                    ) : (
                      <Icon
                        className={`w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] transition-colors duration-300 ${
                          isCurrent ? "text-blue-600" : "text-black/60"
                        }`}
                      />
                    )}
                  </div>

                  {/* CONNECTOR */}
                  {index !== steps.length - 1 && (
                    <div className="relative w-px h-14 sm:h-16 lg:h-20 mt-1 flex justify-center">
                      {/* Gray dashed base */}
                      <div className="absolute inset-0 border-l border-dashed border-black/20" />

                      {/* Blue animated fill */}
                      <div
                        className={`
                          absolute top-0 w-px bg-blue-600
                          transition-all duration-700 ease-in-out
                          ${isCompleted ? "h-full" : "h-0"}
                        `}
                      />
                    </div>
                  )}
                </div>

                {/* TEXT */}
                <div className="flex-1 pb-6 sm:pb-8">
                  <h3
                    className="
                      font-switzer
                      text-[18px] sm:text-[20px] lg:text-[24px]
                      leading-[24px] sm:leading-[26px] lg:leading-[27px]
                      font-medium
                      text-black
                      mb-1 sm:mb-2
                    "
                  >
                    {step.title}
                  </h3>
                  <p
                    className="
                      font-switzer
                      text-[14px] sm:text-[15px] lg:text-[16px]
                      leading-[20px] sm:leading-[22px] lg:leading-[24px]
                      text-black/60
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
