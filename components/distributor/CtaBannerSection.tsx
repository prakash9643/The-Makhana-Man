"use client"

import { motion } from "framer-motion"

export default function CtaBannerSection() {
    return (
        <section
            className="py-6 md:py-8"
            style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
        >
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
                <motion.div
                    className="rounded-2xl overflow-hidden flex flex-col md:grid md:grid-cols-3 items-stretch"
                    style={{ backgroundColor: "#e8dcc8" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Col 1 — Image */}
                    <div className="flex items-center justify-center py-5 md:py-0 md:items-end">
                        <img
                            src="/images/New_comics/makhnabowl.png"
                            alt="Makhana bowl"
                            className="w-[140px] md:w-[75%] object-contain drop-shadow-md md:translate-y-2"
                        />
                    </div>

                    {/* Col 2 — Content */}
                    <div className="flex flex-col items-center md:items-start justify-center px-4 md:px-4 pb-5 md:py-6 text-center md:text-left">
                        <h3
                            className="text-[20px] md:text-[34px] font-bold text-[#2e2825] leading-tight mb-1"
                            style={{ fontFamily: '"MoreSugar"', letterSpacing: "2px" }}
                        >
                            Let's Grow Together
                        </h3>
                        <p className="font-family-cosmic-sans text-[12px] md:text-[13px] text-[#7a6f6a]">
                            Join The Makhana Man family today!
                        </p>
                    </div>

                    {/* Col 3 — Button */}
                    <div className="flex items-center justify-center h-full pb-5 md:py-6 px-4 md:px-8">
                        <button className="font-family-cosmic-sans inline-flex items-center justify-center gap-2 bg-[#1a4d35] hover:bg-[#15402c] active:scale-[0.98] text-white font-semibold text-[13px] md:text-[14px] px-6 md:px-6 py-[10px] md:py-[11px] rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap w-full md:w-auto">
                            Apply Now
                            <span className="text-[15px] leading-none">→</span>
                        </button>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}