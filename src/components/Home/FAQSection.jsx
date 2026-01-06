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
      <div className="max-w-[1440px] mx-auto px-4">

        {/* ---------- HEADING ---------- */}
        <div
          className="
            w-full max-w-[844px]
            mx-auto
            flex flex-col
            gap-[12px]
            text-center
            mb-[48px]
          "
        >
          <h2
            className="
              font-switzer font-medium
              text-[32px] sm:text-[42px] lg:text-[54px]
              leading-[100%]
              text-black
            "
          >
            Got Questions? We&apos;ve Got Answer
          </h2>

          <p
            className="
              font-switzer font-normal
              text-[16px] sm:text-[18px]
              leading-[27px]
              text-black
              max-w-[529px]
              mx-auto
            "
          >
            Find quick answers to the most common questions about our platform
            and how we can help you build your dream project
          </p>
        </div>

        {/* ---------- FAQ LIST ---------- */}
        <div className="w-full max-w-[758px] mx-auto flex flex-col gap-[24px]">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="
        w-full
        bg-white
        rounded-[8px]
        p-[18px]
        flex flex-col
        gap-[12px]
      "
    >
      {/* QUESTION */}
      <button
        onClick={() => toggleFaq(index)}
        className="
          w-full
          flex items-center
          text-left
        "
      >
        {/* Figma row */}
        <div
          className="
            w-full max-w-[722px]
            h-[27px]
            flex items-center
            justify-between
          "
        >
          <span
            className="
              font-switzer font-medium
              text-[18px] sm:text-[20px]
              leading-[27px]
              text-black
              max-w-[458px]
            "
          >
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
        <p
          className="
            font-switzer font-normal
            text-[16px] sm:text-[18px]
            leading-[27px]
            text-[#00000099]
            max-w-[722px]
          "
        >
          {faq.answer}
        </p>
      )}
    </div>
  ))}
</div>


      </div>
    </section>
  )
}
