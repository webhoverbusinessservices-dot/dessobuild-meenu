"use client";

import Header from "@/components/Header/DashboardHeader.jsx";
import ChatSidebar from "@/components/NormalChat/ChatSidebar/ChatSidebar";
import ChatWindow from "@/components/NormalChat/ChatWindow/ChatWindow";
import ChatInputBar from "@/components/NormalChat/ChatInputBar/ChatInputBar";

export default function ChatPage() {
  return (
    <>
      <Header />

      <main className="w-full min-h-screen bg-[#F9F9F9]">
        <div className="flex gap-[24px] px-[32px] pt-[24px]">

          {/* LEFT SIDEBAR */}
          <ChatSidebar />

          {/* RIGHT CHAT COLUMN (IMPORTANT) */}
          <div className="flex flex-col gap-[16px] w-full max-w-[1028px]">

            {/* CHAT WINDOW */}
            <ChatWindow />

            {/* INPUT BAR */}
            <ChatInputBar />

          </div>

        </div>
      </main>
    </>
  );
}
