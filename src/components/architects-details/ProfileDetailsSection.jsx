"use client";

import Image from "next/image";
import { Star, MapPin, MessageCircle } from "lucide-react";

export default function ProfileDetailsSection() {
  return (
    <section className="max-w-[1320px] mx-auto flex gap-[128px] pt-[80px]">
      {/* LEFT */}
      <div className="w-[763px] flex flex-col gap-[32px]">
        {/* PROFILE HEADER */}
        <div className="flex gap-[16px] relative">
          <div className="relative w-[120px] h-[120px]">
            <Image
              src="/images/profile-image.png"
              alt="Profile"
              fill
              className="rounded-full border border-black/10 object-cover"
            />
            <span className="absolute top-[4px] left-[4px] w-[16px] h-[16px] bg-[#61D161] border-[3px] border-white rounded-full" />
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[8px]">
              <h1 className="text-[32px] font-medium leading-[42px]">
                Monkey D. Luffy
              </h1>

              {/* VERIFIED BADGE */}
              <Image
                src="/images/verified-badge.png" 
                alt="Verified"
                width={32}
                height={32}
                className="mt-[2px]"
              />
            </div>

            <div className="flex items-center gap-[4px]">
              <Star className="w-[14px] h-[14px] text-[#DF7606]" />
              <span className="text-[16px] font-medium">5.0</span>
            </div>

            <div className="flex gap-[12px] text-[16px] text-black/60">
              <div className="flex items-center gap-[4px]">
                <MapPin className="w-[20px] h-[20px]" />
                Jaipur, Rajasthan
              </div>
              <div className="flex items-center gap-[4px]">
                <MessageCircle className="w-[18px] h-[18px]" />
                English, Hindi
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[18px] font-medium">About Us</h3>
          <p className="text-[16px] leading-[24px] text-black/60">
            Hi. I am Alexandru and I am 25 years old. I have 8 years experience
            in Web Development. I am web developer with experience in HTML,
            JavaScript, CSS, PHP, NodeJS, EJS, SQL, and jQuery. I specialize in
            building dynamic and responsive web applications, ensuring seamless
            user experiences and efficient backend functionality. Passionate
            about coding, I enjoy solving complex problems and continuously
            learning new technologies to enhance my skills. I worked in a lots
            of projects, for the most part in gambling websites, online casino
            development.
          </p>
        </div>

        {/* SKILLS */}
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[18px] font-medium">Skills</h3>
          <div className="flex flex-wrap gap-[12px]">
            {[
              "User Experience Design",
              "UX Wireframe",
              "UI Designer",
              "User Experience Design",
              "UX Wireframe",
            ].map((skill) => (
              <span
                key={skill}
                className="px-[12px] py-[6px] border border-black/20 rounded-full text-[14px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="w-[429px] flex flex-col gap-[32px]">
        <div className="flex gap-[12px]">
          <button className="flex-1 h-[42px] bg-[#186AFF] text-white rounded-[8px] font-medium">
            Chat
          </button>
          <button className="flex-1 h-[42px] bg-[#008F0A] text-white rounded-[8px] font-medium">
            Call Expert
          </button>
        </div>

        <div className="border border-black/10 rounded-[12px] p-[24px] flex flex-col gap-[16px] shadow-sm">
          <div className="flex gap-[12px]">
            <Image
              src="/images/profile-image.png"
              alt=""
              width={56}
              height={56}
              className="rounded-full border"
            />
            <div>
              <p className="text-[22px] font-medium">Gagan Kumar</p>
              <p className="text-[14px] text-black/60">
                Experienced Interior Designer
              </p>
            </div>
          </div>

          <p className="text-[14px] text-black/80">
            Average response time: 2 hours
          </p>

          <div className="border border-black/10 rounded-[8px] py-[12px] flex justify-between text-center">
            <Stat label="Rating" value="5.0" />
            <Stat label="Price" value="₹20/min" />
            <Stat label="Experience" value="2+ yrs" />
          </div>

          <p className="text-[16px]">₹31,500 / 100 Sq. Yards (Approx.)</p>

          <button className="h-[42px] bg-[#186AFF] text-white rounded-[8px] font-medium">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-[16px]">{value}</p>
      <p className="text-[12px] text-black/60">{label}</p>
    </div>
  );
}
