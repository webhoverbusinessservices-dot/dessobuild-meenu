export function Card({ children }) {
  return (
    <div className="border border-black/25 rounded-[16px] p-4 lg:p-6 flex flex-col gap-6">
      {children}
    </div>
  );
}

export function PriceRow({
  label,
  suffix,
  value,
  onChange,
  disabled = false,
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[14px] text-black/60">{label}</span>

      <div
        className={`flex items-center gap-2 px-3 h-[32px] rounded-[8px]
        ${disabled ? "bg-black/10" : "border bg-white"}`}
      >
        <span>₹</span>
        <input
          type="number"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-[72px] bg-transparent outline-none text-[14px]"
          placeholder="0.00"
        />
        <span>{suffix}</span>
      </div>
    </div>
  );
}


export function Rate({ label, value, onChange, suffix = "/sq.ft.", full }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 ${
        full ? "md:col-span-2" : ""
      }`}
    >
      <span className="text-[14px] text-black/60">{label}</span>

      <div className="flex items-center gap-2 border px-3 h-[32px] rounded-[8px] bg-white">
        <span>₹</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-[72px] bg-transparent outline-none text-[14px]"
          placeholder="0.00"
        />
        <span>{suffix}</span>
      </div>
    </div>
  );
}


export function Divider() {
  return <div className="h-px bg-black/10" />;
}

export function ActionRow() {
  return (
    <div className="flex gap-6">
      <button className="border border-[#186AFF] text-[#186AFF] px-6 h-[41px] rounded-[8px] font-medium">
        Update
      </button>
      <button className="text-black/60 font-medium">
        Cancel
      </button>
    </div>
  );
}

