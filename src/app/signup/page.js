"use client";
import { HeaderTwo } from '@/components/Header/HeaderTwo';
import { ClientSignUp } from '@/components/SignUP/ClientSignUp';
import { ConsultantSignUp } from '@/components/SignUP/ConsultantSignUp';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SignUpPage() {
  const [userRole, setUserRole] = useState('Client');
  

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderTwo activeForm={userRole} loginBtn={true} />


      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 py-12">
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
            Join as client
          </button>
          <button
            onClick={() => setUserRole('Consultant')}
            style={{ width: '273px', height: '48px' }}
            className={`rounded-[50px] text-[18px] font-[500] leading-[100%] transition-all flex items-center justify-center ${
              userRole === 'Consultant' ? 'bg-white text-[#186AFF]' : 'text-[#00000099]'
            }`}
          >
            Join as consultant
          </button> 
        </div>

        <hr className="border-[#757575] border-[1px] mb-[32px]" />


        {/* Sign Up Form */}
        <div className="space-y-6">

          {
            userRole === 'Client' ? (
              <ClientSignUp />
            ) : (
              <ConsultantSignUp />
            )
          }

          {/* Login Link */}
          {/* <div className="text-center pt-2">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                Log In
              </Link>
            </p>
          </div> */}
          <div className="text-[302px] h-[21px] flex justify-center items-center">
               <div className="text-[16px] font-[400] text-black text-center">
                 Already have an account?{' '}{' '}
                
                <Link href="/login" className="text-black  font-[400] text-blue-600">
                Log In
              </Link>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}