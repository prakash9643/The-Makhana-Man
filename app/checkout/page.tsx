// "use client";

// import { useEffect, useState } from "react";
// import { getCart } from "@/lib/cart";

// export default function CheckoutPage() {
//   const [cart, setCartState] = useState<any[]>([]);
//   const [form, setForm] = useState<any>({});

//   useEffect(() => {
//     setCartState(getCart());
//   }, []);

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   const handleOrder = async () => {
//     const res = await fetch("/api/create-order", {
//       method: "POST",
//       body: JSON.stringify({ form, cart }),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Order placed!");
//       localStorage.removeItem("cart");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fafafa] py-10 px-4">
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

//         {/* LEFT SECTION */}
//         <div className="lg:col-span-2 space-y-8">

//           {/* CONTACT */}
//           <div className="bg-white p-6 rounded-xl border">
//             <h2 className="text-lg font-semibold mb-4">Contact information</h2>
//             <input name="email" placeholder="Email address" onChange={handleChange} className="input" />
//             <p className="text-sm text-gray-500 mt-2">You are checking out as a guest.</p>
//           </div>

//           {/* SHIPPING */}
//           <div className="bg-white p-6 rounded-xl border">
//             <h2 className="text-lg font-semibold mb-4">Shipping address</h2>

//             <input placeholder="Country / Region" defaultValue="India" className="input mb-3" />

//             <div className="grid grid-cols-2 gap-3">
//               <input name="firstName" placeholder="First name" onChange={handleChange} className="input" />
//               <input name="lastName" placeholder="Last name" onChange={handleChange} className="input" />
//             </div>

//             <input name="address" placeholder="Address" onChange={handleChange} className="input mt-3" />

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <input name="city" placeholder="City" onChange={handleChange} className="input" />
//               <input name="state" placeholder="State" onChange={handleChange} className="input" />
//             </div>

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <input name="zip" placeholder="PIN Code" onChange={handleChange} className="input" />
//               <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
//             </div>
//           </div>

//           {/* SHIPPING METHOD */}
//           <div className="bg-white p-6 rounded-xl border">
//             <h2 className="text-lg font-semibold mb-4">Shipping method</h2>
//             <div className="border rounded-lg p-4 flex justify-between items-center">
//               <span>Free Shipping</span>
//               <span className="font-medium">FREE</span>
//             </div>
//           </div>

//           {/* PAYMENT */}
//           <div className="bg-white p-6 rounded-xl border">
//             <h2 className="text-lg font-semibold mb-4">Payment</h2>

//             <div className="border border-red-300 bg-red-50 text-red-600 p-4 rounded-lg text-sm">
//               No payment method available. Integrate Razorpay / COD.
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SUMMARY */}
//         <div className="bg-white p-6 rounded-xl border h-fit sticky top-10">
//           <h2 className="text-lg font-semibold mb-4">Order summary</h2>

//           <div className="space-y-4">
//             {cart.map((item, i) => (
//               <div key={i} className="flex justify-between items-center">
//                 <div className="flex gap-3 items-center">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-12 h-12 object-cover rounded border"
//                     />
//                   <div>
//                     <p className="text-sm font-medium">{item.name}</p>
//                     <p className="text-xs text-gray-500">Qty: {item.qty}</p>
//                   </div>
//                 </div>
//                 <span className="font-medium">₹{item.price * item.qty}</span>
//               </div>
//             ))}
//           </div>

//           <hr className="my-4" />

//           <div className="flex justify-between text-sm mb-2">
//             <span>Subtotal</span>
//             <span>₹{total}</span>
//           </div>

//           <div className="flex justify-between text-sm mb-2">
//             <span>Shipping</span>
//             <span>FREE</span>
//           </div>

//           <div className="flex justify-between font-semibold text-lg mt-3">
//             <span>Total</span>
//             <span>₹{total}</span>
//           </div>

