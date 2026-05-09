

"use client"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import AboutHero  from "@/components/about/AboutHero"
import  MissionSection  from "@/components/about/MissionSection"
import PillarsSection from "@/components/about/PillarsSection"
import  KarhagolaSectionSection  from "@/components/about/KarhagolaSectionSection"
import PartnerSection  from "@/components/about/PartnerSection"


export default function AboutPage() {
  useSmoothScroll()

  return (
    <div id="scroll-container" className="mt-[110px]">
      <AboutHero />
      <MissionSection />
      <PillarsSection />
      <KarhagolaSectionSection />
      <PartnerSection />
    </div>
  )
}


