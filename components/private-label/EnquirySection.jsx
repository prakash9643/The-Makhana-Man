"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function EnquirySection() {
  const [form, setForm] = useState({
    fullName: "", companyName: "", email: "", phone: "",
    productInterest: "", packagingType: "", moq: "", targetMarket: "", message: "",
  })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const labelCls = "block font-bold mb-1 text-[#1A1A2E]"
  const inputCls = "w-full rounded-lg px-4 py-2.5 outline-none transition-all duration-200 bg-white text-[#1A1A2E] placeholder:text-[#b0a898]"
  const inputStyle = {
    border: "1.5px solid #d0c8c0",
    fontFamily: "'Cosmic Sans', 'Comic Sans MS', cursive",
    fontSize: "clamp(12px, 1vw, 14px)",
  }
  const focusStyle = { borderColor: "#7b2d8b" }
  const labelStyle = {
    fontFamily: "'More Sugar', 'Bangers', cursive",
    fontSize: "clamp(12px, 1vw, 14px)",
    color: "#7b2d8b",
  }

  return (
    <section
      className="pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-0">

          {/* LEFT IMAGE */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 pr-[80px]">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="https://aaronature.com/wp-content/uploads/2026/03/14-1.png"
                alt="Premium Makhana"
                className="w-[225px] h-[300px] object-cover"
              />
              <span
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#7b2d8b] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap"
                style={{ fontFamily: "'More Sugar', 'Bangers', cursive" }}
              >
                Classic Makhana
              </span>
            </motion.div>
          </div>

          {/* FORM CARD */}
          <motion.div
            className="flex-1 max-w-2xl rounded-2xl p-6 md:p-10"
            style={{ backgroundColor: "#ffffff", border: "1.5px solid #e0d5cc" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-center font-bold mb-8 text-[#7b2d8b]"
              style={{
                fontFamily: "'More Sugar', 'Bangers', cursive",
                fontSize: "clamp(18px, 2.2vw, 26px)",
              }}
            >
              Private Labelling Enquiry
            </h2>

            <div className="flex flex-col gap-5">

              {/* Row 1: Full Name | Company Name | Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Full Name", name: "fullName", type: "text", placeholder: "Your full name", req: true },
                  { label: "Company Name", name: "companyName", type: "text", placeholder: "Your company", req: true },
                  { label: "Email Address", name: "email", type: "email", placeholder: "you@email.com", req: true },
                ].map((f) => (
                  <div key={f.name}>
                    <label className={labelCls} style={labelStyle}>
                      {f.label} {f.req && <span style={{ color: "#7b2d8b" }}>*</span>}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handle}
                      placeholder={f.placeholder}
                      className={inputCls}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => (e.target.style.borderColor = "#d0c8c0")}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: Phone | Product Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} style={labelStyle}>
                    Phone Number <span style={{ color: "#7b2d8b" }}>*</span>
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handle}
                    placeholder="+91 00000 00000"
                    className={inputCls} style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => (e.target.style.borderColor = "#d0c8c0")}
                  />
                </div>
                <div>
                  <label className={labelCls} style={labelStyle}>
                    Product Interest <span style={{ color: "#7b2d8b" }}>*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="productInterest" value={form.productInterest} onChange={handle}
                      className={inputCls + " appearance-none pr-10"}
                      style={{ ...inputStyle, color: form.productInterest ? "#1A1A2E" : "#b0a898" }}
                    >
                      <option value="" disabled>Select Product</option>
                      <option value="classic">Classic Makhana</option>
                      <option value="premium">Premium Makhana</option>
                      <option value="flavoured">Flavoured Makhana</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 6l5 5 5-5" stroke="#7b2d8b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3: Packaging Type */}
              <div>
                <label className={labelCls} style={labelStyle}>Packaging Type</label>
                <div className="relative">
                  <select
                    name="packagingType" value={form.packagingType} onChange={handle}
                    className={inputCls + " appearance-none pr-10"}
                    style={{ ...inputStyle, color: form.packagingType ? "#1A1A2E" : "#b0a898" }}
                  >
                    <option value="" disabled>Select Packaging Type</option>
                    <option value="pouch">Stand-up Pouch</option>
                    <option value="box">Box</option>
                    <option value="custom">Custom</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 6l5 5 5-5" stroke="#7b2d8b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Row 4: MOQ | Target Market */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} style={labelStyle}>Expected Order Quantity (MOQ)</label>
                  <input
                    type="text" name="moq" value={form.moq} onChange={handle}
                    placeholder="Enter MOQ"
                    className={inputCls} style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => (e.target.style.borderColor = "#d0c8c0")}
                  />
                </div>
                <div>
                  <label className={labelCls} style={labelStyle}>Target Market</label>
                  <div className="relative">
                    <select
                      name="targetMarket" value={form.targetMarket} onChange={handle}
                      className={inputCls + " appearance-none pr-10"}
                      style={{ ...inputStyle, color: form.targetMarket ? "#1A1A2E" : "#b0a898" }}
                    >
                      <option value="" disabled>Select Market</option>
                      <option value="domestic">Domestic</option>
                      <option value="export">Export</option>
                      <option value="both">Both</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 6l5 5 5-5" stroke="#7b2d8b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 5: Message */}
              <div>
                <label className={labelCls} style={labelStyle}>Message / Requirements</label>
                <textarea
                  name="message" value={form.message} onChange={handle}
                  placeholder="Tell us about your brand & requirements"
                  rows={4}
                  className={inputCls + " resize-none"}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => (e.target.style.borderColor = "#d0c8c0")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="button"
                className="w-full py-3.5 rounded-xl font-bold text-white tracking-widest uppercase"
                style={{
                  backgroundColor: "#7b2d8b",
                  fontFamily: "'More Sugar', 'Bangers', cursive",
                  fontSize: "clamp(13px, 1.1vw, 15px)",
                  letterSpacing: "0.08em",
                }}
                whileHover={{ backgroundColor: "#6a2578", scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Submit Enquiry
              </motion.button>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 pl-[80px]">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="https://aaronature.com/wp-content/uploads/2026/03/13.png"
                alt="Custom Pack"
                className="w-[225px] h-[300px] object-cover"
              />
              <span
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#7b2d8b] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap"
                style={{ fontFamily: "'More Sugar', 'Bangers', cursive" }}
              >
                Premium Makhana
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}