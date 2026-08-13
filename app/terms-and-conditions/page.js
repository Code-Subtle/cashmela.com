import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Terms & Conditions | Cashmela - Loan Comparison Platform",
  description:
    "Read Cashmela's Terms & Conditions. Understand the rules, responsibilities, and legal agreements governing the use of our personal loan and debt consolidation services.",
  keywords:
    "terms and conditions, loan agreement, terms of service, Cashmela terms, loan terms, user agreement",
  alternates: {
    canonical: "https://cashmela.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Cashmela",
    description:
      "Read Cashmela's Terms & Conditions for our loan comparison and application services.",
    url: "https://cashmela.com/terms-and-conditions",
    type: "website",
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cashmela.com/terms-and-conditions",
  name: "Terms & Conditions",
  description:
    "Cashmela Terms & Conditions - Understanding our service agreements and user responsibilities",
  url: "https://cashmela.com/terms-and-conditions",
  creator: {
    "@type": "Organization",
    name: "Cashmela",
    url: "https://cashmela.com",
  },
  datePublished: "2025-01-01",
  dateModified: "2026-04-09",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">
              Please read these terms carefully before using Cashmela
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Last Updated: April 2026 | Effective From: April 9, 2026
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Table of Contents
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li>
                <a
                  href="#section1"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  1. Introduction & Acceptance
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  2. Service Description
                </a>
              </li>
              <li>
                <a
                  href="#section3"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  3. User Eligibility
                </a>
              </li>
              <li>
                <a
                  href="#section4"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  4. User Responsibilities
                </a>
              </li>
              <li>
                <a
                  href="#section5"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  5. Intellectual Property Rights
                </a>
              </li>
              <li>
                <a
                  href="#section6"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  6. Limitation of Liability
                </a>
              </li>
              <li>
                <a
                  href="#section7"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  7. Indemnification
                </a>
              </li>
              <li>
                <a
                  href="#section8"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  8. Third-Party Services
                </a>
              </li>
              <li>
                <a
                  href="#section9"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  9. Data & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#section10"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  10. Modification of Terms
                </a>
              </li>
              <li>
                <a
                  href="#section11"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  11. Termination
                </a>
              </li>
              <li>
                <a
                  href="#section12"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  12. Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-slate-700">
            {/* Section 1 */}
            <section id="section1">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                1. Introduction & Acceptance of Terms
              </h2>
              <p className="mb-4 leading-relaxed">
                Welcome to Cashmela ("the Platform"). By accessing, browsing, or
                using this website and any related services, you agree to be
                bound by these Terms and Conditions ("Terms"). If you do not
                agree to these Terms, please do not use our Platform.
              </p>
              <p className="leading-relaxed">
                Cashmela is a loan comparison aggregator and lead generation
                platform that helps customers compare personal loans, business
                loans, debt consolidation options, and other financial products
                from multiple RBI-regulated banks and NBFCs. We do not directly
                provide loans or credit products but facilitate connections
                between customers and lenders.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                2. Service Description
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela provides the following services:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4 pl-2">
                <li>
                  <span className="font-semibold">Loan Comparison:</span>{" "}
                  Comparing personal loans, business loans, and debt
                  consolidation products from multiple lenders
                </li>
                <li>
                  <span className="font-semibold">Financial Calculators:</span>{" "}
                  EMI calculators, eligibility assessments, and debt management
                  tools
                </li>
                <li>
                  <span className="font-semibold">Loan Matching:</span> Matching
                  qualified applicants with suitable loan products from partner
                  lenders
                </li>
                <li>
                  <span className="font-semibold">Educational Content:</span>{" "}
                  Providing articles, guides, and information on personal
                  finance and loans
                </li>
                <li>
                  <span className="font-semibold">Lead Facilitation:</span>{" "}
                  Submitting your application details to partner lending
                  institutions for processing
                </li>
              </ul>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4">
                <p className="text-sm">
                  <span className="font-semibold text-orange-600">
                    Important:
                  </span>{" "}
                  Cashmela is not a lender and does not provide credit products
                  directly. We are an intermediary platform connecting borrowers
                  with lenders.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section3" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                3. User Eligibility & Requirements
              </h2>
              <p className="mb-4 leading-relaxed">
                By using Cashmela, you confirm that:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>You are at least 18 years of age</li>
                <li>You are a resident of India with a valid PAN or Aadhaar</li>
                <li>
                  You have the legal capacity to enter into binding agreements
                </li>
                <li>
                  You are not barred from accessing online financial services by
                  law
                </li>
                <li>
                  All information you provide is accurate, complete, and
                  truthful
                </li>
                <li>You are using the Platform for lawful purposes only</li>
                <li>
                  You have a stable internet connection and compatible device
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section4" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                4. User Responsibilities & Code of Conduct
              </h2>
              <p className="mb-4 leading-relaxed">
                As a user of Cashmela, you agree NOT to:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-8 pl-2">
                <li>Provide false, misleading, or fraudulent information</li>
                <li>
                  Submit forms with the intent to spam, misuse, or disrupt the platform (By submitting a form, you consent to your IP address and timestamp being recorded for security, fraud prevention, and auditing purposes)
                </li>
                <li>
                  Use multiple accounts to circumvent our systems or policies
                </li>
                <li>
                  Attempt to hack, breach, or compromise platform security
                </li>
                <li>
                  Harvest or collect personal data from the Platform without
                  authorization
                </li>
                <li>
                  Use the Platform for illegal activities, money laundering, or
                  fraud
                </li>
                <li>
                  Harass, abuse, or discriminate against other users or staff
                </li>
                <li>
                  Upload viruses, malware, or harmful code to the Platform
                </li>
                <li>
                  Engage in any form of identity theft or misrepresentation
                </li>
                <li>Bypass or disable any security features or controls</li>
                <li>Sell, trade, or transfer your account access to others</li>
              </ul>
              <p className="leading-relaxed">
                Violation of these responsibilities may result in immediate
                suspension or permanent termination of your account and possible
                legal action.
              </p>
            </section>

            {/* Section 5 */}
            <section id="section5" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                5. Intellectual Property Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                All content, including but not limited to text, graphics, logos,
                images, calculators, tools, and software on Cashmela are the
                exclusive property of Cashmela or its content suppliers and are
                protected by international copyright and trademark laws.
              </p>
              <p className="mb-4 leading-relaxed">
                <span className="font-semibold">Limited License:</span> We grant
                you a non-exclusive, non-transferable, limited license to access
                and use the Platform for personal, non-commercial purposes only.
                This license does not permit you to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Reproduce or duplicate any content</li>
                <li>Modify or create derivative works</li>
                <li>Distribute or resell content</li>
                <li>Remove or alter copyright notices</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section6" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="mb-4 leading-relaxed">
                <span className="font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </span>
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  Cashmela is provided on an "AS IS" and "AS AVAILABLE" basis
                  without warranties of any kind
                </li>
                <li>
                  We disclaim all express and implied warranties, including
                  fitness for a particular purpose
                </li>
                <li>
                  We are not liable for any indirect, incidental, special, or
                  consequential damages arising from your use of the Platform
                </li>
                <li>
                  Our total liability to you shall not exceed the amount you
                  paid to us (if any) in the 12 months preceding the claim
                </li>
                <li>
                  We are not responsible for delays, failures, or errors in
                  connecting you with lenders
                </li>
                <li>
                  We do not guarantee loan approval or specific interest rates
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                <span className="font-semibold">Important:</span> Loan
                decisions, interest rates, and terms are determined solely by
                the lending partner, not by Cashmela.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section7" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                7. Indemnification
              </h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Cashmela, its
                owners, employees, and agents from any claims, damages, losses,
                or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 pl-2">
                <li>Your violation of these Terms and Conditions</li>
                <li>Your use of the Platform or services</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Your violation of third-party rights</li>
                <li>Any false or misleading information you provide</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="section8" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                8. Third-Party Services & Links
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela may contain links to third-party websites and services.
                We do not control, endorse, or assume responsibility for the
                content, accuracy, or practices of these external sites. Your
                use of third-party services is at your own risk and governed by
                their terms and conditions.
              </p>
              <p className="leading-relaxed">
                When you apply for a loan through Cashmela, your information is
                shared with lending partners who are RBI-regulated but are
                separate entities. Their terms, privacy policies, and practices
                apply to their services.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section9" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                9. Data, Privacy & Security
              </h2>
              <p className="mb-4 leading-relaxed">
                Your use of Cashmela is also governed by our Privacy Policy.
                Please review it carefully to understand our data collection,
                usage, and protection practices.
              </p>
              <div className="bg-slate-100 p-4 rounded mb-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">
                  Key Privacy Points:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                  <li>
                    We collect personal and financial information for loan
                    processing only
                  </li>
                  <li>Data is encrypted and stored securely</li>
                  <li>
                    We share data only with partner lenders for application
                    processing
                  </li>
                  <li>
                    We comply with RBI, NPCI, and other regulatory requirements
                  </li>
                  <li>
                    You can request data access, correction, or deletion per RBI
                    guidelines
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section10" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                10. Modification of Terms
              </h2>
              <p className="leading-relaxed">
                Cashmela reserves the right to modify these Terms and Conditions
                at any time. Changes will be effective immediately upon posting
                to the Platform. Your continued use of Cashmela after any
                modifications constitutes your acceptance of the updated Terms.
                We encourage you to review this page periodically for any
                changes.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section11" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                11. Termination of Account
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela may suspend or terminate your account immediately,
                without notice, if:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
                <li>You violate these Terms and Conditions</li>
                <li>You engage in fraudulent or illegal activities</li>
                <li>You provide false information</li>
                <li>We believe your account poses a security risk</li>
              </ul>
              <p className="leading-relaxed">
                Upon termination, your right to use the Platform ceases
                immediately. Surviving provisions of these Terms will continue
                to apply.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section12" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                12. Governing Law & Dispute Resolution
              </h2>
              <p className="mb-4 leading-relaxed">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of India, without regard to conflicts
                of law principles.
              </p>
              <p className="mb-4 leading-relaxed">
                <span className="font-semibold">
                  Alternative Dispute Resolution (ADR):
                </span>{" "}
                Before pursuing legal action, we encourage parties to attempt
                resolution through good faith negotiation. If a dispute cannot
                be resolved, it shall be subject to the exclusive jurisdiction
                of courts in India.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Regulatory Complaints:</span> If
                you have complaints related to lending practices, you may
                escalate to the Reserve Bank of India (RBI) or file a complaint
                with the Reserve Bank-Integrated Ombudsman Scheme (RBIOS).
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-8 mt-8 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Contact Us
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us at:
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
                      Address:
                    </span>
                    <span className="text-slate-700 ml-2">Cashmela, India</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Disclaimer:
                </span>{" "}
                This Terms and Conditions document is for general informational
                purposes. While we've made efforts to ensure accuracy, it may
                not cover all aspects of our services or your rights. For
                specific legal advice, please consult with a qualified legal
                professional. Cashmela reserves the right to modify these terms
                at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
