"use client";
import React, { useState } from 'react';
import { Crown, CheckCircle, Lock, Check } from 'lucide-react';
import Link from 'next/link';
import { HeaderThree } from '@/components/Header/HeaderThree';

export default function PaymentPage() {
  const [couponCode, setCouponCode] = useState('WELCOME20');
  const [isCouponApplied, setIsCouponApplied] = useState(true);
  const [discount, setDiscount] = useState(1000);

  const originalPrice = 4999;
  const [totalPrice, setTotalPrice] = useState(4999);

  const handleApplyCoupon = () => {
    if (couponCode === 'WELCOME20') {
      setDiscount(1000);
      setTotalPrice(3999);
      setIsCouponApplied(true);
    } else {
      alert('Invalid coupon code');
      setIsCouponApplied(false);
    }
  };
  const handleProceedPayment = () => {
    alert('Proceeding to secure payment...');
  };

  const benefits = [
    { text: 'Verified Consultant Badge', width: 'w-[210px]' },
    { text: 'Access Premium Projects', width: 'w-[208px]' },
    { text: 'Premium Client Leads', width: 'w-[177px]' },
    { text: 'Direct Client Messaging', width: 'w-[193px]' },
    { text: 'Top Listing on Platform', width: 'w-[184px]' },
    { text: 'Boosted Visibility', width: 'w-[138px]' },
    { text: 'Collaborate with Experts', width: 'w-[198px]' }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
      <HeaderThree />

      {/* Main Container */}
      <main className="mx-auto pt-[156px] pb-[100px] px-6 lg:px-[120px] max-w-[1440px]">

        {/* --- PREMIUM BADGE --- */}
        <div
          className="flex items-center bg-[#186AFF] rounded-[32px] px-[16px] py-[12px] gap-[10px] w-[160.41px] h-[38.91px] mb-[46.91px]"
        >
          <Crown className="text-white fill-white w-[17.41px] h-[14.91px]" />
          <span className="text-white text-[16px] font-[500] leading-[100%] w-[101px] h-[12px] flex items-center">
            Premium Plan
          </span>
        </div>

        {/* --- PARENT CONTAINER (Both Cols) --- */}
        <div className="flex flex-col lg:flex-row items-start gap-[32px] w-full lg:w-[1200px]">

          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col gap-[32px] w-full lg:w-[648px]">
            <div className="flex flex-col gap-[32px] w-full lg:w-[648px]">
              <h1 className="text-[#000000] text-[40px] lg:text-[54px] font-[500] leading-[100%] lg:w-[671px] lg:h-[142px]">
                Get Recognized.<br />
                Get Clients. Grow Faster.
              </h1>
              <p className="text-[#000000] text-[18px] font-[500] leading-[27px] lg:w-[671px] lg:h-[54px]">
                Join our 1-Year Consultant Plan for ₹4999/year and unlock premium projects,
                verified visibility, and client connections that help you grow faster.
              </p>
            </div>

            <div className="flex flex-col gap-[48px] w-full lg:w-[648px] lg:h-[328px] rounded-[16px] mt-4">
              <div className="w-full lg:w-[648px] h-[32px]">
                <h2 className="text-[#000000] text-[24px] font-[500] leading-[100%]">
                  What You&apos;ll Get with the Consultant Plan
                </h2>
              </div>
              <div className="flex flex-col gap-[16px] w-full lg:w-[648px] h-[264px]">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-[12px] h-[24px]">
                    <div className="w-[20px] h-[20px] bg-[#008F0A] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-[14px] h-[14px] stroke-[4px]" />
                    </div>
                    <span className={`${benefit.width} h-[24px] text-[#000000] text-[18px] font-[400] leading-[100%] flex items-center`}>
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Checkout Card) --- */}
          <div className="w-full lg:w-[520px] mt-8 lg:mt-0">
            <div
              className="bg-white rounded-[16px] border border-[#00000014] p-[24px] flex flex-col gap-[24px]"
              style={{ width: '520px', height: '581px' }}
            >
              <div className="w-[472px] h-[403px] flex flex-col gap-[24px]">
                <h2 className="text-[#000000] text-[24px] font-[500] leading-[100%] w-[408px] h-[32px] flex items-center">
                  Complete Your Consultant Enrollment
                </h2>

                <div className="bg-[#186AFF] rounded-[12px] p-[24px] flex flex-col gap-[8px] w-[472px] h-[130px] border border-transparent">
                  <p className="text-white text-[24px] font-[500] leading-[100%] w-[276px] h-[32px] flex items-center">
                    Premium Consultant Plan
                  </p>
                  <div className="flex items-baseline gap-[16px] w-[145px] h-[42px]">
                    <span className="text-white text-[32px] font-[500] leading-[100%]">₹4999</span>
                    <span className="text-white text-[18px] font-[400] leading-[100%]">/year</span>
                  </div>
                </div>

                <div className="w-[472px] h-[81px] flex flex-col gap-[12px]">
                  <p className="text-[#000000] text-[16px] font-[400] leading-[100%] w-[472px] h-[21px]">
                    Have a coupon? Apply here.
                  </p>
                  <div className="flex gap-[6px] w-[472px] h-[40px]">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-[354px] h-[40px] px-[16px] border border-[#666666] rounded-[8px] outline-none text-[16px] bg-white"
                    />
                    <button
                      className="bg-[#186AFF] text-white rounded-[8px] w-[112px] h-[40px] flex items-center justify-center py-[12px] px-[32px] gap-[10px]"
                    >
                      <span className="text-[18px] font-[500] leading-[100%] w-[48px] h-[13px] flex items-center justify-center">
                        Apply
                      </span>
                    </button>
                  </div>
                  {isCouponApplied && (
                    <div className="flex items-center gap-[6px] text-[#008F0A]">
                      <CheckCircle size={16} />
                      <span className="text-[14px] font-[500]">Your coupon is applied</span>
                    </div>
                  )}
                </div>

                <div className="w-[472px] h-[96px] flex flex-col gap-[12px] pt-[24px] border-t border-[#EBEBEB]">
                  <div className="flex justify-between items-center w-[472px] h-[24px]">
                    <span className="text-[#000000] text-[18px] font-[400] leading-[100%] w-[72px]">Subtotal:</span>
                    <span className="text-[#000000] text-[24px] font-[400] leading-[100%] w-[70px] text-right">₹4999</span>
                  </div>
                  <div className="flex justify-between items-center w-[472px] h-[24px]">
                    <span className="text-[#000000] text-[18px] font-[400] leading-[100%] w-[72px]">Discount:</span>
                    <span className="text-[#000000] text-[24px] font-[400] leading-[100%] w-[70px] text-right">-1000</span>
                  </div>
                  <div
                    className="flex justify-between items-center pt-[16px]"
                    style={{ width: '472px', height: '24px', opacity: 1 }}
                  >
                    <span
                      className="text-[#000000] flex items-center"
                      style={{ fontFamily: 'Switzer', fontWeight: 400, fontSize: '18px', lineHeight: '100%', width: '113px', height: '24px' }}
                    >
                      Total Payable:
                    </span>
                    <span
                      className="text-[#000000] text-right flex items-center justify-end"
                      style={{ fontFamily: 'Switzer', fontWeight: 400, fontSize: '24px', lineHeight: '100%', width: '70px', height: '18px' }}
                    >
                      ₹3999
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="w-[472px] h-0  opacity-100"  />
              <div className="w-[472px] h-[82px] flex flex-col gap-[12px] mt-auto ">
              <div className='border border-[#EBEBEB] '></div>
                <div className="flex items-left justify-left gap-[8px] w-[472px] h-[22px]">
                  <Lock className="w-[16px] h-[16px] text-[#000000B8]" />
                  <span className="text-[#000000B8] text-[16px] font-[400] leading-[100%] w-[163px] h-[21px] flex items-center">
                    100% Secure Payment
                  </span>
                </div>
                <button
                  className="w-[472px] h-[48px] bg-[#186AFF] text-white rounded-[6px] py-[12px] px-[24px] flex items-center justify-center gap-[10px]"
                >
                  <span className="text-[18px] font-[500] leading-[100%] w-[228px] h-[24px] flex items-center justify-center">
                    Proceed to Secure Payment
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RAZORPAY FOOTER (Outside the two-column grid, centered under the 1200px container) --- */}
        <div className="flex justify-center items-center gap-[8px] mt-[32px] w-full lg:w-[1200px]">
          <span className="text-[14px] text-[#00000099]">Powered by</span>
          <img
            src="images/razorpay.png"
            alt="Razorpay"
            className="h-[18px] "
          />
        </div>

      </main>
    </div>
  );
}