"use client";

import Header from "@/components/Header/DashboardHeader.jsx";
import GroupChatSidebar from "@/components/GroupChat/GroupChatSidebar/GroupChatSidebar";
import GroupChatWindow from "@/components/GroupChat/GroupChatWindow/GroupChatWindow";
import GroupChatInputBar from "@/components/GroupChat/GroupChatInputBar/GroupChatInputBar";

export default function ChatPage() {
  return (
    <>
      <Header />

      <main className="w-full min-h-screen bg-[#F9F9F9]">
        <div className="flex gap-[24px] px-[32px] pt-[24px]">

          {/* LEFT SIDEBAR */}
          <GroupChatSidebar />

          {/* RIGHT CHAT COLUMN (IMPORTANT) */}
          <div className="flex flex-col gap-[16px] w-full max-w-[1028px]">

            {/* CHAT WINDOW */}
            <GroupChatWindow />

            {/* INPUT BAR */}
            <GroupChatInputBar />

          </div>

        </div>
      </main>
    </>
  );
}
