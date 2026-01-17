"use client";

export default function ChatHistory() {
  const rows = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    name: "Navin",
    amount: "₹100",
    time: "12/18/2025, 11:53:08 AM",
    duration: "4 min 9 sec",
  }));

  return (
    <div className="flex flex-col gap-8 w-[873px] h-[611px]">

      {/* Frame 204 – Header */}
      <div className="flex flex-col gap-2 w-[644px]">
        <h2 className="text-[28px] leading-[40px] font-normal">
          Chat History
        </h2>
        <p className="text-[14px] leading-[21px] text-black/80">
          View previous chat interactions along with usage and billing summaries.
        </p>
      </div>

      {/* Frame 299 – Search & Sort */}
      <div className="flex gap-8 w-[873px] h-[42px]">

        {/* Search */}
        <div className="flex items-center gap-2 px-3 w-[708px] h-[42px] border border-black/25 rounded-[8px]">
          <span className="text-black/60 text-[14px]">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 12.75L15.75 15.75M2.25 8.25C2.25 9.8413 2.88214 11.3674 4.00736 12.4926C5.13258 13.6179 6.6587 14.25 8.25 14.25C9.8413 14.25 11.3674 13.6179 12.4926 12.4926C13.6179 11.3674 14.25 9.8413 14.25 8.25C14.25 6.6587 13.6179 5.13258 12.4926 4.00736C11.3674 2.88214 9.8413 2.25 8.25 2.25C6.6587 2.25 5.13258 2.88214 4.00736 4.00736C2.88214 5.13258 2.25 6.6587 2.25 8.25Z" stroke="black" stroke-opacity="0.6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
          <input
            placeholder="Search"
            className="w-full text-[14px] outline-none placeholder:text-black/60"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between px-3 w-[133px] h-[42px] rounded-[8px]">
          <span className="text-[14px] text-black/60">Sort by Date</span>
          <button className="w-[24px] h-[24px] bg-[#F9F9F9] border border-black/10 rounded-[3.4px] flex items-center justify-center">
            ˅
          </button>
        </div>
      </div>

      {/* Frame 234 – Table Container */}
      <div className="relative w-[873px] h-[436px] bg-white border border-black/10 rounded-[12px]">

        {/* Table Header – Frame 223 */}
        <div className="flex h-[44px] bg-[#F9F9F9]">
          <HeaderCell w="w-[180px]" text="User Name" />
          <HeaderCell w="w-[180px]" text="Total Amount(₹)" />
          <HeaderCell w="w-[320px]" text="Day & Time" />
          <HeaderCell w="w-[193px]" text="Duration" />
        </div>

        {/* Table Body – Frame 246 */}
        <div className="absolute top-[44px] bottom-[52px] w-full">
          {rows.map((row, i) => (
            <div key={i} className="flex h-[34px]">
              <BodyCell w="w-[180px]">{row.name}</BodyCell>
              <BodyCell w="w-[180px]">{row.amount}</BodyCell>
              <BodyCell w="w-[320px]">{row.time}</BodyCell>
              <BodyCell w="w-[193px]">{row.duration}</BodyCell>
            </div>
          ))}
        </div>

        {/* Footer – Frame 235 */}
        <div className="absolute bottom-0 flex items-center justify-between px-4 w-[871px] h-[52px] border-t border-black/10">
          <span className="text-[12px] text-black/80">
            Displaying 1–10 of 34 results
          </span>

          <div className="flex gap-3">
            <Arrow />
            <Arrow right />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function HeaderCell({ w, text }) {
  return (
    <div className={`flex items-center px-3 ${w} h-[44px]`}>
      <span className="text-[12px] font-medium text-black/80">
        {text}
      </span>
    </div>
  );
}

function BodyCell({ w, children }) {
  return (
    <div className={`flex items-center px-3 ${w} h-[34px]`}>
      <span className="text-[12px] leading-[18px] text-black">
        {children}
      </span>
    </div>
  );
}

function Arrow({ right }) {
  return (
    <button
      className="w-[28px] h-[28px] border border-black/10 rounded-[4.66px] flex items-center justify-center"
      style={{ transform: right ? "rotate(180deg)" : "none" }}
    >
      ‹
    </button>
  );
}
