"use client"

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FloatingParticles from "@/components/FloatingParticles"
import AboutSection from "@/components/AboutSection"
import ComicSection from "@/components/ComicSection"
import MakingMakhana from "@/components/MakingMakhana"
import MakhanaStandard from "@/components/MakhanaStandard"
import JunkFood from "@/components/JunkFood"

import InsstaMakhana from "@/components/InsstaMakhana"
import Footer from "@/components/Footer"
import useSmoothScroll from "@/hooks/useSmoothScroll"
import { StayCrunchy } from "@/components/StayCrunchy"
import { WhyPickSection } from "@/components/WhyPickSection"
import { WhyMakhanaMan } from "@/components/WhyMakhanaMan"
import { TastyMakhana } from "@/components/TastyMakhana"
import { HowItsMadeSection } from "@/components/HowItsMadeSection"
import { SocialsReelSlider } from "@/components/Socialsreelslider"


export default function Home() {

    useSmoothScroll()

    return (

        <div id="scroll-container">

            <HeroSection />
            <AboutSection />
            <StayCrunchy />
            <WhyPickSection />
            <WhyMakhanaMan />
            <TastyMakhana />
            <HowItsMadeSection />
            <SocialsReelSlider />
            <MakhanaStandard />
            <JunkFood />
            
        </div>
    )

}
