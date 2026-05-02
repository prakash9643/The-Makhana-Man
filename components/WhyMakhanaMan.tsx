"use client"

import { motion } from "framer-motion"

const MARQUEE_TEXT = "7 SOOTA IS THE LARGEST, MOST PREMIUM GRADE AVAILABLE"

function DoubleArrow({ height }: { height: number }) {
  const w = 16, hw = 8, tipH = 9
  return (
    <svg width={w} height={height} viewBox={`0 0 ${w} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <polygon points={`${hw},0 ${hw - 5},${tipH} ${hw + 5},${tipH}`} fill="#1a1a1a" />
      <line x1={hw} y1={tipH - 1} x2={hw} y2={height - tipH + 1} stroke="#1a1a1a" strokeWidth="1.6" />
      <polygon points={`${hw},${height} ${hw - 5},${height - tipH} ${hw + 5},${height - tipH}`} fill="#1a1a1a" />
    </svg>
  )
}

export function WhyMakhanaMan() {
  return (
    <section className="section-bg relative overflow-hidden pt-16 md:pt-20 pb-0">

      {/* Corner decorations */}
      <img src="/images/10.png" alt="" className="absolute top-0 left-0 w-14 md:w-20 opacity-90 pointer-events-none" />
      <img src="/images/10.png" alt="" className="absolute top-0 right-0 w-14 md:w-20 opacity-90 pointer-events-none scale-x-[-1]" />
      <img src="/images/10.png" alt="" className="absolute bottom-0 left-0 w-14 md:w-20 opacity-90 pointer-events-none" />
      <img src="/images/10.png" alt="" className="absolute bottom-0 right-0 w-14 md:w-20 opacity-90 pointer-events-none" />

      <div className="flex justify-center pt-2">
        <img src="/images/10.png" alt="" className="w-12 md:w-16 opacity-80 pointer-events-none" />
        <img src="/images/10.png" alt="" className="w-12 md:w-16 opacity-80 pointer-events-none scale-x-[-1]" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <motion.div
            className="flex items-stretch gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 rounded-full self-stretch bg-[#6f8839]" />
            <div>
              <h2 className="font-bold leading-tight font-family-more-sugar text-[#3b6e8c] text-[20px] sm:text-[26px] md:text-[32px] mb-2">
                WHY THE MAKHANA MAN?
              </h2>
              <p className="font-semibold font-family-more-sugar text-[#5da30c] text-[13px] sm:text-[15px] md:text-[17px]">
                Being a specialist in 7 Soota Makhana
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/logo.png" alt="The Makhana Man Logo" className="w-20 md:w-36" />
          </motion.div>
        </div>

        {/* Subtitle copy */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="font-semibold font-family-more-sugar text-[#3b6e8c] text-[13px] sm:text-[15px] md:text-[17px] mb-1">
            DO YOU KNOW WHAT IS SUTA IN MAKHANA?
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap mb-2">
            <span className="font-semibold font-family-more-sugar text-[#5da30c] text-[13px] sm:text-[15px] md:text-[17px]">
              KNOW THE DIFFERENCE, KNOW THE MAKHANA
            </span>
            <span className="text-white font-semibold font-family-more-sugar text-[13px] sm:text-[14px] md:text-[16px] px-4 py-1 rounded-full bg-[#c14b33]">
              .KNOW FROM US
            </span>
          </div>
        </motion.div>

        {/* Suta comparison */}
        <div className="comparison-wrap">

          <motion.div className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="absolute text-[24px] md:text-[34px] text-[#e74c6a] leading-none z-[2] heart-pos">♥</span>
            <div className="label-left-7">
              <span className="font-semibold font-family-more-sugar text-[#1a1a1a] whitespace-nowrap text-[13px] md:text-[17px]">7 SUTA</span>
              <DoubleArrow height={148} />
            </div>
            <motion.img src="/images/10.png" alt="7 Suta Makhana" className="w-[100px] md:w-[160px] object-contain"
              animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          </motion.div>

          <motion.div className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="font-semibold font-family-more-sugar text-[#1a1a1a] mb-[6px] whitespace-nowrap text-[13px] md:text-[17px]">6 SUTA</span>
            <div className="flex flex-row items-end gap-[6px]">
              <DoubleArrow height={110} />
              <motion.img src="/images/10.png" alt="6 Suta Makhana" className="w-[72px] md:w-[116px] object-contain"
                animate={{ y: [0, -6, 0] }} transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>

          <motion.div className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <span className="font-semibold font-family-more-sugar text-[#1a1a1a] mb-[6px] whitespace-nowrap text-[13px] md:text-[17px]">5 SUTA</span>
            <div className="flex flex-row items-end gap-[6px]">
              <DoubleArrow height={80} />
              <motion.img src="/images/10.png" alt="5 Suta Makhana" className="w-[52px] md:w-[84px] object-contain"
                animate={{ y: [0, -5, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>

          <motion.div className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="flex flex-row items-end gap-[6px]">
              <DoubleArrow height={52} />
              <motion.img src="/images/10.png" alt="4 Suta Makhana" className="w-[34px] md:w-[54px] object-contain"
                animate={{ y: [0, -4, 0] }} transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut" }} />
            </div>
            <span className="label-right-4 font-semibold font-family-more-sugar text-[#1a1a1a] whitespace-nowrap text-[13px] md:text-[17px]">4 SUTA</span>
          </motion.div>

        </div>

        <motion.p
          className="text-center font-semibold font-family-more-sugar tracking-[0.04em] mt-[14px] text-[#1a1a1a] text-[13px] sm:text-[15px] md:text-[17px]"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          7+ SUTA IS JUST 5% OF ENTIRE MAKHANA HARVEST
        </motion.p>

      </div>

      {/* Marquee */}
      <div className="overflow-hidden bg-[#1a5c3a] py-[10px] my-10">
        <div className="flex w-max marquee-animate">
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-3 px-8 text-white font-semibold font-family-more-sugar whitespace-nowrap text-[13px] sm:text-[15px] md:text-[17px]">
              <span className="inline-block w-2 h-2 rounded-full bg-white opacity-60" />
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="flex justify-center items-center py-5 mb-16 md:mb-20 gap-4 bg-[#f9f3ea]">
        <motion.img src="/images/12.png" alt="Makhana Man Badges"
          className="max-w-[260px] md:max-w-[460px] w-full object-contain"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} />
      </div>

      <style>{`
        .section-bg { background: #f9f3ea; }
        .comparison-wrap {
          display: flex; align-items: flex-end; justify-content: center;
          gap: 12px; padding-top: 50px; padding-bottom: 4px;
          padding-left: 70px; padding-right: 70px; position: relative;
        }
        @media (min-width: 768px) {
          .comparison-wrap { gap: 18px; padding-top: 60px; padding-left: 90px; padding-right: 90px; }
        }
        @media (max-width: 400px) {
          .comparison-wrap { padding-left: 52px; padding-right: 44px; gap: 8px; }
        }
        .heart-pos { top: -30px; left: 2px; }
        @media (min-width: 768px) { .heart-pos { top: -44px; } }
        .label-left-7 {
          position: absolute; left: -52px; bottom: 0; height: 148px;
          display: flex; flex-direction: row; align-items: center; gap: 4px;
        }
        @media (min-width: 768px) { .label-left-7 { left: -80px; gap: 6px; } }
        .label-right-4 { position: absolute; right: -50px; bottom: 14px; }
        @media (min-width: 768px) { .label-right-4 { right: -70px; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-animate { animation: marquee 20s linear infinite; }
      `}</style>

    </section>
  )
}