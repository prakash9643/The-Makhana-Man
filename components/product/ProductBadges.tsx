"use client"   // ← Add this as the FIRST line

// components/product/ProductBadges.tsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const deliveryBadges = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/2830/2830312.png",
        title: "Free Delivery",
        subtitle: "On orders above ₹499",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3064/3064155.png",
        title: "Secure Payment",
        subtitle: "100% safe & secure",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/709/709790.png",
        title: "Easy Returns",
        subtitle: "Hassle-free returns",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
        title: "Proudly Made in India",
        subtitle: "Supporting local farmers",
        round: true,
    },
]

const aboutHighlights = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/2317/2317752.png",
        title: "Light & Crunchy",
        subtitle: "Perfectly roasted",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3418/3418886.png",
        title: "Wholesome Snack",
        subtitle: "For all age groups",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2907/2907335.png",
        title: "Naturally Delicious",
        subtitle: "Simple & pure",
    },
]

const nutritionItems = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
        label: "Calories",
        value: "347 kcal",
        border: "#4caf50",
        bg: "#f1faf1",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3081/3081648.png",
        label: "Protein",
        value: "9.7 g",
        border: "#ff9800",
        bg: "#fff8f0",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2674/2674505.png",
        label: "Carbohydrate",
        value: "76.9 g",
        border: "#fbc02d",
        bg: "#fffdf0",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2907/2907335.png",
        label: "Fiber",
        value: "7.6 g",
        border: "#66bb6a",
        bg: "#f1faf1",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
        label: "Fat",
        value: "0.1 g",
        border: "#ef5350",
        bg: "#fff5f5",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2784/2784579.png",
        label: "Calcium",
        value: "60 mg",
        border: "#42a5f5",
        bg: "#f0f7ff",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3004/3004458.png",
        label: "Iron",
        value: "1.4 mg",
        border: "#e53935",
        bg: "#fff5f5",
    },
]

const featureBadges = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
        title: "100% Natural",
        subtitle: "No artificial flavors, colors or preservatives.",
        bg: "#eaf4e6",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3081/3081648.png",
        title: "High Protein",
        subtitle: "Great source of plant based protein.",
        bg: "#fef7ed",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/785/785116.png",
        title: "Low Calories",
        subtitle: "A guilt-free snack for a healthy lifestyle.",
        bg: "#fff4ef",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3004/3004458.png",
        title: "Heart Healthy",
        subtitle: "Helps in maintaining a healthy heart.",
        bg: "#fef0f0",
    },
]

const whyChooseItems = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/1091/1091543.png",
        title: "Direct from Farmers",
        subtitle: "Supporting local farmers",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
        title: "No Preservatives",
        subtitle: "Only pure & natural",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
        title: "Premium Quality",
        subtitle: "Sorted & graded makhana",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
        title: "Hygienically Packed",
        subtitle: "Ensuring your safety",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/681/681494.png",
        title: "Trusted by Thousands",
        subtitle: "Happy customers",
    },
]

const reviews = [
    {
        text: "Very fresh and crunchy makhana. Perfect for evening snacks!",
        name: "Neha Sharma",
        avatar: "https://i.pravatar.cc/68?img=47",
        rating: 5,
    },
    {
        text: "Great quality and packaging. My family loves it!",
        name: "Amit Verma",
        avatar: "https://i.pravatar.cc/68?img=12",
        rating: 5,
    },
    {
        text: "Healthy snack option, highly recommended! 😊",
        name: "Priya Singh",
        avatar: "https://i.pravatar.cc/68?img=49",
        rating: 5,
    },
    {
        text: "Ordered twice already. The makhana stays crunchy for a long time!",
        name: "Rahul Gupta",
        avatar: "https://i.pravatar.cc/68?img=33",
        rating: 4,
    },
    {
        text: "Best makhana I've had. No artificial taste, purely natural!",
        name: "Sunita Rao",
        avatar: "https://i.pravatar.cc/68?img=25",
        rating: 5,
    },
    {
        text: "My kids love it as a school snack. Light, healthy and tasty!",
        name: "Kavita Joshi",
        avatar: "https://i.pravatar.cc/68?img=44",
        rating: 5,
    },
]

