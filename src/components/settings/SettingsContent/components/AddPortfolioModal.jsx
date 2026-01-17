"use client";
import React from 'react'
import { UploadSection } from "@/components/settings/ui.jsx"

export default function AddPortfolioModal({ onClose }) {
  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[729px] bg-white rounded-[16px] p-[24px]
        flex flex-col gap-[32px]
      ">

        {/* HEADER – Frame 317 */}
        <div className="flex flex-col gap-[8px] w-[552px]">
          <h3 className="text-[24px] leading-[32px] font-normal">
            Add Portfolio
          </h3>
          <p className="text-[14px] leading-[21px] text-black/60">
            Add a professional portfolio entry that will appear on your public profile.
          </p>
        </div>

        {/* UPLOAD PORTFOLIO */}
        <UploadSection
          title="Upload Portfolio *"
          desc="Upload images or documents of portfolio"
          hint="JPG, PNG, or PDF  Max size: 10MB per file."
        />

        {/* THUMBNAIL */}
        <UploadSection
          title="Thumbnail Image *"
          desc="This image will be shown as the cover preview on your profile."
          hint="JPG or PNG  Max size: 10MB per file."
        />

        {/* TITLE INPUT */}
        <div className="flex flex-col gap-[6px] w-[552px]">
          <label className="text-[16px]">Title *</label>
          <input
            placeholder="eg. Portfolio"
            className="h-[40px] px-[8px] border border-black/25 rounded-[8px]
              text-[16px] placeholder:text-black/60"
          />
        </div>

        {/* ACTIONS – Frame 205 */}
        <div className="flex justify-end gap-[32px] w-[552px]">
          <button
            onClick={onClose}
            className="h-[41px] px-[10px] text-[16px] font-medium text-black/60"
          >
            Cancel
          </button>

          <button
            className="h-[41px] px-[24px] bg-[#186AFF] rounded-[8px]
              text-white text-[16px] font-medium"
          >
            Add to Portfolio
          </button>
        </div>
      </div>
    </>
    
  );
  
}
