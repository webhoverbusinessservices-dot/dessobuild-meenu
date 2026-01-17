"use client";
import { useState } from "react";
import {
  PriceRow,
  Card,
  Divider,
  ActionRow,
} from "@/components/settings/SettingsContent/components/PricingFun.jsx";

export default function ConsultationCard() {
  const [rate, setRate] = useState("");
  return (
    <Card>
      <h3 className="text-[16px] font-medium">Chat & Call Consultation</h3>

      <div className="bg-[#F9F9F9] border border-black/10 rounded-[12px] p-3 flex flex-col gap-3">
        <PriceRow
          label="Set your per-minute consultation rate."
          suffix="/hr"
          value={rate}
          onChange={setRate}
        />

        <Divider />

        <PriceRow
          label="After a 25% platform fee, your earning:"
          suffix="/hr"
          value={(rate * 0.75).toFixed(2)}
          disabled
        />
      </div>

      <ActionRow />
    </Card>
  );
}
