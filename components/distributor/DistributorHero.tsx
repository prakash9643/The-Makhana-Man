// "use client"

// import { motion } from "framer-motion"
// import gsap from "gsap"
// import Link from "next/link"
// import { useEffect } from "react"

// export default function DistributorHero() {

//     useEffect(() => {
//         gsap.fromTo(
//             ".distributor-hero-title",
//             { y: 120, opacity: 0 },
//             { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
//         )
//     }, [])

//     return (
//         <motion.section
//             className="relative overflow-hidden"
//             style={{ minHeight: "340px" }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//         >
//             {/* Background Image */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center z-0"
//                 style={{
//                     backgroundImage:
//                         "url('/images/New_comics/banner-design-1.png')",
//                 }}
//             />

        

//             {/* Inner Layout */}
//             <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-20">
//                 <div className="flex flex-col md:flex-row items-center">

//                     {/* LEFT — Text */}
//                     <motion.div
//                         className="w-full md:w-6/12 flex items-center py-10 md:py-16 sm:py-6"
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ delay: 0.2, duration: 0.8 }}
//                     >
//                         <div className="text-left">

//                             <span className="font-family-cosmic-sans inline-flex items-center border border-white/60 rounded-full px-4 py-1 text-[13px] font-semibold tracking-wide text-white mb-4">
//                                 Partner With Us
//                             </span>

                        
//                             <h2
//                                 className="distributor-hero-title md:text-[4rem] text-[2.5rem] font-bold text-white mb-3 leading-tight"
//                                 style={{
//                                     fontFamily: '"MoreSugar"',
//                                     letterSpacing: "3px",
//                                     opacity: 1,
//                                 }}
//                             >
//                                 Become a <br />
//                                 Distributor for <br />
//                                 <span style={{ color: "#d4a84b" }}>The Makhana Man</span>
//                             </h2>

//                             <p className="font-family-cosmic-sans text-white/80 md:text-[18px] text-[15px] font-semibold mb-6 leading-relaxed">
//                                 India's growing healthy snacking brand. <br />
//                                 Join our network and grow with us.
//                             </p>

//                             {/* Buttons */}
//                             <div className="flex gap-3 flex-wrap">
//                                 <Link
//                                     href="/contact"
//                                     className="font-family-cosmic-sans inline-block bg-white text-[#1a5c34] hover:bg-white/90 cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold transition-colors"
//                                 >
//                                     Apply Now
//                                 </Link>
//                                 <Link
//                                     href="/brochure"
//                                     className="font-family-cosmic-sans inline-flex items-center gap-2 border border-white/70 text-white hover:bg-white/10 cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold transition-colors"
//                                 >
//                                     Download Brochure
//                                     <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
//                                     </svg>
//                                 </Link>
//                             </div>

//                         </div>
//                     </motion.div>

//                     {/* RIGHT — Product Image */}
//                     <motion.div
//                         className="w-full py-4 pb-0 md:w-6/12"
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ delay: 0.4, duration: 0.8 }}
//                     >
//                         <img
//                             src="/images/New_comics/distributorhomepng.png"
//                             alt="Makhana Product Packs"
//                             className="mx-auto h-auto object-contain object-bottom"
//                         />
//                     </motion.div>

//                 </div>
//             </div>
//         </motion.section>
//     )
// }

"use client"

import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { useEffect, useState } from "react"

type DistributorHeroProps = {
  onApplyNow?: () => void
}

