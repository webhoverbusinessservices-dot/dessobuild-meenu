import Image from 'next/image'
import React from 'react'

export const CTASectionTwo = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-146.75 flex flex-col gap-3">
  <h2
    className=" font-switzer font-medium text-[32px] sm:text-[42px] lg:text-[54px] leading-11 sm:leading-14 lg:leading-17.75text-[#F6F6F6]">
    Have a Question?<br />We’re Here to Help</h2>

  <p className=" font-switzer font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-6 lg:leading-6.75 text-[#F6F6F6]">
    Reach out to our team — we’ll get back to you shortly.
  </p>

  <div className="mt-3">
    <button className=" bg-white px-5 py-2.5 rounded-md font-switzer font-medium text-[18px]  leading-6  text-[#186AFF] hover:bg-[#F2F5FF]
     transition"> Contact us </button> </div>
</div>

            <div className="absolute right-25 top-25 opacity-20 lg:opacity-100">
              <div className="relative">
                <div className="w-40 h-40 lg:w-50 lg:h-50 flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764825905/23adf82cd5df0d5b415667db397f25d0ac076304_fyqlft.png"
                    alt="Architect"
                    width={100}
                    height={100}
                    className='w-full'
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
