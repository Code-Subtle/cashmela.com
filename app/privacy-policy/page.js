import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Privacy Policy | Cashmela - Loan Comparison Platform",
  description:
    "Learn how Cashmela collects, uses, and protects your personal and financial information. We prioritize your privacy and comply with all data protection regulations.",
  keywords:
    "privacy policy, data protection, personal information, financial data, privacy",
  alternates: {
    canonical: "https://cashmela.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Cashmela",
    description:
      "Cashmela Privacy Policy - How we protect your personal and financial data.",
    url: "https://cashmela.com/privacy-policy",
    type: "website",
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cashmela.com/privacy-policy",
  name: "Privacy Policy",
  description:
    "Cashmela Privacy Policy - Information about data collection, use, and protection",
  url: "https://cashmela.com/privacy-policy",
  creator: {
    "@type": "Organization",
    name: "Cashmela",
    url: "https://cashmela.com",
  },
  datePublished: "2025-01-01",
  dateModified: "2026-04-09",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="privacy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">
              How Cashmela protects your personal and financial information
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
                  1. Information We Collect
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  2. How We Use Information
                </a>
              </li>
              <li>
                <a
                  href="#section3"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  3. Data Sharing
                </a>
              </li>
              <li>
                <a
                  href="#section4"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  4. Data Retention
                </a>
              </li>
              <li>
                <a
                  href="#section5"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  5. Cookies & Tracking
                </a>
              </li>
              <li>
                <a
                  href="#section6"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  6. Security Measures
                </a>
              </li>
              <li>
                <a
                  href="#section7"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  7. Your Rights
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
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-slate-700">
            {/* Section 1 */}
            <section id="section1">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela collects information from you in several ways to
                provide our services effectively and securely:
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">
                A. Information You Provide Directly
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
                <li>
                  <span className="font-semibold">Personal Information:</span>{" "}
                  Name, email address, phone number, date of birth, gender
                </li>
                <li>
                  <span className="font-semibold">Address Information:</span>{" "}
                  Current address, permanent address, state, city, PIN code
                </li>
                <li>
                  <span className="font-semibold">
                    Identification Documents:
                  </span>{" "}
                  PAN (Permanent Account Number), Aadhaar, voter ID, driver's
                  license
                </li>
                <li>
                  <span className="font-semibold">Employment Information:</span>{" "}
                  Employer name, designation, employment type, years of
                  experience
                </li>
                <li>
                  <span className="font-semibold">Financial Information:</span>{" "}
                  Monthly income, annual income, existing loans, EMIs, credit
                  card details, assets, liabilities
                </li>
                <li>
                  <span className="font-semibold">Bank Details:</span> Account
                  number, IFSC code, bank name
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                B. Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  <span className="font-semibold">Device & Technical Data:</span>{" "}
                  Device type, browser, operating system, IP address, and submission timestamps (specifically recorded during form submissions)
                </li>
                <li>
                  <span className="font-semibold">Usage Data:</span> Pages
                  visited, time spent, clicks, search queries
                </li>
                <li>
                  <span className="font-semibold">Cookies & Pixels:</span>{" "}
                  Tracking technologies to understand your behavior
                </li>
                <li>
                  <span className="font-semibold">Location Data:</span> General
                  location based on IP address (not precise)
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="section2" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">
                We use your information for legitimate business purposes:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Loan Processing & Matching
                  </h3>
                  <p className="text-sm">
                    Evaluate your eligibility, compare loan products, match with
                    suitable lenders, and share your application with lending
                    partners
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Communication
                  </h3>
                  <p className="text-sm">
                    Send application updates, loan status, verification
                    requests, and customer support messages
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Service Improvement
                  </h3>
                  <p className="text-sm">
                    Analyze user behavior, identify trends, improve features,
                    and enhance your experience
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Research & Analytics
                  </h3>
                  <p className="text-sm">
                    Conduct market research, generate anonymized reports, and
                    understand industry trends
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Marketing & Personalization
                  </h3>
                  <p className="text-sm">
                    Send promotional offers, personalize content, and display
                    relevant products (only if you consent)
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Legal & Compliance
                  </h3>
                  <p className="text-sm">
                    Comply with RBI, tax, and other regulatory requirements,
                    prevent fraud, and maintain records
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Security & Fraud Prevention
                  </h3>
                  <p className="text-sm">
                    Record IP addresses and timestamps upon form submissions to prevent spam, unauthorized access, and misuse of our platform
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section3" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                3. Data Sharing & Third Parties
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela respects your privacy and limits data sharing:
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">
                Who We Share Data With:
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
                <li>
                  <span className="font-semibold">Partner Lenders:</span> Banks
                  and NBFCs for loan processing and eligibility assessment (with
                  your consent)
                </li>
                <li>
                  <span className="font-semibold">Service Providers:</span>{" "}
                  Payment processors, analytics providers, hosting providers
                  (all bound by NDAs)
                </li>
                <li>
                  <span className="font-semibold">Credit Bureaus:</span> CIBIL,
                  Experian, Equifax for credit report retrieval (if authorized)
                </li>
                <li>
                  <span className="font-semibold">Legal Authorities:</span> When
                  required by law or court orders
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Who We DO NOT Share Data With:
              </h3>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  We do NOT sell your personal information to third parties
                </li>
                <li>
                  We do NOT share data with unrelated companies for marketing
                </li>
                <li>We do NOT rent or lease your contact information</li>
                <li>
                  We do NOT share financial details with unauthorized parties
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section4" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                4. Data Retention
              </h2>
              <p className="mb-4 leading-relaxed">
                We retain your data as long as necessary to provide our services
                and comply with legal obligations:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                  <li>
                    <span className="font-semibold">Active Applications:</span>{" "}
                    Retained while your application is in progress
                  </li>
                  <li>
                    <span className="font-semibold">Loan Records:</span>{" "}
                    Retained for 7 years for regulatory compliance
                  </li>
                  <li>
                    <span className="font-semibold">Marketing Lists:</span>{" "}
                    Retained until you opt-out or for 2 years from last
                    interaction
                  </li>
                  <li>
                    <span className="font-semibold">Tax Records:</span> Retained
                    for 7 years per Indian taxation laws
                  </li>
                  <li>
                    <span className="font-semibold">User Accounts:</span>{" "}
                    Deleted upon request (subject to legal holds)
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section5" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                5. Cookies & Tracking Technologies
              </h2>
              <p className="mb-4 leading-relaxed">
                We use cookies and similar technologies to enhance your
                experience. Please refer to our{" "}
                <a
                  href="/cookie-policy"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Cookie Policy
                </a>{" "}
                for complete details about:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Types of cookies we use (functional, analytical, marketing)
                </li>
                <li>How to control and manage your cookie preferences</li>
                <li>Third-party tracking tools and services</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section6" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                6. Data Security Measures
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela implements comprehensive security measures to protect
                your information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Technical Security
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• 256-bit SSL encryption</li>
                    <li>• Secure firewalls</li>
                    <li>• Regular security audits</li>
                    <li>• Multi-factor authentication</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Operational Security
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• Role-based access control</li>
                    <li>• Employee training & NDAs</li>
                    <li>• Data backup procedures</li>
                    <li>• Incident response plans</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed">
                <span className="font-semibold">Note:</span> While we use
                industry-standard security, no system is 100% secure. We're
                committed to resolving any security issues promptly.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section7" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <div>
                    <span className="font-semibold block">Right to Access</span>
                    <span className="text-sm">
                      Request a copy of your data that we hold
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <div>
                    <span className="font-semibold block">
                      Right to Correction
                    </span>
                    <span className="text-sm">
                      Correct or update inaccurate information
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <div>
                    <span className="font-semibold block">
                      Right to Deletion
                    </span>
                    <span className="text-sm">
                      Request deletion of your data (subject to legal holds)
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <div>
                    <span className="font-semibold block">
                      Right to Opt-Out
                    </span>
                    <span className="text-sm">
                      Opt-out of marketing communications anytime
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <div>
                    <span className="font-semibold block">
                      Right to Portability
                    </span>
                    <span className="text-sm">
                      Receive your data in a structured, portable format
                    </span>
                  </div>
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:info@cashmela.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  info@cashmela.com
                </a>
                . We'll respond within 30 days.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section8" className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                8. Third-Party Services & Links
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela may contain links to third-party websites. We are not
                responsible for:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4 pl-2">
                <li>Privacy practices of external websites</li>
                <li>Content or practices of third parties</li>
                <li>Security of third-party platforms</li>
              </ul>
              <p className="leading-relaxed">
                When you click third-party links, you leave Cashmela and enter
                their privacy environments. We recommend reviewing their privacy
                policies before sharing information.
              </p>
            </section>

            {/* Section 9 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Cashmela is not directed to individuals under 18 years of age.
                We do not knowingly collect personal information from children.
                If we discover we've collected data from a minor without
                parental consent, we'll delete it immediately.
              </p>
            </section>

            {/* Section 10 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                10. International Transfers
              </h2>
              <p className="mb-4 leading-relaxed">
                Your data may be transferred to and processed in countries other
                than India. We ensure appropriate safeguards and comply with
                data transfer regulations.
              </p>
            </section>

            {/* Section 11 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                11. Changes to Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically. The "Last
                Updated" date will reflect any changes. Significant changes will
                be communicated via email or site notice. Your continued use
                indicates acceptance.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-8 mt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Contact Us - Data Protection
              </h2>
              <p className="mb-4 leading-relaxed">
                For questions about privacy or to exercise your rights:
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
                      Within 30 days of request
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Regulatory Compliance:
                </span>{" "}
                Cashmela complies with RBI regulations, IT Rules, NPCI
                guidelines, and applicable data protection laws. For complaints
                to regulatory bodies, visit www.rbi.org.in or contact your
                nearest consumer forum.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
