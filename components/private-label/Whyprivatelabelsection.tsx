"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 2.5L4 8v9c0 7.732 5.236 14.96 12 16.5C22.764 31.96 28 24.732 28 17V8L16 2.5z"
          stroke="#7B2D8B" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M10.5 16.5l3.5 3.5 7.5-7.5" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Premium Quality Makhana",
    desc: "Sourced from the best farms & quality checked.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="3" width="16" height="26" rx="2.5" stroke="#7B2D8B" strokeWidth="1.8" fill="none" />
        <path d="M12 3v4h8V3" stroke="#7B2D8B" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M11 17h10M11 21.5h6" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Custom Packaging & Branding",
    desc: "Design your pack, we make it happen.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 9h24l-2.5 13.5H6.5L4 9z" stroke="#7B2D8B" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M2.5 5h4l2 4" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11.5" cy="27" r="1.8" stroke="#7B2D8B" strokeWidth="1.8" fill="none" />
        <circle cx="21.5" cy="27" r="1.8" stroke="#7B2D8B" strokeWidth="1.8" fill="none" />
      </svg>
    ),
    title: "Low MOQ",
    desc: "Start small and scale as you grow.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="5.5" stroke="#7B2D8B" strokeWidth="1.8" fill="none" />
        <path d="M7 28c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M22 9.5c1.2.7 2.5 2 2.5 3.8" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M25.5 20.5c1.8 1.4 3.5 3.8 3.5 7.5" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "End to End Support",
    desc: "We support you at every step of the way.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.48, delay: i * 0.1 },
  }),
}

export function WhyPrivateLabelSection() {
  return (
    <section
      className="pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden shadow-xl"
      style={{ background: "#ffff" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">

        {/* Outer white card */}
        <motion.div
          className="wpl-wrapper rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid #e0d5cc",
            backgroundColor: "#ffffff",
            boxShadow: "0 8px 32px 0 rgba(123,45,139,0.13), 0 2px 8px 0 rgba(123,45,139,0.08)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="px-6 md:px-10 pt-8 pb-6" style={{ borderBottom: "1.5px solid #e0d5cc" }}>
            <h2
              className="text-center font-bold text-[#7B2D8B] font-family-more-sugar"
              style={{
                fontSize: "clamp(18px, 2.4vw, 30px)",
                letterSpacing: "0.01em",
              }}
            >
              Why Private Label with Us?
            </h2>
          </div>

          {/* Cards grid */}
          <div className="wpl-grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ backgroundColor: "#faf7ff" }}
                className="wpl-card flex flex-col gap-3 p-6 md:p-7 transition-colors duration-200"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "#f5eaf7",
                    border: "1.5px solid #d9b8e0",
                    boxShadow: "0 2px 8px 0 rgba(123,45,139,0.10)",
                  }}
                >
                  {f.icon}
                </div>

                {/* Title */}
                <p
                  className="font-bold leading-snug font-family-more-sugar"
                  style={{
                    fontSize: "clamp(13px, 1.15vw, 15px)",
                    letterSpacing: "0.01em",
                    color: "#7B2D8B"
                  }}
                >
                  {f.title}
                </p>

                {/* Desc */}
                <p
                  className="text-[#4b3f3f] leading-relaxed font-family-cosmic-sans"
                  style={{
                    fontSize: "clamp(11px, 0.9vw, 13px)",
                  }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      <style>{`
        .font-family-more-sugar {
          font-family: 'More Sugar', 'Bangers', cursive;
        }
        .font-family-cosmic-sans {
          font-family: 'Cosmic Sans', 'Comic Sans MS', cursive;
        }

        /* Mobile: single column, divider between each */
        .wpl-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        .wpl-card {
          border-bottom: 1.5px solid #e0d5cc;
        }
        .wpl-card:last-child {
          border-bottom: none;
        }

        /* sm: 2×2 grid */
        @media (min-width: 640px) {
          .wpl-grid {
            grid-template-columns: 1fr 1fr;
          }
          .wpl-card:nth-child(1),
          .wpl-card:nth-child(2) {
            border-bottom: 1.5px solid #e0d5cc;
          }
          .wpl-card:nth-child(3),
          .wpl-card:nth-child(4) {
            border-bottom: none;
          }
          .wpl-card:nth-child(odd) {
            border-right: 1.5px solid #e0d5cc;
          }
        }

        /* lg: single row of 4 */
        @media (min-width: 1024px) {
          .wpl-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .wpl-card {
            border-bottom: none !important;
            border-right: 1.5px solid #e0d5cc;
          }
          .wpl-card:last-child {
            border-right: none;
          }
        }
      `}</style>
    </section>
  )
}