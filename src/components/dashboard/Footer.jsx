'use client';
import Link from "next/link";
import React from "react";

 const Footer = () => {
  return (
    <footer
      className=" w-full bg-[#272932] border-t border-[#00000033] py-12 sm:py-14 text-white">
      <div className="max-w-300 mx-auto px-4">

        {/* ---------- TOP GRID ---------- */}
        <div
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
          {/* ---------- LOCATION ---------- */}
          <div className="flex flex-col gap-6 max-w-55">
            <h4
              className="
                font-switzer font-medium
                text-[14px]
                leading-[100%]
                text-white
              "
            >
              Location
            </h4>

            <ul className="flex flex-col gap-2">
              <li
                className=" font-switzer font-normal text-[14px] leading-[100%] text-white ">
                E-520A, 3rd Floor,<br />
                Sector 7, Dwarka,<br />
                New Delhi - 110075, India
              </li>

              <li
                className=" font-switzer font-normal text-[14px] leading-[100%] text-white">
                info@dessobuild@gmail.com
              </li>
            </ul>
          </div>

          {/* ---------- NAVIGATION ---------- */}
          <div className="flex flex-col gap-6 max-w-55">
            <h4 className="font-switzer font-medium text-[14px] leading-[100%]">
              Navigation
            </h4>

            <ul className="flex flex-col gap-2">
              {["Home", "About", "Services", "Become a Freelancer", "Support"].map(
                (item) => (
                  <li
                    key={item}
                    className="font-switzer font-normal text-[14px] leading-[100%]"
                  >
                    <Link href="#">{item}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ---------- FOLLOW US ---------- */}
          <div className="flex flex-col gap-6 max-w-55">
            <h4 className="font-switzer font-medium text-[14px] leading-[100%]">
              Follow Us
            </h4>

            <ul className="flex flex-col gap-2">
              {["Facebook", "Instagram", "LinkedIn", "Youtube"].map((item) => (
                <li
                  key={item}
                  className="font-switzer font-normal text-[14px] leading-[100%]"
                >
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- LEGAL ---------- */}
          <div className="flex flex-col gap-6 max-w-55">
            <h4 className="font-switzer font-medium text-[14px] leading-[100%]">
              Legal
            </h4>

            <ul className="flex flex-col gap-2">
              {["Terms & Condition", "Privacy Policy", "Legal Notice"].map(
                (item) => (
                  <li
                    key={item}
                    className="font-switzer font-normal text-[14px] leading-[100%]"
                  >
                    <Link href="#">{item}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* ---------- DIVIDER ---------- */}
        <div
          className=" w-full max-w-300 mx-auto border-t border-[#FFFFFF33] pt-6  "
        >

          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span
              className=" font-switzer font-semibold text-[28px] leading-[100%] tracking-[0] text-white w-[147px] h-[37px] flex items-center
  "
            >
              DessoBuild
            </span>


            <span
              className=" font-switzer font-normal text-[16px] leading-[100%] tracking-[0] text-white w-69.75 h-5.25 flex items-center
  "
            >
              © 2025 DessoBuild. All rights reserved.
            </span>

          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;