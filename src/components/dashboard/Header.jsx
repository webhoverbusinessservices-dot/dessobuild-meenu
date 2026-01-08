"use client";
import ProfileDropdown from "./ProfileDropdown";


import { useState, useRef, useEffect } from "react";
import {
  Bell,
  User,
  Settings,
  History,
  Wallet,
  UserPlus,
  LogOut,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-[69px] bg-white border-b-2 border-black/25 flex items-center px-[60px] relative">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-[48px]">
          <div className="font-switzer font-semibold text-[28px]">
            DessoBuild
          </div>

          <nav className="flex items-center gap-6 text-[16px] text-black/70">
            <NavItem label="Architects" />
            <NavItem label="Interior Designers" />
            <NavItem label="Vastu Experts" />
            <NavItem label="Contact us" />
            <NavItem label="Chat Message" />
            <NavItem label="Live Projects" />
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 relative">
          <Bell className="w-5 h-5 text-black/70 cursor-pointer" />

          {/* PROFILE BUTTON */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="w-5 h-5 rounded-full border border-black/70 flex items-center justify-center"
          >
            <User className="w-[12px] h-[14px] text-black/70" />
          </button>

          {/* DROPDOWN */}
          {open && <ProfileDropdown ref={dropdownRef} />}
        </div>
      </div>
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
