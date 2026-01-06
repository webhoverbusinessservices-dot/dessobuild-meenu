"use client";
import React from "react";
import { Phone, MessagesSquare } from "lucide-react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import { CTASectionTwo } from "@/components/Home/CTASectionTwo";
export default function ArchitectsPage() {
   const architects = [
      {
         id: 1,
         name: "Gagan Kumar",
         location: "Jaipur, Rajasthan",
         pricePerMin: "₹20/min",
         experience: "2+yrs",
         description:
            "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
         skills: [
            "User Experience Design",
            "UX Wireframe",
            "UI Designer",
            "User Experience Design",
         ],
         pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
         verified: true,
      },
      {
         id: 2,
         name: "Gagan Kumar",
         location: "Jaipur, Rajasthan",
         pricePerMin: "₹20/min",
         experience: "2+yrs",
         description:
            "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
         skills: [
            "User Experience Design",
            "UX Wireframe",
            "UI Designer",
            "User Experience Design",
         ],
         pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
         verified: true,
      },
      {
         id: 3,
         name: "Gagan Kumar",
         location: "Jaipur, Rajasthan",
         pricePerMin: "₹20/min",
         experience: "2+yrs",
         description:
            "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
         skills: [
            "User Experience Design",
            "UX Wireframe",
            "UI Designer",
            "User Experience Design",
         ],
         pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
         verified: true,
      },
      {
         id: 4,
         name: "Gagan Kumar",
         location: "Jaipur, Rajasthan",
         pricePerMin: "₹20/min",
         experience: "2+yrs",
         description:
            "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
         skills: [
            "User Experience Design",
            "UX Wireframe",
            "UI Designer",
            "User Experience Design",
         ],
         pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
         verified: true,
      },
      {
         id: 5,
         name: "Gagan Kumar",
         location: "Jaipur, Rajasthan",
         pricePerMin: "₹20/min",
         experience: "2+yrs",
         description:
            "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
         skills: [
            "User Experience Design",
            "UX Wireframe",
            "UI Designer",
            "User Experience Design",
         ],
         pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
         verified: true,
      },
      {
         id: 6,
         name: "Gagan Kumar",
         location: "Jaipur, Rajasthan",
         pricePerMin: "₹20/min",
         experience: "2+yrs",
         description:
            "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
         skills: [
            "User Experience Design",
            "UX Wireframe",
            "UI Designer",
            "User Experience Design",
         ],
         pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
         verified: true,
      },
   ];
   return (
      <div className="min-h-screen bg-white">
         {/* Navigation */}
         <Header activePage="architects" />
         {/* Hero Section */}
         <section className="py-[64px] lg:py-[80px]">
            <div
               className="
         w-full
         max-w-[815px]        
         mx-auto
         flex flex-col
         items-center
         gap-[32px]           
         h-auto lg:h-[213px]  
         text-center
         "
            >
               {/* ---------- HEADING ---------- */}
               <h1
                  className="
            font-switzer font-medium
            text-[32px] sm:text-[42px] lg:text-[54px]   
            leading-[100%]                               
            tracking-[0%]
            text-black
            w-full
            max-w-[815px]                                
            h-auto lg:h-[71px]                        
            mx-auto
            text-center
            "
               >
                  Build Smarter with Top Architects
               </h1>
               {/* ---------- PARAGRAPH ---------- */}
               <p
                  className="
            font-switzer font-normal
            text-[16px] sm:text-[18px]
            leading-[27px]                            
            tracking-[0%]
            text-black
            w-full
            max-w-[577px]
            mx-auto
            "
               >
                  A trusted platform connecting clients with top-rated architects and design professionals worldwide.
               </p>
               {/* ---------- BUTTON ---------- */}
               <button
                  className="
            bg-[#186AFF]                              
            text-white
            font-switzer font-medium
            text-[18px]
            leading-[100%]
            px-[20px] py-[10px]                     
            rounded-[6px]                             
            hover:bg-[#155DE0]
            transition
            "
               >
                  Hire Architects
               </button>
            </div>
         </section>
         {/* GRID */}
         {/* Architects Grid */}
         <section>
            <div className="max-w-[1200px] mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                  {architects.map((architect) => (
                     <div
                        key={architect.id}
                        className="bg-white rounded-[16px] border border-[#00000014] overflow-hidden"
                     >
                        {/* Header */}
                        <div className="p-[24px] border-b border-gray-100 bg-[#D6E1F5]">
                           <div className="flex items-start justify-between mb-3">
                              <div className="flex items-start space-x-3">
                                 <div className="w-12 h-12 rounded-full relative">
                                    <span className="w-3 h-3 rounded-full bg-green-500 absolute top-0 left-0 border-2 border-white"></span>
                                    <Image src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764827183/70b9487dc81a4a27708ab6ca7d329302ce8b22ac_zxdm5j.png"
                                       alt="Verified"
                                       width={100}
                                       height={100}
                                       className='w-12 h-12 rounded-full' />
                                 </div>
                                 <div>
                                    <h3 className="font-switzer font-medium text-[22px] leading-[100%] text-black">{architect.name}</h3>
                                    <p className="font-switzer font-medium pt-1 text-[14px] leading-[100%] text-[#00000099]">{architect.location}</p>
                                 </div>
                              </div>
                              {architect.verified && (
                                 <div>

                                    <Image
                                       src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764826400/Verified_o4tm4w.png"
                                       alt="Verified"
                                       width={500}
                                       height={500}
                                       className='h-15 w-15' />

                                 </div>
                              )}
                           </div>

                           {/* Price & Experience */}
                           <div className="flex gap-[32px]">
                              <div>
                                 <div className="font-switzer font-normal text-[16px] text-black">
                                    {architect.pricePerMin}
                                 </div>
                                 <div className="font-switzer font-normal text-[12px] text-[#00000099]">
                                    Price
                                 </div>
                              </div>
                              <div>
                                 <div className="font-switzer font-normal text-[16px] text-black">
                                    {architect.experience}
                                 </div>
                                 <div className="font-switzer font-normal text-[12px] text-[#00000099]">
                                    Experience
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Body */}
                        <div className="p-[24px] flex flex-col gap-[12px]">
                           <p className="font-switzer font-normal text-[14px] leading-[100%] text-[#00000099] line-clamp-2">
                              {architect.description}
                           </p>

                           {/* Skills */}
                           <div className="flex flex-wrap gap-[10px]">
                              {architect.skills.slice(0, 4).map((skill, index) => (
                                 <span
                                    key={index}
                                    className="h-[22px] px-[10px] py-[2px] rounded-[30px] bg-[#F4F2F2] font-switzer font-normal text-[14px] text-black flex items-center"
                                 >
                                    {skill}
                                 </span>
                              ))}
                              <span className="h-[22px] px-[10px] py-[2px] rounded-[30px] bg-[#F4F2F2] font-switzer font-normal text-[14px] text-black flex items-center">
                                 +2
                              </span>
                           </div>

                           {/* Pricing */}
                           <div className="font-switzer font-normal text-[16px] text-black">
                              {architect.pricing}
                           </div>

                           {/* Actions */}
                           <div className="flex gap-[12px]">
                              <button className="flex-1 h-[40px] rounded-[8px] bg-[#186AFF] text-white font-switzer font-medium text-[16px] flex items-center justify-center gap-[6px]">
                                 <MessagesSquare className="w-[24px] h-[24px]" />
                                 <span>Chat</span>
                              </button>

                              <button className="flex-1 h-[40px] rounded-[8px] bg-[#008F0A] text-white font-switzer font-medium text-[16px] flex items-center justify-center gap-[6px]">
                                 <Phone className="w-[24px] h-[24px]" />
                                 <span>Call Expert</span>
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <CTASectionTwo />
         {/* Footer */}
         <Footer />
      </div>
   );
}