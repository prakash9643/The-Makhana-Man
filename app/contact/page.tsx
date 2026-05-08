"use client"

import { ContactCTASection } from "@/components/contact/ContactCTASection"
import { ContactFormSection } from "@/components/contact/ContactFormSection"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactInfoCards } from "@/components/contact/ContactInfoCards"
import { ContactMapSection } from "@/components/contact/ContactMapSection"
import useSmoothScroll from "@/hooks/useSmoothScroll"

export default function ContactPage() {
  useSmoothScroll()

  return (
    <div id="scroll-container" className="mt-[110px]">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <ContactMapSection />
      <ContactCTASection />
    </div>
  )
}