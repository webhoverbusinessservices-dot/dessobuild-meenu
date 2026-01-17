"use client";

export default function CallHistory() {
  const calls = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    number: "888888xxxx",
    startTime: "12/20/2025 6:44:07 PM",
    duration: "6 min 20 sec",
    cost: "₹20",
    status: "Successful",
    endTime: "12/20/2025 6:50:28 PM",
  }));

  return (
    <div
      className="flex flex-col gap-8"
      style={{ width: "873px", height: "679px" }}
    >
      {/* HEADER – Frame 204 */}
      <div className="flex flex-col gap-2" style={{ width: "644px" }}>
        <h2 className="text-[28px] leading-[40px] font-normal">
          Call History
        </h2>
        <p className="text-[14px] leading-[21px] text-black/80">
          Review all call sessions, including duration, charges, and deduction details.
        </p>
      </div>

      {/* STATS – Frame 265 */}
      <div className="flex justify-between gap-6" style={{ width: "873px", height: "110px" }}>
        <StatCard label="Total Calls" value="0" />
        <StatCard label="Total Cost" value="0" />
        <StatCard label="Current Wallet" value="0" />
        <StatCard label="Last Called" value="N/A" />
      </div>

      {/* TABLE – Frame 234 */}
      <div
        className="relative"
        style={{
          width: "873px",
          height: "436px",
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: "12px",
        }}
      >
        {/* TABLE HEADER */}
        <div className="flex bg-[#F9F9F9]" style={{ height: "44px" }}>
          <HeaderCell width={160} text="Call Details" />
          <HeaderCell width={160} text="Start Time" />
          <HeaderCell width={108} text="Duration" />
          <HeaderCell width={96} text="Cost" />
          <HeaderCell width={144} text="Status" />
          <HeaderCell width={205} text="End Time" grow />
        </div>

        {/* TABLE BODY */}
        <div className="absolute top-[44px] bottom-[52px] w-full overflow-hidden">
          {calls.map((c, i) => (
            <div
              key={i}
              className="flex"
              style={{ height: "34px" }}
            >
              <BodyCell width={160}>{c.number}</BodyCell>
              <BodyCell width={160}>{c.startTime}</BodyCell>
              <BodyCell width={108}>{c.duration}</BodyCell>
              <BodyCell width={96}>{c.cost}</BodyCell>
              <BodyCell width={144}>
                <span className="inline-flex items-center justify-center px-2 py-[4px] rounded-full bg-[#B3ECBF] text-[#155724] text-[8px] leading-[11px]">
                  {c.status}
                </span>
              </BodyCell>
              <BodyCell width={205} grow>{c.endTime}</BodyCell>
            </div>
          ))}
        </div>

        {/* FOOTER – Frame 235 */}
        <div
          className="absolute bottom-0 flex items-center justify-between px-4"
          style={{
            height: "52px",
            width: "871px",
            borderTop: "1px solid rgba(0,0,0,0.08)",
          }}
        >
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

function StatCard({ label, value }) {
  return (
    <div
      className="flex flex-col gap-[9px]"
      style={{
        width: "200px",
        height: "110px",
        padding: "24px",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "12px",
      }}
    >
      <span className="text-[16px] leading-[21px] text-black/80">{label}</span>
      <span className="text-[24px] leading-[32px] font-medium">{value}</span>
    </div>
  );
}

function HeaderCell({ text, width, grow }) {
  return (
    <div
      className="flex items-center px-3"
      style={{
        width,
        height: "44px",
        flexGrow: grow ? 1 : 0,
      }}
    >
      <span className="text-[12px] font-medium text-black/80">
        {text}
      </span>
    </div>
  );
}

function BodyCell({ children, width, grow }) {
  return (
    <div
      className="flex items-center px-3"
      style={{
        width,
        height: "34px",
        flexGrow: grow ? 1 : 0,
      }}
    >
      <span className="text-[12px] leading-[18px]">
        {children}
      </span>
    </div>
  );
}

function Arrow({ right }) {
  return (
    <button
      className="w-[28px] h-[28px] border border-black/10 rounded-[4.66px] flex items-center justify-center"
      style={{
        transform: right ? "rotate(180deg)" : "none",
      }}
    >
      ‹
    </button>
  );
}
