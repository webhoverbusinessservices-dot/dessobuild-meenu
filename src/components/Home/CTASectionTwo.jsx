import Image from 'next/image'
import React from 'react'

export const CTASectionTwo = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-[587px] flex flex-col gap-[12px]">
  <h2
    className="
      font-switzer font-medium
      text-[32px] sm:text-[42px] lg:text-[54px]
      leading-[44px] sm:leading-[56px] lg:leading-[71px]
      text-[#F6F6F6]
    "
  >
    Have a Question?
    <br />
    We’re Here to Help
  </h2>

  <p
    className="
      font-switzer font-normal
      text-[14px] sm:text-[16px] lg:text-[18px]
      leading-[24px] lg:leading-[27px]
      text-[#F6F6F6]
    "
  >
    Reach out to our team — we’ll get back to you shortly.
  </p>

  <div className="mt-[12px]">
    <button
      className="
        bg-white
        px-[20px] py-[10px]
        rounded-[6px]
        font-switzer font-medium
        text-[18px]
        leading-[24px]
        text-[#186AFF]
        hover:bg-[#F2F5FF]
        transition
      "
    >
      Contact us
    </button>
  </div>
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
