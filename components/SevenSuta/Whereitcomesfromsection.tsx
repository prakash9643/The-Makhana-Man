"use client"

import { motion } from "framer-motion"

const stats = [
  { val: "80%",  label: "of world makhana\nfrom Bihar" },
  { val: "~20%", label: "of 7S rejected\nto make 7S+" },
  { val: "100%", label: "direct from\nfarming families" },
  { val: "3×",   label: "hand-touch\nbefore it ships" },
]

function StarDot({ color = "#046b46" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill={color} opacity="0.12" />
      <circle cx="8" cy="8" r="3.5" fill={color} />
    </svg>
  )
}

export function WhereItComesFromSection() {
  return (
    <section
      className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: "#f9f3ea" }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap text-[#1A1A2E] font-family-more-sugar"
          style={{
            fontSize: "clamp(60px, 14vw, 190px)",
            opacity: 0.03,
            letterSpacing: "0.04em",
          }}
        >
          MITHILANCHAL
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── LEFT: Content ── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">

            {/* Section label */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: -14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
              <span
                className="font-bold uppercase tracking-widest text-[#046b46] text-[12px] sm:text-[13px] font-family-more-sugar"
              >
                Where Our Makhana Comes From
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-bold uppercase leading-[1.0] text-[#1A1A2E] mb-5 font-family-more-sugar"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              The floodplains of<br />
              <span className="text-[#046b46]">Mithilanchal,</span><br />
              Bihar
            </motion.h2>

            {/* Body paragraphs */}
            {[
              "Makhana — Euryale ferox — grows in the shallow, still ponds of North Bihar. The Darbhanga, Madhubani, Sitamarhi, and Saharsa districts form the world's makhana heartland, producing over 80% of global supply.",
              "We source exclusively from farmer cooperatives in these districts, purchasing directly at premium prices for 7 Suta grade. Our relationships go back generations — some of our supplier families have been cultivating makhana for over 100 years.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] mb-4 text-[12px] sm:text-[13px] md:text-[14px] max-w-[520px] font-family-more-sugar"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.13 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-7 border-t border-[#1A1A2E]/10"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.5 }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <StarDot />
                    <span
                      className="font-bold text-[#046b46] font-family-more-sugar"
                      style={{
                        fontSize: "clamp(18px, 3vw, 26px)",
                      }}
                    >
                      {s.val}
                    </span>
                  </div>
                  <span
                    className="font-bold uppercase text-[#4b3f3f] tracking-widest leading-tight whitespace-pre-line font-family-more-sugar"
                    style={{
                      fontSize: "clamp(9px, 1.3vw, 10px)",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Map image ── */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative w-full max-w-[480px]">
              {/* Decorative glow ring */}
              <div
                className="absolute inset-[-12px] rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(4,107,70,0.12) 0%, transparent 70%)",
                }}
              />

              <div
                className="relative rounded-3xl overflow-hidden border-2 border-[#046b46]/20"
                style={{ boxShadow: "0 8px 40px rgba(4,107,70,0.14)" }}
              >
                <img
                  src="/images/newui_comics/pack.jpeg"
                  alt="Bihar map — Mithilanchal region"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}