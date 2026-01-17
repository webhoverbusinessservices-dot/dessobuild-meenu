"use client";
import { forwardRef } from "react";
import {
  User,
  Settings,
  History,
  Wallet,
  UserPlus,
  LogOut,
} from "lucide-react";

const ProfileDropdown = forwardRef(function ProfileDropdown(_, ref) {
  return (
    <div
      ref={ref}
      className="
        absolute right-0 top-10
        w-[256px] bg-white
        border border-black/10
        rounded-xl p-2 shadow-lg z-50
      "
    >
      {/* USER INFO */}
      <div className="p-2">
        <p className="text-[18px] font-medium">nick</p>
        <p className="text-[16px] text-black/60">nick@gmail.com</p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-[#F9F9F9] border border-black/20 rounded-lg p-3">
        <MenuItem
          icon={User}
          title="Profile & Public View"
          subtitle="Update your profile details, services, and portfolio."
        />
      </div>

      <Divider />

      <MenuItem icon={Settings} title="Account settings" />
      <MenuItem icon={History} title="Payment History" />
      <MenuItem icon={Wallet} title="Wallet / Add Money" />
      <MenuItem icon={UserPlus} title="Refer your friend" highlight />

      <Divider />

      <MenuItem icon={LogOut} title="Log out" />
    </div>
  );
});

export default ProfileDropdown;

/* ---------- HELPERS ---------- */

function MenuItem({ icon: Icon, title, subtitle, highlight }) {
  return (
    <div
      className={`flex gap-3 p-2 rounded-lg cursor-pointer
        hover:bg-black/5 transition
        ${highlight ? "bg-black/5" : ""}
      `}
    >
      <Icon className="w-5 h-5 text-black/80" />
      <div>
        <p className="text-[16px]">{title}</p>
        {subtitle && (
          <p className="text-[14px] text-black/60">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-2 h-px bg-black/10" />;
}
