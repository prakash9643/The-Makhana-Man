"use client"

import { motion } from "framer-motion"

const cards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 99999 99999",
    sub: "Mon–Sat · 9am to 7pm IST",
    href: "https://wa.me/919999999999",
    accent: "#25D366",
    bg: "#e8f8ee",
    border: "#25D366",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "hello@themakhanaman.com",
    sub: "We reply within 24 hours",
    href: "mailto:hello@themakhanaman.com",
    accent: "#046b46",
    bg: "#e8f4ee",
    border: "#046b46",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Our Base",
    value: "Katihar, Bihar",
    sub: "Sourced from Mithilanchal floodplains",
    href: null,
    accent: "#c14b33",
    bg: "#fdf0eb",
    border: "#c14b33",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    label: "Instagram",
    value: "@themakhanaman",
    sub: "See 7+ Suta in action",
    href: "https://instagram.com/themakhanaman",
    accent: "#7B2D8B",
    bg: "#f3edf8",
    border: "#7B2D8B",
  },
]

export function ContactInfoCards() {
  return (
    <section
      className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: "#f9f3ea" }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{ fontSize: "clamp(70px,16vw,200px)", opacity: 0.03, color: "#1A1A2E", letterSpacing: "0.04em" }}
        >
          REACH US
        </span>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-10">

        {/* sub-label */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
          <span
            className="font-bold uppercase font-family-cosmic-sans text-[#046b46]"
            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
          >
            Contact Channels
          </span>
          <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              /* min-w-0 is critical — prevents grid child from overflowing */
              className="relative rounded-2xl p-5 md:p-6 flex flex-col gap-3 min-w-0 overflow-hidden"
              style={{ backgroundColor: card.bg, border: `1.5px solid ${card.border}` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              {/* Icon circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: card.border, color: "#fff" }}
              >
                {card.icon}
              </div>

              {/* card type label — cosmic-sans, 10px, 0.1em */}
              <span
                className="font-bold uppercase font-family-cosmic-sans"
                style={{ fontSize: "10px", letterSpacing: "0.1em", color: card.accent, opacity: 0.7 }}
              >
                {card.label}
              </span>

              {/* card value — font size reduced to fit; word-break for long strings like email */}
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-bold uppercase font-family-more-sugar hover:underline"
                  style={{
                    fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)",
                    lineHeight: "1.15",
                    letterSpacing: "2px",
                    color: card.accent,
                    wordBreak: "break-all",
                    overflowWrap: "anywhere",
                  }}
                >
                  {card.value}
                </a>
              ) : (
                <p
                  className="font-bold uppercase font-family-more-sugar"
                  style={{
                    fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)",
                    lineHeight: "1.15",
                    letterSpacing: "2px",
                    color: card.accent,
                    wordBreak: "break-all",
                    overflowWrap: "anywhere",
                  }}
                >
                  {card.value}
                </p>
              )}

              {/* card sub — cosmic-sans, 13px, 1.6, 0.05em */}
              <p
                className="font-bold uppercase font-family-cosmic-sans"
                style={{ fontSize: "13px", lineHeight: "1.6", letterSpacing: "0.05em", color: "#7a6f6a" }}
              >
                {card.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}