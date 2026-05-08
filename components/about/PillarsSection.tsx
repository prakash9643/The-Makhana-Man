"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const pillars = [
  {
    num: "01",
    title: "Premium\nManufacturing",
    desc: "Our dedicated manufacturing unit in Karhagola, Bihar processes 7 Suta grade makhana with zero compromise — hygienic, traceable, and world-class.",
    color: "#046b46",
    bg: "#e6f4ef",
    border: "#046b46",
  },
  {
    num: "02",
    title: "Ethical\nSourcing",
    desc: "We partner directly with farming families in Darbhanga, Madhubani, and Saharsa — paying premium prices, building multi-generational relationships.",
    color: "#7B2D8B",
    bg: "#ede0f5",
    border: "#7B2D8B",
  },
  {
    num: "03",
    title: "Global\nPartnerships",
    desc: "We actively partner with snack brands, health-focused companies, and food entrepreneurs — across India and globally — to supply premium makhana at scale.",
    color: "#c14b33",
    bg: "#faeee9",
    border: "#c14b33",
  },
]

export default function PillarsSection() {
  return (
    <section
      className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f7eddd 0%, #fdf5e8 60%, #e8f2ec 100%)" }}
    >
      {/* ghost */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{ fontSize: "clamp(60px,14vw,180px)", opacity: 0.03, color: "#1A1A2E", letterSpacing: "0.05em" }}
        >
          HOW WE DO IT
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10">

        {/* header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 h-6 bg-[#046b46] rounded-full" />
            <span className="font-bold uppercase tracking-widest text-[#046b46] text-[12px] font-family-more-sugar">
              How We Do It
            </span>
            <div className="w-1 h-6 bg-[#046b46] rounded-full" />
          </motion.div>
          <motion.h2
            className="font-bold uppercase leading-[1.0] text-[#1A1A2E] font-family-more-sugar"
            style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            Three Pillars of<br />The Makhana Man
          </motion.h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl p-7 flex flex-col gap-4"
              style={{ backgroundColor: p.bg, border: `1.5px solid ${p.border}` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            >
              {/* makhana watermark */}
              <div className="absolute top-[-28px] right-4 pointer-events-none select-none" aria-hidden="true" style={{ width: 90, height: 90 }}>
                <img src="/images/10.png" alt="" className="w-full h-full object-contain opacity-30" draggable={false} />
              </div>

              <span
                className="font-bold font-family-more-sugar"
                style={{ fontSize: "clamp(40px, 6vw, 60px)", color: p.color, opacity: 0.2, lineHeight: 1 }}
              >
                {p.num}
              </span>

              <h3
                className="font-bold uppercase leading-tight font-family-more-sugar whitespace-pre-line"
                style={{ fontSize: "clamp(20px, 3vw, 28px)", color: p.color }}
              >
                {p.title}
              </h3>

              <p
                className="font-bold uppercase tracking-wide leading-relaxed font-family-more-sugar text-[#4b3f3f]"
                style={{ fontSize: "clamp(11px, 1.6vw, 13px)" }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}