//           <button
//             onClick={handleOrder}
//             className="mt-6 w-full bg-black text-white py-3 rounded-lg"
//           >
//             Place Order
//           </button>
//         </div>

//       </div>

//       <style jsx>{`
//         .input {
//           border: 1px solid #e5e7eb;
//           padding: 12px;
//           border-radius: 8px;
//           width: 100%;
//           outline: none;
//         }

//         .input:focus {
//           border-color: black;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function CheckoutPage() {
  const [cart, setCartState] = useState<any[]>([]);
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    setCartState(getCart());
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleOrder = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      body: JSON.stringify({ form, cart }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Order placed!");
      localStorage.removeItem("cart");
    }
  };

  // ── shared input style — replaces <style jsx> (which caused SyntaxError) ──
  const inputStyle: React.CSSProperties = {
    border: "1.5px solid #e3dbd0",
    padding: "11px 14px",
    borderRadius: 10,
    width: "100%",
    outline: "none",
    fontSize: 13,
    color: "#1a1a2e",
    background: "#fdfaf6",
    fontFamily: "inherit",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.style.borderColor = "#1a5c3a");
  const onBlur  = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.style.borderColor = "#e3dbd0");

  return (
    <div className="pt-[148px] px-4 py-12" style={{ backgroundColor: "#f9f3ea" }}>
      <div className="max-w-screen-xl mx-auto">

        {/* ── Page heading ─────────────────────────────────── */}
        <div className="text-center mb-10">
          <p className="font-family-cosmic-sans text-[11px] tracking-[0.2em] uppercase text-[#a07850] mb-1">
            Almost there
          </p>
          <h1 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[34px] sm:text-[42px] leading-tight">
            Checkout
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-px w-12 bg-[#d4c4a8]" />
            <p className="font-family-cosmic-sans text-[12px] text-[#a07850]">
              Secure · Fast · Proudly Indian
            </p>
            <span className="h-px w-12 bg-[#d4c4a8]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ════════════════════════════════
              LEFT — forms
          ════════════════════════════════ */}
          <div className="lg:col-span-2 space-y-6">

            {/* CONTACT */}
            <div className="rounded-2xl border border-[#e3dbd0] bg-white px-6 py-6">
              <SectionLabel step="01" title="Contact Information" />
              <input
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <p className="font-family-cosmic-sans text-[11px] text-[#a07850] mt-2">
                You are checking out as a guest.
              </p>
            </div>

            {/* SHIPPING ADDRESS */}
            <div className="rounded-2xl border border-[#e3dbd0] bg-white px-6 py-6">
              <SectionLabel step="02" title="Shipping Address" />

              <input
                placeholder="Country / Region"
                defaultValue="India"
                style={{ ...inputStyle, marginBottom: 12 }}
                onFocus={onFocus}
                onBlur={onBlur}
              />

              <div className="grid grid-cols-2 gap-3">
                <input name="firstName" placeholder="First name" onChange={handleChange} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <input name="lastName"  placeholder="Last name"  onChange={handleChange} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <input
                name="address" placeholder="Address" onChange={handleChange}
                style={{ ...inputStyle, marginTop: 12 }}
                onFocus={onFocus} onBlur={onBlur}
              />

              <div className="grid grid-cols-2 gap-3 mt-3">
                <input name="city"  placeholder="City"  onChange={handleChange} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <input name="state" placeholder="State" onChange={handleChange} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <input name="zip"   placeholder="PIN Code" onChange={handleChange} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <input name="phone" placeholder="Phone"    onChange={handleChange} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>

            {/* SHIPPING METHOD */}
            <div className="rounded-2xl border border-[#e3dbd0] bg-white px-6 py-6">
              <SectionLabel step="03" title="Shipping Method" />
              <div className="flex items-center justify-between rounded-xl border border-[#97C459] bg-[#eaf3de] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-[#1a5c3a] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#1a5c3a]" />
                  </span>
                  <span className="font-family-cosmic-sans text-[13px] font-bold text-[#1A1A2E]">
                    Free Shipping
                  </span>
                </div>
                <span className="font-family-cosmic-sans text-[13px] font-bold text-[#1a5c3a]">FREE</span>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="rounded-2xl border border-[#e3dbd0] bg-white px-6 py-6">
              <SectionLabel step="04" title="Payment" />
              <div className="flex items-start gap-3 rounded-xl border border-[#f0c4ba] bg-[#fdf2ef] px-4 py-4">
                {/* camelCase SVG props — fixes "fill-rule"/"clip-rule" DOM errors */}
                <svg className="mt-[2px] flex-shrink-0" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#c14b33" strokeWidth="1.5" />
                  <path d="M10 6v5" stroke="#c14b33" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="14" r="1" fill="#c14b33" />
                </svg>
                <p className="font-family-cosmic-sans text-[12px] text-[#c14b33] font-bold leading-relaxed">
                  No payment method available. Integrate Razorpay / COD.
                </p>
              </div>
            </div>

          </div>

          {/* ════════════════════════════════
              RIGHT — order summary
          ════════════════════════════════ */}
          <div className="rounded-2xl border border-[#e3dbd0] bg-white px-6 py-6 h-fit sticky top-10">

            {/* Header */}
            <div className="flex items-center gap-2 mb-5">
              <img
                src="https://the-makhana-man.vercel.app/images/logo.png"
                alt="TMM"
                className="w-8 h-8 rounded-full border border-[#e3dbd0] object-contain p-[2px]"
              />
              <h2 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[20px] leading-none">
                Order Summary
              </h2>
            </div>

            {/* Cart items */}
            <div className="space-y-4">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center gap-3">
                  <div className="flex gap-3 items-center">
                    <div
                      className="rounded-xl overflow-hidden border border-[#e3dbd0] flex-shrink-0"
                      style={{ backgroundColor: "#f0e8d8" }}
                    >
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <p className="font-family-cosmic-sans text-[12px] font-bold text-[#1A1A2E] leading-snug">
                        {item.name}
                      </p>
                      <p className="font-family-cosmic-sans text-[11px] text-[#a07850] mt-[2px]">
                        Qty: {item.qty}
                      </p>
                    </div>
                  </div>
                  <span className="font-bold font-family-more-sugar text-[#c14b33] text-[16px] whitespace-nowrap">
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-5 border-t border-[#e8dece]" />

            <div className="flex justify-between items-center mb-2">
              <span className="font-family-cosmic-sans text-[12px] text-[#888]">Subtotal</span>
              <span className="font-family-cosmic-sans text-[12px] font-bold text-[#1A1A2E]">₹{total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-family-cosmic-sans text-[12px] text-[#888]">Shipping</span>
              <span className="font-family-cosmic-sans text-[12px] font-bold text-[#1a5c3a]">FREE</span>
            </div>

            <div className="my-4 border-t border-[#e8dece]" />

            <div className="flex justify-between items-center">
              <span className="font-bold font-family-more-sugar text-[#1A1A2E] text-[18px]">Total</span>
              <span className="font-bold font-family-more-sugar text-[#c14b33] text-[24px]">₹{total}</span>
            </div>

            <button
              onClick={handleOrder}
              className="mt-6 w-full font-family-cosmic-sans font-bold text-[13px] tracking-wide
                         text-white rounded-xl py-4 transition-all duration-200
                         hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "#1a5c3a" }}
            >
              Place Order →
            </button>

            <p className="font-family-cosmic-sans text-[10px] text-[#a07850] text-center mt-3">
              🔒 Secure checkout · 100% Natural Makhana
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Section label helper ───────────────────────────────────────────────────
function SectionLabel({ step, title }: { step: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="font-family-cosmic-sans text-[11px] font-bold text-white
                   w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "#1a5c3a" }}
      >
        {step}
      </span>
      <h2 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[20px] leading-none">
        {title}
      </h2>
    </div>
  );
}