"use client";

"use client";

export default function GroupChatSidebar() {
  return (
    <aside className=" w-[332px]  max-w-full h-[737px] md:h-[737px] h-auto bg-white border border-black/10 rounded-[12px] flex flex-col px-[16px] py-[8px] gap-[12px] ">
      {/* HEADER */}
      <div className="h-[58px] flex items-center justify-between">
        <h2 className="text-[24px] md:text-[32px] font-medium">
          Project Messages
        </h2>
        <button className="w-[24px] h-[24px] flex items-center justify-center">
          ⋯
        </button>
      </div>

      {/* SEARCH */}
      <div className="h-[42px] flex items-center gap-[8px] px-[12px] border border-black/60 rounded-[8px]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 12.75L15.75 15.75M2.25 8.25C2.25 9.8413 2.88214 11.3674 4.00736 12.4926C5.13258 13.6179 6.6587 14.25 8.25 14.25C9.8413 14.25 11.3674 13.6179 12.4926 12.4926C13.6179 11.3674 14.25 9.8413 14.25 8.25C14.25 6.6587 13.6179 5.13258 12.4926 4.00736C11.3674 2.88214 9.8413 2.25 8.25 2.25C6.6587 2.25 5.13258 2.88214 4.00736 4.00736C2.88214 5.13258 2.25 6.6587 2.25 8.25Z" stroke="black" stroke-opacity="0.6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <input
          placeholder="Search"
          className="w-full text-[14px] outline-none placeholder:text-black/60"
        />
      </div>

      {/* CHAT LIST */}
      <div className="flex flex-col gap-[4px]">
        <GroupItem
          name="Team RCB"
          time="10:25 PM"
          roles="User, Vastu Expert, You"
          message="Architect: Yes, I am available for the afternoon and after"
          unread={2}
        />

        <GroupItem
          name="Team KCC"
          time="10:25 PM"
          roles="User, Architect, Vastu Expert, You"
          message="You: Yes, that’s why"
          active
        />
      </div>
    </aside>
  );
}


/* ================= GROUP ITEM ================= */

function GroupItem({ name, time, roles, message, unread, active }) {
  return (
    <div
      className={`
        h-auto md:h-[66px]
        flex items-center gap-[13px]
        px-[8px] py-[8px]
        rounded-[12px]
        ${active ? "bg-[#186AFF]" : "bg-white"}
      `}
    >
      {/* AVATAR */}
      <div className="relative w-[40px] h-[40px] shrink-0 rounded-full overflow-hidden border border-black/10">
        <img
          src="/images/chat-profile-image.png"
          className="w-full h-full object-cover"
          alt={name}
        />
        <span className="absolute top-[3px] left-[2px] w-[6px] h-[6px] bg-[#61D161] border border-white rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
        <div className="flex justify-between gap-[8px]">
          <span className={`text-[14px] font-medium truncate ${active ? "text-white" : "text-black"}`}>
            {name}
          </span>
          <span className={`text-[12px] shrink-0 ${active ? "text-white/60" : "text-black/60"}`}>
            {time}
          </span>
        </div>

        <div className="flex justify-between items-center gap-[8px]">
          <div className="flex flex-col min-w-0">
            <span className={`text-[12px] truncate ${active ? "text-white/80" : "text-black/80"}`}>
              {roles}
            </span>
            <span className={`text-[12px] truncate ${active ? "text-white/60" : "text-black/60"}`}>
              {message}
            </span>
          </div>

          {unread && !active && (
            <span className="w-[20px] h-[20px] bg-[#186AFF] text-white text-[12px] rounded-full flex items-center justify-center shrink-0">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

