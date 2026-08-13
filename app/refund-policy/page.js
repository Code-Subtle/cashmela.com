import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Refund Policy | Cashmela - Loan Comparison Platform",
  description:
    "Cashmela Refund Policy. Learn about our refund terms, service fees, and what happens if you're unsatisfied with our loan matching services.",
  keywords:
    "refund policy, money back guarantee, service charges, refund terms, customer satisfaction",
  alternates: {
    canonical: "https://cashmela.com/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Cashmela",
    description:
      "Cashmela Refund Policy - Transparent refund terms and customer satisfaction guarantees.",
    url: "https://cashmela.com/refund-policy",
    type: "website",
  },
};

const refundSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cashmela.com/refund-policy",
  name: "Refund Policy",
  description:
    "Cashmela Refund Policy - Terms regarding service fees and refunds",
  url: "https://cashmela.com/refund-policy",
  creator: {
    "@type": "Organization",
    name: "Cashmela",
    url: "https://cashmela.com",
  },
  datePublished: "2025-01-01",
  dateModified: "2026-04-09",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Script
        id="refund-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(refundSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Refund Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">
              Transparent refund terms and customer satisfaction commitments
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Last Updated: April 2026 | Effective From: April 9, 2026
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Key Highlights
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <span className="font-semibold">100% Free Service:</span>{" "}
                  Cashmela charges NO upfront fees for loan comparison and
                  application
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <span className="font-semibold">No Hidden Charges:</span> All
                  costs are transparent and disclosed upfront
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <span className="font-semibold">
                    30-Day Satisfaction Guarantee:
                  </span>{" "}
                  Eligible customers can request refunds within 30 days
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <span className="font-semibold">Easy Process:</span> Simple
                  refund process without complex procedures
                </span>
              </li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-slate-700">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                1. Service Fee Structure
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela's primary service - comparing loans and matching you
                with lenders - is completely{" "}
                <span className="font-bold text-green-600">FREE</span>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">
                What Cashmela Does NOT Charge For:
              </h3>
              <ul className="space-y-2 mb-6 pl-2">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Loan comparison and search</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Financial calculators (EMI, eligibility, debt-to-income)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Loan application forms and submissions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Matching with lending partners</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Application tracking and status updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Financial articles, guides, and blog content</span>
                </li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-sm">
                  <span className="font-semibold text-orange-700">
                    Important Notice:
                  </span>{" "}
                  If any entity has collected fees claiming to represent
                  Cashmela, it's fraudulent. Report immediately to
                  support@cashmela.com. Cashmela NEVER charges upfront fees for
                  loan processing.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                2. Charges That May Apply (From Lenders)
              </h2>
              <p className="mb-4 leading-relaxed">
                While Cashmela's services are free, the lenders you connect with
                may charge certain fees. These are{" "}
                <span className="font-bold">NOT</span> charged by Cashmela but
                by the lending partner:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Lender Fees (Examples)
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• Processing fees</li>
                    <li>• Loan origination charges</li>
                    <li>• Loan protection insurance</li>
                    <li>• Late payment penalties</li>
                    <li>• Prepayment charges</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Important Reminders
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• Lender fees are disclosed in loan documents</li>
                    <li>• Review all terms before accepting</li>
                    <li>• Contact lender directly for fee clarifications</li>
                    <li>• Cashmela is not responsible for lender charges</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                3. Refund Eligibility & Conditions
              </h2>
              <p className="mb-4 leading-relaxed">
                Since Cashmela services are free, refunds typically do not
                apply. However, in specific cases, we offer the following:
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Situations Where Refunds May Apply:
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
                <li>
                  <span className="font-semibold">Duplicate Charges:</span> If
                  you were charged twice for the same service due to system
                  error
                </li>
                <li>
                  <span className="font-semibold">
                    Unauthorized Transactions:
                  </span>{" "}
                  If payment was processed without your authorization
                </li>
                <li>
                  <span className="font-semibold">Service Failure:</span> If
                  Cashmela failed to provide promised services despite good
                  faith efforts
                </li>
                <li>
                  <span className="font-semibold">Fraudulent Activity:</span> If
                  your account was compromised or used fraudulently
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Eligibility Requirements:
              </h3>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>Refund request submitted within 30 days of the charge</li>
                <li>Proof of unauthorized transaction or system error</li>
                <li>Original payment method verification</li>
                <li>No previous successful refund claims from same account</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                4. Refund Process & Timeline
              </h2>
              <p className="mb-4 leading-relaxed">
                If you believe you're eligible for a refund, follow these steps:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Step 1: Submit Refund Request
                  </h3>
                  <p className="text-sm">Email info@cashmela.com with:</p>
                  <ul className="text-sm list-disc list-inside ml-2 mt-2">
                    <li>Your account email and contact number</li>
                    <li>Transaction date and amount</li>
                    <li>
                      Reason for refund (duplicate charge, unauthorized, etc.)
                    </li>
                    <li>Supporting documents (screenshots, emails, etc.)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Step 2: Request Verification
                  </h3>
                  <p className="text-sm">
                    We'll review your claim within 5-7 business days and may
                    request additional information
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Step 3: Approval & Processing
                  </h3>
                  <p className="text-sm">
                    If approved, refund will be processed to your original
                    payment method
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Step 4: Receive Refund
                  </h3>
                  <p className="text-sm">
                    Refund will appear in your account within 7-10 business days
                    (depending on your bank)
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm">
                  <span className="font-semibold">Timeline:</span> Complete
                  refund process takes 15-20 business days from initial request
                  to final deposit in your account.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                5. What Cannot Be Refunded
              </h2>
              <p className="mb-4 leading-relaxed">
                The following are NOT eligible for refunds:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  <span className="font-semibold">Lender Charges:</span> Fees
                  charged by lending partners (processing fees, origination
                  charges, etc.)
                </li>
                <li>
                  <span className="font-semibold">Loan Rejection:</span> Loan
                  denial by a lender does not entitle you to refund from
                  Cashmela (our service is free)
                </li>
                <li>
                  <span className="font-semibold">Unfavorable Loan Terms:</span>{" "}
                  If you receive loan offer but don't like the terms
                </li>
                <li>
                  <span className="font-semibold">User Error:</span> Submitting
                  wrong information or changing mind after application
                </li>
                <li>
                  <span className="font-semibold">Third-Party Services:</span>{" "}
                  Payments to third parties or partner services
                </li>
                <li>
                  <span className="font-semibold">Marketing Materials:</span>{" "}
                  Costs for promotional materials or merchandise
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                6. Payment Method & Refund Destination
              </h2>
              <p className="mb-4 leading-relaxed">
                Refunds will be processed to the payment method originally used:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  <span className="font-semibold">Credit/Debit Card:</span>{" "}
                  Refund credited back to the same card (may take 5-10 business
                  days)
                </li>
                <li>
                  <span className="font-semibold">Net Banking:</span> Refund
                  transferred to the original bank account
                </li>
                <li>
                  <span className="font-semibold">Digital Wallets:</span> Refund
                  processed back to the wallet account
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed bg-yellow-50 p-4 rounded border border-yellow-200">
                <span className="font-semibold">Note:</span> Refund processing
                time depends on your bank/payment provider. Cashmela initiates
                refunds but final credit depends on your financial institution.
              </p>
            </section>

            {/* Section 7 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                7. Dispute Resolution
              </h2>
              <p className="mb-4 leading-relaxed">
                If your refund request is denied or you're unsatisfied with the
                decision:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
                <li>
                  You can escalate to our senior management at
                  escalation@cashmela.com
                </li>
                <li>
                  Include your refund request reference number and additional
                  evidence
                </li>
                <li>We'll review escalations within 10 business days</li>
                <li>
                  You can also file a grievance with your bank or credit card
                  issuer
                </li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Chargeback Process
                </h3>
                <p className="text-sm leading-relaxed">
                  If you paid by credit/debit card, you have the right to file a
                  chargeback with your card issuer. Chargebacks should be filed
                  within 60-120 days of the original transaction (varies by card
                  issuer).
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                8. Cancellation vs. Refund
              </h2>
              <p className="mb-4 leading-relaxed">
                <span className="font-semibold">Important Distinction:</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Cancellation
                  </h3>
                  <p className="text-sm">
                    You can cancel an active loan application at any time.
                    Cashmela will:
                  </p>
                  <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                    <li>Stop processing your application</li>
                    <li>Inform lending partners to withdraw</li>
                    <li>Not share your details further</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Refund</h3>
                  <p className="text-sm">Refund is applicable only when:</p>
                  <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                    <li>Money was charged (duplicate, unauthorized)</li>
                    <li>Service wasn't delivered as promised</li>
                    <li>Claim is verified as legitimate</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                9. Fraud Prevention & Abuse Policy
              </h2>
              <p className="mb-4 leading-relaxed">
                To protect against fraudulent refund requests, Cashmela
                maintains strict verification procedures:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  Refund requests from multiple accounts with same contact
                  information may be flagged
                </li>
                <li>
                  Repeated false refund claims may result in account suspension
                </li>
                <li>
                  Attempts to exploit the refund system are considered fraud
                </li>
                <li>
                  Fraudulent claims will be reported to relevant authorities
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                10. Policy Updates
              </h2>
              <p className="leading-relaxed">
                Cashmela reserves the right to modify this Refund Policy at any
                time. Changes will be effective immediately upon posting. We'll
                notify users of significant changes via email or site notice.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-8 mt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Contact Us - Refunds & Support
              </h2>
              <p className="mb-4 leading-relaxed">
                For refund inquiries or issues:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="space-y-3">
                  <li>
                    <span className="font-semibold text-slate-900">Email:</span>
                    <a
                      href="mailto:info@cashmela.com"
                      className="text-blue-600 hover:text-blue-700 ml-2"
                    >
                      info@cashmela.com
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Phone:</span>
                    <a
                      href="tel:+918080080114"
                      className="text-blue-600 hover:text-blue-700 ml-2"
                    >
                      +91 80800 80114
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      Response Time:
                    </span>
                    <span className="text-slate-700 ml-2">
                      Within 24-48 hours
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Consumer Rights:
                </span>{" "}
                This policy is in addition to your statutory consumer rights.
                For disputes not resolved through this policy, you can file a
                complaint with your state consumer protection authority or RBI
                Ombudsman.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
