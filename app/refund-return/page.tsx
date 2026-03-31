"use client";
import MakhanaStandard from "@/components/MakhanaStandard"
export default function ReturnRefund() {
return (
<>
<div className="bg-[#fff]">

	{/* STEPS */}
	<section className="py-16 px-16">
	<h2 className="text-4xl font-bold mb-4 font-family-cosmic-sans">
		Refund & Return Policy – Makhana Man
	</h2>
				<p className="mt-4 text-md mb-8">Effective Date: [03/31/2026]</p>
				<p className="mt-4 text-md mb-8">At Makhana Man, customer satisfaction is our priority.</p>

	<div className="relative max-w-5xl">
						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
								1. Eligibility for Returns
						</h4>
						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
								<p>We accept returns only in the following cases::</p>
								<li>Damaged or defective product</li>
								<li>Wrong product delivered</li>
						</ul>
						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
								2. Return Request Process
						</h4>
						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
								<li>Raise a request within <b>24–48 hours</b> of delivery.</li>
								<li>Share proof (images/videos) via email or WhatsApp.</li>
								<li>Our team will verify and approve/reject the request.</li>
						</ul>
						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
								3. Non-Returnable Items
						</h4>
						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
								
								<li>Opened or used food products.</li>
								<li>Products without original packaging.</li>
								<li>Items reported after 48 hours.</li>
						</ul>
						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
								4. Refund Process
						</h4>
						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
								<li>Once approved, refunds will be processed within <b>5–7 business days</b>.</li>
								<li>Refund will be credited to the original payment method.</li>
								<li>In COD cases, refund may be processed via bank transfer/UPI.</li>
						</ul>
						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
								5. Replacement Policy
						</h4>
						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
								<li>If applicable, we may offer a replacement instead of a refund.</li>
								<li>Replacement depends on product availability</li>
						</ul>
						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
								6. Cancellation Policy
						</h4>
						<ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
								<li>Orders can be cancelled <b>before dispatch only</b></li>
								<li>Once shipped, cancellation is not possible.</li>
						</ul>
						<h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
								7. Contact for Returns
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