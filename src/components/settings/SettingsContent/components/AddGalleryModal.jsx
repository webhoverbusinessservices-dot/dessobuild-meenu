"use client";
import React from "react";
import { UploadSection } from "@/components/settings/ui";

export default function AddGalleryModal({ onClose }) {
  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          fixed z-50
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[729px]
          bg-white rounded-[16px]
          p-[24px]
          flex flex-col gap-[32px]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER – Frame 317 */}
        <div className="flex flex-col gap-[8px] w-[552px]">
          <h3 className="text-[24px] leading-[32px] font-normal">
            Add to Gallery
          </h3>
          <p className="text-[14px] leading-[21px] text-black/60">
            Showcase a work sample to highlight your skills on your public profile.
          </p>
        </div>

        {/* UPLOAD WORK */}
        <UploadSection
          title="Upload Work *"
          desc="Upload images or documents that represent this work sample."
          hint={`JPG, PNG, or PDF\nMax size: 10MB per file.`}
        />

        {/* THUMBNAIL IMAGE */}
        <UploadSection
          title="Thumbnail Image *"
          desc="This image will be shown as the cover preview on your profile."
          hint={`JPG or PNG\nMax size: 10MB per file.`}
        />

        {/* PROJECT TITLE */}
        <div className="flex flex-col gap-[6px] w-[552px]">
          <label className="text-[16px]">Project Title *</label>
          <input
            placeholder="eg. Modern Home Facade Design"
            className="
              h-[40px]
              px-[8px]
              border border-black/25
              rounded-[8px]
              text-[16px]
              placeholder:text-black/60
            "
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
            className="
              h-[41px]
              px-[24px]
              bg-[#186AFF]
              rounded-[8px]
              text-white
              text-[16px]
              font-medium
            "
          >
            Add to Gallery
          </button>
        </div>
      </div>
    </>
  );
}
