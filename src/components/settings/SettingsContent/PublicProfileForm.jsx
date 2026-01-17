"use client";
import { useState } from "react";

import {
  TagRow,
  Card,
  Field,
  UpdateRow,
  Input,
  SectionTitle,
} from "@/components/settings/ui";

// ADD BOXES
import PortfolioAddBox from "./components/PortfolioAddBox";
import GalleryAddBox from "./components/GalleryAddBox";

export default function PublicProfileSection() {
  const [experience, setExperience] = useState("0-2 years");
  const [languages, setLanguages] = useState(["English"]);
  const [specialization, setSpecialization] = useState("Architect");
  const [expertise, setExpertise] = useState(["Residential Architect"]);

  return (
    <div className="w-full lg:w-[873px] flex flex-col gap-8">

      {/* PAGE HEADER */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
        <div className="lg:w-[644px] flex flex-col gap-[4px]">
          <h2 className="text-[24px] lg:text-[28px] leading-[40px] font-normal">
            Public Profile
          </h2>
          <p className="text-[14px] text-black/80">
            Customize how your profile appears to clients, including your bio,
            portfolio, expertise, and visibility.
          </p>
        </div>

        <button className="h-[41px] px-[24px] bg-[#186AFF] text-white rounded-[8px] font-medium">
          Preview Profile
        </button>
      </div>

      {/* SPECIALIZATION & LANGUAGE */}
      <Card>
        <SectionTitle
          title="Specialization & Language *"
          desc="Add the areas you specialize in and the languages you’re comfortable consulting in."
        />

        <Field label="Your experience level *">
          <Input value={experience} placeholder="0-2 years" />
          <TagRow
            tags={["0-2 years", "2-5 years", "5-7 years", "7+ years"]}
            selected={experience}
            onSelect={setExperience}
          />
        </Field>

        <Field label="Languages you speak *">
          <Input value={languages} placeholder="Languages" />
          <TagRow
            tags={["English", "Hindi", "Other"]}
            selected={languages}
            multi
            onSelect={(tag) =>
              setLanguages(
                languages.includes(tag)
                  ? languages
                  : [...languages, tag]
              )
            }
          />
        </Field>

        <Field label="Select your specialization *">
          <Input value={specialization} placeholder="Architect" />
          <TagRow
            tags={["Architect", "Interior Designer", "Vastu Expert"]}
            selected={specialization}
            onSelect={setSpecialization}
          />
        </Field>

        <UpdateRow />
      </Card>

      {/* BIO & DETAILS */}
      <Card>
        <SectionTitle
          title="Bio & Details *"
          desc="Introduce yourself and highlight your experience, skills, and focus areas."
        />

        <div className="relative flex flex-col gap-[6px]">
          <label className="text-[16px]">Your Bio *</label>
          <textarea
            className="h-[163px] border border-black/25 rounded-[8px] p-[8px] text-[14px]"
            placeholder="I’m a detail-driven architect..."
          />
          <span className="absolute bottom-[-22px] right-0 text-[12px] text-black/50">
            At least 100 characters
          </span>
        </div>

        <Field label="Expertise & Roles *">
          <Input value={expertise} placeholder="Residential Architect" />
          <TagRow
            tags={[
              "Residential Architect",
              "Landscape Architect",
              "Commercial Architect",
              "Renovation Expert",
              "CAD Specialist",
              "Others",
            ]}
            selected={expertise}
            multi
            onSelect={(tag) =>
              setExpertise(
                expertise.includes(tag)
                  ? expertise
                  : [...expertise, tag]
              )
            }
          />
        </Field>

        <UpdateRow />
      </Card>

      {/* PORTFOLIO */}
      <Card>
        <SectionTitle
          title="Portfolio *"
          desc="Showcase your portfolio to build trust and credibility."
        />

        <div className="flex justify-center lg:justify-start">
          <PortfolioAddBox />
        </div>

        <UpdateRow />
      </Card>

      {/* GALLERY */}
      <Card>
        <SectionTitle
          title="Gallery *"
          desc="Upload images related to your work."
        />

        <div className="flex justify-center lg:justify-start">
          <GalleryAddBox />
        </div>

        <UpdateRow />
      </Card>

    </div>
  );
}
