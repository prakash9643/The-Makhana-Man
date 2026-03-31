"use client";
import MakhanaStandard from "@/components/MakhanaStandard"
export default function PrivacyPolicy() {
  return (
    <>
    <div className="bg-[#fff]">

      {/* STEPS */}
      <section className="py-16 px-16">
      <h2 className="text-4xl font-bold mb-4 font-family-cosmic-sans">
        Privacy Policy – Makhana Man
      </h2>
			<p className="mt-4 text-md mb-8">Effective Date: [03/31/2026]</p>
			<p className="mt-4 text-md mb-8">Makhana Man (“we”, “our”, “us”) values your privacy and is committed to protecting your personal information.</p>

      <div className="relative max-w-5xl">
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    1. Information We Collect
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
									<p>We collect the following types of information:</p>
                    <li><b>Personal Information:</b> Name, phone number, email address, shipping/billing address</li>
                    <li><b>Payment Information:</b> Processed securely via third-party providers (we do not store card details)</li>
                    <li><b>Technical Data:</b> IP address, browser type, device details, cookies</li>
										<li><b>Order Details:</b> Purchase history, preferences</li>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    2. How We Use Your Information
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
									<p>We use your data to:</p>
                    <li>Process and deliver your orders.</li>
                    <li>Provide customer support.</li>
                    <li>Improve our website and services.</li>
										<li>Send order updates, offers, and promotional messages (only if opted-in)</li>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    3. Sharing of Information
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
									<p>We do not sell your personal data. We may share information with:</p>
                    <li><b>Payment gateways</b> (e.g., Razorpay, Stripe).</li>
                    <li><b>Shipping partners</b> for delivery.</li>
                    <li><b>Service providers</b> (hosting, analytics, marketing tools).</li>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    4. Cookies & Tracking
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
										<p>We use cookies to:</p>
                    <li>Enhance user experience.</li>
                    <li>Analyze traffic and usage.</li>
                    <li>Remember your preferences.</li>
										<p>ou can disable cookies through your browser settings.</p>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    5. Data Security
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
                    <li>We implement reasonable security measures to protect your data. However, no online platform is 100% secure.</li>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    6. Your Rights
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
									<p>You have the right to:</p>
                    <li>Access your personal data</li>
                    <li>Request correction or deletion.</li>
                    <li>Opt-out of marketing communications.</li>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    7. Third-Party Links
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
                    <li>Our website may contain links to external sites. We are not responsible for their privacy practices.</li>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    8. Changes to Policy
                </h4>
                <ul className="list-disc list-inside mb-8 pl-4 flex flex-col gap-4">
                    <li>We may update this policy from time to time. Changes will be posted on this page.</li>
                </ul>
                <h4 className="text-2xl font-bold mb-4 font-family-cosmic-sans">
                    9. Contact Us
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