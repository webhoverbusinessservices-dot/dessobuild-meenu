import React from "react";

export const HowItWorks = () => {
  return (
    <>
      <section className=" bg-white w-full max-w-360 mx-auto py-20  flex flex-col gap-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className=" font-switzer font-medium text-[54px] leading-[100%] tracking-[0px] text-[#000000] text-center w-full max-w-151 mx-auto opacity-100 mb-4" >How DessoBuilds Works</h2>

            <p  className="font-switzer font-normal text-[18px] leading-6.75 tracking-[0px] text-[#000000] text-center w-full max-w-120 mx-auto opacity-100">
              Thousands of professionals have already found the right job with
              us faster, easier, and with less stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-300 mx-auto">
            <div className="bg-[#F4F2F2] w-full max-w-[389.33px] h-69 rounded-2xl p-8 flex flex-col">
              <div className="bg-white w-12.25 h-8 rounded-4xl flex items-center justify-center px-3.5 py-1 shadow-[0px_0px_16px_4px_rgba(24,106,255,0.35)] mb-8">
                <span className="font-switzer font-medium text-[18px] leading-[100%] text-[#186AFF]">
                  01
                </span>
              </div>

              <h3 className="font-switzer font-medium text-[24px] leading-[100%] text-black max-w-[325.33px] mb-4">
                Choose a Category
              </h3>

              <p className="font-switzer font-normal text-[18px] leading-6.75 text-[#000000] max-w-[325.33px]">
                Find the right expert, connect instantly, and start building
                smarter — all in just a few steps.
              </p>
            </div>

            <div className="bg-[#F4F2F2] w-full max-w-[389.33px] h-69 rounded-2xl p-8 flex flex-col">
              <div className="bg-white w-12.25 h-8 rounded-4xl flex items-center justify-center px-3.5 py-1 shadow-[0px_0px_16px_4px_rgba(24,106,255,0.35)] mb-8"> <span className="font-switzer font-medium text-[18px] leading-[100%] text-[#186AFF]"> 02 </span></div>

              <h3 className="font-switzer font-medium text-[24px] leading-[100%] text-black max-w-[325.33px]  mb-4"> Select an Expert</h3>

              <p className="font-switzer font-normal text-[18px] leading-6.75 text-[#000000] max-w-[325.33px]"> Whether you&apos;re seeking architectural advice or interior design help, getting started is easy and seamless.</p>
            </div>

            <div className="bg-[#F4F2F2] w-full max-w-[389.33px] h-69 rounded-2xl p-8 flex flex-col">
              <div className="bg-white w-12.25 h-8 rounded-4xl flex items-center justify-center px-3.5 py-1 shadow-[0px_0px_16px_4px_rgba(24,106,255,0.35)] mb-8">
                <span className="font-switzer font-medium text-[18px] leading-[100%] text-[#186AFF]">
                  03
                </span>
              </div>

              <h3 className="font-switzer font-medium text-[24px] leading-[100%] text-black max-w-[325.33px]  mb-4">
                Start the Conversation
              </h3>

              <p className="font-switzer font-normal text-[18px] leading-6.75 text-[#000000] max-w-[325.33px]">
                Connect with trusted Architects, Designers, and Vastu-Experts —from vision to reality, get paired with the right solution faster.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
