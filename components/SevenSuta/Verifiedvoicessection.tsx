"use client"

import { motion } from "framer-motion"

const reviews = [
  {
    stars: 5,
    quote:
      "I opened the packet expecting good makhana. What I got was a revelation. Every single kernel was identical — round, ivory, enormous. Nothing was broken, nothing was flat. I've never seen anything like it.",
    initial: "P",
    name: "Priya Sharma",
    meta: "Delhi · Verified Buyer",
    accent: "#7b2d8b",
    bg: "#f3edf8",
    border: "#d9b8e8",
  },
  {
    stars: 5,
    quote:
      "We run a premium cloud kitchen. We switched to The Makhana Man's 7 Suta for our makhana curry and the guest feedback changed overnight. Size uniformity in cooking matters more than people realise.",
    initial: "R",
    name: "Rahul Jaiswal",
    meta: "Bengaluru · Cloud Kitchen Owner",
    accent: "#046b46",
    bg: "#e8f4ee",
    border: "#a8d8c0",
  },
  {
    stars: 5,
    quote:
      "I'm from Madhubani. I know exactly what real makhana is meant to look and taste like. My mother was genuinely impressed — she said it looked like the handpicked puja-grade makhana of her childhood.",
    initial: "A",
    name: "Anjali Jha",
    meta: "Mumbai · Madhubani Native",
    accent: "#c14b33",
    bg: "#fdf0ec",
    border: "#f0b8a8",
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f5c842">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.443L7 8.885l-3.09 1.629L4.5 7.07 2 4.635l3.455-.505z" />
        </svg>
      ))}
    </div>
  )
}

export function VerifiedVoicesSection() {
  return (
    <section
      className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #e8f2ec 0%, #f9f3ea 40%, #f9f3ea 100%)" }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{
            fontSize: "clamp(60px, 13vw, 170px)",
            opacity: 0.03,
            color: "#1A1A2E",
            letterSpacing: "0.05em",
          }}
        >
          VERIFIED
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
            <span
              className="font-bold uppercase tracking-widest text-[#046b46] font-family-more-sugar"
              style={{ fontSize: "clamp(11px, 1.8vw, 13px)" }}
            >
              Verified Voices
            </span>
            <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
          </motion.div>

          <motion.h2
            className="font-bold uppercase leading-[1.0] text-[#1A1A2E] font-family-more-sugar"
            style={{
              fontSize: "clamp(26px, 4.5vw, 48px)",
            }}
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            What those who've tasted<br className="hidden sm:block" /> 7 Suta say
          </motion.h2>

          {/* Aggregate stars */}
          <motion.div
            className="flex items-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <StarRow count={5} />
            <span
              className="font-bold uppercase tracking-widest text-[#7a6f6a] font-family-more-sugar"
              style={{ fontSize: "clamp(10px, 1.5vw, 12px)" }}
            >
              5.0 · 100% Verified Buyers
            </span>
          </motion.div>
        </div>

        {/* ── Review Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
              style={{
                backgroundColor: r.bg,
                border: `1.5px solid ${r.border}`,
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.14 }}
            >
              {/* Big decorative quote mark */}
              <span
                className="absolute top-4 right-5 pointer-events-none select-none font-bold leading-none font-family-more-sugar"
                style={{
                  fontSize: "clamp(80px, 10vw, 110px)",
                  color: r.accent,
                  opacity: 0.08,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Stars */}
              <StarRow count={r.stars} />

              {/* Quote */}
              <p
                className="font-bold uppercase leading-relaxed tracking-wide flex-1 font-family-more-sugar"
                style={{
                  fontSize: "clamp(11px, 1.6vw, 13px)",
                  color: "#3a3330",
                }}
              >
                "{r.quote}"
              </p>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: r.border }} />

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                {/* Avatar circle */}
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold font-family-more-sugar"
                  style={{
                    backgroundColor: r.accent,
                    fontSize: "clamp(14px, 2vw, 18px)",
                    color: r.bg,
                  }}
                >
                  {r.initial}
                </div>
                <div>
                  <p
                    className="font-bold uppercase leading-none font-family-more-sugar"
                    style={{
                      fontSize: "clamp(12px, 1.8vw, 14px)",
                      color: r.accent,
                    }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="font-bold uppercase tracking-widest mt-0.5 font-family-more-sugar"
                    style={{
                      fontSize: "clamp(9px, 1.3vw, 10px)",
                      color: "#7a6f6a",
                    }}
                  >
                    {r.meta}
                  </p>
                </div>

                {/* Verified badge */}
                <div className="ml-auto flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill={r.accent} opacity="0.15" />
                    <circle cx="10" cy="10" r="9" stroke={r.accent} strokeWidth="1.2" fill="none" />
                    <path d="M6 10.5L8.5 13L14 8" stroke={r.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom trust line ── */}
        <motion.p
          className="text-center font-bold uppercase tracking-widest mt-10 md:mt-12 text-[#7a6f6a] font-family-more-sugar"
          style={{
            fontSize: "clamp(9px, 1.4vw, 11px)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          All reviews are from verified purchases · No incentivised reviews
        </motion.p>

      </div>
    </section>
  )
}