"Use Client";
import { useState } from "react";
import {
  PriceRow,
  Card,
  Divider,
  ActionRow,
  Rate,
} from "@/components/settings/SettingsContent/components/PricingFun.jsx";
export default function ProjectRate({ title }) {
  const [concept, setConcept] = useState("");
  const [working, setWorking] = useState("");
  return (
    <Card>
      <h3 className="text-[16px] font-medium">{title}</h3>

      {/* RATE GRID */}
      <div className="bg-[#F9F9F9] border border-black/10 rounded-xl p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <Rate label="Concept Design" value={concept} onChange={setConcept} />

        <Rate label="Working Drawing" value={working} onChange={setWorking} />
        <Rate label="Building Service" />
        <Rate label="Interior 3D" />
        <Rate label="Exterior 3D" full />
      </div>

      {/* TOTALS */}
      <div className="bg-[#F9F9F9] border border-black/10 rounded-xl p-3 flex flex-col gap-3">
        <PriceRow
          label="Total Price of Commercial Project"
          suffix="/Project"
          disabled
        />

        <Divider />

        <PriceRow
          label="After a 25% platform fee, your earning:"
          suffix="/Project"
          disabled
        />
      </div>

      <ActionRow />
    </Card>
  );
}
