"use client";

const items = [
  { id: "profile", label: "Profile Info" },
  { id: "public", label: "Public Profile" },
  { id: "services", label: "Services & Pricing" },
  { id: "security", label: "Password & Security" },
  { id: "bank", label: "Bank Details" },
  { id: "withdrawals", label: "Withdrawals & Earnings" },
  { id: "calls", label: "Call History" },
  { id: "chats", label: "Chat History" },
];

export default function SettingsSidebar({ active, onChange }) {
  return (
    <aside className="w-full lg:w-[202px]">
      <h2 className="text-[32px] lg:text-[40px] font-medium mb-6 lg:mb-8">
        Settings
      </h2>

      {/* DESKTOP LIST */}
      <ul className="hidden lg:flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`
              cursor-pointer px-3 py-2 text-[16px] transition
              border-l-[3px]
              ${
                active === item.id
                  ? "border-[#186AFF] text-black font-medium"
                  : "border-transparent text-black/60 hover:text-black"
              }
            `}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* MOBILE TABS */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`
              whitespace-nowrap px-4 py-2 rounded-full text-[14px] border transition
              ${
                active === item.id
                  ? "bg-[#186AFF] text-white border-[#186AFF]"
                  : "border-black/20 text-black/70"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
