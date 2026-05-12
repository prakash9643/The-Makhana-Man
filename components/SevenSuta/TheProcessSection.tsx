"use client"

import { motion } from "framer-motion"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const steps = [
  {
    id: "01",
    title: "River Water\nHarvest",
    desc: "Seeds harvested only from areas that use river water to grow the crop — never from normal plain land.",
    note: "✕ Not plain land",
    accent: "#046b46",
    bg: "#e8f4ee",
    border: "#046b46",
    tag: "Source",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 16C3 16 5.5 11 11 11C16.5 11 19 16 19 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M11 11V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 7L11 4L14 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 19C6.2 17.4 8 17 10 17.8C12 18.6 14 18.2 16 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Phooknai",
    desc: "Converts ultra seeds to semi-processed makhana. The finest by size — seeds are sorted.",
    note: null,
    accent: "#046b46",
    bg: "#e8f4ee",
    border: "#046b46",
    tag: "Processing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M8 10C8 10 9 7 11 7C13 7 14 10 14 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
        <circle cx="11" cy="14" r="1.5" fill="currentColor" opacity="0.6"/>
        <path d="M6 19L5 21M17 19L18 21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Phoriusky",
    desc: "Semi-processed makhana goes through a machine that removes the leftover black shell and gives shine.",
    note: null,
    accent: "#7B2D8B",
    bg: "#f3edf8",
    border: "#7B2D8B",
    tag: "Refining",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="6" width="12" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M8 6V4.5M14 6V4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M8 16V17.5M14 16V17.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Hoolen",
    desc: "Semi-processed makhana goes through a machine removing the leftover black shell and giving shine.",
    note: null,
    accent: "#046b46",
    bg: "#e8f4ee",
    border: "#046b46",
    tag: "Machine",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 11H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M3 6.5H6M3 15.5H6M16 6.5H19M16 15.5H19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Precise\nGrading",
    desc: "Makhana is now graded through a machine to ensure every piece is 22.2mm (7+ Suta) in size.",
    note: "22.2 mm+",
    accent: "#046b46",
    bg: "#e8f4ee",
    border: "#046b46",
    tag: "22.2mm",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="10" width="18" height="3.5" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M6.5 10V7M11 10V5M15.5 10V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="6.5" cy="6" r="1.2" fill="currentColor" opacity="0.5"/>
        <circle cx="11" cy="4" r="1.2" fill="currentColor"/>
        <circle cx="15.5" cy="7" r="1.2" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Handpick",
    desc: "Hand-sorted to remove any unwanted defects. Every kernel individually touched and approved by human hands.",
    note: null,
    accent: "#7B2D8B",
    bg: "#f3edf8",
    border: "#7B2D8B",
    tag: "Human",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M10 5C10 4.2 10.8 3.5 11.5 3.5C12.2 3.5 13 4.2 13 5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7.5 7.5C7.5 6.8 8.2 6 9 6C9.8 6 10 6.8 10 7.5V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M13 8.5C13 7.8 13.7 7 14.5 7.5C15.2 8 15.5 9 15.5 10V13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M7.5 10C7.5 9 6.5 8.5 5.8 9.2C5 10 5 12 5.8 13.5L8 18H16L16.8 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    id: "07",
    title: "Picked &\nDelivered",
    desc: "Packed in top-grade material and shipped across India. Only the finest 1% of the harvest makes it here.",
    note: "Top 1%",
    accent: "#c14b33",
    bg: "#fdf0ec",
    border: "#c14b33",
    tag: "Delivered",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="10" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M16 13H19.5L18 10H16" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
        <circle cx="6.5" cy="19" r="1.8" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <circle cx="15" cy="19" r="1.8" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <path d="M7 7L11 4L15 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M11 4V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function StarDot({ color = "#046b46" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill={color} opacity="0.12" />
      <circle cx="8" cy="8" r="3.5" fill={color} />
    </svg>
  )
}

