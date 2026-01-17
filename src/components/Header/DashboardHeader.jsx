"use client";
import ProfileDropdown from "./DashboardHeaderDropdown.jsx";
import { useState, useRef, useEffect } from "react";
import { Bell, User, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-[69px] bg-white border-b border-black/25 px-4 lg:px-[60px] relative">
      <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-6 lg:gap-12">
          <div className="font-switzer font-semibold text-[24px] lg:text-[28px]">
            DessoBuild
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 text-[16px] text-black/70">
            <NavItem label="Architects" />
            <NavItem label="Interior Designers" />
            <NavItem label="Vastu Experts" />
            <NavItem label="Contact us" />
            <NavItem label="Chat Message" />
            <NavItem label="Live Projects" />
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 lg:gap-6 relative">
          <Bell className="w-5 h-5 text-black/70 cursor-pointer" />

          {/* PROFILE BUTTON */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="w-8 h-8 rounded-full border border-black/70 flex items-center justify-center"
          >
            <User className="w-4 h-4 text-black/70" />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenu((p) => !p)}
          >
            {mobileMenu ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* PROFILE DROPDOWN */}
          {open && <ProfileDropdown ref={dropdownRef} />}
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-black/10 shadow-md z-40">
          <div className="flex flex-col p-4 gap-4 text-[16px] text-black/80">
            <NavItem label="Architects" />
            <NavItem label="Interior Designers" />
            <NavItem label="Vastu Experts" />
            <NavItem label="Contact us" />
            <NavItem label="Chat Message" />
            <NavItem label="Live Projects" />
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label }) {
  return (
    <span className="cursor-pointer hover:text-black transition">
      {label}
    </span>
  );
}
