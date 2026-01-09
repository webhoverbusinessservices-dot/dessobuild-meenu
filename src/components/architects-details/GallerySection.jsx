"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  return (
    <section className="max-w-[1320px] mx-auto mt-[80px] flex flex-col gap-[20px]">
      
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-medium">Gallery</h2>
        <div className="flex gap-[12px]">
          <NavBtn><ChevronLeft className="w-4 h-4" /></NavBtn>
          <NavBtn><ChevronRight className="w-4 h-4" /></NavBtn>
        </div>
      </div>

      <div className="flex gap-[16px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-[318px] flex flex-col gap-[12px]">
            <div className="h-[212px] rounded-[12px] border border-black/10 overflow-hidden">
              <Image
                src="/images/portfolio.png"
                alt=""
                width={318}
                height={212}
                className="object-cover"
              />
            </div>
            <p className="text-[16px] font-medium">
              Portfolio as an Architect
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NavBtn({ children }) {
  return (
    <button className="w-[28px] h-[28px] border border-black/20 rounded-[4px] flex items-center justify-center">
      {children}
    </button>
  );
}
