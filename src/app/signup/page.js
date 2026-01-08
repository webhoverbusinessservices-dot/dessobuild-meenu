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
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-normal text-black leading-[100%] h-[42px]">
            Choose your role
          </h2>
        </div>

        {/* Role Toggle */}
        <div className="flex items-center p-1.5 rounded-[100px] mb-16 bg-[#F4F2F2] h-15 gap-1.5">
          <button
            onClick={() => setUserRole('Client')}
            style={{ width: '273px', height: '48px' }}
            className={`rounded-[50px] text-[18px] font-medium leading-[100%] transition-all flex items-center justify-center ${
              userRole === 'Client' ? 'bg-white text-[#186AFF]' : 'text-[#00000099]'
            }`}
          >
            Join as client
          </button>
          <button
            onClick={() => setUserRole('Consultant')}
            style={{ width: '273px', height: '48px' }}
            className={`rounded-[50px] text-[18px] font-medium leading-[100%] transition-all flex items-center justify-center ${
              userRole === 'Consultant' ? 'bg-white text-[#186AFF]' : 'text-[#00000099]'
            }`}
          >
            Join as consultant
          </button> 
        </div>

        <hr className="border-[#757575] border mb-8" />


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
          <div className="text-[302px] h-5.25 flex justify-center items-center">
               <div className="text-[16px] font-[400] text-black text-center">
                 Already have an account?{' '}{' '}
                
                <Link href="/login" className="text-black  font-normal text-blue-600">
                Log In
              </Link>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}