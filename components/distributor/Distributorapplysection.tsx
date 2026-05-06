// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   Age?: string;
//   Qualification?: string;
//   phone: string;
//   email: string;
//   City?: string;
//   Zip?: string;
//   district?: string;
//   companyName?: string;
//   business?: string;
//   experience?: string;
//   businessType?: string;
//   Revenue?: string;
//   Brief?: string;
//   Infrastructure?: string;
//   Vehicle?: string;
//   Investment?: string;
//   Manpower?: string;
//   Interested?: string;
// };

// const inputClass =
//   "w-full bg-[#fdfaf6] border border-[#e8e0d5] rounded-xl px-4 py-3 text-[14px] text-[#4a403f] placeholder:text-[#c0b0a0] font-family-cosmic-sans outline-none focus:border-[#1a4d35] focus:ring-2 focus:ring-[#1a4d35]/10 transition-all duration-200";

// const labelClass =
//   "block text-[12px] font-semibold tracking-widest uppercase text-[#9a8a7a] font-family-cosmic-sans mb-1.5";

// export default function DistributorPage() {
//   const [form, setForm] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!form.firstName || !form.lastName) return alert("Name is required");
//     if (!form.email || !form.email.includes("@")) return alert("Valid email required");
//     if (!form.phone || form.phone.length < 10) return alert("Valid phone required");
//     if (!form.City) return alert("City is required");

