"use client"
import { PrivateLabellingHero } from "@/components/private-label/Privatelabellinghero"
import { WhyPrivateLabelSection } from "@/components/private-label/Whyprivatelabelsection"
import { PrivateLabellingProcessSection } from "@/components/private-label/Privatelabellingprocesssection"
import  {EnquirySection}  from "@/components/private-label/EnquirySection"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import { PartnerCTASection } from "@/components/private-label/PartnerCTASection"

export default function PrivateLabelling() {

    useSmoothScroll()

    return (
        <div id="scroll-container" className="mt-[110px]">
            <PrivateLabellingHero />
            <WhyPrivateLabelSection />
            <PrivateLabellingProcessSection />
            <EnquirySection />
            <PartnerCTASection />
        </div>
    )
}
 