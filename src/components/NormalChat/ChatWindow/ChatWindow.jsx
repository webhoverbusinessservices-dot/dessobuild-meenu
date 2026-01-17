"use client";

export default function ChatWindow() {
  return (
    <section className=" w-full max-w-[1028px] h-[661px] border border-black/10 rounded-[12px] flex flex-col relative bg-white ">
      {/* ================= HEADER ================= */}
      <div className=" h-[80px] flex items-center justify-between px-[24px] border-b border-black/10 rounded-t-[12px]">
       <div className="flex items-center gap-[16px]">
  {/* AVATAR */}
  <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
    <img
      src="/images/pp-chat.jpg"
      alt="Gagan Kumar"
      className="w-full h-full object-cover"
    />
  </div>

  {/* NAME + STATUS */}
  <div className="flex flex-col gap-[4px]">
    <span className="text-[16px] font-medium">Gagan Kumar</span>
    <span className="text-[12px] text-black/60">Last seen 7hr ago</span>
  </div>
</div>


        <button className=" w-[32px] h-[32px] bg-[#F9F9F9] border border-black/10 rounded-[4px] flex items-center justify-center ">
          <svg
            width="3"
            height="14"
            viewBox="0 0 3 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.10218 3 0.720645 2.84196 0.43934 2.56066C0.158036 2.27936 0 1.89782 0 1.5C0 1.10218 0.158036 0.720644 0.43934 0.43934C0.720645 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM1.5 8.25C1.10218 8.25 0.720645 8.09196 0.43934 7.81066C0.158036 7.52936 0 7.14782 0 6.75C0 6.35218 0.158036 5.97064 0.43934 5.68934C0.720645 5.40804 1.10218 5.25 1.5 5.25C1.89782 5.25 2.27936 5.40804 2.56066 5.68934C2.84196 5.97064 3 6.35218 3 6.75C3 7.14782 2.84196 7.52936 2.56066 7.81066C2.27936 8.09196 1.89782 8.25 1.5 8.25ZM1.5 13.5C1.10218 13.5 0.720645 13.342 0.43934 13.0607C0.158036 12.7794 0 12.3978 0 12C0 11.6022 0.158036 11.2206 0.43934 10.9393C0.720645 10.658 1.10218 10.5 1.5 10.5C1.89782 10.5 2.27936 10.658 2.56066 10.9393C2.84196 11.2206 3 11.6022 3 12C3 12.3978 2.84196 12.7794 2.56066 13.0607C2.27936 13.342 1.89782 13.5 1.5 13.5Z"
              fill="black"
              fill-opacity="0.8"
            />
          </svg>
        </button>
      </div>

      {/* ================= CHAT CONTENT ================= */}
      <div className=" flex-1 px-[24px] py-[12px] flex flex-col gap-[12px] overflow-y-auto ">
        {/* DATE */}
        <div className="text-center text-[14px] text-black/60">25 April</div>

        {/* INCOMING MESSAGE */}
        <div className="flex justify-start">
          <div className=" w-auto h-[44px] flex items-center justify-center gap-[12px] px-[12px] bg-white border border-black/10 rounded-[0px_12px_12px_12px]" >
            {/* MESSAGE */}
            <p className="text-[14px] font-medium leading-[20px] text-black/80">
              Hey man!
            </p>

            {/* TIME + CHECK */}
            <div className="flex items-center gap-[4px]">
              <span className="text-[12px] leading-[16px] text-black/60">
                10:25 PM
              </span>

              {/* 12x12 tick as per Figma */}
              <span className="w-[12px] h-[12px] flex items-center justify-center">
                
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.14415 4.15337L2.94415 8.27837C2.83896 8.38171 2.69739 8.43962 2.54993 8.43962C2.40246 8.43962 2.2609 8.38171 2.15571 8.27837L0.355708 6.51071C0.302984 6.45894 0.260973 6.39729 0.232074 6.32929C0.203175 6.26128 0.187954 6.18825 0.187279 6.11436C0.185917 5.96514 0.243889 5.82149 0.348442 5.71501C0.400212 5.66228 0.461859 5.62027 0.529864 5.59137C0.59787 5.56247 0.670901 5.54725 0.744789 5.54658C0.894012 5.54521 1.03766 5.60319 1.14415 5.70774L2.5504 7.08868L6.35618 3.35087C6.46259 3.24631 6.60619 3.18832 6.75537 3.18963C6.90455 3.19095 7.04709 3.25148 7.15165 3.3579C7.2562 3.46431 7.31419 3.60791 7.31288 3.75709C7.31156 3.90627 7.25103 4.04881 7.14461 4.15337H7.14415ZM11.6512 3.35649C11.5994 3.30359 11.5377 3.26143 11.4695 3.23243C11.4014 3.20344 11.3282 3.18818 11.2542 3.18752C11.1802 3.18687 11.1067 3.20084 11.0381 3.22863C10.9695 3.25641 10.907 3.29748 10.8543 3.34946L7.04993 7.08868L6.68055 6.72587C6.57413 6.62131 6.43054 6.56331 6.28136 6.56463C6.13218 6.56595 5.98964 6.62648 5.88508 6.7329C5.78053 6.83931 5.72253 6.98291 5.72385 7.13209C5.72517 7.28127 5.7857 7.42381 5.89211 7.52837L6.65571 8.27837C6.7609 8.38171 6.90246 8.43962 7.04993 8.43962C7.19739 8.43962 7.33896 8.38171 7.44414 8.27837L11.6441 4.15337C11.6968 4.1016 11.7388 4.03995 11.7677 3.97196C11.7966 3.90397 11.8118 3.83095 11.8124 3.75709C11.8131 3.68322 11.7992 3.60995 11.7715 3.54146C11.7438 3.47296 11.7029 3.41059 11.6512 3.3579V3.35649Z" fill="black" fill-opacity="0.6"/>
</svg>

              </span>
            </div>
          </div>
        </div>

        {/* OUTGOING MESSAGE */}
        <div className="flex justify-end">
          <div className=" w-auto min-h-[44px] flex items-center gap-[12px] px-[12px] bg-[#186AFF] rounded-[12px_0px_12px_12px]">
            <p className="text-[14px] font-medium text-white leading-[20px] whitespace-normal">
              Hey, what’s up? How are you doing, my friends? It’s been a while
              XD
            </p>

            <div className="flex items-center gap-[4px] ml-auto">
              <span className="text-[12px] text-white/60">11:25 PM</span>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.52561 5.53782L3.92561 11.0378C3.78536 11.1756 3.5966 11.2528 3.39998 11.2528C3.20337 11.2528 3.01461 11.1756 2.87436 11.0378L0.474358 8.68095C0.40406 8.61192 0.348046 8.52972 0.309514 8.43905C0.270982 8.34837 0.250687 8.251 0.249787 8.15248C0.24797 7.95352 0.325266 7.76198 0.464671 7.62001C0.533697 7.54971 0.615893 7.4937 0.706567 7.45516C0.797241 7.41663 0.894616 7.39634 0.993133 7.39544C1.1921 7.39362 1.38363 7.47092 1.52561 7.61032L3.40061 9.45157L8.47498 4.46782C8.61687 4.32842 8.80833 4.25109 9.00724 4.25284C9.20614 4.2546 9.3962 4.3353 9.53561 4.47719C9.67501 4.61909 9.75234 4.81054 9.75058 5.00945C9.74882 5.20835 9.66812 5.39842 9.52623 5.53782H9.52561ZM15.535 4.47532C15.4659 4.40478 15.3836 4.34857 15.2928 4.30991C15.202 4.27125 15.1044 4.2509 15.0057 4.25003C14.907 4.24916 14.8091 4.26778 14.7176 4.30483C14.6261 4.34189 14.5428 4.39664 14.4725 4.46595L9.39998 9.45157L8.90748 8.96782C8.76559 8.82842 8.57413 8.75109 8.37523 8.75284C8.17632 8.7546 7.98626 8.8353 7.84686 8.97719C7.70745 9.11909 7.63013 9.31054 7.63188 9.50945C7.63364 9.70835 7.71434 9.89842 7.85623 10.0378L8.87436 11.0378C9.01461 11.1756 9.20336 11.2528 9.39998 11.2528C9.5966 11.2528 9.78536 11.1756 9.92561 11.0378L15.5256 5.53782C15.5959 5.46879 15.6518 5.38661 15.6903 5.29595C15.7288 5.20529 15.7491 5.10794 15.75 5.00945C15.7508 4.91096 15.7323 4.81327 15.6954 4.72194C15.6585 4.63062 15.604 4.54745 15.535 4.47719V4.47532Z" fill="white" fill-opacity="0.6"/>
</svg>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-[8px]">
          <div className="flex-1 border-t border-black/20" />
          <span className="text-[14px] text-black/60">Today</span>
          <div className="flex-1 border-t border-black/20" />
        </div>

        {/* LONG MESSAGES */}
        <div className="flex flex-col gap-[6px]">
          <MessageBlock />
          <MessageBlock rounded />
        </div>
      </div>

      {/* ================= CHAT STATUS ================= */}
      <div className=" absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[280px] h-[50px] bg-white border border-black/10 rounded-[12px] flex items-center justify-center  text-[16px] text-black/60">
        Chat in Progress...
      </div>
    </section>
  );
}

