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

export default function KarhagolaSectionSection() {
  return (
    <section
      className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: "#f9f3ea" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{ fontSize: "clamp(60px,13vw,180px)", opacity: 0.035, color: "#1A1A2E", letterSpacing: "0.04em" }}
        >
          KARHAGOLA
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* image — pack photo */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-full max-w-[480px]">
              <div
                className="absolute inset-[-12px] rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(4,107,70,0.12) 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden border-2 border-[#046b46]/20"
                style={{ boxShadow: "0 8px 40px rgba(4,107,70,0.14)" }}
              >
                <img
                  src="/images/newui_comics/pack.jpeg"
                  alt="Makhana packaging from Karhagola, Bihar"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2">

            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
              <span className="font-bold uppercase tracking-widest text-[#046b46] text-[12px] sm:text-[13px] font-family-more-sugar">
                Our Manufacturing Unit
              </span>
            </motion.div>

            <motion.h2
              className="font-bold uppercase leading-[1.0] text-[#1A1A2E] mb-5 font-family-more-sugar"
              style={{ fontSize: "clamp(30px, 4.8vw, 52px)" }}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Built in<br />
              <span className="text-[#046b46]">Karhagola,</span><br />
              Bihar — where<br />
              the best makhana<br />
              grows.
            </motion.h2>

            {[
              "We didn't just set up operations near Bihar — we set up inside it. Our dedicated processing and grading facility sits in Karhagola, at the heart of the world's makhana-growing region.",
              "This means shorter farm-to-pack distances, fresher product, more traceability, and direct economic contribution to the farming communities we work with. Every bag of makhana you receive carries the soul of Bihar in it.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] mb-4 text-[12px] sm:text-[13px] md:text-[14px] max-w-[520px] font-family-more-sugar"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.22 + i * 0.13 }}
              >
                {para}
              </motion.p>
            ))}

            {/* stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-7 border-t border-[#1A1A2E]/10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.5 }}
            >
              {[
                { val: "100%", label: "Direct from\nfarming families" },
                { val: "7S+", label: "Only grade\nwe process" },
                { val: "3×", label: "Hand-touch\nbefore shipping" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <StarDot />
                    <span
                      className="font-bold text-[#046b46] font-family-more-sugar"
                      style={{ fontSize: "clamp(18px, 3vw, 26px)" }}
                    >
                      {s.val}
                    </span>
                  </div>
                  <span
                    className="font-bold uppercase text-[#4b3f3f] tracking-widest leading-tight whitespace-pre-line font-family-more-sugar"
                    style={{ fontSize: "clamp(9px, 1.2vw, 10px)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}