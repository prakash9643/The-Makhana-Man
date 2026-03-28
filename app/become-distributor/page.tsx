"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MakhanaStandard from "@/components/MakhanaStandard"
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
export default function DistributorPage() {
  const [form, setForm] = useState<FormData>({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
	});

  const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// VALIDATION
		if (!form.firstName || !form.lastName) {
			return alert("Name is required");
		}

		if (!form.email || !form.email.includes("@")) {
			return alert("Valid email required");
		}

		if (!form.phone || form.phone.length < 10) {
			return alert("Valid phone required");
		}

		if (!form.City) {
			return alert("City is required");
		}

		// API CALL
		const res = await fetch("/api/distributor", {
			method: "POST",
			body: JSON.stringify(form),
		});

		const data = await res.json();

		if (data.success) {
			alert("Form submitted successfully!");
		} else {
			alert("Error submitting form");
		}
	};

  const perks = [
    { icon: "💰", title: "High Margins", desc: "Better profits" },
    { icon: "🌱", title: "Healthy Product", desc: "High demand" },
    { icon: "🚚", title: "Fast Delivery", desc: "Quick supply" },
    { icon: "🤝", title: "Growth", desc: "Grow with us" },
    ];

  return (
    <>
    <section className="w-full relative">
        <img src="/images/become-distributor.jpeg" alt="Distributor" />        
        <p className="mt-4 absolute top-[70%] left-[40%] text-[20px] text-bold font-family-more-sugar">
          Join The Makhana Man and grow with healthy snacking 🌾
        </p>
    </section>
    <div className="bg-[#fffcfa]">

      {/* STEPS */}
      <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-14 font-family-cosmic-sans">
        Steps to Get Started
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* ANIMATED LINE */}
        <motion.div
          className="absolute top-[20px] left-[10%] border-t-2 border-dashed border-green-500"
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{ duration: 1.5 }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

          {[
            "Fill the form",
            "We review",
            "Discuss terms",
            "Start selling",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center"
            >

              <div className="bg-blue-100 p-6 py-1 rounded-full text-lg font-semibold shadow font-family-cosmic-sans">
                Stage {i + 1}
              </div>

              <p className="mt-4 text-md font-family-more-sugar">{text}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* PERKS */}
			<section className="py-16 text-center bg-[#f7f7f7]">
				<h2 className="text-4xl font-bold mb-14 font-family-cosmic-sans">
						Perks of our partnership
				</h2>

				<div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">

						{perks.map((item, i) => (
						<motion.div
								key={i}
								initial={{ y: 60, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								whileHover={{ scale: 1.05 }}
								transition={{ delay: i * 0.2 }}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
						>

								<motion.div
								whileHover={{ rotate: 10 }}
								className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#c7c3f5] text-2xl"
								>
								{item.icon}
								</motion.div>

								<h3 className="mt-6 font-semibold text-lg font-family-cosmic-sans">
								{item.title}
								</h3>

								<p className="text-gray-500 text-sm mt-2 font-family-more-sugar">
								{item.desc}
								</p>

						</motion.div>
						))}
				</div>
			</section>

      {/* FORM */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 font-family-cosmic-sans">
          Let’s Team Up
        </h2>
					
        <form onSubmit={handleSubmit} className="w-full gap-6">
					<div className="input-box mt-16 gap-4 flex flex-col">
						<h3 className="text-3xl font-bold mb-4 font-family-cosmic-sans">
							Personal Information
						</h3>
						<div className="flex align-items-center justify-between gap-8">
							<input name="firstName" placeholder="First Name" onChange={handleChange} className="border p-3 rounded w-full" />
							<input name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-3 rounded w-full" />								
						</div>
						<div className="flex align-items-center justify-between gap-8">
							<input name="Age" placeholder="Age" onChange={handleChange} className="border p-3 rounded w-full" />
							<input name="Qualification" placeholder="Qualificaton" onChange={handleChange} className="border p-3 rounded w-full" />								
						</div>
					</div>

					<div className="input-box mt-10 gap-4 flex flex-col">
						<h3 className="text-3xl font-bold mb-4 font-family-cosmic-sans">
							Contact Information
						</h3>
						<div className="flex align-items-center justify-between gap-8">
							<input name="phone" placeholder="Phone" onChange={handleChange} className="border w-full p-3 rounded" />
							<input name="email" placeholder="Email" onChange={handleChange} className="border w-full p-3 rounded" />
						</div>
						<div className="flex align-items-center justify-between gap-8">
							<input name="City" placeholder="City" onChange={handleChange} className="border w-full p-3 rounded" />
							<input name="Zip" placeholder="Zip" onChange={handleChange} className="border w-full p-3 rounded" />								
						</div>						
						<div className="flex align-items-center gap-8">
							<select className="border w-full p-3 rounded" onChange={handleChange}>
								<option value="none">None</option>
								<option value="india">India</option>
							</select>
							<select className="border w-full p-3 rounded" onChange={handleChange}>
								<option value="districte">District</option>
								<option value="india">India</option>
							</select>
						</div>
						<div className="flex align-items-center justify-between gap-8">
							<input name="district" placeholder="District" onChange={handleChange} className="border p-3 rounded w-full" />
							<input name="companyName" placeholder="Company Name" onChange={handleChange} className="border p-3 rounded w-full" />
						</div>
					</div>

					<div className="input-box mt-10 gap-4 flex flex-col">
						<h3 className="text-3xl font-bold mb-4 font-family-cosmic-sans">
							Business Information
						</h3>
						<div className="flex align-items-center justify-between gap-8">
							<input name="business" placeholder="Current Nature of Business" onChange={handleChange} className="border w-full p-3 rounded" />
							<input name="experience" placeholder="Experience In Current Bussiness (Years)" onChange={handleChange} className="border w-full p-3 rounded" />
						</div>
						<div className="flex align-items-center justify-between gap-8">
							<input name="businessType" placeholder="Business Type" onChange={handleChange} className="border w-full p-3 rounded" />
							<input name="Revenue" placeholder="Annual Revenue" onChange={handleChange} className="border w-full p-3 rounded" />								
						</div>
						<div className="flex align-items-center justify-between gap-8">
							<input name="Brief" placeholder="Current Business Brief" onChange={handleChange} className="border p-3 rounded w-full" />
							<input name="Infrastructure" placeholder="Infrastructure" onChange={handleChange} className="border p-3 rounded w-full" />
						</div>
						<div className="flex align-items-center justify-between gap-8">
							<input name="Vehicle" placeholder="Vehicle" onChange={handleChange} className="border p-3 rounded w-full" />
							<input name="Investment" placeholder="Capacity Of Investment" onChange={handleChange} className="border p-3 rounded w-full" />
						</div>
						<div className="flex align-items-center justify-between gap-8">
							<input name="Manpower" placeholder="Existing Manpower" onChange={handleChange} className="border p-3 rounded w-full" />
							<input name="Interested" placeholder="Why Are You Interested ?" onChange={handleChange} className="border p-3 rounded w-full" />
						</div>
					</div>
					<div className="text-center">
						<button className="cta mt-8 hover:bg-[#a83a25] font-family-more-sugar inline-block bg-[#c14b33] text-[#f8f8f0] cursor-pointer text-[20px] w-[200px] py-2 rounded-md font-semibold">
							Submit
						</button>
					</div>
        </form>
      </section>

    </div>
		<MakhanaStandard/>
    </>
  );
}