const isOddTotal = whyChooseItems.length % 2 !== 0

function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((s) => (
                <span
                    key={s}
                    className="text-[17px] leading-none"
                    style={{ color: s <= rating ? "#f5a623" : "#ddd" }}
                >
                    ★
                </span>
            ))}
        </div>
    )
}

function ProductReviews() {
    return (
        <div className="w-full">
            <h2 className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[20px] sm:text-[22px] text-center mb-7">
                What Our Customers Say
            </h2>

            {/* Swiper wrapper — negative mx pulls cards flush, px keeps nav arrows visible */}
            <div className="relative px-10">

                {/* Prev arrow */}
                <button
                    className="reviews-prev absolute left-0 top-1/2 -translate-y-1/2 z-10
                               w-9 h-9 flex items-center justify-center
                               rounded-full bg-white border border-[#e3dbd0]
                               hover:bg-[#f5f2ed] hover:border-[#b0a89a]
                               transition-colors duration-150 outline-none"
                    aria-label="Previous review"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#1A1A2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Next arrow */}
                <button
                    className="reviews-next absolute right-0 top-1/2 -translate-y-1/2 z-10
                               w-9 h-9 flex items-center justify-center
                               rounded-full bg-white border border-[#e3dbd0]
                               hover:bg-[#f5f2ed] hover:border-[#b0a89a]
                               transition-colors duration-150 outline-none"
                    aria-label="Next review"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#1A1A2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={14}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={600}
                    navigation={{
                        prevEl: ".reviews-prev",
                        nextEl: ".reviews-next",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="!overflow-hidden"
                >
                    {/* ── Rating summary card ── */}
                    <SwiperSlide className="!h-auto">
                        <div className="h-full flex flex-col justify-center gap-2 shadow-md
                                        border border-[#e3dbd0] rounded-2xl px-5 py-6">
                            <p className="font-bold font-family-cosmic-sans text-[42px] leading-none"
                                style={{ color: "#2d6a2d" }}>
                                4.8
                            </p>
                            <Stars rating={5} />
                            <p className="font-family-cosmic-sans text-[#888] text-[12px] mt-1">
                                Based on 125 reviews
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* ── Review cards ── */}
                    {reviews.map((r, i) => (
                        <SwiperSlide key={i} className="!h-auto">
                            <div className="h-full flex flex-col gap-3
                                            border border-[#e3dbd0] rounded-2xl px-5 py-5 shadow-md">
                                <Stars rating={r.rating} />
                                <p className="font-family-cosmic-sans text-[#1A1A2E]
                                              text-[13px] sm:text-[13.5px] leading-snug flex-1">
                                    "{r.text}"
                                </p>
                                <div className="flex items-center gap-[10px] mt-auto">
                                    <img
                                        src={r.avatar}
                                        alt={r.name}
                                        className="w-8 h-8 rounded-full border border-[#e3dbd0] object-cover flex-shrink-0"
                                    />
                                    <span className="font-bold font-family-cosmic-sans
                                                     text-[#1A1A2E] text-[13px] leading-tight">
                                        {r.name}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export function ProductBadges() {
    return (
        <div className="flex flex-col gap-10 mt-10">

            {/* ── Strip 1: Delivery ── */}
            <div className="w-full rounded-2xl border border-[#e3dbd0] bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {deliveryBadges.map((b, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center justify-center text-center md:flex-row md:items-center md:justify-start md:text-left gap-4 px-6 py-6 ${i !== deliveryBadges.length - 1
                                ? "border-b md:border-b-0 md:border-r border-[#e3dbd0]"
                                : ""
                                }`}
                        >
                            <img
                                src={b.img}
                                alt={b.title}
                                className={`w-10 h-10 object-contain flex-shrink-0 ${b.round ? "rounded-full" : ""}`}
                            />
                            <div>
                                <p className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[14px] sm:text-[15px] leading-tight">
                                    {b.title}
                                </p>
                                <p className="font-family-cosmic-sans text-[#888] text-[12px] sm:text-[13px] mt-[3px]">
                                    {b.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Strip 2: Features ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {featureBadges.map((b, i) => (
                    <div
                        key={i}
                        className="flex flex-col shadow-md items-center justify-center text-center md:flex-row md:items-start md:justify-start md:text-left gap-4 rounded-2xl px-5 py-6"
                        style={{ backgroundColor: b.bg }}
                    >
                        <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-sm">
                            <img src={b.img} alt={b.title} className="w-9 h-9 object-contain" />
                        </div>
                        <div className="md:pt-1">
                            <p className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[14px] sm:text-[15px] leading-tight mb-[6px]">
                                {b.title}
                            </p>
                            <p className="font-family-cosmic-sans text-[#888] text-[11px] sm:text-[12px] leading-snug">
                                {b.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Strip 3: About + Nutrition ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                {/* Left Card: About */}
                <div
                    className="md:col-span-4 rounded-2xl px-7 py-8 flex flex-col justify-between gap-6 shadow-md"
                    style={{ backgroundColor: "#f8f6f2" }}
                >
                    <div className="flex flex-col gap-2 ">
                        <h3 className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[17px] sm:text-[19px] leading-snug">
                            About Our Raw Makhana
                        </h3>
                        <p className="font-family-cosmic-sans text-[#888] text-[13px] sm:text-[14px] leading-relaxed">
                            Carefully handpicked from the finest farms of Bihar, our makhana
                            is handpicked to perfection to retain all the natural nutrition
                            and crunch.
                        </p>
                    </div>
                    <div className="flex flex-row gap-5 sm:gap-6">
                        {aboutHighlights.map((h, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-[6px] flex-1">
                                <div className="w-11 h-11 flex items-center justify-center">
                                    <img src={h.img} alt={h.title} className="w-[24px] h-[24px] object-contain" />
                                </div>
                                <p className="font-bold font-family-cosmic-sans text-[#3b6e8c] text-[12px] sm:text-[13px] leading-tight">
                                    {h.title}
                                </p>
                                <p className="font-family-cosmic-sans text-[#aaa] text-[11px] leading-tight">
                                    {h.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card: Nutrition */}
                <div
                    className="md:col-span-8 rounded-2xl px-7 py-8 flex flex-col items-center justify-center gap-6 shadow-md"
                    style={{ backgroundColor: "#f8f6f2" }}
                >
                    <h3 className="font-bold font-family-cosmic-sans text-[#3b8c5a] text-[15px] sm:text-[17px] text-center tracking-wide w-full">
                        Nutrition Information (Per 100g)
                    </h3>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 w-full sm:grid sm:grid-cols-7 sm:justify-items-center">
                        {nutritionItems.map((n, i) => (
                            <div key={i} className="flex flex-col items-center gap-[6px] text-center">
                                <div
                                    className="w-[60px] h-[60px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ border: `2.5px solid ${n.border}`, backgroundColor: n.bg }}
                                >
                                    <img src={n.img} alt={n.label} className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] object-contain" />
                                </div>
                                <p className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[11px] sm:text-[12px] leading-tight">
                                    {n.label}
                                </p>
                                <p className="font-family-cosmic-sans text-[#777] text-[11px] sm:text-[12px] -mt-[2px]">
                                    {n.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ── Why Choose ── */}
            <div className="w-full ">
                <h2 className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[20px] sm:text-[22px] text-center mb-7">
                    Why Choose The Makhana Man?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5">
                    {whyChooseItems.map((item, i) => {
                        const isLastOdd = isOddTotal && i === whyChooseItems.length - 1
                        return (
                            <div
                                key={i}
                                className={[
                                    "flex flex-col items-center text-center px-5 py-2 gap-3",
                                    isLastOdd ? "col-span-2 md:col-span-1" : "",
                                    i !== whyChooseItems.length - 1
                                        ? "border-b md:border-b-0 md:border-r border-[#e0e0e0]"
                                        : "",
                                ].join(" ")}
                            >
                                <img src={item.img} alt={item.title} className="w-12 h-12 object-contain" />
                                <p className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[13px] sm:text-[14px] leading-tight mb-0">
                                    {item.title}
                                </p>
                                <p className="font-family-cosmic-sans text-[#888] text-[11px] sm:text-[12px] -mt-2 leading-snug">
                                    {item.subtitle}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* ── Reviews (bottom) ── */}
            <ProductReviews />

        </div>
    )
}