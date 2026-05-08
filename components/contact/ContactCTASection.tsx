// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"

// export function ContactCTASection() {
//   return (
//     <section
//       className="py-16 md:py-20 relative overflow-hidden"
//       style={{ background: "#1A1A2E" }}
//     >
//       {/* Ghost watermark */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
//         <span
//           className="font-bold uppercase whitespace-nowrap text-white"
//           style={{
//             fontFamily: "'More Sugar', cursive",
//             fontSize: "clamp(60px, 14vw, 180px)",
//             opacity: 0.04,
//             letterSpacing: "0.04em",
//           }}
//         >
//           MAKHANA MAN
//         </span>
//       </div>

//       {/* Corner decorations */}
//       <img src="/images/10.png" alt="" className="absolute top-0 left-0 w-14 md:w-20 opacity-20 pointer-events-none" style={{ filter: "invert(1)" }} />
//       <img src="/images/10.png" alt="" className="absolute bottom-0 right-0 w-14 md:w-20 opacity-20 pointer-events-none scale-x-[-1]" style={{ filter: "invert(1)" }} />

//       <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <h2
//             className="font-bold uppercase leading-tight text-white mb-5"
//             style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(28px, 4.5vw, 52px)" }}
//           >
//             Ready To Partner With<br />
//             <span className="text-[#c14b33]">The Makhana Man?</span>
//           </h2>

//           <p
//             className="font-bold uppercase tracking-wide text-white/60 mb-10 max-w-xl mx-auto"
//             style={{ fontFamily: "'More Sugar', cursive", fontSize: "clamp(11px, 1vw, 13px)" }}
//           >
//             From bulk sourcing to private labelling — we handle it all.
//             Let&apos;s build something great together.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
//               <Link
//                 href="/private-labelling#enquiry-form"
//                 className="inline-block px-8 py-3.5 rounded-xl font-bold uppercase text-white tracking-widest"
//                 style={{
//                   backgroundColor: "#c14b33",
//                   fontFamily: "'More Sugar', cursive",
//                   fontSize: "clamp(12px, 1vw, 14px)",
//                 }}
//               >
//                 Start An Enquiry
//               </Link>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
//               <Link
//                 href="/products"
//                 className="inline-block px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest"
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "1.5px solid rgba(255,255,255,0.3)",
//                   color: "#fff",
//                   fontFamily: "'More Sugar', cursive",
//                   fontSize: "clamp(12px, 1vw, 14px)",
//                 }}
//               >
//                 Browse Products
//               </Link>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const FAQS = [
  {
    q: "What is 7+ Suta grade?",
    a: "7+ Suta means every kernel is 22.2mm or larger — the top 1–5% of the entire Bihar harvest. Each is hand-sorted after machine grading.",
  },
  {
    q: "Do you ship pan India?",
    a: "Yes. Free shipping above ₹500 to all pin codes across India. Same-day dispatch from Katihar for orders before 12pm IST.",
  },
  {
    q: "Can I order in bulk?",
    a: "Absolutely. We cater to retailers, corporate gifting, and restaurant chains. WhatsApp us for custom bulk pricing on 5kg+ orders.",
  },
  {
    q: "How do I know it's truly hand-picked?",
    a: "Every batch is photographed before packing. We share batch certificates on request — ask us on WhatsApp.",
  },
]

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  return (
    <motion.div
      className="rounded-2xl p-5 flex flex-col gap-2"
      style={{ backgroundColor: "#fff", border: "1.5px solid #e4dcd1" }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-start gap-2">
        <span
          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold font-family-cosmic-sans mt-0.5"
          style={{ fontSize: "9px", backgroundColor: "#046b46", color: "#fff" }}
        >
          Q
        </span>
        <p
          className="font-bold uppercase leading-snug font-family-more-sugar text-[#1A1A2E]"
          style={{ fontSize: "clamp(12px, 1.8vw, 14px)" }}
        >
          {q}
        </p>
      </div>
      <div className="flex items-start gap-2 pl-0.5">
        <span
          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold font-family-cosmic-sans mt-0.5"
          style={{ fontSize: "9px", backgroundColor: "#f3edf8", color: "#7B2D8B", border: "1.5px solid #7B2D8B" }}
        >
          A
        </span>
        <p
          className="font-bold uppercase tracking-wide leading-relaxed font-family-cosmic-sans text-[#4b3f3f]"
          style={{ fontSize: "clamp(10px, 1.4vw, 11px)" }}
        >
          {a}
        </p>
      </div>
    </motion.div>
  )
}

