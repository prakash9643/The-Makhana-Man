"use client"

import { motion } from "framer-motion"

const features = [
    {
        id: 1,
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: "High Demand",
        desc: "Healthy snacking is the future and makhana is in high demand.",
    },
    {
        id: 2,
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Strong Brand",
        desc: "Trusted by customers for quality, purity and great taste.",
    },
    {
        id: 3,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" stroke="none">₹</text>
            </svg>
        ),
        title: "Attractive Margins",
        desc: "High profit potential with low operating costs.",
    },
    {
        id: 4,
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
        ),
        title: "Fast Moving SKU",
        desc: "Lightweight, easy to store and quick turnover.",
    },
    {
        id: 5,
        icon: (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        ),
        title: "Marketing Support",
        desc: "POS, creatives and promotional support to grow together.",
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyPartnerSection() {


    return (
        <section
            className="pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden"
              style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
        >
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">

                {/* Header */}
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge — ComicSans via globals.css */}
                    <div className="flex justify-center mb-3">
                        <span
                            className="font-family-cosmic-sans inline-flex items-center border border-[#c14b33] rounded-full px-4 py-1 text-[12px] font-semibold tracking-widest uppercase text-[#c14b33]"
                        >
                            Why Partner With Us
                        </span>
                    </div>

                    {/* Heading
                        - "hero-title" class HATA di — pehle GSAP is class ko opacity:0 set karta tha
                        - MoreSugar font inline style se apply — globals.css ki existing font
                        - Animation parent motion.div handle kar raha hai (whileInView)
                    */}
                    <h2
                        className="md:text-[2.5rem] text-[2rem] font-bold text-[#4a403f] leading-tight"
                        style={{
                            fontFamily: '"MoreSugar"',
                            letterSpacing: "3px",
                        }}
                    >
                        Strong Brand. Strong Growth.
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={cardVariants}
                            className="bg-white rounded-2xl border border-[#e8e0d5] px-5 py-6 flex flex-col items-center text-center gap-4"
                        >
                            {/* Icon Circle */}
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: "#1a4d35" }}
                            >
                                {feature.icon}
                            </div>

                            {/* Text */}
                            <div>
                                {/* Card title — MoreSugar font inline */}
                                <h3
                                    className="font-bold text-[#4a403f] text-[18px] mb-1"
                                    style={{
                                        fontFamily: '"MoreSugar"',
                                        letterSpacing: "2px",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                {/* Card desc — ComicSans via globals.css class */}
                                <p className="font-family-cosmic-sans text-[#7a6f6a] text-[14px] leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

