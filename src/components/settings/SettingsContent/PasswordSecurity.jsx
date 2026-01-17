"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import DeleteAccountModal from "@/components/settings/SettingsContent/components/DeleteAccountModal.jsx";

export default function PasswordSecurity() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="w-full lg:w-218.25 flex flex-col gap-8">

        {/* PAGE HEADER */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] lg:text-[28px] font-normal leading-10">
            Password & Security
          </h2>
          <p className="text-[14px] leading-5.25 text-black/80">
            Protect your account by updating your password and managing security preferences.
          </p>
        </div>

        {/* CHANGE PASSWORD CARD */}
        <div className="w-full max-w-140 border border-black/25 rounded-xl p-6 flex flex-col gap-8">

          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] lg:text-[28px] font-normal leading-10">
              Change your Password
            </h3>
            <p className="text-[14px] leading-[18px] text-black/80 max-w-[440px]">
              You’ll need to log in again on all devices after changing your password.
            </p>
          </div>

          <Field label="Current Password *">
            <input type="password" className="input" />
          </Field>

          <Field label="New Password *">
            <PasswordInput show={showNew} toggle={() => setShowNew(!showNew)} />
          </Field>

          <Field label="Re-enter new password *">
            <PasswordInput
              show={showConfirm}
              toggle={() => setShowConfirm(!showConfirm)}
            />
          </Field>

          <div className="flex justify-end gap-8">
            <button className="h-[41px] px-4 text-[16px] font-medium text-black/60">
              Cancel
            </button>
            <button className="h-[41px] px-6 bg-[#186AFF] text-white rounded-[8px] text-[16px] font-medium">
              Confirm and logout
            </button>
          </div>
        </div>

        {/* DELETE ACCOUNT CARD */}
        <div className="w-full max-w-[560px] border border-black/25 rounded-[12px] p-6 flex flex-col gap-8">

          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] lg:text-[28px] font-normal leading-[40px]">
              Delete Account
            </h3>
            <p className="text-[14px] leading-[18px] text-black/80 max-w-[512px]">
              Permanently delete your account and all associated data. This action
              cannot be undone and you will lose access to your profile, history,
              and balance.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="h-[41px] px-6 bg-[#E00B10] text-white rounded-[8px] text-[16px] font-medium"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <DeleteAccountModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          setShowDeleteModal(false);
          // 🔥 Call delete account API here
          console.log("Account deleted");
        }}
      />
    </>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-[6px] w-full max-w-[512px]">
      <label className="text-[18px] leading-[24px]">
        {label}
      </label>
      {children}
    </div>
  );
}

function PasswordInput({ show, toggle }) {
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        className="input pr-10"
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-black/60"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
