"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MakhanaStandard from "@/components/MakhanaStandard"
export default function TermsConditions() {
  return (
    <>
    <div className="bg-[#fff]">

      {/* STEPS */}
      <section className="py-16 px-16">
      <h2 className="text-4xl font-bold mb-4 font-family-cosmic-sans">
        Makhana Man – Terms & Conditions
      </h2>
			<p className="mt-4 text-md mb-8">Welcome to Makhana Man. By accessing or using our website, products, or services, you agree to comply with and be bound by the following Terms and Conditions.</p>

      <div className="relative max-w-5xl">
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					1. General
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>These Terms govern your use of our website and services.</li>
					<li>By using our platform, you confirm that you are at least 18 years old or accessing under parental supervision.</li>
					<li>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					2. Products & Services
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>Makhana Man offers makhana-based food products and related items.</li>
					<li>We strive to ensure all product descriptions, images, and prices are accurate, but errors may occur.</li>
					<li>We reserve the right to limit quantities or discontinue any product at any time.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					3. Pricing & Payments
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>All prices are listed in INR (₹) and are inclusive/exclusive of taxes as mentioned.</li>
					<li>Payments must be made through approved payment methods (UPI, cards, net banking, etc.).</li>
					<li>We reserve the right to cancel orders in case of payment failure or suspected fraud.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					4. Order Confirmation & Cancellation
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>Orders are confirmed only after successful payment.</li>
					<li>We reserve the right to cancel or refuse any order due to:
						<ul className="list-disc list-inside">
							<li>Product unavailability.</li>
							<li>Pricing errors.</li>
							<li>Suspicious activity</li>
						</ul>
					</li>
					<li>Customers can request cancellation within a limited time before dispatch.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					5. Shipping & Delivery
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>Delivery timelines are estimated and may vary depending on location.</li>
					<li>Makhana Man is not responsible for delays caused by courier partners or unforeseen circumstances.</li>
					<li>Customers must provide accurate shipping details; incorrect details may lead to delivery failure.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					6. Returns & Refunds
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>Returns are accepted only for:
						<ul className="list-disc list-inside">
							<li>Damaged or defective products.</li>
							<li>Incorrect items received.</li>	
						</ul>
					</li>
					<li>Customers must report issues within 24–48 hours of delivery with proof (images/videos).</li>
					<li>Refunds (if applicable) will be processed within a reasonable timeframe to the original payment method.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					7. Intellectual Property
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>All content on this website (logo, images, text, design) is the property of Makhana Man.</li>
					<li>Unauthorized use, reproduction, or distribution is strictly prohibited.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					8. User Conduct
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>Use the website for unlawful purposes.</li>
					<li>Attempt to hack, disrupt, or misuse the platform.</li>
					<li>Provide false or misleading information</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					9. Limitation of Liability
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>Makhana Man shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</li>
					<li>Product consumption is at the user’s discretion; please check ingredients for allergies.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					10. Privacy
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>Your personal information is handled as per our Privacy Policy.</li>
					<li>We do not sell or misuse customer data.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					11. Governing Law
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<li>These Terms shall be governed by the laws of India.</li>
					<li>Any disputes will be subject to the jurisdiction of local courts.</li>
				</ul>
				<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
					12. Contact Us
				</h4>
				<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
					<p>For any queries or concerns, you can contact us at:</p>
					<li>Email: <a href="mailto:support@makhanaman.com" className="text-red-600"><b>support@makhanaman.com</b></a></li>
					<li>Phone: +91-XXXXXXXXXX</li>
				</ul>
      </div>
    </section>
    </div>
        <MakhanaStandard/>
    </>
  );
}