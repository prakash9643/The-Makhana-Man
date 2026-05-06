"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function EnquirySection() {
  const [form, setForm] = useState({
    fullName: "", companyName: "", email: "", phone: "",
    packagingType: "", moq: "", targetMarket: "", message: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: "" })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required."
    if (!form.companyName.trim()) newErrors.companyName = "Company name is required."
    if (!form.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email."
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required."
    } else if (!/^[+\d][\d\s\-]{7,}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number."
    }
    return newErrors
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstErrorKey = Object.keys(newErrors)[0]
      const el = document.querySelector(`[name="${firstErrorKey}"]`)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }
    setSubmitted(true)
  }

  const labelCls = "block font-bold mb-1 font-family-more-sugar"
  const inputCls = "w-full rounded-lg px-4 py-2.5 outline-none transition-all duration-200 bg-white text-[#1A1A2E] placeholder:text-[#b0a898] font-family-cosmic-sans"
  const inputStyle = { border: "1.5px solid #d0c8c0", fontSize: "clamp(12px, 1vw, 14px)", cursor: "text" }
  const selectStyle = { border: "1.5px solid #d0c8c0", fontSize: "clamp(12px, 1vw, 14px)", cursor: "pointer" }
  const focusStyle = { borderColor: "#7b2d8b" }
  const labelStyle = { fontSize: "clamp(12px, 1vw, 14px)", color: "#7b2d8b" }
  const errorStyle = { color: "#c0392b", fontSize: "11px", marginTop: "3px" }
  const errorBorderStyle = { borderColor: "#c0392b" }

  const getInputStyle = (name) => ({
    ...inputStyle,
    ...(errors[name] ? errorBorderStyle : {}),
  })

  const getSelectStyle = (name, hasValue) => ({
    ...selectStyle,
    color: hasValue ? "#1A1A2E" : "#b0a898",
    ...(errors[name] ? errorBorderStyle : {}),
  })

  return (
    <section
      id="enquiry-form"
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
              <span className="font-family-more-sugar absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#7b2d8b] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
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
              className="text-center font-bold mb-8 text-[#7b2d8b] font-family-more-sugar"
              style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
            >
              Private Labelling Enquiry
            </h2>

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#f3e8f7" }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7 16l7 7 11-13" stroke="#7b2d8b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-bold text-[#7b2d8b] text-center font-family-more-sugar" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
                  Enquiry Submitted!
                </p>
                <p className="text-[#5a4a4a] text-center font-family-cosmic-sans" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
                  Thank you! Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
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
                        style={getInputStyle(f.name)}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => (e.target.style.borderColor = errors[f.name] ? "#c0392b" : "#d0c8c0")}
                      />
                      {errors[f.name] && <p style={errorStyle}>{errors[f.name]}</p>}
                    </div>
                  ))}
                </div>

                {/* Row 2: Phone */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={labelCls} style={labelStyle}>
                      Phone Number <span style={{ color: "#7b2d8b" }}>*</span>
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handle}
                      placeholder="+91 00000 00000"
                      className={inputCls} style={getInputStyle("phone")}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => (e.target.style.borderColor = errors.phone ? "#c0392b" : "#d0c8c0")}
                    />
                    {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 3: Packaging Type */}
                <div>
                  <label className={labelCls} style={labelStyle}>Packaging Type</label>
                  <div className="relative">
                    <select
                      name="packagingType" value={form.packagingType} onChange={handle}
                      className={inputCls + " appearance-none pr-10 font-family-cosmic-sans"}
                      style={getSelectStyle("packagingType", form.packagingType)}
                    >
                      <option value="" disabled>Select Packaging Type</option>
                      <option value="center-sealed">Center-Sealed Pouches</option>
                      <option value="zipper-standing">Zipper Standing Pouches</option>
                      <option value="10kg-bora">10 Kgs Bora Packaging</option>
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
                    <div className="relative">
                      <select
                        name="moq" value={form.moq} onChange={handle}
                        className={inputCls + " appearance-none pr-10 font-family-cosmic-sans"}
                        style={getSelectStyle("moq", form.moq)}
                      >
                        <option value="" disabled>Select MOQ</option>
                        <option value="100">100 kgs</option>
                        <option value="200">200 kgs</option>
                        <option value="300">300 kgs</option>
                        <option value="400">400 kgs</option>
                        <option value="500+">500 kgs+</option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 6l5 5 5-5" stroke="#7b2d8b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls} style={labelStyle}>Target Market</label>
                    <div className="relative">
                      <select
                        name="targetMarket" value={form.targetMarket} onChange={handle}
                        className={inputCls + " appearance-none pr-10 font-family-cosmic-sans"}
                        style={getSelectStyle("targetMarket", form.targetMarket)}
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
                    style={{ ...inputStyle, cursor: "text" }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => (e.target.style.borderColor = "#d0c8c0")}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-3.5 rounded-xl font-bold text-white tracking-widest uppercase font-family-more-sugar"
                  style={{
                    backgroundColor: "#7b2d8b",
                    fontSize: "clamp(13px, 1.1vw, 15px)",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                  }}
                  whileHover={{ backgroundColor: "#6a2578", scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Submit Enquiry
                </motion.button>

              </div>
            )}
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
              <span className="font-family-more-sugar absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#7b2d8b] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                Premium Makhana
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}