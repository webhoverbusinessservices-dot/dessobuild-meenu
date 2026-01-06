import Image from 'next/image'
import React from 'react'

export const CTASection = () => {
  return (
    <>
      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <div
  className="
    w-full max-w-[1200px]
    h-auto lg:h-[455px]
    bg-[#186AFF]
    rounded-[24px]

    px-[20px] sm:px-[32px] md:px-[46px] lg:px-[72px]
    py-[32px] sm:py-[48px] lg:py-[64px]

    flex flex-col gap-[24px] lg:gap-[32px]
    text-left
  "
>

<div className="w-full max-w-[587px] h-auto lg:h-[251px] flex flex-col gap-[32px] opacity-100 mb-[32px]">

<h2
  className="
    font-switzer font-medium
    text-[32px] sm:text-[40px] md:text-[54px]
    leading-[110%] md:leading-[100%]
    tracking-[0px]
    text-[#F6F6F6]
    max-w-full md:max-w-[587px]
    opacity-100
  "
>
  <span className="block">Smarter Collaboration.</span>
  <span className="block mt-[16px] md:mt-[32px]">
    Faster Results.
  </span>
</h2>





  <p
  className="
    font-switzer font-normal
    text-[18px]
    leading-[27px]
    tracking-[0px]
    text-[#F6F6F6]
    max-w-[587px]
    h-auto lg:h-[108px]
    flex items-center      /* vertical align middle */
    opacity-100
  "
>
  Discover the latest trends, expert insights, and inspiring stories from
  Architects, Interior Designers, and Vastu Experts who are transforming
  modern design and redefining the way we imagine, create, and build better
  spaces together.
</p>




</div>

    <button
  className="
    w-[133px] h-[44px]            
    bg-white                     
    rounded-[8px]                   
    px-[20px] py-[10px]            
    flex items-center justify-center
    gap-[10px]                     
    font-switzer font-medium       
    text-[18px] leading-[100%]     
    tracking-[0px]              
    text-[#186AFF]             
    opacity-100
    hover:bg-[#F3F3F3]  

  "
>
  Get Started
</button>

  </div>
</section>

    </>
  )
}
