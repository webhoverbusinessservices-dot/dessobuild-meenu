"use client";

import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="max-w-[1320px] mx-auto mt-[80px] flex flex-col gap-[20px]">
      <h2 className="text-[24px] font-medium">Portfolio</h2>

      <div className="flex gap-[16px]">
        {[1, 2].map((i) => (
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
