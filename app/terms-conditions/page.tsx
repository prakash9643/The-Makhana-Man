// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import MakhanaStandard from "@/components/MakhanaStandard"
// export default function TermsConditions() {
//   return (
//     <>
//     <div className="bg-[#fff]">

//       {/* STEPS */}
//       <section className="py-16 px-16">
//       <h2 className="text-4xl font-bold mb-4 font-family-cosmic-sans">
//         Makhana Man – Terms & Conditions
//       </h2>
// 			<p className="mt-4 text-md mb-8">Welcome to Makhana Man. By accessing or using our website, products, or services, you agree to comply with and be bound by the following Terms and Conditions.</p>

//       <div className="relative max-w-5xl">
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					1. General
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>These Terms govern your use of our website and services.</li>
// 					<li>By using our platform, you confirm that you are at least 18 years old or accessing under parental supervision.</li>
// 					<li>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					2. Products & Services
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>Makhana Man offers makhana-based food products and related items.</li>
// 					<li>We strive to ensure all product descriptions, images, and prices are accurate, but errors may occur.</li>
// 					<li>We reserve the right to limit quantities or discontinue any product at any time.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					3. Pricing & Payments
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>All prices are listed in INR (₹) and are inclusive/exclusive of taxes as mentioned.</li>
// 					<li>Payments must be made through approved payment methods (UPI, cards, net banking, etc.).</li>
// 					<li>We reserve the right to cancel orders in case of payment failure or suspected fraud.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					4. Order Confirmation & Cancellation
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>Orders are confirmed only after successful payment.</li>
// 					<li>We reserve the right to cancel or refuse any order due to:
// 						<ul className="list-disc list-inside">
// 							<li>Product unavailability.</li>
// 							<li>Pricing errors.</li>
// 							<li>Suspicious activity</li>
// 						</ul>
// 					</li>
// 					<li>Customers can request cancellation within a limited time before dispatch.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					5. Shipping & Delivery
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>Delivery timelines are estimated and may vary depending on location.</li>
// 					<li>Makhana Man is not responsible for delays caused by courier partners or unforeseen circumstances.</li>
// 					<li>Customers must provide accurate shipping details; incorrect details may lead to delivery failure.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					6. Returns & Refunds
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>Returns are accepted only for:
// 						<ul className="list-disc list-inside">
// 							<li>Damaged or defective products.</li>
// 							<li>Incorrect items received.</li>	
// 						</ul>
// 					</li>
// 					<li>Customers must report issues within 24–48 hours of delivery with proof (images/videos).</li>
// 					<li>Refunds (if applicable) will be processed within a reasonable timeframe to the original payment method.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					7. Intellectual Property
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>All content on this website (logo, images, text, design) is the property of Makhana Man.</li>
// 					<li>Unauthorized use, reproduction, or distribution is strictly prohibited.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					8. User Conduct
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>Use the website for unlawful purposes.</li>
// 					<li>Attempt to hack, disrupt, or misuse the platform.</li>
// 					<li>Provide false or misleading information</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					9. Limitation of Liability
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>Makhana Man shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</li>
// 					<li>Product consumption is at the user’s discretion; please check ingredients for allergies.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					10. Privacy
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>Your personal information is handled as per our Privacy Policy.</li>
// 					<li>We do not sell or misuse customer data.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					11. Governing Law
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<li>These Terms shall be governed by the laws of India.</li>
// 					<li>Any disputes will be subject to the jurisdiction of local courts.</li>
// 				</ul>
// 				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 					12. Contact Us
// 				</h4>
// 				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 					<p>For any queries or concerns, you can contact us at:</p>
// 					<li>Email: <a href="mailto:support@makhanaman.com" className="text-red-600"><b>support@makhanaman.com</b></a></li>
// 					<li>Phone: +91-XXXXXXXXXX</li>
// 				</ul>
//       </div>
//     </section>
//     </div>
//         <MakhanaStandard/>
//     </>
//   );
// }


"use client";
import MakhanaStandard from "@/components/MakhanaStandard";

type SectionItem = { bold?: string; text: string; subItems?: string[] };
type Section = {
  number: string;
  title: string;
  intro?: string;
  items: SectionItem[];
};

