"use client"

import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

export default function useSmoothScroll(){

 useEffect(()=>{

  const scroll = new LocomotiveScroll({
   el:document.querySelector("#scroll-container"),
   smooth:true
  } as any)

 },[])

}