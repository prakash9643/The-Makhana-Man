// import { getAllProducts, getProducts } from "@/lib/products"
// import Link from "next/link"
// // import  Navbar  from "@/components/Navbar"
// // import Footer from "@/components/Footer"
// import MakhanaStandard from "@/components/MakhanaStandard"
// export const dynamic = "force-dynamic";
// export default async function ProductsPage(){

// const products = await getAllProducts()

// return(
//     <>
// <section className="max-w-6xl mx-auto py-20 px-4  bg-[#fffcfa]">

// <h1 className="text-3xl font-bold mb-10 text-center">
// Our Makhana Snacks
// </h1>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">

// {products.map((product:any)=>(

// <div
// key={product.id}
// className="border p-4 rounded-lg text-center hover:shadow-lg transition"
// >

// <Link href={`/products/${product.slug}`}>

// <img
// src={product.images?.[0]?.src}
// alt={product.name}
// className="mx-auto mb-4"
// />

// <h2 className="font-semibold text-lg">
// {product.name}
// </h2>

// <p className="text-green-700 font-bold">
// ₹{product.price}
// </p>

// </Link>

// </div>

// ))}

// </div>

// </section>
// <MakhanaStandard/>
// </>
// )

// }



// app/products/page.tsx — Server Component
import { getAllProducts } from "@/lib/products"
import Link from "next/link"
import MakhanaStandard from "@/components/MakhanaStandard"

export const dynamic = "force-dynamic"

// ── Grade metadata matched by slug ───────────────────────────────────────────
const gradeMap: Record<string, { suta: string; size: string; handpick: boolean }> = {
  "premium-makhana":     { suta: "5 Suta", size: "15mm – 19mm", handpick: true },
  "classic-makhana-250": { suta: "6 Suta", size: "19mm – 22mm", handpick: true },
  "classic-makhana":     { suta: "4 Suta", size: "12mm – 15mm", handpick: false },
}

// ── Static grade catalog ─────────────────────────────────────────────────────
const gradeGuide = [
  {
    suta: "7 Suta+",
    size: "22.2mm+",
    handpick: true,
    isSpecialization: true,
    bolaSize: "w-16 h-16",
    href: "/sevensuta",
    bola: "https://the-makhana-man.vercel.app/images/10.png",
    pack: "/images/newui_comics/pack.jpeg",
  },
  {
    suta: "6 Suta",
    size: "19mm – 22mm",
    handpick: true,
    isSpecialization: false,
    bolaSize: "w-14 h-14",
    href: "/products/classic-makhana-250",
    bola: "https://the-makhana-man.vercel.app/images/10.png",
    pack: "/images/newui_comics/pack.jpeg",
  },
  {
    suta: "5 Suta",
    size: "15mm – 19mm",
    handpick: true,
    isSpecialization: false,
    bolaSize: "w-12 h-12",
    href: "/products/premium-makhana",
    bola: "https://the-makhana-man.vercel.app/images/10.png",
   pack: "/images/newui_comics/pack.jpeg",
  },
  {
    suta: "4 Suta",
    size: "12mm – 15mm",
    handpick: false,
    isSpecialization: false,
    bolaSize: "w-10 h-10",
    href: "/products/classic-makhana",
    bola: "https://the-makhana-man.vercel.app/images/10.png",
     pack: "/images/newui_comics/pack.jpeg",
  },
  {
    suta: "3 Suta",
    size: "9mm – 12mm",
    handpick: false,
    isSpecialization: false,
    bolaSize: "w-8 h-8",
    href: "#",
    bola: "https://the-makhana-man.vercel.app/images/10.png",
     pack: "/images/newui_comics/pack.jpeg",
  },
]

