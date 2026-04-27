"use client"
import CtaBannerSection from "@/components/distributor/CtaBannerSection"
import DistributorApplySection from "@/components/distributor/Distributorapplysection"
import DistributorBenefitsSection from "@/components/distributor/Distributorbenefitssection"
import DistributorHero from "@/components/distributor/DistributorHero"
import GrowthJourneySection from "@/components/distributor/GrowthJourneySection"
import ProductsSection from "@/components/distributor/Productssection"
import WhyPartnerSection from "@/components/distributor/WhyPartnerSection"
import useSmoothScroll from "@/hooks/useSmoothScroll"

export default function DistributorPage() {

    useSmoothScroll()

    return (
        <div id="scroll-container" className="mt-[110px]">
            <DistributorHero />
            <WhyPartnerSection />
            <ProductsSection />
            <DistributorBenefitsSection />
            <DistributorApplySection />
            <GrowthJourneySection />
            <CtaBannerSection />
        </div>
    )
}