/* ================= REUSABLE BLOCKS ================= */

function MessageBlock({ rounded }) {
  return (
    <div
      className={` max-w-[600px] px-[12px] py-[12px] border border-black/10 text-[14px] ${
        rounded ? "rounded-[12px]" : "rounded-[0px_12px_12px_12px]"
      }`}
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
      <div className="mt-[4px] flex justify-end items-center gap-[4px] text-[12px] text-black/60">
        02:25 PM
       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.14415 4.15337L2.94415 8.27837C2.83896 8.38171 2.69739 8.43962 2.54993 8.43962C2.40246 8.43962 2.2609 8.38171 2.15571 8.27837L0.355708 6.51071C0.302984 6.45894 0.260973 6.39729 0.232074 6.32929C0.203175 6.26128 0.187954 6.18825 0.187279 6.11436C0.185917 5.96514 0.243889 5.82149 0.348442 5.71501C0.400212 5.66228 0.461859 5.62027 0.529864 5.59137C0.59787 5.56247 0.670901 5.54725 0.744789 5.54658C0.894012 5.54521 1.03766 5.60319 1.14415 5.70774L2.5504 7.08868L6.35618 3.35087C6.46259 3.24631 6.60619 3.18832 6.75537 3.18963C6.90455 3.19095 7.04709 3.25148 7.15165 3.3579C7.2562 3.46431 7.31419 3.60791 7.31288 3.75709C7.31156 3.90627 7.25103 4.04881 7.14461 4.15337H7.14415ZM11.6512 3.35649C11.5994 3.30359 11.5377 3.26143 11.4695 3.23243C11.4014 3.20344 11.3282 3.18818 11.2542 3.18752C11.1802 3.18687 11.1067 3.20084 11.0381 3.22863C10.9695 3.25641 10.907 3.29748 10.8543 3.34946L7.04993 7.08868L6.68055 6.72587C6.57413 6.62131 6.43054 6.56331 6.28136 6.56463C6.13218 6.56595 5.98964 6.62648 5.88508 6.7329C5.78053 6.83931 5.72253 6.98291 5.72385 7.13209C5.72517 7.28127 5.7857 7.42381 5.89211 7.52837L6.65571 8.27837C6.7609 8.38171 6.90246 8.43962 7.04993 8.43962C7.19739 8.43962 7.33896 8.38171 7.44414 8.27837L11.6441 4.15337C11.6968 4.1016 11.7388 4.03995 11.7677 3.97196C11.7966 3.90397 11.8118 3.83095 11.8124 3.75709C11.8131 3.68322 11.7992 3.60995 11.7715 3.54146C11.7438 3.47296 11.7029 3.41059 11.6512 3.3579V3.35649Z" fill="black" fill-opacity="0.6"/>
</svg>
      </div>
    </div>
  );
}

/* ================= SVG TICKS (UNCHANGED) ================= */

function BlackTick() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M9.52561 5.53782L3.92561 11.0378..."
        fill="black"
        fillOpacity="0.6"
      />
    </svg>
  );
}

function WhiteTick() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M9.52561 5.53782L3.92561 11.0378..."
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
}
