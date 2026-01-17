"use client";
import React, { useState } from "react";
import { Menu, X, CheckCircle, Mail, MapPin } from "lucide-react";
import { Header } from "@/components/Header/Header";

export default function ContactUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to Terms and Conditions");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Request sent successfully!");
  };
  const bullets = [
    {
      text: "Find and hire trusted experts for your dream project",
      width: "w-[368px]",
    },
    {
      text: "Personalize every detail to match your unique vision",
      width: "w-[372px]",
    },
    {
      text: "Collaborate smoothly with professionals from start to finish",
      width: "w-[419px]",
    },
    {
      text: "Save valuable time and effort with hassle-free hiring",
      width: "w-[371px]",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Header activePage="contact" />
      {/* Hero Section */}
      <section className="bg-white py-[64px] lg:py-[80px]">
  <div className=" w-full max-w-[479px] mx-auto px-4 lg:px-0 flex flex-col items-center gap-[12px] text-center">
    {/* ---------- HEADING ---------- */}
    <h1 className=" font-switzer font-medium text-[32px] sm:text-[42px] lg:text-[54px] leading-[40px] sm:leading-[52px] lg:leading-[71px] text-black " >
      Get in touch with us
    </h1>

    {/* ---------- PARAGRAPH ---------- */}
    <p className=" font-switzer font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-black opacity-80" >
      Fill out the form below or schedule a meeting with us at your convenience.
    </p>
  </div>
</section>


      {/* Contact Form Section */}
      <section className="max-w-300 mx-auto px-6 lg:px-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* ================= FORM ================= */}
          <div className="max-w-[560px] w-full flex flex-col gap-12">
  {/* ================= FORM FIELDS ================= */}
  <div className="flex flex-col gap-6">

    {/* NAME ROW */}
    <div className="flex flex-col sm:flex-row gap-4">
      {/* First Name */}
      <div className="flex flex-col gap-[6px] w-full">
        <label className="font-switzer text-[16px] leading-[21px] text-black">
          First name
        </label>
        <input
          type="text"
          className="h-[40px] px-3 border border-[#666666] rounded-lg outline-none"
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-[6px] w-full">
        <label className="font-switzer text-[16px] leading-[21px] text-black">
          Last name
        </label>
        <input
          type="text"
          className="h-[40px] px-3 border border-[#666666] rounded-lg outline-none"
        />
      </div>
    </div>

    {/* PHONE NUMBER */}
    <div className="flex flex-col gap-[6px]">
      <label className="font-switzer text-[16px] leading-[21px] text-black">
        Phone Number
      </label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="h-[40px] px-3 border border-[#666666] rounded-lg outline-none"
      />
    </div>

    {/* MESSAGE */}
    <div className="flex flex-col gap-[6px]">
      <label className="font-switzer text-[16px] leading-[21px] text-black">
        How can we help you?
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="h-[123px] px-3 py-2.5 border border-[#666666] rounded-lg resize-none outline-none"
      />
    </div>
  </div>

  {/* ================= CHECKBOX + BUTTON ================= */}
  <div className="flex flex-col gap-6">

    {/* CHECKBOX */}
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name="agreeTerms"
        checked={formData.agreeTerms}
        onChange={handleChange}
        className="w-[22px] h-[22px] border border-black rounded-[2px]"
      />

      <p className="font-switzer text-[16px] leading-[21px] text-black">
        I agree with{" "}
        <span className="underline cursor-pointer">
          Terms and Conditions
        </span>
      </p>
    </div>

    {/* BUTTON */}
    <button
      onClick={handleSubmit}
      className="
        h-[48px]
        w-full
        bg-[#186AFF]
        rounded-md
        flex
        items-center
        justify-center
        font-switzer
        font-medium
        text-[18px]
        leading-[24px]
        text-white
      "
    >
      Send your Request
    </button>
  </div>
</div>


          {/* ================= INFO ================= */}
          {/* ================= INFO ================= */}
          <div className="w-140 h-118.5 flex flex-col gap-12">
            {/* ===== SERVICES LIST ===== */}
            <div className="flex flex-col gap-4">
              {/* HEADING */}
              <h2 className=" w-140 h-8 font-switzer font-medium text-[24px] leading-[100%] text-black      ">
                With our services you can
              </h2>

              {/* LIST */}
              <div className="w-140 h-33 flex flex-col gap-4">
                {bullets.map((item, i) => (
                  <div
                    key={i}
                    className=" w-140 h-5.25 flex items-center gap-3"
                  >
                    {/* ICON */}
                    <span className=" w-5 h-5 rounded-2xl border border-black bg-white flex items-center justify-center "
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>

                    {/* TEXT */}
                    <p
                      className={`
          ${item.width} h-5.25 font-switzer font-normal text-[16px] leading-[100%] text-black `}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== CONTACT INFO ===== */}
            <div className="flex flex-col gap-4 w-140">
              <h3 className="w-140 h-8 font-switzer font-medium text-[24px] leading-[100%] text-black">
                You can also Contact Us via
              </h3>

              {/* EMAIL */}
              <div className="flex items-center gap-3 h-5.25">
                <span className="w-5.75 h-5.75 rounded-[19.56px] border-[0.73px] border-[#00000033] bg-white flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <p className="w-39 h-5.25 font-switzer font-normal text-[16px] leading-[100%] text-black">
                  info@dessobuild.com
                </p>
              </div>

              {/* ADDRESS */}
              <div className="w-55.25 h-27.75 flex items-start gap-4">
                <span className="w-5 h-5 rounded-2xl border border-black bg-white flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </span>

                <div className="w-55.25 h-17.75 flex flex-col gap-1">
                  <p className="w-19.25 h-6 font-switzer font-medium text-[16px] leading-[100%] text-black">
                    India
                  </p>
                  <p className="font-switzer font-normal text-[16px] leading-[100%] text-[#00000099]">
                    E-520A, 3rd Floor,
                  </p>
                  <p className="font-switzer font-normal text-[16px] leading-[100%] text-[#00000099]">
                    Sector 7, Dwarka,
                  </p>
                  <p className="font-switzer font-normal text-[16px] leading-[100%] text-[#00000099]">
                    New Delhi - 110075, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-sm">Location</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                E-520A, 3rd Floor,
                <br />
                Sector 7, Dwarka,
                <br />
                New Delhi- 110075, India
              </p>
              <p className="text-gray-400 text-sm mt-4">
                info@dessobuild@gmail.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Become a Frelancer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legal Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-xl font-bold mb-4 sm:mb-0">DessoBuild</h2>
            <p className="text-gray-400 text-sm">
              © 2025 DessoBuild. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
