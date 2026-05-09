"use client"

const features = [
  "FARM FRESH ORIGINS",
  "PACKED AT SOURCE",
  "100% NATURAL INGRIDENTS",
  "NOO PRESERVATIVE",
  "AUTHENTIC CRUNCH",
]

export function WhyPickSection() {
  return (
    <section
      className="pt-16 md:pt-20 pb-16 md:pb-20"
      style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-8 bg-[#7B2D8B] rounded-full flex-shrink-0" />
            <h2 className="font-bold hero-title uppercase leading-none text-[#7B2D8B] text-[20px] sm:text-[26px] md:text-[32px]">
              Why Pick The Makhana Man ?
            </h2>
          </div>
          <p className="font-bold font-family-cosmic-sans uppercase ml-3 text-[#1A1A2E] text-[13px] sm:text-[15px] md:text-[17px]">
            The World's Finest Makhana. Uncompromising Size. Superior Quality.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row w-full items-center gap-8">

          {/* Left — mascot + features */}
          <div className="w-full lg:w-5/12 flex flex-row items-center gap-4 md:gap-8">
            <img
              src="/images/newui_comics/8.png"
              alt="Makhana Man Superhero"
              className="w-36 md:w-52 lg:w-56 object-contain flex-shrink-0"
            />
            <ul className="flex flex-col gap-3">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="font-bold font-family-cosmic-sans uppercase tracking-wide text-[#7B2D8B] text-[13px] sm:text-[15px] md:text-[17px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — comic + caption */}
          <div className="w-full lg:w-7/12 flex flex-col items-center">
            <div className="border-2 border-[#1A1A2E] rounded-lg overflow-hidden w-full">
              <img
                src="/images/newui_comics/7.png"
                alt="Hero Story comic collage"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-bold font-family-cosmic-sans uppercase tracking-widest text-[#1A1A2E] text-[13px] sm:text-[15px] md:text-[17px]">
              Hero Story
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}