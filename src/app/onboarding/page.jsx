"use client";

import { useState } from "react";
import SideBar from "@/components/onboarding/SideBar";
import StepOne from "@/components/onboarding/StepOne";
import StepTwo from "@/components/onboarding/StepTwo";
import StepThree from "@/components/onboarding/StepThree";
import StepFour from "@/components/onboarding/StepFour";
import StepFive from "@/components/onboarding/StepFive";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#F1F1F3]">

      {/* ================= HEADER ================= */}
<header
  className=" w-full h-[74px] bg-white border-b-2 border-black/25 flex items-center px-4 lg:px-[60px]">
  <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
    
    {/* Logo */}
    <div className=" font-switzer font-semibold text-[24px] lg:text-[32px] leading-[42px] text-black">
      DessoBuild
    </div>

    {/* User */}
    <div className=" font-switzer font-normal text-[16px] lg:text-[18px] leading-[24px] text-black/70 flex items-center">
      Join as nick@gmail.com
    </div>

  </div>
</header>



      {/* ================= MAIN ================= */}
      <main className="max-w-360 mx-auto px-15 pt-8.75">
        <div className=" grid grid-cols-1 lg:grid-cols-[536px_1fr] gap-8 items-start ">

          {/* SIDEBAR */}
          <SideBar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />

          {/* STEP CONTENT */}
          {currentStep === 1 && (
            <StepOne
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}

          {currentStep === 2 && (
            <StepTwo
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}

          {currentStep === 3 && (
            <StepThree
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}

          {
            currentStep === 4 && (
                <StepFour
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                />
            )
          }

          {
            currentStep === 5 && (
                <StepFive
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                />
            )
          }

          {/* STEP 3–5 placeholders */}
          {/* {currentStep === 3 && <StepThree />} */}
          {/* {currentStep === 4 && <StepFour />} */}
          {/* {currentStep === 5 && <StepFive />} */}

        </div>
      </main>
    </div>
  );
}
