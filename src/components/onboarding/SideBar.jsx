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
    <div className="lg:sticky lg:top-8 h-fit">
      <aside className="bg-[#F9F9F9] rounded-3xl shadow-[0px_12px_26px_rgba(0,0,0,0.12)] p-10 space-y-8 w-full">

        {/* Info */}
        <div className="flex items-center gap-2 text-[16px] leading-[27px] text-black/70">
          <Image
            src="/images/clarity_error-line.png"
            alt="Info"
            width={24}
            height={24}
          />
          <p>Get started by setting up your profile details</p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div key={step.id} className="flex gap-3 relative">
                
                {/* ICON + LINE */}
                <div className="flex flex-col items-center">
                  
                  {/* Circle */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isCompleted
                        ? "bg-blue-600 border-blue-600"
                        : isCurrent
                        ? "border-blue-600 bg-white"
                        : "border-black/20 bg-white"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-[18px] h-[18px] text-white" />
                    ) : (
                      <Icon
                        className={`w-[18px] h-[18px] transition-colors duration-300 ${
                          isCurrent ? "text-blue-600" : "text-black/60"
                        }`}
                      />
                    )}
                  </div>

                  {/* Connector */}
                  {index !== steps.length - 1 && (
                    <div className="relative w-px h-20 mt-1 flex justify-center">
                      
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
                <div className="flex-1 pb-8">
                  <h3 className="font-switzer text-[24px] leading-[27px] font-medium text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="font-switzer text-[16px] leading-[24px] text-black/60">
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
