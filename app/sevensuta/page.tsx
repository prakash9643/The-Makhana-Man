


"use client"

import { ChoiceIsClearSection } from "@/components/SevenSuta/Choiceisclearsection"
import { GradeAboveGradeSection } from "@/components/SevenSuta/Gradeabovegradesection"
import { ManifestoSection } from "@/components/SevenSuta/ManifestoSection"
import { SevenSutaHero } from "@/components/SevenSuta/SevenSuttaHero"
import { VerifiedVoicesSection } from "@/components/SevenSuta/Verifiedvoicessection"
import { WhereItComesFromSection } from "@/components/SevenSuta/Whereitcomesfromsection"
import useSmoothScroll from "@/hooks/useSmoothScroll"
export default function sevensuta() {

  useSmoothScroll()

  return (
    <div id="scroll-container" className="mt-[110px]">
      <SevenSutaHero />
      <ManifestoSection />
      <GradeAboveGradeSection />
      <WhereItComesFromSection />
      {/* <VerifiedVoicesSection /> */}
      <ChoiceIsClearSection />
    </div>
  )
}

