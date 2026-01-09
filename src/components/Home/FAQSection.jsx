import { Plus } from 'lucide-react'
import React, { useState } from 'react'

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(1)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }
const faqs = [
  {
    question: "What is DessoBuild and how it works?",
    answer:
      "DessoBuild is a platform connecting clients with expert architects, interior designers, and Vastu consultants for seamless project management.",
  },
  {
    question: "What types of buildings do your architects design?",
    answer:
      "We offer a range of HR solutions, including recruitment services, employee training and development.",
  },
  {
    question: "What is DessoBuild and how it works?",
    answer:
      "DessoBuild is a platform connecting clients with expert architects, interior designers, and Vastu consultants for seamless project management.",
  },
  {
    question: "What is DessoBuild and how it works?",
    answer:
      "DessoBuild is a platform connecting clients with expert architects, interior designers, and Vastu consultants for seamless project management.",
  },
  {
    question: "What is DessoBuild and how it works?",
    answer:
      "DessoBuild is a platform connecting clients with expert architects, interior designers, and Vastu consultants for seamless project management.",
  },
];

  return (
    <section className="bg-gray-50 py-[80px]">
      <div className="max-w-360 mx-auto px-4">

        {/* ---------- HEADING ---------- */}
        <div
          className="w-full max-w-211 mx-auto flex flex-col gap-3 text-center mb-12"
        >
          <h2 className="   font-switzer font-medium   text-[32px] sm:text-[42px] lg:text-[54px]   leading-[100%]   text-black "
          > Got Questions? We&apos;ve Got Answer</h2>

          <p className=" font-switzer font-normal text-[16px] sm:text-[18px] leading-6.75 text-black max-w-132.25 mx-auto">
            Find quick answers to the most common questions about our platform
            and how we can help you build your dream project
          </p>
        </div>

        {/* ---------- FAQ LIST ---------- */}
        <div className="w-full max-w-189.5 mx-auto flex flex-col gap-6">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className=" w-full bg-white rounded-lg p-4.5 flex flex-col gap-3">
      {/* QUESTION */}
      <button
        onClick={() => toggleFaq(index)}
        className=" w-full flex items-center text-left">
        {/* Figma row */}
        <div className=" w-full max-w-180.5 h-6.75 flex items-center justify-between
          "
        >
          <span className=" font-switzer font-medium text-[18px] sm:text-[20px] leading-6.75 text-black max-w-114.5">
            {faq.question}
          </span>

          <Plus
            size={20}
            className={`transition-transform text-black ${
              openFaq === index ? 'rotate-45' : ''
            }`}
          />
        </div>
      </button>

      {/* ANSWER */}
      {openFaq === index && (
        <p className=" font-switzer font-normal text-[16px] sm:text-[18px] leading-6.75 text-[#00000099] max-w-180.5 ">
          {faq.answer} </p>
      )}
    </div>
  ))}
</div>


      </div>
    </section>
  )
}
