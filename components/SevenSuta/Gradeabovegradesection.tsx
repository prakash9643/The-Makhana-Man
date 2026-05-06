"use client"

import { motion } from "framer-motion"

const standardFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="9" width="16" height="2" rx="1" fill="#6b6b6b" />
        <rect x="9" y="2" width="2" height="16" rx="1" fill="#6b6b6b" />
        <rect x="0" y="0" width="6" height="3" rx="1" fill="#6b6b6b" />
        <rect x="14" y="0" width="6" height="3" rx="1" fill="#6b6b6b" />
      </svg>
    ),
    title: "22.2 mm Average",
    desc: "Sieve-sorted to 7 Suta grade — some variation within the size range permitted",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="#6b6b6b" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "Machine Graded",
    desc: (
      <>
        Industrial sieves determine passing <br />
        grade
      </>
    )
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#6b6b6b" strokeWidth="1.5" fill="none" />
        <ellipse cx="10" cy="10" rx="4" ry="8" stroke="#6b6b6b" strokeWidth="1" fill="none" />
      </svg>
    ),
    title: "Shape Variation Allowed",
    desc: (
      <>
        Minor flat spots, edge chips, and asymmetry  <br />
        accepted
      </>
    )
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="6" width="14" height="10" rx="2" stroke="#6b6b6b" strokeWidth="1.5" fill="none" />
        <path d="M7 6V5a3 3 0 016 0v1" stroke="#6b6b6b" strokeWidth="1.5" />
        <circle cx="10" cy="11" r="1.5" fill="#6b6b6b" />
      </svg>
    ),
    title: "~5% Breakage Accepted",
     desc: (
      <>
        Industry norm for packing grade   <br />
        makhana
      </>
    )
  },
]

const plusFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="9" width="18" height="2" rx="1" fill="#046b46" />
        <rect x="0" y="0" width="6" height="3" rx="1" fill="#046b46" />
        <rect x="14" y="0" width="6" height="3" rx="1" fill="#046b46" />
        <path d="M16 17L10 14L4 17" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "22.2 mm Minimum — Exact",
    desc: "Only kernels at or above 22.2 mm with no upper deviation pass",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10C5 10 6 8 10 8C14 8 15 10 15 10" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="5" r="2.5" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <path d="M3 17C3 14 6 12 10 12C14 12 17 14 17 17" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Hand-Sorted After Grading",
    desc: "Every kernel touched, inspected, and approved by human hands",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="10" r="3" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="10" r="1" fill="#046b46" />
      </svg>
    ),
    title: "Spherically Perfect Only",
    desc: "Any flat, cracked, or discoloured kernel is removed — zero compromise",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <path d="M6 10.5L8.5 13L14 8" stroke="#046b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Zero Breakage Policy",
    desc: "Individually inspected — if a kernel can't survive a fall, it doesn't ship",
  },
]

