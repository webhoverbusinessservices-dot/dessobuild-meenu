"use client";

import Header from "@/components/Header/DashboardHeader.jsx"; 
import Footer from "@/components/Footer/Footer.jsx";  
import ProfileDetailsSection from "@/components/architects-details/ProfileDetailsSection.jsx";  
import PortfolioSection from "@/components/architects-details/PortfolioSection.jsx";  
import GallerySection from "@/components/architects-details/GallerySection.jsx";  


export default function Dashboard() {
  return (
   <>
     <Header/>
     <section className="mt-12 pb-18">
      <ProfileDetailsSection /> 
     <PortfolioSection /> 
     <GallerySection /> 
     </section>
     <Footer />
   </>
  );
}
