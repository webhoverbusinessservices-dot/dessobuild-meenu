"use client";
import React from "react";
import ProfileStep from "./StepCard";

export default function CompleteProfile() {
  return (
    <div className="flex flex-col gap-4">

      {/* TITLE + PROGRESS */}
      <div className="flex items-center justify-between">
        <h3 className="text-[28px] font-medium">Complete Your Profile</h3>

        <div className="relative flex items-center gap-4">
          <div className="w-100 h-2.5 rounded-full border border-black/20 bg-white" />
          <span className="text-[20px] font-medium">
            20% Completed - Keep it up
          </span>

          {/* Progress Fill */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-2.5 bg-[#186AFF] rounded-full" />
        </div>
      </div>

      {/* STEPS */}
      <div className="flex gap-4">
        <ProfileStep completed title="Create your Profile" />
        <ProfileStep locked title="Bio & Details" />
        <ProfileStep locked title="Document Proof" />
        <ProfileStep active title="Specialization" />
        <ProfileStep locked title="Rate" />
      </div>
    </div>
  );
}
