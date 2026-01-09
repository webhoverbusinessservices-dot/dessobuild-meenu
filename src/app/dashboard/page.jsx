"use client";
import TopBanner from "@/components/dashboard/TopBanner";
import CompleteProfile from "@/components/dashboard/CompleteProfile";
import Workbench from "@/components/dashboard/Workbench";
import GrowAccount from "@/components/dashboard/GrowAccount"; 
import Header from "@/components/Header/DashboardHeader.jsx"; 
import Footer from "@/components/Footer/Footer.jsx"; 


export default function Dashboard() {
  return (
   <>
     <Header/>
    <section className="w-full flex justify-center mt-12 pb-18">
      <div className="w-330 flex flex-col gap-15">

        {/* ===== TOP SECTION ===== */}
        <TopBanner />

        {/* ===== COMPLETE PROFILE ===== */}
        <CompleteProfile />

        {/* ===== WORKBENCH ===== */}
        <Workbench />

        {/* ===== GROW ACCOUNT ===== */}
        <GrowAccount />

      </div>
    </section>
      <Footer />
   </>
  );
}
