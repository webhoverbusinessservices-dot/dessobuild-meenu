import Image from "next/image";
import React from "react";

export const BlogSection = () => {
  const badgeColors = [
    "bg-[#E1ECFF] text-[#1C4ED8]",
    "bg-[#EAF7D9] text-[#3A7A1A]",
    "bg-[#F6F2C6] text-[#8A6D00]",
  ];

  return (
    <section className="w-full bg-[#F4F2F2] py-16 sm:py-18 lg:py-20">
      <div className="max-w-300 mx-auto px-4">
        {/* ---------- HEADING ---------- */}
        <div className=" w-full max-w-210.75 mx-auto flex flex-col gap-3 text-center mb-16">
          <h2
            className=" font-switzer font-medium text-[28px] sm:text-[40px] lg:text-[54px] leading-[100%] tracking-[0px] text-black
    w-full "
          >
            Architectural Insights That Inspire
          </h2>

          <p className="font-switzer font-normal text-[15px] sm:text-[18px] leading-6.75 tracking-[0px] text-black w-full max-w-196.75 mx-auto" > Discover trends, tips, and expert stories from Architects, Interior
            Designers, and Vastu Experts redefining the way we build.</p>
        </div>

        {/* ---------- CARDS ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className=" w-full max-w-97.5  bg-white rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.06)] transition">
              {/* IMAGE */}
              <div className="w-full h-[221.75px]">
                <Image
                  src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764760785/768e99885c6721258f7b36033fa8a21d97d1aaac_iujgor.png"
                  alt="Blog"
                  width={390}
                  height={222}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              {/* CONTENT */}
              <div
                className=" w-full p-6 flex flex-col gap-4 "
              >
                {/* TAG + READ TIME */}
                <div className="w-full flex items-center justify-between">
                  <span
                    className={`${badgeColors[index]} font-switzer font-medium text-[14px] leading-5.25 px-3 py-2 rounded-[30px]`}>
                    ARCHITECTURE</span>
                  <span className=" font-switzer font-normal text-[14px] leading-5.25 text-black "> 7 Min read</span>
                </div>

                {/* TITLE */}
                <h3 className=" font-switzer font-medium text-[24px] leading-6 tracking-[0] text-black max-w-85.5"
                >
                  Top 10 Architecture Trends for Modern Homes
                </h3>

                {/* DESCRIPTION */}
                <p
                  className=" font-archivo font-normal text-[15px] sm:text-[16.38px] leading-[24.58px] text-[#666666] max-w-[312.31px]"
                >Explore the latest design trends shaping modern home design in 2024.</p>

                {/* LINK */}
                <a href="#" className=" font-switzer font-medium text-[16px] leading-[100%] text-[#186AFF] inline-flex items-center gap-[8px]"
                >
                  Learn more
                  <span className="font-inter text-[16.38px] leading-[24.58px]">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