const sections: Section[] = [
  {
    number: "01",
    title: "General",
    items: [
      { text: "These Terms govern your use of our website and services." },
      { text: "By using our platform, you confirm that you are at least 18 years old or accessing under parental supervision." },
      { text: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting." },
    ],
  },
  {
    number: "02",
    title: "Products & Services",
    items: [
      { text: "Makhana Man offers makhana-based food products and related items." },
      { text: "We strive to ensure all product descriptions, images, and prices are accurate, but errors may occur." },
      { text: "We reserve the right to limit quantities or discontinue any product at any time." },
    ],
  },
  {
    number: "03",
    title: "Pricing & Payments",
    items: [
      { text: "All prices are listed in INR (₹) and are inclusive/exclusive of taxes as mentioned." },
      { text: "Payments must be made through approved payment methods (UPI, cards, net banking, etc.)." },
      { text: "We reserve the right to cancel orders in case of payment failure or suspected fraud." },
    ],
  },
  {
    number: "04",
    title: "Order Confirmation & Cancellation",
    items: [
      { text: "Orders are confirmed only after successful payment." },
      {
        text: "We reserve the right to cancel or refuse any order due to:",
        subItems: ["Product unavailability.", "Pricing errors.", "Suspicious activity."],
      },
      { text: "Customers can request cancellation within a limited time before dispatch." },
    ],
  },
  {
    number: "05",
    title: "Shipping & Delivery",
    items: [
      { text: "Delivery timelines are estimated and may vary depending on location." },
      { text: "Makhana Man is not responsible for delays caused by courier partners or unforeseen circumstances." },
      { text: "Customers must provide accurate shipping details; incorrect details may lead to delivery failure." },
    ],
  },
  {
    number: "06",
    title: "Returns & Refunds",
    items: [
      {
        text: "Returns are accepted only for:",
        subItems: ["Damaged or defective products.", "Incorrect items received."],
      },
      { text: "Customers must report issues within 24–48 hours of delivery with proof (images/videos)." },
      { text: "Refunds (if applicable) will be processed within a reasonable timeframe to the original payment method." },
    ],
  },
  {
    number: "07",
    title: "Intellectual Property",
    items: [
      { text: "All content on this website (logo, images, text, design) is the property of Makhana Man." },
      { text: "Unauthorized use, reproduction, or distribution is strictly prohibited." },
    ],
  },
  {
    number: "08",
    title: "User Conduct",
    intro: "You must not:",
    items: [
      { text: "Use the website for unlawful purposes." },
      { text: "Attempt to hack, disrupt, or misuse the platform." },
      { text: "Provide false or misleading information." },
    ],
  },
  {
    number: "09",
    title: "Limitation of Liability",
    items: [
      { text: "Makhana Man shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services." },
      { text: "Product consumption is at the user's discretion; please check ingredients for allergies." },
    ],
  },
  {
    number: "10",
    title: "Privacy",
    items: [
      { text: "Your personal information is handled as per our Privacy Policy." },
      { text: "We do not sell or misuse customer data." },
    ],
  },
  {
    number: "11",
    title: "Governing Law",
    items: [
      { text: "These Terms shall be governed by the laws of India." },
      { text: "Any disputes will be subject to the jurisdiction of local courts." },
    ],
  },
];

export default function TermsConditions() {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: "#f9f3ea" }}>

        {/* ══════════════════════════════════════
            HERO BANNER
        ══════════════════════════════════════ */}
        <section className="pt-[148px] pb-12 px-4 relative overflow-hidden">
          {/* decorative dots */}
          <div className="absolute top-[160px] right-8 opacity-10 pointer-events-none select-none hidden lg:block">
            {[...Array(4)].map((_, row) => (
              <div key={row} className="flex gap-4 mb-4">
                {[...Array(6)].map((_, col) => (
                  <div key={col} className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1a5c3a" }} />
                ))}
              </div>
            ))}
          </div>

          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10">

              {/* Left — text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-[6px] mb-4 border border-[#e3dbd0]"
                     style={{ backgroundColor: "#fff" }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1a5c3a" }} />
                  <span className="font-family-cosmic-sans text-[11px] font-bold tracking-[0.18em] uppercase text-[#a07850]">
                    Legal · Makhana Man
                  </span>
                </div>

                <h1 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[42px] sm:text-[58px] leading-[1.05] mb-4">
                  Terms & Conditions
                </h1>

                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-[#d4c4a8]" />
                  <span className="font-family-cosmic-sans text-[12px] text-[#a07850]">
                    Makhana Man
                  </span>
                </div>

                <p className="font-family-cosmic-sans text-[14px] text-[#666] leading-[1.8] max-w-lg">
                  Welcome to Makhana Man. By accessing or using our website, products,
                  or services, you agree to comply with and be bound by the following
                  Terms and Conditions.
                </p>
              </div>

                {/* Right — mascot card */}
           <div className="hidden lg:flex flex-shrink-0">
                  <img
                    src="/images/newui_comics/makhnapng.png"
                    alt="Makhana Man"
                    className="w-full object-contain"
                    style={{ maxHeight: 165 }}
                  />
              </div>

            </div>
          </div>
        </section>

        {/* divider */}
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="border-t border-[#e3dbd0]" />
        </div>

        {/* ══════════════════════════════════════
            SECTIONS GRID
        ══════════════════════════════════════ */}
        <section className="py-12 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {sections.map((s) => (
                <div
                  key={s.number}
                  className="rounded-2xl border border-[#e3dbd0] bg-white px-6 py-6
                             hover:border-[#c8b89a] hover:shadow-lg transition-all duration-200"
                >
                  {/* header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-family-cosmic-sans text-[11px] font-bold text-white
                                 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#1a5c3a" }}
                    >
                      {s.number}
                    </span>
                    <h2 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[20px] leading-none">
                      {s.title}
                    </h2>
                  </div>

                  {s.intro && (
                    <p className="font-family-cosmic-sans text-[12px] text-[#888] mb-3 leading-relaxed">
                      {s.intro}
                    </p>
                  )}

                  <ul className="flex flex-col gap-[10px]">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex flex-col gap-[6px]">
                        <div className="flex items-start gap-[10px]">
                          <span
                            className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#97C459" }}
                          />
                          <span className="font-family-cosmic-sans text-[13px] text-[#444] leading-relaxed">
                            {item.bold && (
                              <span className="font-bold text-[#1A1A2E]">{item.bold}</span>
                            )}
                            {item.text}
                          </span>
                        </div>
                        {/* sub-items */}
                        {item.subItems && (
                          <ul className="flex flex-col gap-[6px] pl-6 mt-1">
                            {item.subItems.map((sub, j) => (
                              <li key={j} className="flex items-start gap-[8px]">
                                <span
                                  className="mt-[7px] w-[4px] h-[4px] rounded-full flex-shrink-0"
                                  style={{ backgroundColor: "#a07850" }}
                                />
                                <span className="font-family-cosmic-sans text-[12px] text-[#666] leading-relaxed">
                                  {sub}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* ── Contact Us — full width card ── */}
              <div
                className="md:col-span-2 rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: "#97C459" }}
              >
                <div className="flex flex-col sm:flex-row items-stretch" style={{ backgroundColor: "#fff" }}>
                  {/* green left strip */}
                  <div
                    className="flex flex-col items-center justify-center px-8 py-8 gap-3 sm:w-56 flex-shrink-0"
                    style={{ backgroundColor: "#1a5c3a" }}
                  >
                    <img
                      src="https://the-makhana-man.vercel.app/images/logo.png"
                      alt="TMM Logo"
                      className="w-14 h-14 object-contain rounded-full bg-white p-1"
                    />
                    <p className="font-family-more-sugar font-bold text-white text-[20px] text-center leading-snug">
                      Contact Us
                    </p>
                    <span
                      className="font-family-cosmic-sans text-[10px] font-bold tracking-[0.15em] uppercase
                                 px-3 py-[4px] rounded-full"
                      style={{ backgroundColor: "#97C459", color: "#1a5c3a" }}
                    >
                      12
                    </span>
                  </div>

                  {/* right content */}
                  <div className="flex flex-col justify-center px-8 py-8 gap-5 flex-1">
                    <p className="font-family-cosmic-sans text-[13px] text-[#666] leading-relaxed">
                      For any queries or concerns, you can contact us at:
                    </p>
                    <div className="flex flex-col gap-4">
                      <a href="mailto:support@makhanaman.com" className="inline-flex items-center gap-3">
                        <span
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#fdf2ef" }}
                        >
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <rect x="2" y="4" width="16" height="12" rx="2" stroke="#c14b33" strokeWidth="1.5" />
                            <path d="M2 7l8 5 8-5" stroke="#c14b33" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span className="font-family-cosmic-sans text-[13px] font-bold" style={{ color: "#c14b33" }}>
                          support@makhanaman.com
                        </span>
                      </a>
                      <div className="inline-flex items-center gap-3">
                        <span
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#eaf3de" }}
                        >
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <path d="M3 4a1 1 0 011-1h3l1.5 4-2 1a11 11 0 005.5 5.5l1-2 4 1.5v3a1 1 0 01-1 1A15 15 0 013 4z"
                                  stroke="#1a5c3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="font-family-cosmic-sans text-[13px] font-bold text-[#1A1A2E]">
                          +91-77397 56165
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BOTTOM TRUST STRIP
        ══════════════════════════════════════ */}
        <section className="pb-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div
              className="rounded-2xl border border-[#e3dbd0] px-6 py-5
                         flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://the-makhana-man.vercel.app/images/logo.png"
                  alt="TMM"
                  className="w-8 h-8 object-contain rounded-full border border-[#e3dbd0] p-[2px]"
                />
                <p className="font-family-more-sugar font-bold text-[#1A1A2E] text-[16px]">
                  The Makhana Man
                </p>
              </div>
              <p className="font-family-cosmic-sans text-[12px] text-[#888] text-center">
                These terms exist to keep things fair for everyone. 🤝
              </p>
              <span
                className="font-family-cosmic-sans text-[11px] font-bold px-4 py-2 rounded-full"
                style={{ backgroundColor: "#eaf3de", color: "#1a5c3a" }}
              >
                🇮🇳 Governed by Indian Law
              </span>
            </div>
          </div>
        </section>

      </div>

      <MakhanaStandard />
    </>
  );
}