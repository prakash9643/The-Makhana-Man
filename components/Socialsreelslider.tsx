"use client"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

const REELS = [
  { id: 1, video: "/videos/reels/reel1.mp4", poster: "/images/reels/reel1.jpg" },
  { id: 2, video: "/videos/reels/reel2.mp4", poster: "/images/reels/reel2.jpg" },
  { id: 3, video: "/videos/reels/reel3.mp4", poster: "/images/reels/reel3.jpg" },
  { id: 4, video: "/videos/reels/reel4.mp4", poster: "/images/reels/reel4.jpg" },
  { id: 5, video: "/videos/reels/reel5.mp4", poster: "/images/reels/reel5.jpg" },
  { id: 6, video: "/videos/reels/reel6.mp4", poster: "/images/reels/reel6.jpg" },
]

const LOOPED_REELS = [...REELS, ...REELS, ...REELS]

function ReelLogoWatermark() {
  return (
    <div className="absolute top-[10px] right-[10px] z-10 pointer-events-none">
      <div
        className="rounded-full overflow-hidden border-2 border-white shadow-md flex items-center justify-center"
        style={{ width: 34, height: 34, background: "rgba(255,255,255,0.95)" }}
      >
        <img
          src="/images/logo.png"
          alt="The Makhana Man"
          className="w-full h-full object-contain p-[3px]"
          draggable={false}
        />
      </div>
    </div>
  )
}

function ReelCard({ reel }: { reel: (typeof REELS)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <div className="reel-card relative flex-shrink-0 rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.poster}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      <ReelLogoWatermark />
    </div>
  )
}

export function SocialsReelSlider() {
  return (
    <section
      className="relative overflow-hidden pt-16 md:pt-20 pb-16 md:pb-20"
      style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
    >
      {/* ── Header ── */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-10 md:mb-14">
        <motion.div
          className="flex items-start gap-5 md:gap-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/logo.png"
            alt="The Makhana Man"
            className="w-20 md:w-28 object-contain flex-shrink-0"
          />

          <div className="flex flex-col justify-center pt-1">
            <h2 className="font-bold font-family-more-sugar text-[#1a1a1a] text-[20px] sm:text-[26px] md:text-[32px] leading-tight mb-1">
              On the GRAM Socials feed
            </h2>
            <p className="font-semibold font-family-more-sugar text-[#1a1a1a] text-[13px] sm:text-[15px] md:text-[17px]">
              Who is Your Makhna Man
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Infinite Reel Slider ── */}
      <div className="overflow-hidden w-full">
        <div className="reels-track flex">
          {LOOPED_REELS.map((reel, idx) => (
            <ReelCard key={`${reel.id}-${idx}`} reel={reel} />
          ))}
        </div>
      </div>

      <style>{`
        .reel-card {
          width: 196px;
          height: 348px;
          margin-right: 16px;
        }
        @media (min-width: 640px) {
          .reel-card { margin-right: 20px; }
        }
        @media (min-width: 768px) {
          .reel-card { width: 220px; height: 391px; margin-right: 24px; }
        }
        @media (max-width: 480px) {
          .reel-card { width: 130px; height: 231px; margin-right: 14px; }
        }

        @keyframes reels-scroll-lg {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-6 * (220px + 24px))); }
        }
        @keyframes reels-scroll-md {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-6 * (196px + 20px))); }
        }
        @keyframes reels-scroll-sm {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-6 * (130px + 14px))); }
        }

        .reels-track {
          animation: reels-scroll-md 18s linear infinite;
          will-change: transform;
          width: max-content;
        }
        .reels-track:hover { animation-play-state: paused; }
        @media (min-width: 768px) {
          .reels-track { animation-name: reels-scroll-lg; animation-duration: 20s; }
        }
        @media (max-width: 480px) {
          .reels-track { animation-name: reels-scroll-sm; animation-duration: 14s; }
        }
      `}</style>
    </section>
  )
}