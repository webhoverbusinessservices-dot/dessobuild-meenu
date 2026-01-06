'use client';
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-[#272932]
        border-t border-[#00000033]
        py-[48px] sm:py-[56px]
        text-white
      "
    >
      <div className="max-w-[1200px] mx-auto px-4">

        {/* ---------- TOP GRID ---------- */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-[32px]
            mb-[48px]
          "
        >
          {/* ---------- LOCATION ---------- */}
          <div className="flex flex-col gap-[24px] max-w-[220px]">
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

            <ul className="flex flex-col gap-[8px]">
              <li
                className="
                  font-switzer font-normal
                  text-[14px]
                  leading-[100%]
                  text-white
                "
              >
                E-520A, 3rd Floor,<br />
                Sector 7, Dwarka,<br />
                New Delhi - 110075, India
              </li>

              <li
                className="
                  font-switzer font-normal
                  text-[14px]
                  leading-[100%]
                  text-white
                "
              >
                info@dessobuild@gmail.com
              </li>
            </ul>
          </div>

          {/* ---------- NAVIGATION ---------- */}
          <div className="flex flex-col gap-[24px] max-w-[220px]">
            <h4 className="font-switzer font-medium text-[14px] leading-[100%]">
              Navigation
            </h4>

            <ul className="flex flex-col gap-[8px]">
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
          <div className="flex flex-col gap-[24px] max-w-[220px]">
            <h4 className="font-switzer font-medium text-[14px] leading-[100%]">
              Follow Us
            </h4>

            <ul className="flex flex-col gap-[8px]">
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
          <div className="flex flex-col gap-[24px] max-w-[220px]">
            <h4 className="font-switzer font-medium text-[14px] leading-[100%]">
              Legal
            </h4>

            <ul className="flex flex-col gap-[8px]">
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
          className="
    w-full
    max-w-[1200px]
    mx-auto
    border-t
    border-t-[1.6px]
    border-[#FFFFFF33]
    pt-[24px]
  "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-[16px]
            "
          >
            <span
              className="
    font-switzer
    font-semibold
    text-[28px]
    leading-[100%]
    tracking-[0]
    text-white
    w-[147px]
    h-[37px]
    flex items-center
  "
            >
              DessoBuild
            </span>


            <span
              className="
    font-switzer
    font-normal
    text-[16px]
    leading-[100%]
    tracking-[0]
    text-white
    w-[279px]
    h-[21px]
    flex items-center
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
