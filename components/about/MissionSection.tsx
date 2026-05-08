"use client"

import { motion } from "framer-motion"
import Link from "next/link"

function StarDot({ color = "#046b46" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block shrink-0">
      <circle cx="8" cy="8" r="8" fill={color} opacity="0.13" />
      <circle cx="8" cy="8" r="3.5" fill={color} />
    </svg>
  )
}

function BadgePill({ children, green }: { children: React.ReactNode; green?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold uppercase text-[11px] tracking-widest font-family-cosmic-sans ${
        green
          ? "border border-[#046b46] text-[#046b46] bg-white/60"
          : "border border-[#7B2D8B] text-[#7B2D8B] bg-white/60"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full inline-block ${green ? "bg-[#046b46]" : "bg-[#7B2D8B]"}`} />
      {children}
    </span>
  )
}

export default function MissionSection() {
  return (
    <section
      className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: "#f9f3ea" }}
    >
      {/* ghost watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{ fontSize: "clamp(70px,17vw,200px)", opacity: 0.035, color: "#1A1A2E", letterSpacing: "0.04em" }}
        >
          MISSION
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10">

        {/* label */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1 h-6 bg-[#c14b33] rounded-full flex-shrink-0" />
          <span className="font-bold uppercase tracking-widest text-[#c14b33] text-[12px] sm:text-[13px] font-family-more-sugar">
            Why We Exist
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT — bold headline */}
          <motion.div
            className="w-full lg:w-[42%] flex-shrink-0"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <h2
              className="font-bold uppercase leading-[1.0] text-[#1A1A2E] font-family-more-sugar"
              style={{ fontSize: "clamp(34px, 5vw, 54px)" }}
            >
              Potato chips<br />
              are in{" "}
              <span className="text-[#c14b33] italic">195</span><br />
              countries.<br />
              Makhana<br />
              should be too.
            </h2>

            <motion.div
              className="flex flex-wrap gap-2 mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.4 }}
            >
              <BadgePill green>Healthy</BadgePill>
              <BadgePill>Ancient</BadgePill>
              <BadgePill green>Indian</BadgePill>
              <BadgePill>Global</BadgePill>
            </motion.div>
          </motion.div>

          {/* RIGHT — body text */}
          <motion.div
            className="w-full lg:w-[58%] flex flex-col gap-5"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {[
              "Potato chips are loved in all 195 countries — served in lunch boxes, parties, flights, and store shelves everywhere. But there's a healthier, ancient alternative from India that deserves a spot on that global shelf: Makhana (also known as fox nuts).",
              "The Makhana Man's mission is to see Makhana reach the world — not just as a trend, but as a timeless snack people love and trust.",
              "To bring this vision to life, we have set up a dedicated Makhana manufacturing unit in Karhagola, Bihar, right where the best Makhana grows.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] text-[12px] sm:text-[13px] md:text-[14px] font-family-more-sugar"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.22 + i * 0.12 }}
              >
                {para}
              </motion.p>
            ))}

            {/* quote */}
            <motion.blockquote
              className="border-l-[3px] border-[#046b46] pl-5 py-1 my-2"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.55 }}
            >
              <p className="font-bold uppercase text-[#046b46] leading-snug tracking-wide text-[13px] sm:text-[15px] md:text-[16px] font-family-more-sugar">
                "If you believe in making the world snack better, you are in the right place."
              </p>
            </motion.blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  )
}