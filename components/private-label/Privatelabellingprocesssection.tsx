"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Share your requirements & brand vision.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M5 5h24a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H9l-6 4V7a2 2 0 0 1 2-2z"
          stroke="#7b2d8b" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
        <circle cx="11" cy="15" r="1.5" fill="#7b2d8b"/>
        <circle cx="17" cy="15" r="1.5" fill="#7b2d8b"/>
        <circle cx="23" cy="15" r="1.5" fill="#7b2d8b"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Product & Pack Selection",
    desc: "Choose product, pack size & type.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M17 3l12 6.5v15L17 31 5 24.5v-15L17 3z"
          stroke="#7b2d8b" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
        <path d="M17 3v28M5 9.5l12 7 12-7" stroke="#7b2d8b" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design & Approval",
    desc: "We create the design & get your approval.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M24 5l5 5L11 28H6v-5L24 5z" stroke="#7b2d8b" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
        <path d="M20 9l5 5" stroke="#7b2d8b" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Production",
    desc: "We manufacture with highest quality.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="3" y="15" width="28" height="16" rx="2" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
        <path d="M3 22h28" stroke="#7b2d8b" strokeWidth="1.4"/>
        <path d="M10 15V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
        <rect x="13" y="25" width="8" height="6" rx="1" stroke="#7b2d8b" strokeWidth="1.4" fill="none"/>
        <path d="M7 19h3M24 19h3" stroke="#7b2d8b" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Delivery",
    desc: "On-time delivery, every time.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M2 11h20v17H2z" stroke="#7b2d8b" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
        <path d="M22 17h7l3 5v6h-10V17z" stroke="#7b2d8b" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
        <circle cx="8" cy="30" r="2.5" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
        <circle cx="27" cy="30" r="2.5" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
      </svg>
    ),
  },
]

const customise = [
  {
    title: "Custom Recipe",
    desc: "Flavours that suit your market.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M5 25l13-13" stroke="#7b2d8b" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M19 5l6 6-4 4-6-6 4-4z" stroke="#7b2d8b" strokeWidth="1.7" strokeLinejoin="round" fill="none"/>
        <path d="M5 19l6 6" stroke="#7b2d8b" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Custom Size",
    desc: "Choose the right pack size for your brand.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="4" y="4" width="22" height="22" rx="3" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
        <rect x="10" y="10" width="10" height="10" rx="1.5" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Custom Packaging",
    desc: "Stand out with unique packaging.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="3" y="5" width="24" height="20" rx="2.5" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
        <path d="M3 11h24" stroke="#7b2d8b" strokeWidth="1.4"/>
        <path d="M12 5v6M18 5v6" stroke="#7b2d8b" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M8 18h14M8 22h9" stroke="#7b2d8b" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Your Logo",
    desc: "We print your logo beautifully.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="11" stroke="#7b2d8b" strokeWidth="1.7" fill="none"/>
        <path d="M9 21l6-12 6 12" stroke="#7b2d8b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 17h8" stroke="#7b2d8b" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Your Brand",
    desc: "Your brand, your identity.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M21 5l4 4L10 24H6v-4L21 5z" stroke="#7b2d8b" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
        <path d="M17 9l4 4" stroke="#7b2d8b" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function PrivateLabellingProcessSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}>

      {/* ── PART 1: Our Private Labelling Process ── */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-20 pt-16 md:pt-20 pb-16 md:pb-20">

        <motion.h2
          className="text-center font-bold mb-14 text-[#7b2d8b] font-family-more-sugar"
          style={{
            fontSize: "clamp(20px, 2.2vw, 32px)",
          }}
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Private Labelling Process
        </motion.h2>

        {/* Steps: two rows — top: all circles + arrows | bottom: all text blocks */}
        <div className="hidden sm:block">
          {/* Row 1: Circles + arrows perfectly centered */}
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, i) => (
              <div key={step.num + "-icon"} className="flex items-center flex-1">
                {/* Circle */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    className="w-[88px] h-[88px] md:w-[100px] md:h-[100px] xl:w-[116px] xl:h-[116px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ border: "1.5px solid #cfc8be", backgroundColor: "#ffffff" }}
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    whileHover={{ borderColor: "#7b2d8b", scale: 1.05 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                {/* Arrow between circles */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: "40px" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  >
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                      <path d="M0 6h18M12 1l6 5-6 5" stroke="#7b2d8b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Row 2: Text blocks */}
          <div className="flex items-start justify-between">
            {steps.map((step, i) => (
              <div key={step.num + "-text"} className="flex items-start flex-1">
                <motion.div
                  className="flex-1 text-center px-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                >
                  <p
                    className="font-bold mb-[3px] font-family-more-sugar"
                    style={{
                      fontSize: "clamp(11px, 0.9vw, 13px)",
                      color: "#7b2d8b",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {step.num}
                  </p>
                  <p
                    className="font-bold leading-snug mb-1 text-[#7b2d8b] font-family-more-sugar"
                    style={{
                      fontSize: "clamp(12px, 1vw, 15px)",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-[#4b3f3f] leading-relaxed font-family-cosmic-sans"
                    style={{
                      fontSize: "clamp(10px, 0.8vw, 12px)",
                    }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="flex-shrink-0" style={{ width: "40px" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked vertical */}
        <div className="flex flex-col gap-6 sm:hidden">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start gap-4">
              <motion.div
                className="w-[64px] h-[64px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ border: "1.5px solid #cfc8be", backgroundColor: "#ffffff" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {step.icon}
              </motion.div>
              <div className="pt-1">
                <p className="font-bold text-[12px] mb-[2px] font-family-more-sugar" style={{ color: "#7b2d8b" }}>{step.num}</p>
                <p className="font-bold text-[13px] text-[#1A1A2E] font-family-more-sugar">{step.title}</p>
                <p className="text-[11px] text-[#4b3f3f] font-family-cosmic-sans">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PART 2: Customise Your Brand ── */}
      <div className="w-full py-14 md:py-18">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-20">

          <motion.h2
            className="text-center font-bold mb-12 text-[#7b2d8b] font-family-more-sugar"
            style={{
              fontSize: "clamp(20px, 2.2vw, 32px)",
            }}
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Customise Your Brand Your Way
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {customise.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <motion.div
                  className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] xl:w-[88px] xl:h-[88px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: "1.5px solid #d4a8e0", backgroundColor: "#ffffff" }}
                  whileHover={{ borderColor: "#7b2d8b", scale: 1.07 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>

                <div>
                  <p
                    className="font-bold leading-snug mb-1 font-family-more-sugar"
                    style={{
                      fontSize: "clamp(12px, 1vw, 14px)",
                      color: "#7b2d8b",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[#4b3f3f] leading-relaxed font-family-cosmic-sans"
                    style={{
                      fontSize: "clamp(10px, 0.8vw, 12px)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}