"use client";

/* ================= AVATAR ================= */
export function Avatar() {
  return (
    <div className="w-[48px] h-[48px] rounded-full overflow-hidden border border-black/10">
      <img
        src="/images/chat-profile-image.png"
        alt="Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/* ================= DIVIDER ================= */
export function Divider() {
  return (
    <div className="flex items-center gap-[8px] w-full">
      <div className="flex-1 border-t border-black/20" />
      <span className="text-[14px] font-medium text-black/60">Today</span>
      <div className="flex-1 border-t border-black/20" />
    </div>
  );
}

/* ================= CHAT BUBBLE ================= */
export function ChatBubble({ type, user, message, time }) {
  const incoming = type === "incoming";
  const outgoing = type === "outgoing";
  const outgoingLong = type === "outgoing-long";

  return (
    <div
      className={`flex flex-col gap-[4px] w-full ${
        incoming ? "items-start" : "items-end"
      }`}
    >
      {/* USER LABEL */}
      {incoming && (
        <div className="flex items-center gap-[4px] text-[12px] font-medium text-black/80">
          <AvatarSmall />
          {user}
        </div>
      )}

      {/* BUBBLE */}
      <div
        className={`
          relative
          w-full
          max-w-${
            incoming ? "[164px]" : outgoing ? "[532px]" : "[600px]"
          }
          px-[12px] py-[12px]
          flex items-center justify-between gap-[12px]
          border
          ${
            outgoing
              ? "bg-[#186AFF] border-transparent text-white"
              : "bg-white border-black/10 text-black"
          }
          ${
            outgoing
              ? "rounded-[12px_0px_12px_12px]"
              : "rounded-[0px_12px_12px_12px]"
          }
        `}
      >
        {(incoming || outgoingLong) && (
          <span
            className={`absolute left-0 top-0 w-[6px] h-full ${
              incoming ? "bg-[#186AFF]" : "bg-[#D6E1F5]"
            }`}
          />
        )}

        <p className={`text-[14px] font-medium leading-[20px]`}>
          {message}
        </p>

        <div className="flex items-center gap-[4px] shrink-0">
          <span className={`text-[12px] ${outgoing ? "text-white/60" : "text-black/60"}`}>
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}


/* ================= SMALL AVATAR ================= */
function AvatarSmall() {
  return (
    <div className="w-[16px] h-[16px] rounded-full overflow-hidden">
      <img
        src="/images/chat-profile-image.png"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
