"use client";

export default function Step5Rate() {
  return (
    <section className="w-[760px] bg-white border border-[#186AFF29] rounded-xl shadow-[0px_186px_74px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.04),0px_46px_46px_rgba(0,0,0,0.07),0px_12px_26px_rgba(0,0,0,0.08)] p-10">
      <div className="max-w-[680px] mx-auto flex flex-col gap-8">

        {/* STEP */}
        <p className="text-[#186AFF] text-[16px] font-medium">
          STEP 5 OF 5
        </p>

        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-medium text-black">Rate</h2>
          <p className="text-[16px] text-black/60 leading-6">
            Add your pricing for different services based on your expertise.
            Clients will see this on your public profile.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-8">

          {/* CHAT CONSULTATION */}
          <RateCard title="Chat Consultation *" unit="/hr" />

          {/* CALL CONSULTATION */}
          <RateCard title="Call Consultation *" unit="/hr" />

          {/* RESIDENTIAL */}
          <ProjectRate title="Project Rate - as Residential Architect *" />

          {/* COMMERCIAL */}
          <ProjectRate title="Project Rate - as Commercial Architect *" />

          {/* LANDSCAPE */}
          <ProjectRate title="Project Rate - as Landscape Architect *" />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-between pt-8 border-t border-black/20">
          <div className="flex items-center gap-6">
            <button className="h-11 px-5 rounded-xl border border-black/20 flex items-center gap-2 text-[18px] font-medium text-black/60">
              ← Back
            </button>

            <span className="h-6 w-px bg-black/20" />

            <button className="text-[18px] font-medium text-black/60">
              Skip for now
            </button>
          </div>

          <button className="h-11 px-6 rounded-xl bg-[#186AFF] text-white text-[18px] font-medium">
            Finish Setup
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function RateCard({ title, unit }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[16px] text-black">{title}</p>

      <div className="bg-[#F9F9F9] border border-black/10 rounded-xl p-3 flex flex-col gap-2">
        <RateRow label="Set your per-minute consultation rate." unit={unit} />
        <div className="h-px bg-black/10" />
        <RateRow label="After a 25% platform fee, your earning:" unit={unit} disabled />
      </div>
    </div>
  );
}

function ProjectRate({ title }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[16px] text-black">{title}</p>

      <div className="bg-[#F9F9F9] border border-black/10 rounded-xl p-3 flex flex-col gap-2">
        <TwoColumn label1="Concept Design" label2="Building Service" />
        <div className="h-px bg-black/10" />
        <TwoColumn label1="Working Drawing" label2="Interior 3D" />
        <div className="h-px bg-black/10" />
        <SingleRow label="Exterior 3D ₹/sq.ft." />
      </div>

      <div className="bg-[#F9F9F9] border border-black/10 rounded-xl p-3 flex flex-col gap-2 mt-2">
        <RateRow label="Total Price of Commercial Project" unit="/Project" disabled />
        <div className="h-px bg-black/10" />
        <RateRow label="After a 25% platform fee, your earning:" unit="/Project" disabled />
      </div>
    </div>
  );
}

function RateRow({ label, unit, disabled }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[14px] text-black/60">{label}</p>
      <div
  className={`h-8 px-3 rounded-lg flex items-center gap-1
    ${disabled ? "bg-black/10" : "bg-white border border-black/25"}`}
>
  <span>₹</span>
  <input
    type="number"
    disabled={disabled}
    placeholder="0.00"
    className="w-15 bg-transparent outline-none text-[16px] text-black text-right"/>
  <span>{unit}</span>
</div>

    </div>
  );
}

function TwoColumn({ label1, label2 }) {
  return (
    <div className="flex items-center gap-6">
      <Input label={label1} />
      <div className="w-px h-8 bg-black/10" />
      <Input label={label2} />
    </div>
  );
}

function SingleRow({ label }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[14px] text-black/60">{label}</p>
      <InputBox />
    </div>
  );
}

function Input({ label }) {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-[14px] text-black/60">{label}</p>
      <InputBox />
    </div>
  );
}

function InputBox({ value = "", onChange }) {
  return (
    <div className="h-8 px-3 rounded-lg bg-white border border-black/25 flex items-center gap-1">
      <span>₹</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="0.00"
        className="w-15 bg-transparent outline-none text-[16px] text-black text-right appearance-none"
      />
      <span>/sq.ft.</span>
    </div>
  );
}

