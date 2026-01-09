import Image from 'next/image'
import React from 'react'

export const CTASection = () => {
  return (
    <>
      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <div
  className="w-full max-w-300 h-auto lg:h-113.75  bg-[#186AFF] rounded-3xl px-5 sm:px-8 md:px-11.5 lg:px-18 py-8 sm:py-12 lg:py-16 flex flex-col gap-6 lg:gap-8
    text-left">

<div className="w-full max-w-146.75 h-auto lg:h-62.75 flex flex-col gap-8 opacity-100 mb-8">

<h2 className="font-switzer font-medium text-[32px] sm:text-[40px] md:text-[54px] leading-[110%] md:leading-[100%] tracking-[0px]
    text-[#F6F6F6] max-w-full md:max-w-146.75 opacity-100"
>
  <span className="block">Smarter Collaboration.</span>
  <span className="block mt-4 md:mt-8"> Faster Results.</span>
</h2>





  <p className=" font-switzer font-normal text-[18px] leading-6.75 tracking-[0px]text-[#F6F6F6] max-w-146.75 h-auto lg:h-27 flex items-center      /* vertical align middle */
    opacity-100"> Discover the latest trends, expert insights, and inspiring stories from
  Architects, Interior Designers, and Vastu Experts who are transforming
  modern design and redefining the way we imagine, create, and build better
  spaces together.</p>
</div>

    <button
  className=" w-33.25 h-11 bg-white rounded-lg px-5 py-2.5 flex items-center justify-center gap-2.5 font-switzer font-medium text-[18px] leading-[100%]     
    tracking-[0px] text-[#186AFF] opacity-100 hover:bg-[#F3F3F3] ">Get Started</button>
 </div>
</section>

    </>
  )
}
