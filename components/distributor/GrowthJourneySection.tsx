"use client"

import { motion } from "framer-motion"

const stats = [
    {
        id: 1,
        icon: (
            <svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        number: "500+",
        label: "Retailers",
    },
    {
        id: 2,
        icon: (
            <svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        number: "50+",
        label: "Cities",
    },
    {
        id: 3,
        icon: (
            <svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
        ),
        number: "100K+",
        label: "Happy Customers",
    },
    {
        id: 4,
        icon: (
            <svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        number: "200%+",
        label: "Yearly Growth",
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function GrowthJourneySection() {
    return (
        <section
            className="py-10 md:py-14 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
        >
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="rounded-2xl px-6 md:px-14 py-8 md:py-10"
                    style={{ backgroundColor: "#1a4d35" }}
                >
                    {/* Badge */}
                    <div className="flex justify-center mb-7">
                        <h2
                            className="text-[20px] md:text-[34px] font-bold"
                            style={{ fontFamily: '"MoreSugar"', letterSpacing: "3px", color: "#c9a84c" }}
                        >
                            Our Growth Journey
                        </h2>

                    </div>

                    {/* Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0"
                    >
                        {stats.map((stat, index) => (
                            <div key={stat.id} className="flex items-center gap-0 flex-1 justify-center">

                                {/* Stat Item */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center gap-4 flex-1 justify-center"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        {stat.icon}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <div
                                            className="font-bold leading-none mb-1"
                                            style={{
                                                fontFamily: '"MoreSugar"',
                                                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                                                letterSpacing: "2px",
                                                color: "#c9a84c",
                                            }}
                                        >
                                            {stat.number}
                                        </div>
                                        <div
                                            className="font-family-cosmic-sans text-[12px] tracking-[1.5px] uppercase"
                                            style={{ color: "rgba(201,168,76,0.75)" }}
                                        >
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Divider — last item ke baad nahi */}
                                {index < stats.length - 1 && (
                                    <div
                                        className="hidden sm:block flex-shrink-0 w-px h-12 mx-4"
                                        style={{ backgroundColor: "rgba(201,168,76,0.3)" }}
                                    />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
