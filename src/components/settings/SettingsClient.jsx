"use client";

import { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";
import ProfileInfoForm from "./SettingsContent/ProfileInfoForm";
import PublicProfileForm from "./SettingsContent/PublicProfileForm";
import ServicesPricing from "./SettingsContent/ServicesPricing";
import PasswordSecurity from "./SettingsContent/PasswordSecurity";
import BankDetails from "./SettingsContent/BankDetails";
import WithdrawalsEarnings from "./SettingsContent/WithdrawalsEarnings";
import CallHistory from "./SettingsContent/CallHistory";
import ChatHistory from "./SettingsContent/ChatHistory";

export default function SettingsClient() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <section className="relative max-w-[1140px] mx-auto mt-6 lg:mt-25.25 flex flex-col lg:flex-row gap-6 lg:gap-15.25 px-4 lg:px-0 pb-18">

      <SettingsSidebar active={activeSection} onChange={setActiveSection} />

      <div className="w-full lg:w-218.25">
        {activeSection === "profile" && <ProfileInfoForm />}
        {activeSection === "public" && <PublicProfileForm />}
        {activeSection === "services" && <ServicesPricing />}
        {activeSection === "security" && <PasswordSecurity />}
        {activeSection === "bank" && <BankDetails />}
        {activeSection === "withdrawals" && <WithdrawalsEarnings />}
        {activeSection === "calls" && <CallHistory />}
        {activeSection === "chats" && <ChatHistory />}
      </div>

    </section>
  );
}
