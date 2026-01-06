"use client";
import { HeaderTwo } from '@/components/Header/HeaderTwo';
import React, { useState } from 'react';

export default function LoginPage() {
  const [userRole, setUserRole] = useState('Client');
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    sendEmails: true,
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = () => {
    if (!formData.emailOrPhone || !formData.password) return alert('Please fill all fields');
    if (!formData.agreeTerms) return alert('Please agree to the Terms of Service');
    console.log('Login data:', { ...formData, role: userRole });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
      <HeaderTwo activeForm={userRole} loginBtn={false} />

      <main className="mx-auto pt-[124px] pb-[100px]" style={{ width: '564px' }}>
        
        {/* Header */}
        <div className="text-center mb-[32px]">
          <h2 className="text-[32px] font-[400] text-black leading-[100%] h-[42px]">
            Choose your role
          </h2>
        </div>

        {/* Role Toggle */}
        <div className="flex items-center p-[6px] rounded-[100px] mb-[64px] bg-[#F4F2F2] h-[60px] gap-[6px]">
          <button
            onClick={() => setUserRole('Client')}
            style={{ width: '273px', height: '48px' }}
            className={`rounded-[50px] text-[18px] font-[500] leading-[100%] transition-all flex items-center justify-center ${
              userRole === 'Client' ? 'bg-white text-[#186AFF]' : 'text-[#00000099]'
            }`}
          >
            Login as client
          </button>
          <button
            onClick={() => setUserRole('Consultant')}
            style={{ width: '273px', height: '48px' }}
            className={`rounded-[50px] text-[18px] font-[500] leading-[100%] transition-all flex items-center justify-center ${
              userRole === 'Consultant' ? 'bg-white text-[#186AFF]' : 'text-[#00000099]'
            }`}
          >
            Login as consultant
          </button> 
        </div>

        <hr className="border-[#757575] border-[1px] mb-[32px]" />

        {/* Login Form */}
        <div className="flex flex-col gap-[32px]">
          
          {/* Email Section */}
          <div className="flex flex-col gap-[6px] h-[67px]">
            <label className="text-[16px] font-[400] leading-[100%] text-black h-[21px]">
              Email address / Phone Number
            </label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="w-[564px] h-[40px] px-4 border border-[#666666] rounded-[8px] outline-none text-[16px]"
            />
          </div>

          {/* Password Section */}
          <div className="flex flex-col gap-[6px] h-[94px]">
            <label className="text-[16px] font-[400] leading-[100%] text-black h-[21px]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-[564px] h-[40px] px-4 border border-[#666666] rounded-[8px] outline-none text-[16px]"
            />
            <div className="h-[21px]">
              <a href="#" className="text-[16px] font-[400] text-[#186AFF] hover:underline">
                Forgot Your Password?
              </a>
            </div>
          </div>

          {/* Checkboxes with Tick Arrow */}
          <div className="flex flex-col gap-[12px]">
            {/* Row 1 */}
            <div className="flex items-start gap-[8px]">
              <div className="relative w-[22px] h-[22px] flex-shrink-0">
                <input
                  type="checkbox"
                  name="sendEmails"
                  checked={formData.sendEmails}
                  onChange={handleChange}
                  className="peer w-[22px] h-[22px] border-[2px] border-black rounded-[2px] bg-white appearance-none checked:bg-[#186AFF] checked:border-[#186AFF] cursor-pointer"
                />
                {/* Tick SVG (Visible only when peer is checked) */}
                <svg className="absolute top-[3px] left-[3px] w-[16px] h-[16px] pointer-events-none hidden peer-checked:block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label className="text-[16px] font-[400] text-black leading-[1.2] pt-[2px]">
                Send me emails with tips on how to find talent that fits my needs.
              </label>
            </div>

            {/* Row 2 */}
            <div className="flex items-start gap-[8px]">
              <div className="relative w-[22px] h-[22px] flex-shrink-0">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="peer w-[22px] h-[22px] border-[1px] border-black rounded-[2px] bg-white appearance-none checked:bg-[#186AFF] checked:border-[#186AFF] cursor-pointer"
                />
                <svg className="absolute top-[3px] left-[3px] w-[16px] h-[16px] pointer-events-none hidden peer-checked:block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label className="text-[16px] font-[400] text-black leading-[1.4]">
                Yes, I understand and agree to the{' '}
                <a href="#" className="underline font-[400]">DessoBuild Terms of Service</a> including the <a href="#" className="underline font-[400]">User Agreement</a> and <a href="#" className="underline font-[400]">Privacy Policy</a>.
              </label>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col items-center gap-[16px] pt-[8px]">
            <button
              onClick={handleLogin}
              className="w-[191px] h-[48px] bg-[#186AFF] text-white rounded-[6px] font-[500] text-[18px] leading-[100%] transition-all"
            >
              Login to Continue
            </button>
            <div className="text-[302px] h-[21px] flex justify-center items-center">
               <div className="text-[16px] font-[400] text-black text-center">
                Don&apos;t have an DessoBuilt account?{' '}
                <a href="/signup" className="text-black underline font-[400] text-blue-600">
                  Signup
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}