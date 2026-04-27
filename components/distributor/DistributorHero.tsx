"use client"

import { motion } from "framer-motion"
import gsap from "gsap"
import Link from "next/link"
import { useEffect } from "react"

export default function DistributorHero() {

    useEffect(() => {
        gsap.fromTo(
            ".distributor-hero-title",
            { y: 120, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        )
    }, [])

    return (
        <motion.section
            className="relative overflow-hidden"
            style={{ minHeight: "340px" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage:
                        "url('/images/New_comics/banner-design-1.png')",
                }}
            />

        

            {/* Inner Layout */}
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-20">
                <div className="flex flex-col md:flex-row items-center">

                    {/* LEFT — Text */}
                    <motion.div
                        className="w-full md:w-6/12 flex items-center py-10 md:py-16 sm:py-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="text-left">

                            <span className="font-family-cosmic-sans inline-flex items-center border border-white/60 rounded-full px-4 py-1 text-[13px] font-semibold tracking-wide text-white mb-4">
                                Partner With Us
                            </span>

                        
                            <h2
                                className="distributor-hero-title md:text-[4rem] text-[2.5rem] font-bold text-white mb-3 leading-tight"
                                style={{
                                    fontFamily: '"MoreSugar"',
                                    letterSpacing: "3px",
                                    opacity: 1,
                                }}
                            >
                                Become a <br />
                                Distributor for <br />
                                <span style={{ color: "#d4a84b" }}>The Makhana Man</span>
                            </h2>

                            <p className="font-family-cosmic-sans text-white/80 md:text-[18px] text-[15px] font-semibold mb-6 leading-relaxed">
                                India's growing healthy snacking brand. <br />
                                Join our network and grow with us.
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-3 flex-wrap">
                                <Link
                                    href="/contact"
                                    className="font-family-cosmic-sans inline-block bg-white text-[#1a5c34] hover:bg-white/90 cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold transition-colors"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="/brochure"
                                    className="font-family-cosmic-sans inline-flex items-center gap-2 border border-white/70 text-white hover:bg-white/10 cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold transition-colors"
                                >
                                    Download Brochure
                                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT — Product Image */}
                    <motion.div
                        className="w-full py-4 pb-0 md:w-6/12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <img
                            src="/images/New_comics/distributorhomepng.png"
                            alt="Makhana Product Packs"
                            className="mx-auto h-auto object-contain object-bottom"
                        />
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
}