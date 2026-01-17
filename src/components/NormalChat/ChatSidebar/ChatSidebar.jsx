"use client";

export default function ChatSidebar() {
  return (
    <aside className=" w-[332px] h-[737px] bg-white border border-black/10 rounded-[12px] flex flex-col items-center px-[16px] py-[8px] gap-[12px]">
      {/* ================= Header ================= */}
      <div className="w-full h-[58px] flex items-center justify-between py-[8px]">
        <h2 className="text-[32px] leading-[42px] font-medium text-black">
          Chat Message
        </h2>
        <button className="w-[24px] h-[24px] text-black text-xl">⋯</button>
      </div>

      {/* ================= Search ================= */}
      <div className="w-full h-[42px] flex items-center gap-[8px] px-[12px] border border-black/60 rounded-[8px]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.75 12.75L15.75 15.75M2.25 8.25C2.25 9.8413 2.88214 11.3674 4.00736 12.4926C5.13258 13.6179 6.6587 14.25 8.25 14.25C9.8413 14.25 11.3674 13.6179 12.4926 12.4926C13.6179 11.3674 14.25 9.8413 14.25 8.25C14.25 6.6587 13.6179 5.13258 12.4926 4.00736C11.3674 2.88214 9.8413 2.25 8.25 2.25C6.6587 2.25 5.13258 2.88214 4.00736 4.00736C2.88214 5.13258 2.25 6.6587 2.25 8.25Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <input placeholder="Search" className="w-full text-[14px] placeholder:text-black/60 outline-none"/>
      </div>

      {/* ================= Chat List ================= */}
      <div className="w-full flex flex-col gap-[4px]">
        <ChatUser name="Monkey D. Luffy" img="/images/chat-profile-image.png" time="10:25 PM" message="Yes, I am available for the afternoon and after" unread={2} />

        <ChatUser name="Gagan Kumar" img="/images/chat-profile-image.png" time="10:25 PM" message="You: Yes, that’s why" active/>

        <ChatUser name="Nico Robin" img="/images/chat-profile-image.png" time="10:25 PM" message="Yes, I am available for the afternoon and after" unread={2}/>
      </div>
    </aside>
  );
}

/* ================= USER ROW ================= */
function ChatUser({ name, img, time, message, unread, active }) {
  return (
    <div
      className={`w-full h-14.5 flex items-center gap-3 px-2 rounded-xl cursor-pointer ${active ? "bg-[#186AFF]" : "bg-white"}`}>
      {/* Avatar */}
      <div className="relative w-10 h-10 shrink-0">
        <img src={img || "/images/default-avatar.png"} alt={name} className="w-full h-full rounded-full object-cover border border-black/10" />

        {/* Online Dot */}
        <span className=" absolute top-[3px] left-[2px] w-[6px] h-[6px] bg-[#61D161] border border-white rounded-full" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        <div className="flex justify-between items-center">
          <span
            className={`text-[14px] font-medium ${
              active ? "text-white" : "text-black"
            }`}
          >
            {name}
          </span>

          <span
            className={`text-[12px] ${
              active ? "text-white/60" : "text-black/60"
            }`}
          >
            {time}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p
            className={`text-[12px] truncate max-w-[180px] ${
              active ? "text-white/60" : "text-black/60"
            }`}
          >
            {message}
          </p>

          {unread && !active && (
            <span className="w-[20px] h-[20px] bg-[#186AFF] text-white text-[12px] flex items-center justify-center rounded-full">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