function FeatureRow({
  icon,
  title,
  desc,
  delay,
  accent,
  purple,
}: {
  icon: React.ReactNode
  title: string
  desc: React.ReactNode
  delay: number
  accent?: boolean
  purple?: boolean
}) {
  const iconBg = purple ? "#ede0f5" : accent ? "#e6f4ef" : "#f0ede8"
  const titleColor = purple ? "#7b2d8b" : accent ? "#046b46" : "#3a3330"
  const descColor = purple ? "#9b5aab" : accent ? "#5a8a78" : "#7a6f6a"
  return (
    <motion.div
      className="flex items-start gap-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
        style={{ backgroundColor: iconBg }}
      >
        <span style={{ filter: purple ? "hue-rotate(260deg) saturate(1.2)" : "none" }}>
          {icon}
        </span>
      </div>
      <div>
        <p
          className="font-bold font-family-more-sugar uppercase leading-snug tracking-wide"
          style={{
            fontFamily: "'More Sugar', cursive",
            fontSize: "clamp(11px, 1.8vw, 13px)",
            color: titleColor,
          }}
        >
          {title}
        </p>
        <p
          className="font-bold uppercase font-family-more-sugar leading-relaxed tracking-wide mt-0.5"
          style={{
            fontFamily: "'More Sugar', cursive",
            fontSize: "clamp(10px, 1.5vw, 11px)",
            color: descColor,
          }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

export function GradeAboveGradeSection() {
  return (
    <section
      className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f7eddd 3% 3%, #fdf5e8 70%, #e8f2ec 100%)"
      }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold font-family-more-sugar uppercase whitespace-nowrap font-family-more-sugar "
          style={{
            fontFamily: "'More Sugar', cursive",
            fontSize: "clamp(60px, 14vw, 180px)",
            opacity: 0.03,
            color: "#1A1A2E",
            letterSpacing: "0.05em",
          }}
        >
          7 SUTA
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">

        {/* ── CENTERED HEADER ── */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">

          {/* Label — pill on both sides for centered look */}
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 h-6 bg-[#c14b33] rounded-full flex-shrink-0" />
            <span
              className="font-bold uppercase tracking-widest text-[#c14b33] font-family-more-sugar "
              style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(11px, 1.8vw, 13px)" }}
            >
              The Difference
            </span>
            <div className="w-1 h-6 bg-[#c14b33] rounded-full flex-shrink-0" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-bold uppercase leading-[1.0] text-[#1A1A2E] mb-2 font-family-more-sugar "
            style={{
              fontFamily: "'More Sugar', cursive",
              fontSize: "clamp(28px, 4.5vw, 44px)",
            }}
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            The Grade Above the Grade
          </motion.h2>

          <motion.p
            className="font-bold uppercase tracking-widest text-[#7a6f6a] font-family-more-sugar"
            style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(10px, 1.6vw, 12px)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            7 Suta+ — Explained
          </motion.p>
        </div>

        {/* ── TWO-COLUMN CARDS — equal height via items-stretch ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">

          {/* LEFT — Standard 7 Suta */}
          <motion.div
            className="relative rounded-3xl p-6 md:p-8 flex flex-col gap-5 "
            style={{
              backgroundColor: "#f3edf8",
              border: "1.5px solid #7b2d8b",
            }}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* PNG watermark — top-right, properly visible */}
            <div
              className="absolute top-[-30px] right-4 pointer-events-none select-none"
              aria-hidden="true"
              style={{ width: 100, height: 100 }}
            >
              <img
                src="/images/newui_comics/makhnapng.png"
                alt=""
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>

            {/* Card header */}
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2"
                style={{ borderColor: "#7b2d8b" }}
              >
                <img
                  src="/images/10.png"
                  alt="Standard 7 Suta makhana"
                  className="w-full h-full object-cover"
                  style={{ filter: "hue-rotate(260deg) saturate(0.6) brightness(0.95)" }}
                />
              </div>
              <div>
                <span
                  className="inline-block font-bold uppercase tracking-widest px-3 py-1 rounded-full font-family-more-sugar "
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(10px, 1.6vw, 12px)",
                    backgroundColor: "#7b2d8b",
                    color: "#f3edf8",
                  }}
                >
                  PREMIUM
                </span>
                <p
                  className="font-bold uppercase leading-none mt-1 font-family-more-sugar"
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(18px, 3vw, 26px)",
                    color: "#7b2d8b",
                  }}
                >
                  6 Suta
                </p>
              </div>
            </div>

            {/* Features — flex-1 so both cards grow equally */}
            <div className="flex flex-col gap-4 flex-1">
              {standardFeatures.map((f, i) => (
                <FeatureRow key={i} {...f} delay={0.2 + i * 0.1} accent={false} purple />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — 7 Suta Plus */}
          <motion.div
            className="relative rounded-3xl p-6 md:p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "#e8f4ee",
              border: "1.5px solid #046b46",
            }}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* PNG watermark — top-right, properly visible */}
            <div
              className="absolute top-[-30px] right-4 pointer-events-none select-none"
              aria-hidden="true"
              style={{ width: 130, height: 130 }}
            >
              <img
                src="/images/newui_comics/makhnapng.png"
                alt=""
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>

            {/* Card header */}
            <div className="flex items-center gap-3 mb-1">
              {/* PNG avatar circle — green tinted */}
              <div
                className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#046b46]"
              >
                <img
                  src="/images/10.png"
                  alt="7 Suta premium makhana"
                  className="w-full h-full object-cover"
                  style={{ filter: "sepia(0.3) saturate(1.6) hue-rotate(100deg)" }}
                />
              </div>
              <div>
                <span
                  className="inline-block font-bold uppercase tracking-widest px-3 py-1 rounded-full font-family-more-sugar "
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(10px, 1.6vw, 12px)",
                    backgroundColor: "#046b46",
                    color: "#e8f4ee",
                  }}
                >
                   ULTRA PREMIUM ✦
                </span>
                <p
                  className="font-bold uppercase leading-none mt-1 font-family-more-sugar "
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(18px, 3vw, 26px)",
                    color: "#046b46",
                  }}
                >
                  7 Suta
                </p>
              </div>
            </div>

            {/* Features — flex-1 so both cards grow equally */}
            <div className="flex flex-col gap-4 flex-1">
              {plusFeatures.map((f, i) => (
                <FeatureRow key={i} {...f} delay={0.3 + i * 0.1} accent={true} />
              ))}
            </div>
          </motion.div>

        </div>

    

      </div>
    </section>
  )
}