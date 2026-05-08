"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type FormState = {
  name: string
  phone: string
  email: string
  type: string
  message: string
}

const enquiryTypes = [
  "Retail Order",
  "Bulk / Wholesale",
  "Corporate Gifting",
  "Partnership",
  "Press / Media",
  "Other",
]

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-bold uppercase tracking-widest font-family-cosmic-sans text-[#046b46]"
        style={{ fontSize: "10px" }}
      >
        {label}
        {required && <span className="text-[#c14b33] ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full font-bold uppercase tracking-wide font-family-cosmic-sans rounded-xl px-4 py-3 outline-none transition-all duration-200"
        style={{
          fontSize: "12px",
          backgroundColor: "#fff",
          border: "1.5px solid #d9d0c5",
          color: "#1A1A2E",
        }}
        onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #046b46")}
        onBlur={(e) => (e.currentTarget.style.border = "1.5px solid #d9d0c5")}
      />
    </div>
  )
}

export function ContactFormSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = `Hi, I'm ${form.name}.\nEnquiry Type: ${form.type || "General"}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    const url = `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    setSubmitted(true)
  }

  return (
    <section
      className="relative pt-14 pb-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f9f3ea 0%, #fdf5e8 60%, #e8f2ec 100%)",
      }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{
            fontSize: "clamp(60px, 14vw, 180px)",
            opacity: 0.03,
            color: "#1A1A2E",
            letterSpacing: "0.05em",
          }}
        >
          MESSAGE US
        </span>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT — copy */}
          <motion.div
            className="w-full lg:w-[38%] flex flex-col justify-start pt-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-[#c14b33] rounded-full flex-shrink-0" />
              <span className="font-bold uppercase tracking-widest text-[#c14b33] text-[12px] font-family-more-sugar">
                Send a Message
              </span>
            </div>

            <h2
              className="font-bold uppercase leading-[1.0] text-[#1A1A2E] mb-5 font-family-more-sugar"
              style={{ fontSize: "clamp(28px, 4.5vw, 46px)" }}
            >
              We Read<br />
              Every<br />
              <span className="text-[#046b46]">Message.</span>
            </h2>

            <p
              className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] mb-6 max-w-[320px] font-family-cosmic-sans"
              style={{ fontSize: "clamp(11px, 1.6vw, 13px)" }}
            >
              Whether it&apos;s a bulk inquiry, a gifting order, or just a question about our 7+ Suta grade — our team responds directly from Katihar.
            </p>

            {/* Promise blocks */}
            {[
              { icon: "⚡", title: "Fast Response", desc: "Within 24 hours on all channels" },
              { icon: "🌿", title: "Direct from Source", desc: "You talk to the farmers' partners" },
              { icon: "📦", title: "Bulk Friendly", desc: "Custom rates for 5kg+ orders" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 mb-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base"
                  style={{ backgroundColor: "#e8f4ee", border: "1.5px solid #046b46" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold uppercase text-[#046b46] font-family-more-sugar" style={{ fontSize: "12px" }}>
                    {item.title}
                  </p>
                  <p className="font-bold uppercase text-[#7a6f6a] tracking-widest font-family-cosmic-sans" style={{ fontSize: "10px" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            className="w-full lg:w-[62%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center rounded-3xl p-10 md:p-14"
                style={{ backgroundColor: "#e8f4ee", border: "1.5px solid #046b46" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#046b46" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-bold uppercase text-[#046b46] mb-2 font-family-more-sugar"
                  style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
                >
                  WhatsApp Opened!
                </h3>
                <p
                  className="font-bold uppercase tracking-wide text-[#4b3f3f] font-family-cosmic-sans"
                  style={{ fontSize: "12px" }}
                >
                  Your message is pre-filled. Just hit send and we&apos;ll respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-bold uppercase tracking-widest px-6 py-2.5 rounded-full font-family-cosmic-sans"
                  style={{ fontSize: "11px", backgroundColor: "#046b46", color: "#fff" }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-6 md:p-8 flex flex-col gap-5"
                style={{ backgroundColor: "#fff", border: "1.5px solid #d9d0c5", boxShadow: "0 8px 40px rgba(4,107,70,0.07)" }}
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Your Name"
                    name="name"
                    placeholder="Ramesh Kumar"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Row 2 */}
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />

                {/* Enquiry type pills */}
                <div className="flex flex-col gap-1.5">
                  <span
                    className="font-bold uppercase tracking-widest font-family-cosmic-sans text-[#046b46]"
                    style={{ fontSize: "10px" }}
                  >
                    Enquiry Type
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {enquiryTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, type: t }))}
                        className="font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200 font-family-cosmic-sans"
                        style={{
                          fontSize: "10px",
                          backgroundColor: form.type === t ? "#046b46" : "#f3ede5",
                          color: form.type === t ? "#fff" : "#4b3f3f",
                          border: form.type === t ? "1.5px solid #046b46" : "1.5px solid #d9d0c5",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-bold uppercase tracking-widest font-family-cosmic-sans text-[#046b46]"
                    style={{ fontSize: "10px" }}
                  >
                    Your Message<span className="text-[#c14b33] ml-0.5">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your order, quantity needed, or any questions about 7+ Suta..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full font-bold uppercase tracking-wide font-family-cosmic-sans rounded-xl px-4 py-3 outline-none transition-all duration-200 resize-none"
                    style={{
                      fontSize: "12px",
                      backgroundColor: "#fff",
                      border: "1.5px solid #d9d0c5",
                      color: "#1A1A2E",
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = "1.5px solid #046b46")}
                    onBlur={(e) => (e.currentTarget.style.border = "1.5px solid #d9d0c5")}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_6px_28px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 font-family-cosmic-sans"
                    style={{
                      fontSize: "clamp(11px, 1.6vw, 13px)",
                      backgroundColor: "#25D366",
                      color: "#fff",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="relative z-10">Send via WhatsApp</span>
                    <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 skew-x-[-20deg]" />
                  </button>

                  <p
                    className="font-bold uppercase tracking-widest text-[#7a6f6a] font-family-cosmic-sans"
                    style={{ fontSize: "10px" }}
                  >
                    Your message will open in WhatsApp
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}