export function TheProcessSection() {
  return (
    <section
      className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f7eddd 0%, #fdf5e8 50%, #e8f2ec 100%)" }}
    >
      {/* Ghost watermark — exact same pattern as ManifestoSection */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap text-[#1A1A2E] font-family-more-sugar"
          style={{
            fontFamily: "'More Sugar', cursive",
            fontSize: "clamp(80px, 18vw, 220px)",
            opacity: 0.04,
            letterSpacing: "0.04em",
          }}
        >
          THE PROCESS
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8">

        {/* ── HEADER — exact pattern from GradeAboveGradeSection ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">

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
              From Water to Table
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
            The Process
          </motion.h2>

          <motion.p
            className="font-bold uppercase tracking-widest text-[#7a6f6a] font-family-more-sugar"
            style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(10px, 1.6vw, 12px)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            7 Deliberate Steps — Explained
          </motion.p>
        </div>

        {/* ── PROCESS CARD SLIDER ── */}
        <div className="relative">

          {/* Connecting spine */}
          <div
            className="absolute left-[6%] right-[6%] pointer-events-none hidden lg:block"
            style={{ top: 50, height: "1.5px", background: "linear-gradient(90deg, #046b46 0%, #7B2D8B 45%, #046b46 70%, #c14b33 100%)", opacity: 0.13 }}
          />

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={650}
            spaceBetween={10}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 12 },
            }}
            className="!overflow-hidden"
          >
            {steps.map((step, i) => (
              <SwiperSlide key={step.id} className="!h-auto">
                <motion.div
                  className="relative flex h-full flex-col rounded-3xl p-3.5"
                  style={{
                    backgroundColor: step.bg,
                    border: `1.5px solid ${step.border}22`,
                    minHeight: 240,
                  }}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.07 * i }}
                >
                {/* Tag pill — same as BadgePill in SevenSutaHero */}
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border font-bold uppercase font-family-cosmic-sans self-start mb-2.5"
                  style={{
                    fontSize: 8,
                    letterSpacing: "0.12em",
                    borderColor: `${step.accent}35`,
                    color: step.accent,
                    backgroundColor: "rgba(255,255,255,0.65)",
                  }}
                >
                  <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: step.accent }} />
                  {step.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-2.5 flex-shrink-0"
                  style={{ backgroundColor: `${step.accent}14`, color: step.accent }}
                >
                  {step.icon}
                </div>

                {/* Step number — faint, top-right */}
                <span
                  className="absolute top-3 right-3 font-bold font-family-more-sugar"
                  style={{ fontFamily: "'More Sugar', cursive", fontSize: 10, color: step.accent, opacity: 0.28 }}
                >
                  {step.id}
                </span>

                {/* Title — same as card headers in GradeAboveGradeSection */}
                <p
                  className="font-bold uppercase leading-snug mb-1.5 font-family-more-sugar"
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(11px, 1.2vw, 13px)",
                    color: step.accent,
                    letterSpacing: "0.05em",
                    whiteSpace: "pre-line",
                  }}
                >
                  {step.title}
                </p>

                {/* Desc — same as FeatureRow desc */}
                <p
                  className="font-bold uppercase font-family-more-sugar leading-relaxed flex-1"
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(9px, 0.9vw, 10px)",
                    color: "#4b3f3f",
                    letterSpacing: "0.03em",
                  }}
                >
                  {step.desc}
                </p>

                {/* Note — same as inline accent spans in ManifestoSection */}
                {step.note && (
                  <div
                    className="flex items-center gap-1.5 mt-2 pt-2"
                    style={{ borderTop: `1px solid ${step.accent}15` }}
                  >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <circle cx="4.5" cy="4.5" r="4" fill={step.accent} opacity="0.15"/>
                      <circle cx="4.5" cy="4.5" r="1.8" fill={step.accent}/>
                    </svg>
                    <span
                      className="font-bold uppercase font-family-cosmic-sans"
                      style={{ fontSize: 8, color: step.accent, letterSpacing: "0.1em" }}
                    >
                      {step.note}
                    </span>
                  </div>
                )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── BOTTOM STATS — exact pattern from SevenSutaHero / WhereItComesFromSection ── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 mt-12 pt-8 border-t border-[#1A1A2E]/10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.4 }}
        >
          {[
            { val: "7",   label: "Deliberate steps",   color: "#046b46" },
            { val: "0",   label: "Shortcuts taken",    color: "#7B2D8B" },
            { val: "3×",  label: "Human touch points", color: "#046b46" },
            { val: "1%",  label: "Of harvest passes",  color: "#c14b33" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <StarDot color={s.color} />
              <span>
                <strong
                  className="font-bold font-family-more-sugar"
                  style={{
                    fontFamily: "'More Sugar', cursive",
                    fontSize: "clamp(15px, 2.5vw, 17px)",
                    color: s.color,
                  }}
                >
                  {s.val}
                </strong>{" "}
                <span
                  className="text-[#4b3f3f] font-bold uppercase tracking-widest font-family-cosmic-sans"
                  style={{ fontSize: "clamp(9px, 1.3vw, 10px)" }}
                >
                  {s.label}
                </span>
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
