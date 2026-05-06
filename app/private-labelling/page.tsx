"use client"
import { PrivateLabellingHero } from "@/components/private-label/Privatelabellinghero"
import { WhyPrivateLabelSection } from "@/components/private-label/Whyprivatelabelsection"
import { PrivateLabellingProcessSection } from "@/components/private-label/Privatelabellingprocesssection"
import { EnquirySection } from "@/components/private-label/EnquirySection"
import { PartnerCTASection } from "@/components/private-label/PartnerCTASection"
import useSmoothScroll from "@/hooks/useSmoothScroll"

const scrollToEnquiry = () => {
  const el = document.getElementById("enquiry-form")
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function PrivateLabelling() {
  useSmoothScroll()

  return (
    <div id="scroll-container" className="mt-[110px]">
      <PrivateLabellingHero onEnquireNow={scrollToEnquiry} />
      <WhyPrivateLabelSection />
      <PrivateLabellingProcessSection />
      <EnquirySection />
      <PartnerCTASection />
    </div>
  )
}