export function ContactCTASection() {
  return (
    <>
      {/* FAQ Section */}
      <section
        className="relative pt-14 pb-14 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #e8f2ec 0%, #f9f3ea 100%)",
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
            FAQ
          </span>
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-6 bg-[#7B2D8B] rounded-full flex-shrink-0" />
            <span className="font-bold uppercase tracking-widest text-[#7B2D8B] text-[12px] sm:text-[13px] font-family-more-sugar">
              Common Questions
            </span>
          </div>

          <motion.h2
            className="font-bold uppercase leading-[1.0] text-[#1A1A2E] mb-8 font-family-more-sugar"
            style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            Still have<br />
            <span className="text-[#7B2D8B]">Questions?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section
        className="relative overflow-hidden pt-20 pb-20"
        style={{
          background: "linear-gradient(160deg, #0a3d26 0%, #046b46 45%, #0d5c38 100%)",
        }}
      >
        {/* Decorative makhana images */}
        <img src="/images/10.png" alt="" aria-hidden="true" className="absolute pointer-events-none select-none"
          style={{ width: "clamp(90px, 16vw, 200px)", top: "-4%", left: "-2%", opacity: 0.1, transform: "rotate(-18deg)", filter: "brightness(2)" }} />
        <img src="/images/10.png" alt="" aria-hidden="true" className="absolute pointer-events-none select-none"
          style={{ width: "clamp(70px, 12vw, 150px)", bottom: "-5%", right: "-1%", opacity: 0.09, transform: "rotate(22deg) scaleX(-1)", filter: "brightness(2)" }} />

        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <span className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
            style={{ fontSize: "clamp(70px, 16vw, 200px)", opacity: 0.04, color: "#fff", letterSpacing: "0.06em" }}>
            ORDER NOW
          </span>
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">

          {/* Label */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
            <span className="font-bold uppercase tracking-widest font-family-more-sugar" style={{ fontSize: "clamp(10px,1.6vw,12px)", color: "#f5c842" }}>
              Ready to Order
            </span>
            <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="font-bold uppercase leading-[1.0] text-white mb-6 font-family-more-sugar"
            style={{ fontSize: "clamp(28px, 6vw, 68px)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Don&apos;t Wait.<br />
            <span style={{ color: "#f5c842" }}>Order 7+ Suta</span><br />
            Today.
          </motion.h2>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mb-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%207%20Suta%20Makhana"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 font-bold uppercase tracking-widest px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 font-family-cosmic-sans"
              style={{ fontSize: "clamp(11px, 1.8vw, 14px)", backgroundColor: "#f5c842", color: "#0a3d26" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10">WhatsApp Us Now</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "#ffe066" }} />
            </a>

            <Link
              href="/sevensuta"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 font-family-cosmic-sans"
              style={{
                fontSize: "clamp(11px, 1.8vw, 14px)",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.4)",
              }}
            >
              Explore 7+ Suta
            </Link>
          </motion.div>

          {/* Shipping note */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,0.45)", flexShrink: 0 }}>
              <rect x="1" y="3" width="15" height="13" rx="1"/>
              <path d="M16 8h4l3 5v4h-7V8z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <p className="font-bold uppercase tracking-widest font-family-cosmic-sans" style={{ fontSize: "clamp(9px, 1.4vw, 11px)", color: "rgba(255,255,255,0.45)" }}>
              Free shipping above ₹500 · Pan India
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}