"use client"

import { motion } from "framer-motion"

const benefits = [
    "High profit margins on every sale",
    "Low investment & high returns",
    "Exclusive territory options",
    "Easy logistics & timely delivery",
    "Repeat demand & loyal customers",
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
}

export default function DistributorBenefitsSection() {
    return (
        <section
            className="overflow-hidden"
             style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
        >
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center min-h-[280px] md:min-h-[340px]">

                {/* ── LEFT — 40% Text ── */}
                <motion.div
                    className="w-full md:w-[40%] py-10 md:py-14 flex flex-col justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <div className="mb-3">
                        <span
                            className="font-family-cosmic-sans inline-flex items-center border border-[#c14b33] rounded-sm px-3 py-[3px] text-[11px] font-bold tracking-widest uppercase text-[#c14b33]"
                        >
                            Distributor Benefits
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-[1.85rem] sm:text-[2.2rem] md:text-[2.5rem] font-bold text-[#2e2825] leading-tight mb-6"
                        style={{ fontFamily: '"MoreSugar"', letterSpacing: "2px" }}
                    >
                        Grow Your Business<br />With Us
                    </h2>

                    {/* Benefits List */}
                    <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-[10px]"
                    >
                        {benefits.map((b) => (
                            <motion.li
                                key={b}
                                variants={itemVariants}
                                className="flex items-center gap-[10px]"
                            >
                                {/* Green check circle */}
                                <span className="w-[20px] h-[20px] rounded-full bg-[#1a4d35] flex items-center justify-center flex-shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path
                                            d="M2 5l2.5 2.5L8 3"
                                            stroke="#fff"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span
                                    className="font-family-cosmic-sans text-[14px] sm:text-[15px] font-semibold text-[#3a3330]"
                                >
                                    {b}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* ── RIGHT — 60% Image ── */}
                <motion.img
                    src="/images/New_comics/graph.png"
                    alt="Makhana Product Packs"
                    className="w-full md:w-[50%] h-[240px] sm:h-[300px] md:h-[600px] object-cover object-center"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                />

            </div>
        </section>
    )
}