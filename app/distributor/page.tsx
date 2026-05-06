
"use client"

import CtaBannerSection from "@/components/distributor/CtaBannerSection"
import DistributorApplySection from "@/components/distributor/Distributorapplysection"
import DistributorBenefitsSection from "@/components/distributor/Distributorbenefitssection"
import DistributorHero from "@/components/distributor/DistributorHero"
import GrowthJourneySection from "@/components/distributor/GrowthJourneySection"
import WhyPartnerSection from "@/components/distributor/WhyPartnerSection"
import useSmoothScroll from "@/hooks/useSmoothScroll"

const scrollToApplyForm = () => {
  const el = document.getElementById("distributor-apply-section")
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 20
  window.scrollTo({ top, behavior: "smooth" })
}

export default function DistributorPage() {
  useSmoothScroll()

  return (
    <div id="scroll-container" className="mt-[110px]">
      <DistributorHero onApplyNow={scrollToApplyForm} />
      <WhyPartnerSection />
      <DistributorBenefitsSection />
      <DistributorApplySection />
      <GrowthJourneySection />
      <CtaBannerSection onApplyNow={scrollToApplyForm} />
    </div>
  )
}