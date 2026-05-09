"use client"

import { motion } from "framer-motion"

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
      className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f7eddd 0%, #fdf5e8 60%, #e8f2ec 100%)" }}
    >
      {/* ghost */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{ fontSize: "clamp(60px,14vw,180px)", opacity: 0.03, color: "#1A1A2E", letterSpacing: "0.04em" }}
        >
          HOW WE DO IT
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10">

        {/* header */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* sub-label — same as AboutHero badge text */}
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 h-6 bg-[#046b46] rounded-full" />
            <span
              className="font-bold uppercase text-[#046b46] font-family-cosmic-sans"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              How We Do It
            </span>
            <div className="w-1 h-6 bg-[#046b46] rounded-full" />
          </motion.div>

          {/* heading — pure inline styles, no class conflicts */}
          <motion.h2
            className="font-bold uppercase font-family-more-sugar"
            style={{
              fontSize: "clamp(1.55rem, 2.8vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "3px",
              color: "#1A1A2E",
            }}
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
                <img src="/images/10.png" alt="" className="w-full h-full object-contain " draggable={false} />
              </div>

              {/* number */}
              <span
                className="font-bold font-family-more-sugar"
                style={{ fontSize: "clamp(36px, 5vw, 52px)", color: p.color, opacity: 0.2, lineHeight: "1", letterSpacing: "3px" }}
              >
                {p.num}
              </span>

              {/* card heading — font-family-more-sugar has no letter-spacing/line-height in global CSS so inline works fine */}
              <h3
                className="font-bold uppercase font-family-more-sugar whitespace-pre-line"
                style={{
                  fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                  lineHeight: "1.15",
                  letterSpacing: "2px",
                  color: p.color,
                }}
              >
                {p.title}
              </h3>

              {/* paragraph — font-family-cosmic-sans has no line-height/letter-spacing in global CSS so inline works fine */}
              <p
                className="font-bold uppercase font-family-cosmic-sans"
                style={{ fontSize: "13px", lineHeight: "1.6", letterSpacing: "0.05em", color: "#4b3f3f" }}
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