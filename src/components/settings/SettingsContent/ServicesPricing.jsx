"use client";
import ConsultationCard from "@/components/settings/SettingsContent/components/ConsultationCard.jsx"
import ProjectRate from "@/components/settings/SettingsContent/components/ProjectRate.jsx"

export default function ServicesPricing() {
  return (
    <div className="flex flex-col gap-8 w-full">

      {/* HEADER */}
      <div className="max-w-[644px]">
        <h2 className="text-[24px] lg:text-[28px] font-medium">
          Services & Pricing
        </h2>
        <p className="text-[14px] text-black/80">
          Manage the services you offer, set pricing, and define consultation and project rates.
        </p>
      </div>

      <ConsultationCard />
      <ProjectRate title="Project Rate - as Residential Architect *" />
      <ProjectRate title="Project Rate - as Commercial Architect *" />
      <ProjectRate title="Project Rate - as Landscape Architect *" />

    </div>
  );
}
