"use client"

import { motion } from "framer-motion"

const products = [
    {
        id: 1,
        image: "https://aaronature.com/wp-content/uploads/2026/03/14-1.png",
        title: "Classic Makhana",
        // Light green theme
        cardBg: "#e8f5ee",
        borderColor: "#4caf7d",
        headingColor: "#1a4d35",
        checkBorder: "#1a4d35",
        checkStroke: "#1a4d35",
        textColor: "#2d5a3d",
        btnBorder: "#1a4d35",
        btnText: "#1a4d35",
        btnHoverBg: "#1a4d35",
        features: ["100% Natural", "Gluten Free", "Rich in Protein", "Light & Healthy"],
    },
    {
        id: 2,
        image: "https://aaronature.com/wp-content/uploads/2026/03/13.png",
        title: "Premium Makhana",
        // Purple theme
        cardBg: "#dfd8f0",
        borderColor: "#9b87c8",
        headingColor: "#4a2d8a",
        checkBorder: "#6b4bb5",
        checkStroke: "#6b4bb5",
        textColor: "#5a4a7a",
        btnBorder: "#6b4bb5",
        btnText: "#6b4bb5",
        btnHoverBg: "#6b4bb5",
        features: ["100% Natural", "Gluten Free", "Rich in Protein", "Light & Healthy"],
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

export default function ProductsSection() {
    return (
        <section
            className="pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
               style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
        >
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">

                {/* ── Header ── */}
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                >
                    <div className="flex justify-center mb-3">
                        <span className="font-family-cosmic-sans inline-flex items-center border border-[#c14b33] rounded-full px-4 py-1 text-[11px] font-semibold tracking-widest uppercase text-[#c14b33]">
                            Our Products
                        </span>
                    </div>
                    <h2
                        className="text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] font-bold text-[#2e2825] leading-tight"
                        style={{ fontFamily: '"MoreSugar"', letterSpacing: "3px" }}
                    >
                        Premium Quality Makhana
                    </h2>
                </motion.div>

                {/* ── Cards ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
                >
                    {products.map((p) => (
                        <motion.div
                            key={p.id}
                        
                            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7 group transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: p.cardBg,
                                border: `1.5px solid ${p.borderColor}`,
                                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                            }}
                            whileHover={{
                                boxShadow: `0 12px 36px rgba(0,0,0,0.12)`,
                            }}
                        >
                            {/* ── Product Image ── */}
                            <div className="w-full sm:w-[160px] h-[220px] sm:h-[210px] flex-shrink-0 flex items-end justify-center">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-[1.04] transition-transform duration-300"
                                />
                            </div>

                            {/* ── Content ── */}
                            <div className="flex-1 min-w-0 w-full sm:w-auto flex flex-col items-center sm:items-start">

                                {/* Title */}
                                <h3
                                    className="font-bold text-[1.25rem] sm:text-[1.45rem] mb-3 leading-snug text-center sm:text-left"
                                    style={{
                                        fontFamily: '"MoreSugar"',
                                        letterSpacing: "1.5px",
                                        color: p.headingColor,
                                    }}
                                >
                                    {p.title}
                                </h3>

                                {/* Feature list */}
                                <ul className="flex flex-col gap-[9px] mb-5 sm:mb-6">
                                    {p.features.map((feat) => (
                                        <li key={feat} className="flex items-center gap-[8px]">
                                            {/* Check circle */}
                                            <span
                                                className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{ border: `1.5px solid ${p.checkBorder}` }}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                                                    <path
                                                        d="M1.5 4.5l2 2L7.5 2"
                                                        stroke={p.checkStroke}
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span
                                                className="font-family-cosmic-sans text-[14px] sm:text-[15px] font-medium"
                                                style={{ color: p.textColor }}
                                            >
                                                {feat}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button
                                    className="font-family-cosmic-sans text-[13px] sm:text-[14px] font-semibold rounded-lg px-6 sm:px-7 py-[8px] sm:py-[9px] cursor-pointer transition-all duration-200"
                                    style={{
                                        backgroundColor: "transparent",
                                        border: `1.5px solid ${p.btnBorder}`,
                                        color: p.btnText,
                                    }}
                                    onMouseEnter={(e) => {
                                        const btn = e.currentTarget
                                        btn.style.backgroundColor = p.btnHoverBg
                                        btn.style.color = "#ffffff"
                                    }}
                                    onMouseLeave={(e) => {
                                        const btn = e.currentTarget
                                        btn.style.backgroundColor = "transparent"
                                        btn.style.color = p.btnText
                                    }}
                                >
                                    View Details
                                </button>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}