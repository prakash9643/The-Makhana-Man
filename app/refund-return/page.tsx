// "use client";
// import MakhanaStandard from "@/components/MakhanaStandard"
// export default function ReturnRefund() {
// return (
// <>
// <div className="bg-[#fff]">

// 	{/* STEPS */}
// 	<section className="py-16 px-16">
// 	<h2 className="text-4xl font-bold mb-4 font-family-cosmic-sans">
// 		Refund & Return Policy – Makhana Man
// 	</h2>
// 				<p className="mt-4 text-md mb-8">Effective Date: [03/31/2026]</p>
// 				<p className="mt-4 text-md mb-8">At Makhana Man, customer satisfaction is our priority.</p>

// 	<div className="relative max-w-5xl">
// 						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 								1. Eligibility for Returns
// 						</h4>
// 						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 								<p>We accept returns only in the following cases::</p>
// 								<li>Damaged or defective product</li>
// 								<li>Wrong product delivered</li>
// 						</ul>
// 						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 								2. Return Request Process
// 						</h4>
// 						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 								<li>Raise a request within <b>24–48 hours</b> of delivery.</li>
// 								<li>Share proof (images/videos) via email or WhatsApp.</li>
// 								<li>Our team will verify and approve/reject the request.</li>
// 						</ul>
// 						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 								3. Non-Returnable Items
// 						</h4>
// 						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
								
// 								<li>Opened or used food products.</li>
// 								<li>Products without original packaging.</li>
// 								<li>Items reported after 48 hours.</li>
// 						</ul>
// 						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 								4. Refund Process
// 						</h4>
// 						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 								<li>Once approved, refunds will be processed within <b>5–7 business days</b>.</li>
// 								<li>Refund will be credited to the original payment method.</li>
// 								<li>In COD cases, refund may be processed via bank transfer/UPI.</li>
// 						</ul>
// 						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 								5. Replacement Policy
// 						</h4>
// 						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 								<li>If applicable, we may offer a replacement instead of a refund.</li>
// 								<li>Replacement depends on product availability</li>
// 						</ul>
// 						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 								6. Cancellation Policy
// 						</h4>
// 						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 								<li>Orders can be cancelled <b>before dispatch only</b></li>
// 								<li>Once shipped, cancellation is not possible.</li>
// 						</ul>
// 						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
// 								7. Contact for Returns
// 						</h4>
// 						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
// 								<p>For any queries or concerns, you can contact us at:</p>
// 								<li>Email: <a href="mailto:support@makhanaman.com" className="text-red-600"><b>support@makhanaman.com</b></a></li>
// 								<li>Phone: +91-XXXXXXXXXX</li>
// 						</ul>
// 	</div>
// </section>
// </div>
// 		<MakhanaStandard/>
// </>
// );
// }

"use client";
import MakhanaStandard from "@/components/MakhanaStandard";

type SectionItem = { bold?: string; text: string; subItems?: string[] };
type Section = {
  number: string;
  title: string;
  intro?: string;
  footer?: string;
  items: SectionItem[];
};

const sections: Section[] = [
  {
    number: "01",
    title: "Eligibility for Returns",
    intro: "We accept returns only in the following cases:",
    items: [
      { text: "Damaged or defective product." },
      { text: "Wrong product delivered." },
    ],
  },
  {
    number: "02",
    title: "Return Request Process",
    items: [
      { bold: "Step 1:", text: " Raise a request within 24–48 hours of delivery." },
      { bold: "Step 2:", text: " Share proof (images/videos) via email or WhatsApp." },
      { bold: "Step 3:", text: " Our team will verify and approve/reject the request." },
    ],
  },
  {
    number: "03",
    title: "Non-Returnable Items",
    items: [
      { text: "Opened or used food products." },
      { text: "Products without original packaging." },
      { text: "Items reported after 48 hours of delivery." },
    ],
  },
  {
    number: "04",
    title: "Refund Process",
    items: [
      { text: "Once approved, refunds will be processed within 5–7 business days." },
      { text: "Refund will be credited to the original payment method." },
      { text: "In COD cases, refund may be processed via bank transfer or UPI." },
    ],
  },
  {
    number: "05",
    title: "Replacement Policy",
    items: [
      { text: "If applicable, we may offer a replacement instead of a refund." },
      { text: "Replacement depends on product availability at the time of request." },
    ],
  },
  {
    number: "06",
    title: "Cancellation Policy",
    items: [
      { bold: "Before dispatch:", text: " Orders can be cancelled anytime before they are shipped." },
      { bold: "After dispatch:", text: " Once shipped, cancellation is not possible." },
    ],
  },
];