const trustItems = [
  { img: "https://cdn-icons-png.flaticon.com/512/2830/2830312.png", title: "Free Delivery",   sub: "On orders above ₹499" },
  { img: "https://cdn-icons-png.flaticon.com/512/3064/3064155.png", title: "Secure Payment",  sub: "100% safe & secure" },
  { img: "https://cdn-icons-png.flaticon.com/512/709/709790.png",   title: "Easy Returns",    sub: "Hassle-free returns" },
  { img: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", title: "Made in India", sub: "Supporting local farmers" },
]

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <>
      <section className=" pt-[148px] pb-24 px-4" style={{ backgroundColor: "#f9f3ea" }}>
        <div className="max-w-screen-xl mx-auto">

          {/* ══════════════════════════════════════════
              SECTION 1 — Header
          ══════════════════════════════════════════ */}
          <div className="text-center mb-12">
            <p className="font-family-cosmic-sans text-[12px] tracking-[0.2em] uppercase text-[#a07850] mb-2">
              Handpicked from Bihar's finest farms
            </p>
            <h1 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[36px] sm:text-[48px] leading-tight">
              Our Makhana Snacks
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="h-px w-16 bg-[#d4c4a8]" />
              <p className="font-family-cosmic-sans text-[13px] text-[#a07850]">
                100% Natural · No Preservatives · Proudly Indian
              </p>
              <span className="h-px w-16 bg-[#d4c4a8]" />
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SECTION 2 — Shop: 3 API products
          ══════════════════════════════════════════ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-20">
            {products.map((product: any) => {
              const meta = gradeMap[product.slug] ?? { suta: "", size: "", handpick: false }
              return (
                <Link key={product.id} href={`/products/${product.slug}`} className="group block">
                  <div className="relative flex flex-col h-full rounded-2xl overflow-hidden border border-[#e3dbd0]
                                  hover:border-[#c8b89a] hover:shadow-xl transition-all duration-300"
                       style={{ backgroundColor: "#fff" }}>

                    {/* Image zone */}
                    <div className="flex flex-col items-center px-6 pt-6 pb-4 gap-3"
                         style={{ backgroundColor: "#f0e8d8" }}>

                      {/* Logo + bola row */}
                      <div className="flex items-center justify-between w-full">
                        <img
                          src="https://the-makhana-man.vercel.app/images/logo.png"
                          alt="TMM"
                          className="w-9 h-9 object-contain rounded-full bg-white p-[3px] border border-[#e3dbd0] shadow-sm"
                        />
                        {meta.suta && (
                          <div className="flex items-center gap-1">
                            <img
                              src="https://the-makhana-man.vercel.app/images/10.png"
                              alt="bola"
                              className={`object-contain ${
                                meta.suta === "5 Suta" ? "w-11 h-11" :
                                meta.suta === "6 Suta" ? "w-13 h-13" :
                                meta.suta === "4 Suta" ? "w-9 h-9" : "w-10 h-10"
                              }`}
                            />
                            <span className="font-family-cosmic-sans text-[10px] font-bold text-[#a07850]">
                              {meta.suta}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Product image */}
                      <img
                        src={product.images?.[0]?.src}
                        alt={product.name}
                        className="w-full h-[180px] sm:h-[210px] object-contain object-center
                                   group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Size + stock row */}
                      <div className="flex items-center justify-between w-full">
                        {meta.size ? (
                          <span className="font-family-cosmic-sans text-[10px] font-bold tracking-wide text-[#a07850]">
                            {meta.size}
                          </span>
                        ) : <span />}
                        {product.stock_status === "instock" ? (
                          <span className="font-family-cosmic-sans text-[10px] font-bold bg-[#3ecf6e]
                                           text-white px-2 py-[2px] rounded-full">In Stock</span>
                        ) : (
                          <span className="font-family-cosmic-sans text-[10px] font-bold bg-[#c14b33]
                                           text-white px-2 py-[2px] rounded-full">Sold Out</span>
                        )}
                      </div>
                    </div>

                    {/* Info zone */}
                    <div className="flex flex-col gap-[10px] px-4 py-4 flex-1">

                      <h2 className="font-bold font-family-more-sugar text-[#1A1A2E]
                                     text-[18px] sm:text-[20px] leading-snug line-clamp-2">
                        {product.name}
                      </h2>

                      {/* Handpick badge */}
                      {meta.suta && (
                        meta.handpick ? (
                          <span className="inline-flex w-fit items-center gap-[5px] font-family-cosmic-sans
                                           text-[11px] font-bold bg-[#eaf3de] text-[#27500A] px-[9px] py-[3px] rounded-full">
                            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                              <circle cx="5" cy="5" r="5" fill="#3ecf6e" />
                              <path d="M2.5 5l1.8 1.8L7.5 3.5" stroke="white" strokeWidth="1.3"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Handpick
                          </span>
                        ) : (
                          <span className="inline-flex w-fit items-center gap-[5px] font-family-cosmic-sans
                                           text-[11px] font-bold bg-[#f5f2ed] text-[#999] px-[9px] py-[3px] rounded-full">
                            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                              <circle cx="5" cy="5" r="5" fill="#ccc" />
                              <path d="M3 3l4 4M7 3l-4 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                            Not Handpick
                          </span>
                        )
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-[5px]">
                        <span className="font-family-cosmic-sans text-[10px] bg-[#eaf3de] text-[#27500A] px-2 py-[2px] rounded-full">
                          Natural
                        </span>
                        <span className="font-family-cosmic-sans text-[10px] bg-[#fef7ed] text-[#854F0B] px-2 py-[2px] rounded-full">
                          High Protein
                        </span>
                        <span className="font-family-cosmic-sans text-[10px] bg-[#f0f7ff] text-[#0C447C] px-2 py-[2px] rounded-full">
                          Gluten Free
                        </span>
                      </div>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#e8dece]">
                        <p className="font-bold font-family-more-sugar text-[#c14b33] text-[22px] leading-none">
                          ₹{product.price}
                        </p>
                        <span className="font-family-cosmic-sans text-[12px] font-bold text-[#1a5c3a]
                                         border border-[#1a5c3a] px-3 py-[6px] rounded-lg
                                         group-hover:bg-[#1a5c3a] group-hover:text-white transition-all duration-200">
                          Shop Now →
                        </span>
                      </div>

                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* ══════════════════════════════════════════
              SECTION 3 — Grade Guide
          ══════════════════════════════════════════ */}
          <div className="mb-16">

            {/* Section header */}
            <div className="text-center mb-8">
              <p className="font-family-cosmic-sans text-[12px] tracking-[0.2em] uppercase text-[#a07850] mb-2">
                Know Your Makhana
              </p>
              <h2 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[28px] sm:text-[36px] leading-tight">
                Grade Guide
              </h2>
            </div>

            {/* Suta explainer */}
            <div className="w-full rounded-2xl border border-[#e3dbd0] bg-white px-6 py-[14px] mb-7
                            flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-center">
              <span className="font-family-cosmic-sans text-[13px] text-[#1A1A2E] font-bold">What is Suta?</span>
              <span className="hidden sm:block h-4 w-px bg-[#e3dbd0]" />
              <span className="font-family-cosmic-sans text-[13px] text-[#888]">
                Number of makhana that fit in one tola (≈12g) —{" "}
                <span className="text-[#1a5c3a] font-bold">fewer suta = bigger bola</span>
              </span>
            </div>

            {/* Grade cards row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {gradeGuide.map((g) => (
                  <div
                  key={g.suta}
                    className={[
                      "relative flex flex-col h-full rounded-2xl overflow-hidden border",
                      "transition-all duration-300 hover:shadow-xl hover:-translate-y-[3px]",
                      g.isSpecialization
                        ? "border-[#97C459] shadow-[0_0_0_1px_rgba(151,196,89,0.25)]"
                        : "border-[#e3dbd0] hover:border-[#c8b89a]",
                    ].join(" ")}
                    style={{ backgroundColor: "#fff" }}
                  >

                    {/* Specialization ribbon */}
                    {g.isSpecialization && (
                      <div className="bg-[#1a5c3a] text-white text-center font-family-cosmic-sans
                                      text-[10px] font-bold tracking-[0.15em] py-[6px]">
                        ★ OUR SPECIALIZATION
                      </div>
                    )}

                    {/* Image zone */}
                    <div
                      className="flex flex-col items-center px-4 pt-4 pb-3 gap-[10px]"
                      style={{ backgroundColor: g.isSpecialization ? "#eaf3de" : "#f0e8d8" }}
                    >
                      {/* Logo + bola row */}
                      <div className="flex items-center justify-between w-full">
                        <img
                          src="https://the-makhana-man.vercel.app/images/logo.png"
                          alt="TMM"
                          className="w-7 h-7 object-contain rounded-full bg-white p-[2px] border border-[#e3dbd0]"
                        />
                        <div className="flex items-center gap-1">
                          <img
                            src={g.bola}
                            alt={g.suta}
                            className={`object-contain ${g.bolaSize} group-hover:scale-110 transition-transform duration-500`}
                          />
                        </div>
                      </div>

                      {/* Pack image */}
                      <img
                        src={g.pack}
                        alt={`${g.suta} pack`}
                        className="w-full object-cover object-center rounded-xl
                                   group-hover:scale-[1.03] transition-transform duration-500"
                      />

                     
                    </div>

                    {/* Info zone */}
                    <div className="flex flex-col gap-[8px] px-3 py-3 flex-1">
 {/* Suta + Size row */}
                      <div className="flex items-center justify-between w-full">
                        <p className="font-bold font-family-more-sugar text-[#1A1A2E] text-[19px] leading-none">
                          {g.suta}
                        </p>
                        <p className="font-family-cosmic-sans text-[10px] font-bold tracking-wide text-[#a07850]">
                          {g.size}
                        </p>
                      </div>
                      {/* Handpick badge */}
                      {g.handpick ? (
                        <span className="inline-flex w-fit items-center gap-[4px] font-family-cosmic-sans
                                         text-[10px] font-bold bg-[#eaf3de] text-[#27500A] px-[8px] py-[2px] rounded-full">
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <circle cx="5" cy="5" r="5" fill="#3ecf6e" />
                            <path d="M2.5 5l1.8 1.8L7.5 3.5" stroke="white" strokeWidth="1.3"
                                  strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Handpick
                        </span>
                      ) : (
                        <span className="inline-flex w-fit items-center gap-[4px] font-family-cosmic-sans
                                         text-[10px] font-bold bg-[#f5f2ed] text-[#999] px-[8px] py-[2px] rounded-full">
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <circle cx="5" cy="5" r="5" fill="#ccc" />
                            <path d="M3 3l4 4M7 3l-4 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                          </svg>
                          Not Handpick
                        </span>
                      )}

                   
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SECTION 4 — Trust strip
          ══════════════════════════════════════════ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-[#e3dbd0] rounded-2xl px-5 py-4">
                <img src={b.img} alt={b.title} className="w-9 h-9 object-contain flex-shrink-0" />
                <div>
                  <p className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[13px] leading-tight">{b.title}</p>
                  <p className="font-family-cosmic-sans text-[#888] text-[11px] mt-[2px]">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <MakhanaStandard />
    </>
  )
}