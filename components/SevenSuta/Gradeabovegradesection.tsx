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
    title: "19mm – 21mm Size Range",
    desc: "Sieve-sorted for size uniformity — some variation within the range permitted",
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
        grade — no hand inspection
      </>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#6b6b6b" strokeWidth="1.5" fill="none" />
        <path d="M6 10.5L8.5 13L14 8" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Available Year-Round",
    desc: (
      <>
        Available throughout the year <br />
        in consistent supply
      </>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17C3 10 17 10 17 17" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="10" cy="6" r="3.5" stroke="#6b6b6b" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "Top 30% of Harvest",
    desc: (
      <>
        Comprises the top 30% of a <br />
        healthy harvest
      </>
    ),
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
    title: "22mm+ Size — Exact",
    desc: "Only kernels at or above 22mm with no upper deviation pass",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10C5 10 6 8 10 8C14 8 15 10 15 10" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="5" r="2.5" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <path d="M3 17C3 14 6 12 10 12C14 12 17 14 17 17" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Dual-Vetted Selection",
    desc: "Machine graded, then 100% hand-inspected for zero defects — no kernel skipped",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C10 2 4 5 4 11C4 14.3 6.7 17 10 17C13.3 17 16 14.3 16 11C16 5 10 2 10 2Z" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <path d="M10 17V19M7 18.5L8 16.5M13 18.5L12 16.5" stroke="#046b46" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "July – January Only",
    desc: (
      <>
        Seasonal availability — 6 months only. <br />
        Rarity is part of the standard.
      </>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="10" r="3" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="10" r="1" fill="#046b46" />
      </svg>
    ),
    title: "Top 1% of Harvest",
    desc: "Only a fraction of the harvest ever reaches this scale — the rarest grade from Bihar",
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
          className="font-bold font-family-more-sugar uppercase whitespace-nowrap"
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

          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 h-6 bg-[#c14b33] rounded-full flex-shrink-0" />
            <span
              className="font-bold uppercase tracking-widest text-[#c14b33] font-family-more-sugar"
              style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(11px, 1.8vw, 13px)" }}
            >
              The Difference
            </span>
            <div className="w-1 h-6 bg-[#c14b33] rounded-full flex-shrink-0" />
          </motion.div>

          <motion.h2
            className="font-bold uppercase text-[#1A1A2E] mb-2 font-family-more-sugar"
            style={{
              fontFamily: "'More Sugar', cursive",
              fontSize: "clamp(28px, 4.5vw, 44px)",
              lineHeight: 1.15,
              letterSpacing: "3px",
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

        {/* ── TWO-COLUMN CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">

          {/* LEFT — 6 Suta */}
          <motion.div
            className="relative rounded-3xl p-6 md:p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "#f3edf8",
              border: "1.5px solid #7b2d8b",
            }}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
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
                  alt="Standard 6 Suta makhana"
                  className="w-full h-full object-cover"
                  style={{ filter: "hue-rotate(260deg) saturate(0.6) brightness(0.95)" }}
                />
              </div>
              <div>
                <span
                  className="inline-block font-bold uppercase tracking-widest px-3 py-1 rounded-full font-family-more-sugar"
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

            {/* Size callout */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl self-start"
              style={{ backgroundColor: "#ede0f5", border: "1px solid #7b2d8b22" }}
            >
              <span
                className="font-bold font-family-more-sugar uppercase tracking-widest"
                style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(13px, 2vw, 16px)", color: "#7b2d8b" }}
              >
                19mm – 21mm
              </span>
              <span
                className="font-bold uppercase font-family-more-sugar tracking-widest"
                style={{ fontFamily: "'More Sugar', cursive", fontSize: 9, color: "#9b5aab" }}
              >
                Size Range
              </span>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {standardFeatures.map((f, i) => (
                <FeatureRow key={i} {...f} delay={0.2 + i * 0.1} accent={false} purple />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — 7 Suta+ */}
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
                  className="inline-block font-bold uppercase tracking-widest px-3 py-1 rounded-full font-family-more-sugar"
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
                  className="font-bold uppercase leading-none mt-1 font-family-more-sugar"
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(18px, 3vw, 26px)",
                    color: "#046b46",
                  }}
                >
                  7 Suta+
                </p>
              </div>
            </div>

            {/* Size callout */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl self-start"
              style={{ backgroundColor: "#d0eadd", border: "1px solid #046b4622" }}
            >
              <span
                className="font-bold font-family-more-sugar uppercase tracking-widest"
                style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(13px, 2vw, 16px)", color: "#046b46" }}
              >
                22mm+
              </span>
              <span
                className="font-bold uppercase font-family-more-sugar tracking-widest"
                style={{ fontFamily: "'More Sugar', cursive", fontSize: 9, color: "#5a8a78" }}
              >
                Minimum Size
              </span>
            </div>

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