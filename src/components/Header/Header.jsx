"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Header = ({ loginBtn = true }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "text-blue-600" : "text-[#000000B8]";

  return (
    <>
      <nav className="bg-white lg:pt-8">
        {/* pt-8 remove and paste this border-b border-gray-100 sticky top-0 z-50 */}
        <div className="bg-[#F9F9F9] rounded-2xl flex items-center justify-between px-6 py-3 h-17 w-full mt-4 mx-auto lg:w-312 lg:mt-10">

          {/* LOGO */}
          <div className="flex items-center h-10.5">
            <Link href="/">
              <h1 className="font-switzer font-semibold text-[24px] lg:text-[32px] leading-none tracking-[0em] text-black w-auto lg:w-42 h-10.5 flex items-center">
                DessoBuild
              </h1>
            </Link>
          </div>


          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center justify-between w-139 h-6 gap-10">
            <Link
              href="/architects"
              className={`font-switzer font-medium text-[18px] ${isActive("/architects")} hover:text-blue-700`}
            >
              Architects
            </Link>

            <Link
              href="/interior-designers"
              className={`font-switzer font-medium text-[18px] ${isActive("/interior-designers")} hover:text-blue-700`}
            >
              Interior Designers
            </Link>

            <Link
              href="/vastu"
              className={`font-switzer font-medium text-[18px] ${isActive("/vastu")} hover:text-blue-700`}
            >
              Vastu Experts
            </Link>

            <Link
              href="/contact"
              className={`font-switzer font-medium text-[18px] ${isActive("/contact")} hover:text-blue-700`}
            >
              Contact us
            </Link>

          </div>


          {/* DESKTOP AUTH BUTTONS */}
          <div className="hidden lg:flex items-center space-x-4">
            {loginBtn && (
              <a
                href="/login"
                className="text-blue-600 border-2 border-blue-600 px-5 py-2 rounded-[10px] hover:bg-blue-50 transition-all font-medium"
              >
                Login
              </a>
            )}
            <Link href="/signup" className="w-33.25 h-11 bg-[#186AFF] rounded-sm px-5 py-2.5 flex items-center justify-center gap-2.5 opacity-100 hover:bg-[#0057E6] transition-all font-switzer font-medium text-[18px] leading-[100%] tracking-[0em] text-white">  Get Started</Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#F9F9F9] rounded-2xl p-5 space-y-4 shadow">

            <Link
              href="/architects"
              className=" block  font-switzer font-medium  text-[18px] leading-6 tracking-[0em] text-[#000000B8] px-3 py-2.5 rounded-md hover:bg-gray-100
      "
            >
              Architects
            </Link>

            <Link
              href="/interior-designers"
              className="block font-switzer font-medium text-[18px] leading-6 text-[#000000B8] px-3 py-2.5 rounded-md hover:bg-gray-100"
            >
              Interior Designers
            </Link>

            <Link
              href="/vastu"
              className="block font-switzer font-medium text-[18px] leading-6 text-[#000000B8] px-3 py-2.5 rounded-md hover:bg-gray-100">
              Vastu Experts
            </Link>

            <Link
              href="/contact"
              className=" block  font-switzer font-medium  text-[18px] leading-6 text-[#000000B8] px-3 py-2.5 rounded-md hover:bg-gray-100"
            >
              Contact us
            </Link>

            <div className="pt-3 space-y-3">

              {loginBtn && (
                <a
                  href="/login"
                  className=" block w-full text-center font-switzer font-medium text-[18px] leading-6 text-blue-600 border-2 border-blue-600 rounded-md py-2.5"
                >Login</a>
              )}

              <Link href="/signup" className="block w-full text-center font-switzer font-medium text-[18px] leading-6 text-white bg-[#186AFF] rounded-md py-2.5">
                Get Started</Link>
            </div>

          </div>
        )}



        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F9F9F9] border-t border-gray-200 mt-3 rounded-[16px] shadow p-[20px]">
            <div className="space-y-3">

              <a
                href="#architects"
                className=" block font-switzer font-medium text-[18px] leading-6 text-[#000000B8] px-3 py-2.5 bg-blue-50 rounded-lg"
              >Architects</a>

              <a
                href="#designers"
                className="block font-switzer font-medium text-[18px] leading-6 text-[#000000B8] px-3 py-2.5 hover:bg-gray-100 rounded-lg">  Interior Designers</a>

              <a href="#vastu" className=" block font-switzer font-medium text-[18px] leading-6 text-[#000000B8] px-3 py-2.5 hover:bg-gray-100 rounded-lg"  >  Vastu Experts</a>

              <a href="#contact" className=" block font-switzer font-medium text-[18px] leading-6 text-[#000000B8] px-3 py-2.5
          hover:bg-gray-100 rounded-lg">
                Contact us
              </a>

              <div className="pt-3 space-y-3">
                <button className="  w-full text-center font-switzer font-medium text-[18px] leading-6
            text-blue-600 border-2 border-blue-600 rounded-md py-2.5"  > Login </button>

                <button className=" w-full bg-[#186AFF] text-white font-switzer font-medium text-[18px] leading-6 rounded-md py-2.5"
                >Get Started</button>
              </div>

            </div>
          </div>
        )}

      </nav>
    </>
  )
}
