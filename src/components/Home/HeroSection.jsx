import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8">
          <div className=" inline-flex items-center gap-2.5 border-[1.6px] border-[#186AFF29] rounded-[34px] px-4 py-2 mb-6 backdrop-blur-2xl bg-[#F9F9F9]/60 max-w-full ">
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]"></span>

            {/* TEXT */}
            <span className="font-switzer font-medium text-[12px] leading-[18.45px] tracking-[1.58px] uppercase text-[#000000] text-center flex items-center ">
              {" "}
              SMART CONSTRUCTION SOLUTIONS
            </span>
          </div>

          <h1 className="font-switzer font-medium text-center text-black tracking-[0em] opacity-100 text-[36px] leading-10 sm:text-[56px] sm:leading-15.5 lg:text-[80px] lg:leading-22 max-w-217.75 mx-auto mb-4">
            {" "}
            Be Smart. Build Smart. <br /> Build Better.
          </h1>

          <p className=" font-switzer font-normal text-[16px] leading-6 sm:text-[18px] sm:leading-6.75 text-[#000000] text-center max-w-217.75 mx-auto opacity-100 mb-8 "> Connect with top architects, interior designers, and Vastu seamless projectmanagement from concept to completion.</p>

          <div className=" flex flex-col sm:flex-row justify-center items-center gap-10 max-w-96.5 mx-auto">
           <button className="w-42.5 h-11 bg-[#186AFF] text-white rounded-sm px-5 py-2.5 font-switzer font-medium text-[18px] leading-[100%] tracking-[0em] flex items-center justify-center gap-2.5 hover:bg-[#0057E6] transition-all"> Find an Expert
            </button>

            {/* BUTTON 2 — Join as Expert */}
            <button
              className="w-44 h-11  bg-white text-[#186AFF]  
        border-[1.6px] border-[#186AFF]  rounded-sm px-5 py-2.5 font-switzer font-medium text-[18px] leading-[100%] tracking-[0em] flex items-center justify-center gap-2.5  transition-all"
            >Join as Expert</button>
          </div>
        </div>

        {/* Service Cards */}
        {/* Service Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-300 mx-auto mt-16"
        >
          {/* CARD 1 */}
          <div className="w-full max-w-97.25 h-97.25 rounded-xl overflow-hidden bg-[#D6E1F5] mx-auto">
            {/* IMAGE */}
            <div className="w-full h-54 rounded-t-sm overflow-hidden">
              <Image
                src="/images/architects.png"
                width={389}
                height={216}
                alt="Architects"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="h-43.25 p-6 flex flex-col gap-2">
              <h3 className=" font-switzer font-medium text-[28px] leading-[100%] tracking-[0px] text-black max-w-33.25 opacity-100"
              > Architects</h3>

              <p className=" font-archivo font-normal text-[18px] leading-[24.1px] tracking-[0px] text-[#000000] w-[341.33px] opacity-100" > Professional architects to design your dream spaces with
                precision and creativity.</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full max-w-97.25 h-97.25 rounded-xl overflow-hidden bg-[#E9F5D6] mx-auto">
            <div className="w-full h-54 rounded-t-sm overflow-hidden">
              <Image
                src="/images/interior-designers.png"
                width={389}
                height={216}
                alt="Interior Designers"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-43.25 p-6 flex flex-col gap-2">
              <h3 className=" font-switzer font-medium text-[28px] leading-[100%] tracking-[0px] text-black max-w-57.5 opacity-100">
                Interior Designers</h3>

              <p className=" font-archivo font-normal text-[18px] leading-[24.1px] tracking-[0px] text-[#000000] max-w-[341.33px] opacity-100" > Expert interior designers to create beautiful and functional living spaces. </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className=" w-full max-w-97.25 h-97.25 rounded-xl  overflow-hidden bg-[#F5F4D6] mx-auto sm:col-span-2 lg:col-span-1 " >
            <div className="w-full h-54 rounded-t-sm overflow-hidden">
              <Image
                src="/images/vastu-experts.png"
                width={389}
                height={216}
                alt="Vastu Experts"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-43.25 p-6 flex flex-col gap-2">
              <h3 className=" font-switzer font-medium text-[28px] leading-[100%] tracking-[0px] text-black max-w-[178px]  opacity-100"
              > Vastu Experts</h3>

              <p className=" font-archivo font-normal text-[18px] leading-[24px] tracking-[0px] text-[#000000] max-w-[341.33px] opacity-100"> Certified Vastu consultants to ensure positive energy and
                harmony in your space.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