export default function DistributorHero({ onApplyNow }: DistributorHeroProps) {

  const [showBrochureModal, setShowBrochureModal] = useState(false)
  const [brochureForm, setBrochureForm] = useState({ name: "", phone: "", city: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      ".distributor-hero-title",
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
  }, [])

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((res) => setTimeout(res, 900))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => {
      const link = document.createElement("a")
      link.href = "/brochure/makhana-man-distributor-brochure.pdf"
      link.download = "Makhana-Man-Distributor-Brochure.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 600)
  }

  const closeModal = () => {
    setShowBrochureModal(false)
    setTimeout(() => {
      setSubmitted(false)
      setBrochureForm({ name: "", phone: "", city: "" })
    }, 300)
  }

  return (
    <>
      <motion.section
        className="relative overflow-hidden"
        style={{ minHeight: "340px" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
<div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/New_comics/banner-design-1.png')" }}
        />
<div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-20">
          <div className="flex flex-col md:flex-row items-center">
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
                  style={{ fontFamily: '"MoreSugar"', letterSpacing: "3px", opacity: 1 }}
                >
                  Become a <br />
                  Distributor for <br />
                  <span style={{ color: "#d4a84b" }}>The Makhana Man</span>
                </h2>

                <p className="font-family-cosmic-sans text-white/80 md:text-[18px] text-[15px] font-semibold mb-6 leading-relaxed">
                  India's growing healthy snacking brand. <br />
                  Join our network and grow with us.
                </p>
<div className="flex gap-3 flex-wrap">
<motion.button
                    type="button"
                    onClick={onApplyNow}
                    className="font-family-cosmic-sans inline-block bg-white text-[#1a5c34] cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold"
                    whileHover={{ scale: 1.04, backgroundColor: "#f0f0f0" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    Apply Now
                  </motion.button>
<button
                    onClick={() => setShowBrochureModal(true)}
                    className="font-family-cosmic-sans inline-flex items-center gap-2 border border-white/70 text-white hover:bg-white/10 cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold transition-colors"
                  >
                    Download Brochure
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </button>
                </div>

              </div>
            </motion.div>
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
<AnimatePresence>
        {showBrochureModal && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #1a5c34, #d4a84b)" }} />

              <div className="px-6 pt-6 pb-7">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {!submitted ? (
                  <>
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">📄</span>
                        <h3
                          className="text-[22px] font-bold text-[#1a3d25]"
                          style={{ fontFamily: '"MoreSugar"', letterSpacing: "1.5px" }}
                        >
                          Get Our Brochure
                        </h3>
                      </div>
                      <p className="font-family-cosmic-sans text-[13px] text-gray-500">
                        Share a few details and we'll send you the brochure instantly.
                      </p>
                    </div>

                    <form onSubmit={handleBrochureSubmit} className="flex flex-col gap-3">
                      {[
                        { label: "Full Name *", key: "name", type: "text", placeholder: "Your name", req: true },
                        { label: "Phone Number *", key: "phone", type: "tel", placeholder: "+91 98765 43210", req: true },
                        { label: "City", key: "city", type: "text", placeholder: "Your city", req: false },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="font-family-cosmic-sans block text-[12px] font-semibold text-gray-600 mb-1">
                            {f.label}
                          </label>
                          <input
                            type={f.type}
                            required={f.req}
                            placeholder={f.placeholder}
                            value={brochureForm[f.key as keyof typeof brochureForm]}
                            onChange={(e) => setBrochureForm({ ...brochureForm, [f.key]: e.target.value })}
                            className="font-family-cosmic-sans w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a5c34] focus:ring-1 focus:ring-[#1a5c34]/30 transition-colors"
                          />
                        </div>
                      ))}

                      <button
                        type="submit"
                        disabled={loading}
                        className="font-family-cosmic-sans mt-2 w-full bg-[#1a5c34] hover:bg-[#15492a] disabled:opacity-70 text-white font-semibold text-[14px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Preparing...
                          </>
                        ) : (
                          <>
                            Download Brochure
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    className="flex flex-col items-center text-center py-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#e8f5ee] flex items-center justify-center mb-4">
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#1a5c34" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4
                      className="text-[20px] font-bold text-[#1a3d25] mb-1"
                      style={{ fontFamily: '"MoreSugar"', letterSpacing: "1px" }}
                    >
                      Download Starting!
                    </h4>
                    <p className="font-family-cosmic-sans text-[13px] text-gray-500 mb-5">
                      Your brochure is downloading. Our team will also reach out to you soon.
                    </p>
                    <button
                      onClick={closeModal}
                      className="font-family-cosmic-sans text-[13px] font-semibold text-[#1a5c34] underline underline-offset-2 cursor-pointer"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}