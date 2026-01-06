"use client";
import React, { useState } from 'react';
import { Menu, X, CheckCircle, Mail, MapPin } from 'lucide-react';
import { Header } from '@/components/Header/Header';

export default function ContactUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    message: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.message) {
      alert('Please fill all fields');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to Terms and Conditions');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Request sent successfully!');
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
      <Header activePage='contact' />
      {/* Hero Section */}
      <section
        className="
    bg-white
    py-[64px] lg:py-[80px]     /* vertical spacing (responsive) */
  "
      >
        <div
          className="
      w-full
      max-w-[479px]            /* Figma width */
      mx-auto
      px-6 lg:px-0
      flex flex-col
      gap-[12px]               /* Figma gap */
      text-center
    "
        >
          <h1
            className="
        font-switzer font-medium
        text-[32px] sm:text-[42px] lg:text-[54px] /* responsive → 54px desktop */
        leading-[100%]                            /* Figma line-height */
        tracking-[0%]
        text-black
        w-full
        max-w-[478px]                             /* Figma width */
        mx-auto
      "
          >
            Get in touch with us
          </h1>

          <p
            className="
        font-switzer font-normal
        text-[16px] sm:text-[18px]                /* Figma: 18px desktop */
        leading-[27px]                            /* Figma line-height */
        text-black
        opacity-80
        w-full
        max-w-[479px]
        mx-auto
      "
          >
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>
      </section>


      {/* Contact Form Section */}
      <section
        className="
    max-w-[1200px]
    mx-auto
    px-6 lg:px-0
    py-[48px]
  "
      >
        <div
          className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-[80px]
    "
        >

          {/* ================= FORM ================= */}
          <div className="flex flex-col gap-[24px]">

            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {/* ROW 1 */}
              <div className="w-[560px] h-[67px] flex gap-[16px]">

                {/* First name */}
                <div className="w-[272px] h-[67px] flex flex-col gap-[6px]">
                  <label className="font-switzer font-normal text-[16px] leading-[100%] text-black">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-[272px] h-[40px] px-[12px] border border-[#666666] rounded-[8px] outline-none"
                  />
                </div>

                {/* Last name */}
                <div className="w-[272px] h-[67px] flex flex-col gap-[6px]">
                  <label className="font-switzer font-normal text-[16px] leading-[100%] text-black">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-[272px] h-[40px] px-[12px] border border-[#666666] rounded-[8px] outline-none"
                  />
                </div>

              </div>

            </div>

            {/* Phone */}
            {/* PHONE NUMBER ROW */}
<div className="w-[560px] h-[67px] flex flex-col gap-[6px]">

  <label
    className="
      w-[560px]
      h-[21px]
      font-switzer
      font-normal
      text-[16px]
      leading-[100%]
      text-black
    "
  >
    Phone Number
  </label>

  <input
    type="tel"
    name="phoneNumber"
    value={formData.phoneNumber}
    onChange={handleChange}
    className="
      w-[560px]
      h-[40px]
      px-[12px]
      border border-[#666666]
      rounded-[8px]
      bg-white
      outline-none
    "
  />
</div>


            {/* Message */}
            {/* MESSAGE ROW */}
<div className="w-[560px] h-[150px] flex flex-col gap-[6px]">

  <label
    className="
      w-[560px]
      h-[21px]
      font-switzer
      font-normal
      text-[16px]
      leading-[100%]
      text-black
    "
  >
    How can we help you?
  </label>

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    className="
      w-[560px]
      h-[123px]
      px-[12px]
      py-[10px]
      border border-[#666666]
      rounded-[8px]
      bg-white
      resize-none
      outline-none
    "
  />
</div>


            {/* Checkbox */}
            {/* CHECKBOX + BUTTON CONTAINER */}
<div className="w-[560px] h-[94px] flex flex-col gap-[24px]">

  {/* CHECKBOX ROW */}
  <div className="w-[560px] h-[22px] flex items-center gap-[8px]">

    <input
      type="checkbox"
      name="agreeTerms"
      checked={formData.agreeTerms}
      onChange={handleChange}
      className="
        w-[22px]
        h-[22px]
        rounded-[2px]
        border border-black
        bg-white
      "
    />

    <p
      className="
        w-[244px]
        h-[21px]
        font-switzer
        font-normal
        text-[16px]
        leading-[100%]
        text-black
      "
    >
      I agree with{" "}
      <span className="underline cursor-pointer">
        Terms and Conditions
      </span>
    </p>
  </div>

  {/* SUBMIT BUTTON */}
  <button
    onClick={handleSubmit}
    className="
      w-[560px]
      h-[48px]
      px-[24px]
      py-[12px]
      flex
      items-center
      justify-center
      gap-[10px]
      rounded-[6px]
      bg-[#186AFF]
      font-switzer
      font-medium
      text-[18px]
      leading-[100%]
      text-white
    "
  >
    Send your Request
  </button>
</div>

          </div>

          {/* ================= INFO ================= */}
          {/* ================= INFO ================= */}
<div className="w-[560px] h-[474px] flex flex-col gap-[48px]">

  {/* ===== SERVICES LIST ===== */}
  <div className="flex flex-col gap-[16px]">

    {/* HEADING */}
    <h2
      className="
        w-[560px]
        h-[32px]
        font-switzer
        font-medium
        text-[24px]
        leading-[100%]
        text-black
      "
    >
      With our services you can
    </h2>

    {/* LIST */}
    <div className="w-[560px] h-[132px] flex flex-col gap-[16px]">
  {bullets.map((item, i) => (
    <div
      key={i}
      className="
        w-[560px]
        h-[21px]
        flex
        items-center
        gap-[12px]
      "
    >
      {/* ICON */}
      <span
        className="
          w-[20px]
          h-[20px]
          rounded-[16px]
          border
          border-black
          bg-white
          flex
          items-center
          justify-center
        "
      >
        <CheckCircle className="w-[14px] h-[14px]" />
      </span>

      {/* TEXT */}
      <p
        className={`
          ${item.width}
          h-[21px]
          font-switzer
          font-normal
          text-[16px]
          leading-[100%]
          text-black
        `}
      >
        {item.text}
      </p>
    </div>
  ))}
</div>

  </div>

  {/* ===== CONTACT INFO ===== */}
 <div className="flex flex-col gap-[16px] w-[560px]">

  <h3 className="w-[560px] h-[32px] font-switzer font-medium text-[24px] leading-[100%] text-black">
    You can also Contact Us via
  </h3>

  {/* EMAIL */}
  <div className="flex items-center gap-[12px] h-[21px]">
    <span className="w-[23px] h-[23px] rounded-[19.56px] border-[0.73px] border-[#00000033] bg-white flex items-center justify-center">
      <Mail className="w-[14px] h-[14px]" />
    </span>
    <p className="w-[156px] h-[21px] font-switzer font-normal text-[16px] leading-[100%] text-black">
      info@dessobuild.com
    </p>
  </div>

  {/* ADDRESS */}
  <div className="w-[221px] h-[111px] flex items-start gap-[16px]">
    <span className="w-[20px] h-[20px] rounded-[16px] border border-black bg-white flex items-center justify-center">
      <MapPin className="w-[14px] h-[14px]" />
    </span>

    <div className="w-[221px] h-[71px] flex flex-col gap-[4px]">
      <p className="w-[77px] h-[24px] font-switzer font-medium text-[16px] leading-[100%] text-black">
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
                E-520A, 3rd Floor,<br />
                Sector 7, Dwarka,<br />
                New Delhi- 110075, India
              </p>
              <p className="text-gray-400 text-sm mt-4">
                info@dessobuild@gmail.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Frelancer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Linkedin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms & Condition</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Notice</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-xl font-bold mb-4 sm:mb-0">DessoBuild</h2>
            <p className="text-gray-400 text-sm">© 2025 DessoBuild. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}