//     setLoading(true);
//     try {
//       const res = await fetch("/api/distributor", {
//         method: "POST",
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (data.success) {
//         alert("Form submitted successfully!");
//         setForm({ firstName: "", lastName: "", phone: "", email: "" });
//       } else {
//         alert("Error submitting form");
//       }
//     } catch {
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <>
    

//       <div className="bg-[#fffcfa]">

       


//         {/* FORM */}
//         <section
//           className="py-20 px-4"
//           style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
//         >
//           <div className="max-w-4xl mx-auto">

//             {/* Header */}
//             <motion.div
//               className="text-center mb-12"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex justify-center mb-4">
//                 <span className="font-family-cosmic-sans inline-flex items-center border border-[#c14b33] rounded-full px-5 py-1.5 text-[12px] font-semibold tracking-widest uppercase text-[#c14b33]">
//                   Partnership Application
//                 </span>
//               </div>
//               <h2
//                 className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#4a403f]"
//                 style={{ fontFamily: '"MoreSugar"', letterSpacing: "3px" }}
//               >
//                 Let's Team Up
//               </h2>
//               <p className="mt-3 text-[#9a8a7a] font-family-cosmic-sans text-[15px]">
//                 Fill in the details below and we'll get back to you within 48 hours
//               </p>
//             </motion.div>

//             <form onSubmit={handleSubmit}>

//               {/* ─── PERSONAL INFORMATION ─── */}
//               <motion.div
//                 className="bg-white rounded-2xl border border-[#e8e0d5] p-6 md:p-8 mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 {/* Section Label */}
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-8 h-8 rounded-full bg-[#1a4d35] flex items-center justify-center flex-shrink-0">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-[1.1rem] font-bold text-[#4a403f] font-family-cosmic-sans tracking-wide">
//                     Personal Information
//                   </h3>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className={labelClass}>First Name <span className="text-[#c14b33]">*</span></label>
//                     <input name="firstName" placeholder="Enter first name" onChange={handleChange} value={form.firstName || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Last Name <span className="text-[#c14b33]">*</span></label>
//                     <input name="lastName" placeholder="Enter last name" onChange={handleChange} value={form.lastName || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Age</label>
//                     <input name="Age" placeholder="Your age" onChange={handleChange} value={form.Age || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Qualification</label>
//                     <input name="Qualification" placeholder="Highest qualification" onChange={handleChange} value={form.Qualification || ""} className={inputClass} />
//                   </div>
//                 </div>
//               </motion.div>

//               {/* ─── CONTACT INFORMATION ─── */}
//               <motion.div
//                 className="bg-white rounded-2xl border border-[#e8e0d5] p-6 md:p-8 mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.1 }}
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-8 h-8 rounded-full bg-[#c14b33] flex items-center justify-center flex-shrink-0">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-[1.1rem] font-bold text-[#4a403f] font-family-cosmic-sans tracking-wide">
//                     Contact Information
//                   </h3>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className={labelClass}>Phone <span className="text-[#c14b33]">*</span></label>
//                     <input name="phone" type="tel" placeholder="10-digit mobile number" onChange={handleChange} value={form.phone || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Email <span className="text-[#c14b33]">*</span></label>
//                     <input name="email" type="email" placeholder="your@email.com" onChange={handleChange} value={form.email || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>City <span className="text-[#c14b33]">*</span></label>
//                     <input name="City" placeholder="Your city" onChange={handleChange} value={form.City || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>PIN / Zip Code</label>
//                     <input name="Zip" placeholder="6-digit PIN code" onChange={handleChange} value={form.Zip || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>State</label>
//                     <div className="relative">
//                       <select name="state" onChange={handleChange} className={inputClass + " appearance-none pr-8 cursor-pointer"}>
//                         <option value="none">Select State</option>
//                         <option value="india">India</option>
//                       </select>
//                       <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9a8a7a" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>
//                   <div>
//                     <label className={labelClass}>District (Select)</label>
//                     <div className="relative">
//                       <select name="districtSelect" onChange={handleChange} className={inputClass + " appearance-none pr-8 cursor-pointer"}>
//                         <option value="district">Select District</option>
//                         <option value="india">India</option>
//                       </select>
//                       <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9a8a7a" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>
//                   <div>
//                     <label className={labelClass}>District</label>
//                     <input name="district" placeholder="Enter district name" onChange={handleChange} value={form.district || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Company Name</label>
//                     <input name="companyName" placeholder="Your company name" onChange={handleChange} value={form.companyName || ""} className={inputClass} />
//                   </div>
//                 </div>
//               </motion.div>

//               {/* ─── BUSINESS INFORMATION ─── */}
//               <motion.div
//                 className="bg-white rounded-2xl border border-[#e8e0d5] p-6 md:p-8 mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.2 }}
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-8 h-8 rounded-full bg-[#7c6fcd] flex items-center justify-center flex-shrink-0">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                     </svg>
//                   </div>
//                   <h3 className="text-[1.1rem] font-bold text-[#4a403f] font-family-cosmic-sans tracking-wide">
//                     Business Information
//                   </h3>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className={labelClass}>Current Nature of Business</label>
//                     <input name="business" placeholder="e.g. FMCG, Retail, Wholesale" onChange={handleChange} value={form.business || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Experience (Years)</label>
//                     <input name="experience" placeholder="Years in current business" onChange={handleChange} value={form.experience || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Business Type</label>
//                     <input name="businessType" placeholder="e.g. Proprietor, Pvt Ltd" onChange={handleChange} value={form.businessType || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Annual Revenue</label>
//                     <input name="Revenue" placeholder="e.g. ₹10-50 Lakhs" onChange={handleChange} value={form.Revenue || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Current Business Brief</label>
//                     <input name="Brief" placeholder="Brief about current business" onChange={handleChange} value={form.Brief || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Infrastructure</label>
//                     <input name="Infrastructure" placeholder="Godown, warehouse, shop etc." onChange={handleChange} value={form.Infrastructure || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Vehicle</label>
//                     <input name="Vehicle" placeholder="Delivery vehicles available" onChange={handleChange} value={form.Vehicle || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Capacity of Investment</label>
//                     <input name="Investment" placeholder="e.g. ₹1-5 Lakhs" onChange={handleChange} value={form.Investment || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Existing Manpower</label>
//                     <input name="Manpower" placeholder="Number of employees" onChange={handleChange} value={form.Manpower || ""} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Why Are You Interested?</label>
//                     <input name="Interested" placeholder="Your motivation to join us" onChange={handleChange} value={form.Interested || ""} className={inputClass} />
//                   </div>
//                 </div>
//               </motion.div>

//               {/* SUBMIT */}
//               <motion.div
//                 className="text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.3 }}
//               >
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="font-family-cosmic-sans inline-flex items-center gap-3 bg-[#1a4d35] hover:bg-[#15402c] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[16px] px-12 py-4 rounded-2xl transition-all duration-200 cursor-pointer shadow-lg"
//                 >
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                   </svg>
//                   {loading ? "Submitting..." : "Submit Application"}
//                 </button>
//                 <p className="mt-4 text-[13px] text-[#9a8a7a] font-family-cosmic-sans">
//                   We'll review your application and reach out within 48 hours
//                 </p>
//               </motion.div>

//             </form>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// }


"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type FormData = {
  firstName: string;
  lastName: string;
  Age?: string;
  Qualification?: string;
  phone: string;
  email: string;
  City?: string;
  Zip?: string;
  district?: string;
  companyName?: string;
  business?: string;
  experience?: string;
  businessType?: string;
  Revenue?: string;
  Brief?: string;
  Infrastructure?: string;
  Vehicle?: string;
  Investment?: string;
  Manpower?: string;
  Interested?: string;
};

const inputClass =
  "w-full bg-[#fdfaf6] border border-[#e8e0d5] rounded-xl px-4 py-3 text-[14px] text-[#4a403f] placeholder:text-[#c0b0a0] font-family-cosmic-sans outline-none focus:border-[#1a4d35] focus:ring-2 focus:ring-[#1a4d35]/10 transition-all duration-200";

const labelClass =
  "block text-[12px] font-semibold tracking-widest uppercase text-[#9a8a7a] font-family-cosmic-sans mb-1.5";

export default function DistributorApplySection() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName) return alert("Name is required");
    if (!form.email || !form.email.includes("@")) return alert("Valid email required");
    if (!form.phone || form.phone.length < 10) return alert("Valid phone required");
    if (!form.City) return alert("City is required");

    setLoading(true);
    try {
      const res = await fetch("/api/distributor", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        alert("Form submitted successfully!");
        setForm({ firstName: "", lastName: "", phone: "", email: "" });
      } else {
        alert("Error submitting form");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="distributor-apply-section"
      className="py-20 px-4"
      style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
    >
      <div className="max-w-4xl mx-auto">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <span className="font-family-cosmic-sans inline-flex items-center border border-[#c14b33] rounded-full px-5 py-1.5 text-[12px] font-semibold tracking-widest uppercase text-[#c14b33]">
              Partnership Application
            </span>
          </div>
          <h2
            className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#4a403f]"
            style={{ fontFamily: '"MoreSugar"', letterSpacing: "3px" }}
          >
            Let's Team Up
          </h2>
          <p className="mt-3 text-[#9a8a7a] font-family-cosmic-sans text-[15px]">
            Fill in the details below and we'll get back to you within 48 hours
          </p>
        </motion.div>

        <form onSubmit={handleSubmit}>

          {/* PERSONAL INFORMATION */}
          <motion.div
            className="bg-white rounded-2xl border border-[#e8e0d5] p-6 md:p-8 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1a4d35] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-[#4a403f] font-family-cosmic-sans tracking-wide">
                Personal Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>First Name <span className="text-[#c14b33]">*</span></label>
                <input name="firstName" placeholder="Enter first name" onChange={handleChange} value={form.firstName || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last Name <span className="text-[#c14b33]">*</span></label>
                <input name="lastName" placeholder="Enter last name" onChange={handleChange} value={form.lastName || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Age</label>
                <input name="Age" placeholder="Your age" onChange={handleChange} value={form.Age || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Qualification</label>
                <input name="Qualification" placeholder="Highest qualification" onChange={handleChange} value={form.Qualification || ""} className={inputClass} />
              </div>
            </div>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            className="bg-white rounded-2xl border border-[#e8e0d5] p-6 md:p-8 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#c14b33] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-[#4a403f] font-family-cosmic-sans tracking-wide">
                Contact Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Phone <span className="text-[#c14b33]">*</span></label>
                <input name="phone" type="tel" placeholder="10-digit mobile number" onChange={handleChange} value={form.phone || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email <span className="text-[#c14b33]">*</span></label>
                <input name="email" type="email" placeholder="your@email.com" onChange={handleChange} value={form.email || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City <span className="text-[#c14b33]">*</span></label>
                <input name="City" placeholder="Your city" onChange={handleChange} value={form.City || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>PIN / Zip Code</label>
                <input name="Zip" placeholder="6-digit PIN code" onChange={handleChange} value={form.Zip || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <div className="relative">
                  <select name="state" onChange={handleChange} className={inputClass + " appearance-none pr-8 cursor-pointer"}>
                    <option value="none">Select State</option>
                    <option value="india">India</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9a8a7a" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div>
                <label className={labelClass}>District (Select)</label>
                <div className="relative">
                  <select name="districtSelect" onChange={handleChange} className={inputClass + " appearance-none pr-8 cursor-pointer"}>
                    <option value="district">Select District</option>
                    <option value="india">India</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9a8a7a" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div>
                <label className={labelClass}>District</label>
                <input name="district" placeholder="Enter district name" onChange={handleChange} value={form.district || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Company Name</label>
                <input name="companyName" placeholder="Your company name" onChange={handleChange} value={form.companyName || ""} className={inputClass} />
              </div>
            </div>
          </motion.div>

          {/* BUSINESS INFORMATION */}
          <motion.div
            className="bg-white rounded-2xl border border-[#e8e0d5] p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#7c6fcd] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-[#4a403f] font-family-cosmic-sans tracking-wide">
                Business Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Current Nature of Business</label>
                <input name="business" placeholder="e.g. FMCG, Retail, Wholesale" onChange={handleChange} value={form.business || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Experience (Years)</label>
                <input name="experience" placeholder="Years in current business" onChange={handleChange} value={form.experience || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Business Type</label>
                <input name="businessType" placeholder="e.g. Proprietor, Pvt Ltd" onChange={handleChange} value={form.businessType || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Annual Revenue</label>
                <input name="Revenue" placeholder="e.g. ₹10-50 Lakhs" onChange={handleChange} value={form.Revenue || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Current Business Brief</label>
                <input name="Brief" placeholder="Brief about current business" onChange={handleChange} value={form.Brief || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Infrastructure</label>
                <input name="Infrastructure" placeholder="Godown, warehouse, shop etc." onChange={handleChange} value={form.Infrastructure || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Vehicle</label>
                <input name="Vehicle" placeholder="Delivery vehicles available" onChange={handleChange} value={form.Vehicle || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Capacity of Investment</label>
                <input name="Investment" placeholder="e.g. ₹1-5 Lakhs" onChange={handleChange} value={form.Investment || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Existing Manpower</label>
                <input name="Manpower" placeholder="Number of employees" onChange={handleChange} value={form.Manpower || ""} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Why Are You Interested?</label>
                <input name="Interested" placeholder="Your motivation to join us" onChange={handleChange} value={form.Interested || ""} className={inputClass} />
              </div>
            </div>
          </motion.div>

          {/* SUBMIT */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="font-family-cosmic-sans inline-flex items-center gap-3 bg-[#1a4d35] hover:bg-[#15402c] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[16px] px-12 py-4 rounded-2xl transition-all duration-200 cursor-pointer shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            <p className="mt-4 text-[13px] text-[#9a8a7a] font-family-cosmic-sans">
              We'll review your application and reach out within 48 hours
            </p>
          </motion.div>

        </form>
      </div>
    </section>
  );
}