export default function ReturnRefund() {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: "#f9f3ea" }}>

        {/* ══════════════════════════════════════
            HERO BANNER
        ══════════════════════════════════════ */}
        <section
          className="pt-[148px] pb-12 px-4 relative overflow-hidden"
          style={{ backgroundColor: "#f9f3ea" }}
        >
          {/* decorative dots top-right */}
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
                {/* eyebrow */}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-[6px] mb-4 border border-[#e3dbd0]"
                  style={{ backgroundColor: "#fff" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1a5c3a" }} />
                  <span className="font-family-cosmic-sans text-[11px] font-bold tracking-[0.18em] uppercase text-[#a07850]">
                    Legal · Makhana Man
                  </span>
                </div>

                <h1 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[42px] sm:text-[58px] leading-[1.05] mb-4">
                  Refund & Return Policy
                </h1>

                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-[#d4c4a8]" />
                  <span className="font-family-cosmic-sans text-[12px] text-[#a07850]">
                    Effective Date: 03/31/2026
                  </span>
                </div>

                <p className="font-family-cosmic-sans text-[14px] text-[#666] leading-[1.8] max-w-lg">
                  At Makhana Man, customer satisfaction is our priority. Here's everything
                  you need to know about returns, refunds, and cancellations.
                </p>
              </div>

              {/* Right — mascot */}
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

        {/* ══════════════════════════════════════
            DIVIDER
        ══════════════════════════════════════ */}
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

                  {/* intro */}
                  {s.intro && (
                    <p className="font-family-cosmic-sans text-[12px] text-[#888] mb-3 leading-relaxed">
                      {s.intro}
                    </p>
                  )}

                  {/* items */}
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

                  {/* footer note */}
                  {s.footer && (
                    <p className="font-family-cosmic-sans text-[12px] text-[#a07850] mt-3 leading-relaxed">
                      {s.footer}
                    </p>
                  )}
                </div>
              ))}

              {/* ── Contact Us — full width card ── */}
              <div
                className="md:col-span-2 rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: "#97C459" }}
              >
                <div
                  className="flex flex-col sm:flex-row items-stretch"
                  style={{ backgroundColor: "#fff" }}
                >
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
                      Contact for Returns
                    </p>
                    <span
                      className="font-family-cosmic-sans text-[10px] font-bold tracking-[0.15em] uppercase
                                 px-3 py-[4px] rounded-full"
                      style={{ backgroundColor: "#97C459", color: "#1a5c3a" }}
                    >
                      07
                    </span>
                  </div>

                  {/* right content */}
                  <div className="flex flex-col justify-center px-8 py-8 gap-5 flex-1">
                    <p className="font-family-cosmic-sans text-[13px] text-[#666] leading-relaxed">
                      For any queries or concerns related to returns and refunds, reach out to us at:
                    </p>
                    <div className="flex flex-col gap-4">
                      <a
                        href="mailto:support@makhanaman.com"
                        className="inline-flex items-center gap-3 group"
                      >
                        <span
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#fdf2ef" }}
                        >
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <rect x="2" y="4" width="16" height="12" rx="2" stroke="#c14b33" strokeWidth="1.5" />
                            <path d="M2 7l8 5 8-5" stroke="#c14b33" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span
                          className="font-family-cosmic-sans text-[13px] font-bold"
                          style={{ color: "#c14b33" }}
                        >
                          support@makhanaman.com
                        </span>
                      </a>
                      <div className="inline-flex items-center gap-3">
                        <span
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#eaf3de" }}
                        >
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M3 4a1 1 0 011-1h3l1.5 4-2 1a11 11 0 005.5 5.5l1-2 4 1.5v3a1 1 0 01-1 1A15 15 0 013 4z"
                              stroke="#1a5c3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-family-cosmic-sans text-[13px] font-bold text-[#1A1A2E]">
                          +91-XXXXXXXXXX
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
                Your satisfaction matters as much as our makhana quality. 🌿
              </p>
              <span
                className="font-family-cosmic-sans text-[11px] font-bold px-4 py-2 rounded-full"
                style={{ backgroundColor: "#eaf3de", color: "#1a5c3a" }}
              >
                ✅ Hassle-Free Returns
              </span>
            </div>
          </div>
        </section>

      </div>

      <MakhanaStandard />
    </>
  );
}