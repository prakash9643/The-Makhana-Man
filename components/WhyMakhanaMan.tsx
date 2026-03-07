"use client"

import { motion } from "framer-motion"

export default function WhyMakhanaMan(){

return(

<section className="pt-[50px] bg-white relative pb-[50px] overflow-hidden" 
style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}>

<div className="max-w-6xl mx-auto px-4 relative">

{/* TITLE */}
<div className="flex flex-row items-center justify-between">
    <span className="absolute top-[60px] left-[-100px]">
        <img src="/images/10.png" alt="Makhana Favicon" width="100px" />
    </span>
<motion.h2
    className="right-sidebar-new px-4 font-family-more-sugar relative text-[#3b6e8c] md:text-[32px] text-[22px] font-bold mb-[40px]"
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
    Why the makhana man?
</motion.h2>
<div className="logo-man">
    <img src="/images/logo.png" alt="The Makhana Man Logo" width="150" />
</div>
<span className="absolute top-[-42px] right-[-115px]">
    <img src="/images/10.png" alt="Makhana Favicon" width="100px" />
</span>
</div>



{/* GRID */}
    <motion.div
    className="flex flex-col md:items-center"
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
<h4 className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">Healthy Power</h4>
<p className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px] mb-6">"Boost your daily health with every bite!"</p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

{/* LEFT SIDE */}

<div className="space-y-10 text-green-600">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h4 className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">High Protein Strength</h4>
<p className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">"Fuel your muscles like a true hero!"</p>

</motion.div>


<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{delay:0.2}}
>

<h4 className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">Low-Calorie Energy</h4>
<p className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">"Stay fit, stay active, no extra calories!"</p>

</motion.div>

</div>


{/* CENTER IMAGE */}

<motion.div
className="flex flex-col justify-center items-center"
initial={{scale:0}}
whileInView={{scale:1}}
transition={{duration:0.7}}
>

<img src="/images/11.png"/>

</motion.div>


{/* RIGHT SIDE */}

<div className="space-y-10 text-green-600">

<motion.div
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h4 className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">100% Natural Shield</h4>
<p className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">"Pure goodness from nature!"</p>

</motion.div>


<motion.div
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{delay:0.2}}
>

<h4 className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">No Preservatives Protection</h4>
<p className="font-semibold font-family-more-sugar text-[#5da30c] md:text-[23px] text-[18px]">"Only clean and safe snacking!"</p>

</motion.div>

</div>

</div>


{/* BADGES */}

<motion.div
className="flex flex-wrap justify-center gap-6 mt-16"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<span className="absolute bottom-[-65px] left-[-100px]">
    <img src="/images/10.png" alt="Makhana Favicon" width="100px" />
</span>
<img src="/images/12.png"/>

    <span className="absolute bottom-[-42px] right-[-50px] transform rotate-45">
    <img src="/images/10.png" alt="Makhana Favicon" width="100px" />
</span>

</motion.div>

</div>

</section>

)

}