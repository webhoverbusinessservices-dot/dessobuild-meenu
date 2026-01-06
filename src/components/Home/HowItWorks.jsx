import React from "react";

export const HowItWorks = () => {
  return (
    <>
      <section className=" bg-white w-full max-w-[1440px] mx-auto py-[80px]  flex flex-col gap-[64px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="
    font-switzer font-medium
    text-[54px] leading-[100%]
    tracking-[0px]
    text-[#000000]
    text-center
    w-full max-w-[604px]  
    mx-auto              
    opacity-100
    mb-4
  " >
              How DessoBuilds Works
            </h2>

            <p  className="
    font-switzer font-normal
    text-[18px] leading-[27px]
    tracking-[0px]
    text-[#000000]
    text-center
    w-full max-w-[480px]   /* Figma width */
    mx-auto                /* center horizontally */
    opacity-100
    
  "
            >
              Thousands of professionals have already found the right job with
              us faster, easier, and with less stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full max-w-[1200px] mx-auto">
            <div className="bg-[#F4F2F2] w-full max-w-[389.33px] h-[276px] rounded-[16px] p-[32px] flex flex-col">
              <div className="bg-white w-[49px] h-[32px] rounded-[32px] flex items-center justify-center px-[14px] py-[4px] shadow-[0px_0px_16px_4px_rgba(24,106,255,0.35)] mb-[32px]">
                <span className="font-switzer font-medium text-[18px] leading-[100%] text-[#186AFF]">
                  01
                </span>
              </div>

              <h3 className="font-switzer font-medium text-[24px] leading-[100%] text-black max-w-[325.33px] mb-4">
                Choose a Category
              </h3>

              <p className="font-switzer font-normal text-[18px] leading-[27px] text-[#000000] max-w-[325.33px]">
                Find the right expert, connect instantly, and start building
                smarter — all in just a few steps.
              </p>
            </div>

            <div className="bg-[#F4F2F2] w-full max-w-[389.33px] h-[276px] rounded-[16px] p-[32px] flex flex-col">
              <div className="bg-white w-[49px] h-[32px] rounded-[32px] flex items-center justify-center px-[14px] py-[4px] shadow-[0px_0px_16px_4px_rgba(24,106,255,0.35)] mb-[32px]">
                <span className="font-switzer font-medium text-[18px] leading-[100%] text-[#186AFF]">
                  02
                </span>
              </div>

              <h3 className="font-switzer font-medium text-[24px] leading-[100%] text-black max-w-[325.33px]  mb-4">
                Select an Expert
              </h3>

              <p className="font-switzer font-normal text-[18px] leading-[27px] text-[#000000] max-w-[325.33px]">
                Whether you&apos;re seeking architectural advice or interior
                design help, getting started is easy and seamless.
              </p>
            </div>

            <div className="bg-[#F4F2F2] w-full max-w-[389.33px] h-[276px] rounded-[16px] p-[32px] flex flex-col">
              <div className="bg-white w-[49px] h-[32px] rounded-[32px] flex items-center justify-center px-[14px] py-[4px] shadow-[0px_0px_16px_4px_rgba(24,106,255,0.35)] mb-[32px]">
                <span className="font-switzer font-medium text-[18px] leading-[100%] text-[#186AFF]">
                  03
                </span>
              </div>

              <h3 className="font-switzer font-medium text-[24px] leading-[100%] text-black max-w-[325.33px]  mb-4">
                Start the Conversation
              </h3>

              <p className="font-switzer font-normal text-[18px] leading-[27px] text-[#000000] max-w-[325.33px]">
                Connect with trusted Architects, Designers, and Vastu-Experts —
                from vision to reality, get paired with the right solution
                faster.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
