import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8">
          <div
            className="
    inline-flex items-center gap-[10px] border-[1.6px] border-[#186AFF29] rounded-[34px] px-[16px] py-[8px] mb-6 backdrop-blur-[40px]
    bg-[#F9F9F9]/60 max-w-full "
          >
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]"></span>

            {/* TEXT */}
            <span
              className="
        font-switzer font-medium text-[12px] leading-[18.45px] tracking-[1.58px] uppercase text-[#000000]                   /* Figma color */
        text-center flex items-center "
            >
              SMART CONSTRUCTION SOLUTIONS
            </span>
          </div>

          <h1
            className="
    font-switzer font-medium text-center text-black tracking-[0em] opacity-100 text-[36px] leading-[40px] sm:text-[56px] sm:leading-[62px] lg:text-[80px] lg:leading-[88px] max-w-[871px] mx-auto mb-4"
          >
            {" "}
            Be Smart. Build Smart. <br /> Build Better.
          </h1>

          <p
            className="
    font-switzer font-normal text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] text-[#000000] text-center max-w-[871px] mx-auto opacity-100 mb-8 "
          >
            Connect with top architects, interior designers, and Vastu
            consultants to transform your vision into reality. Experience
            seamless project management from concept to completion.
          </p>

          <div
            className="
    flex flex-col sm:flex-row 
    justify-center items-center
    gap-[40px]                 
    max-w-[386px] mx-auto        
  "
          >
            {/* BUTTON 1 — Find an Expert */}
            <button
              className="w-[170px] h-[44px] bg-[#186AFF] text-white rounded-[4px] px-[20px] py-[10px] font-switzer font-medium text-[18px] leading-[100%] tracking-[0em] flex items-center justify-center gap-[10px] hover:bg-[#0057E6] transition-all">
              Find an Expert
            </button>

            {/* BUTTON 2 — Join as Expert */}
            <button className="w-[176px] h-[44px]  bg-white text-[#186AFF]  
        border-[1.6px] border-[#186AFF]  rounded-[4px] px-[20px] py-[10px] font-switzer font-medium text-[18px] leading-[100%] tracking-[0em] flex items-center justify-center gap-[10px]  transition-all">
              Join as Expert
            </button>
          </div>
        </div>

        {/* Service Cards */}
        {/* Service Cards */}
        <div
          className="
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-[16px] 
  max-w-[1200px] mx-auto
  mt-16
"
        >
          {/* CARD 1 */}
          <div className="w-full max-w-[389px] h-[389px] rounded-[12px] overflow-hidden bg-[#D6E1F5] mx-auto">
            {/* IMAGE */}
            <div className="w-full h-[216px] rounded-t-[4px] overflow-hidden">
              <Image
                src="/images/architects.png"
                width={389}
                height={216}
                alt="Architects"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="h-[173px] p-[24px] flex flex-col gap-[8px]">
              <h3
                className="
    font-switzer font-medium
    text-[28px] leading-[100%]
    tracking-[0px]
    text-black
    max-w-[133px]
    opacity-100
  "
              >
                Architects
              </h3>


              <p
                className="
    font-archivo font-normal
    text-[18px] leading-[24.1px]
    tracking-[0px]
    text-[#000000]
    w-[341.33px]       /* forces 2-line wrap same as Figma */
    opacity-100
  "
              >
                Professional architects to design your dream spaces with
                precision and creativity.
              </p>


            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full max-w-[389px] h-[389px] rounded-[12px] overflow-hidden bg-[#E9F5D6] mx-auto">
            <div className="w-full h-[216px] rounded-t-[4px] overflow-hidden">
              <Image
                src="/images/interior-designers.png"
                width={389}
                height={216}
                alt="Interior Designers"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[173px] p-[24px] flex flex-col gap-[8px]">
              <h3
                className="
    font-switzer font-medium
    text-[28px] leading-[100%]
    tracking-[0px]
    text-black
    max-w-[230px]       /* Figma width */
    opacity-100
  "
              >
                Interior Designers
              </h3>

              <p
                className="
    font-archivo font-normal
    text-[18px] leading-[24.1px]
    tracking-[0px]
    text-[#000000]
    max-w-[341.33px]     /* Figma width */
    opacity-100
  "
              >
                Expert interior designers to create beautiful and functional
                living spaces.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
    w-full max-w-[389px] h-[389px] rounded-[12px] 
    overflow-hidden bg-[#F5F4D6] mx-auto
    sm:col-span-2 lg:col-span-1
  "
          >
            <div className="w-full h-[216px] rounded-t-[4px] overflow-hidden">
              <Image
                src="/images/vastu-experts.png"
                width={389}
                height={216}
                alt="Vastu Experts"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[173px] p-[24px] flex flex-col gap-[8px]">
              <h3
                className="
    font-switzer font-medium
    text-[28px] leading-[100%]
    tracking-[0px]
    text-black
    max-w-[178px]      /* Figma width */
    opacity-100
  "
              >
                Vastu Experts
              </h3>

              <p
                className="
    font-archivo font-normal
    text-[18px] leading-[24px]
    tracking-[0px]
    text-[#000000]
    max-w-[341.33px]   /* Figma width */
    opacity-100
  "
              >
                Certified Vastu consultants to ensure positive energy and
                harmony in your space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
