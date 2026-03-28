"use client"

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FloatingParticles from "@/components/FloatingParticles"
import AboutSection from "@/components/AboutSection"
import ComicSection from "@/components/ComicSection"
import WhyMakhanaMan from "@/components/WhyMakhanaMan"
import TastyMakhana from "@/components/TastyMakhana"
import MakingMakhana from "@/components/MakingMakhana"
import ProductsSection from "@/components/ProductSection"
import MakhanaStandard from "@/components/MakhanaStandard"
import JunkFood from "@/components/JunkFood"
import InsstaMakhana from "@/components/InsstaMakhana"
import Footer from "@/components/Footer"
import useSmoothScroll from "@/hooks/useSmoothScroll"

export default function Home(){

useSmoothScroll()

return(

<div id="scroll-container">

{/* <Navbar/> */}
<HeroSection/>
<AboutSection/>
<FloatingParticles/>
<ComicSection/>
<WhyMakhanaMan />
<TastyMakhana/>
<MakingMakhana/>
<MakhanaStandard/>
<JunkFood/>
{/* <InsstaMakhana/> */}
{/* <Footer/> */}

</div>

)

}