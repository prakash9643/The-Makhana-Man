
"use client"

import { motion } from "framer-motion"

const steps = [
  { id: 1, number: "1", title: "SEED HARVEST", description: "", img: "/images/newui_comics/10.png" },
  { id: 2, number: "2", title: "PHORI", description: "THIS IS THE PLACE WHERE PHORI WALAS CONVERT SEED TO MAKHANA", img: "/images/newui_comics/11.png" },
  { id: 3, number: "3", title: "HYGIENIC PROCESSING & GRADING IN THE FACTORY", description: "", img: "/images/newui_comics/12.png" },
  { id: 4, number: "4", title: "PACKAGING", description: "", img: "/images/newui_comics/13.png" },
]

export function TastyMakhana() {
  return (
    <section
      className="pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden"
       style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">

        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-stretch gap-3 mb-2">
            <div className="w-1 rounded-full self-stretch bg-[#4bbfdf]" />
            <h2 className="font-bold font-family-more-sugar text-[#7b5ea7] tracking-wide text-[20px] sm:text-[26px] md:text-[32px]">
              HOW ITS MADE
            </h2>
          </div>
          <p className="font-bold font-family-cosmic-sans uppercase leading-snug tracking-wide ml-4 text-[#7b5ea7] text-[13px] sm:text-[15px] md:text-[17px]">
            Fuel your day with a snack that loves you back —<br />
            Delicious and Nutritious!
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className="flex flex-col rounded-[24px] p-3"
              style={{ backgroundColor: "#3ecf6e" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="w-full overflow-hidden rounded-[14px]">
                <img src={step.img} alt={step.title} className="w-full h-[160px] sm:h-[200px] md:h-[240px] object-cover" />
              </div>
              <div className="flex flex-col items-center justify-start text-center px-2 pt-3 pb-2 flex-1">
                <span className="font-bold font-family-cosmic-sans text-[#1a1a1a] leading-none mb-1 text-[20px] sm:text-[26px] md:text-[32px]">
                  {step.number}
                </span>
                <p className="font-bold font-family-more-sugar text-[#1a1a1a] tracking-wide leading-snug text-[11px] sm:text-[13px] md:text-[15px]">
                  {step.title}
                </p>
                {step.description && (
                  <p className="font-bold font-family-more-sugar text-[#1a1a1a] mt-1 leading-snug tracking-wide text-[10px] sm:text-[11px] md:text-[13px]">
                    {step.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

