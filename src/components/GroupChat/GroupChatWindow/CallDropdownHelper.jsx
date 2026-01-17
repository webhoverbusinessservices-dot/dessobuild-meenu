"Use Client"
import {PhoneIcon} from "@/components/GroupChat/GroupChatWindow/Icons"
function UserItem({ name, role, active }) {
  return (
    <div
      className={`
        w-full h-[36px]
        flex items-center gap-[12px] p-[4px]
        rounded-[8px]
        ${active ? "bg-[#F9F9F9]" : ""}
      `}
    >
      {/* Left */}
      <div className="flex items-center gap-[4px] flex-1">
        <img
          src="/images/chat-profile-image.png"
          className="w-[28px] h-[28px] rounded-full object-cover"
        />

        <div className="flex flex-col leading-tight">
          <span className="text-[12px] font-medium text-black/80">
            {name}
          </span>
          <span className="text-[10px] text-black/60">
            {role}
          </span>
        </div>
      </div>

      {/* Right Phone Icon */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <PhoneIcon />
      </div>
    </div>
  );
}
