import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Disclaimer | Cashmela - Loan Comparison & Financial Information",
  description:
    "Important disclaimer regarding Cashmela's loan comparison services. We are not a lender, and loans are subject to lender approval. Please read our disclaimers carefully.",
  keywords:
    "disclaimer, loan disclaimer, financial disclaimer, terms of use, liability waiver",
  alternates: {
    canonical: "https://cashmela.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Cashmela",
    description:
      "Read Cashmela's important disclaimers regarding our loan comparison and financial services.",
    url: "https://cashmela.com/disclaimer",
    type: "website",
  },
};

const disclaimerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cashmela.com/disclaimer",
  name: "Disclaimer",
  description:
    "Cashmela Disclaimer - Important legal notices regarding our services and limitations",
  url: "https://cashmela.com/disclaimer",
  creator: {
    "@type": "Organization",
    name: "Cashmela",
    url: "https://cashmela.com",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Script
        id="disclaimer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Disclaimer
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">
              Important information about our services, limitations, and your
              responsibilities
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Last Updated: April 2026
            </p>
          </div>

          {/* Critical Alert */}
          <div className="mb-8 p-6 bg-red-50 border-2 border-red-300 rounded-lg">
            <p className="text-red-900 font-bold text-lg mb-2">
              ⚠️ Important Disclaimer
            </p>
            <p className="text-red-800 leading-relaxed">
              Please read this disclaimer carefully. Cashmela is a loan
              comparison and lead generation platform, NOT a lender. Loans are
              provided by RBI-regulated banks and NBFCs at their sole discretion
              and subject to their approval. Cashmela does not guarantee loan
              approval, interest rates, or any specific terms.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-slate-700">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                1. Nature of Cashmela's Services
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela operates as an intermediary, loan comparison platform,
                and lead generation service. We are{" "}
                <span className="font-bold text-red-600">
                  NOT a direct lender
                </span>{" "}
                and do not:
              </p>
              <ul className="space-y-3 mb-4 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <span>Extend credit or provide loans directly</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <span>Determine loan eligibility or creditworthiness</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <span>
                    Guarantee any specific interest rate or loan amount
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <span>Approve or reject loan applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <span>Disburse funds or manage loan accounts</span>
                </li>
              </ul>
              <p className="leading-relaxed text-base bg-yellow-50 p-4 rounded border border-yellow-200">
                <span className="font-semibold">What we do:</span> We compare
                loan products, match qualified applicants with lenders, provide
                financial information and tools, and facilitate loan
                applications on your behalf with lending partners.
              </p>
            </section>

            {/* Section 2 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                2. No Guarantee of Loan Approval
              </h2>
              <p className="mb-4 leading-relaxed">
                <span className="font-bold">
                  Cashmela cannot and does not guarantee:
                </span>
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
                <li>Approval of your loan application by any lender</li>
                <li>Best or competitive interest rates</li>
                <li>Quick disbursement (timelines depend on lenders)</li>
                <li>Specific loan amounts or terms</li>
                <li>Processing within any guaranteed timeframe</li>
                <li>Matching with any specific lender</li>
              </ul>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-orange-700">
                    Lender's Decision:
                  </span>{" "}
                  Loan approval, interest rates, and terms are entirely at the
                  discretion of the lending partner. Factors such as credit
                  score, income verification, employment status, and
                  debt-to-income ratio will be independently assessed by
                  lenders.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                3. Financial & Investment Information Disclaimer
              </h2>
              <p className="mb-4 leading-relaxed">
                All financial information, articles, guides, calculators, and
                tools available on Cashmela are provided for general educational
                and informational purposes only. They are{" "}
                <span className="font-bold">
                  NOT investment advice, financial advice, or legal advice
                </span>
                .
              </p>
              <p className="mb-4 leading-relaxed">
                <span className="font-semibold">Accuracy of Information:</span>{" "}
                While we strive to maintain accurate information, we do not
                guarantee:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>Accuracy, completeness, or timeliness of all content</li>
                <li>That calculations are free from errors</li>
                <li>That interest rates displayed are current or binding</li>
                <li>That all lender offers are still available</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                <span className="font-bold">Consult Professionals:</span> For
                investment, tax, or legal decisions, please consult qualified
                financial advisors, chartered accountants, or lawyers.
              </p>
            </section>

            {/* Section 4 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                4. Calculator Limitations
              </h2>
              <p className="mb-4 leading-relaxed">
                EMI calculators, eligibility assessments, and other financial
                tools on Cashmela are:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4 pl-2">
                <li>Provided for approximate calculations only</li>
                <li>Not binding or definitive</li>
                <li>
                  Subject to variations based on different lender criteria
                </li>
                <li>
                  May not account for processing fees, insurance, or other
                  charges
                </li>
                <li>Should not be considered as actual loan terms</li>
              </ul>
              <p className="leading-relaxed">
                <span className="font-semibold">Actual Loan Terms:</span> Final
                EMI, interest rate, and terms will be determined by the lender
                and may differ significantly from calculator results.
              </p>
            </section>

            {/* Section 5 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                5. Data & Personal Information
              </h2>
              <p className="mb-4 leading-relaxed">
                By using Cashmela and submitting your information:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
                <li>
                  You authorize us to share your data with lending partners for
                  loan processing
                </li>
                <li>
                  You understand that lenders will conduct credit checks and
                  verify information
                </li>
                <li>
                  You acknowledge that multiple enquiries may impact your credit
                  score
                </li>
                <li>
                  You consent to receiving communications from Cashmela and
                  lenders
                </li>
              </ul>
              <p className="leading-relaxed bg-blue-50 p-4 rounded border border-blue-200">
                <span className="font-semibold">Credit Impact:</span> Each
                lender enquiry may result in a hard enquiry to credit bureaus
                (CIBIL, Experian, etc.), which can temporarily lower your credit
                score. Cashmela is not responsible for credit score changes.
              </p>
            </section>

            {/* Section 6 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                6. Third-Party Content & Links
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela may contain links to third-party websites (lender
                websites, financial blogs, regulatory sites). We are not
                responsible for:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4 pl-2">
                <li>Content, accuracy, or practices of third-party sites</li>
                <li>Changes or unavailability of external links</li>
                <li>Privacy practices of third-party websites</li>
                <li>Technical issues on linked sites</li>
              </ul>
              <p className="leading-relaxed">
                <span className="font-semibold">Your Responsibility:</span>{" "}
                Review third-party terms and policies before using their
                services.
              </p>
            </section>

            {/* Section 7 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                7. Regulatory Compliance
              </h2>
              <p className="mb-4 leading-relaxed">
                All lending partners on Cashmela are RBI-regulated entities
                (banks and NBFCs). However:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-2">
                <li>
                  Cashmela is not a regulated entity under RBI, SEBI, or other
                  financial regulators
                </li>
                <li>We do not fall under deposit insurance schemes</li>
                <li>We do not have regulatory licensing like banks or NBFCs</li>
                <li>
                  Regulation applies to lending partners, not to our
                  comparison/matching services
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                8. Platform Availability & Technical Issues
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela is provided on an "AS IS" basis. We do not warrant:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4 pl-2">
                <li>Uninterrupted availability of the Platform</li>
                <li>Freedom from errors, bugs, or technical issues</li>
                <li>Data backup or recovery services</li>
                <li>Compatibility with all devices or browsers</li>
              </ul>
              <p className="leading-relaxed">
                <span className="font-semibold">Maintenance & Downtime:</span>{" "}
                Cashmela may undergo scheduled or emergency maintenance, during
                which services may be temporarily unavailable.
              </p>
            </section>

            {/* Section 9 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                9. Risk Acknowledgment
              </h2>
              <p className="mb-4 leading-relaxed">
                By using Cashmela, you acknowledge and assume the following
                risks:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  Risk of your personal information being shared with lenders
                </li>
                <li>Risk of credit score impact from multiple enquiries</li>
                <li>
                  Risk of receiving unsolicited communications from lenders
                </li>
                <li>
                  Risk of loan terms being unfavorable compared to expectations
                </li>
                <li>Risk of loan rejection despite using our platform</li>
                <li>
                  Risk of identity theft or unauthorized use of information
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                10. No Liability for Lender Actions
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela is NOT responsible or liable for:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>Lender policies, practices, or decisions</li>
                <li>Unfair or deceptive practices by lenders</li>
                <li>Delays in loan processing or fund disbursement</li>
                <li>Hidden charges or undisclosed fees by lenders</li>
                <li>Breach of privacy by lenders</li>
                <li>Quality of customer service from lenders</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                <span className="font-bold">Lender Disputes:</span> Complaints
                against lenders should be directed to the respective lender's
                grievance redressal department or the RBI.
              </p>
            </section>

            {/* Section 11 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                11. Limitation of Liability
              </h2>
              <div className="bg-slate-100 p-4 rounded border border-slate-300 mb-4">
                <p className="text-sm font-bold text-slate-900">
                  CASHMELA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR
                  USE OF THE PLATFORM, EVEN IF ADVISED OF THE POSSIBILITY OF
                  SUCH DAMAGES.
                </p>
              </div>
              <p className="leading-relaxed">
                Our total liability to you shall not exceed any amount paid by
                you to Cashmela (if any) in the preceding 12 months.
              </p>
            </section>

            {/* Section 12 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                12. No Professional Advice
              </h2>
              <p className="mb-4 leading-relaxed">
                Nothing on Cashmela constitutes advice. We provide:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4 pl-2">
                <li>General informational content for educational purposes</li>
                <li>Loan comparison tools without recommendations</li>
                <li>Financial guides without personalized advice</li>
              </ul>
              <p className="leading-relaxed">
                <span className="font-bold">
                  You must independently evaluate
                </span>{" "}
                whether a loan product is suitable for your financial situation.
                Consider consulting with financial professionals before
                borrowing.
              </p>
            </section>

            {/* Section 13 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                13. Responsible Lending
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela is committed to responsible lending practices. However:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4 pl-2">
                <li>We encourage borrowing only when necessary</li>
                <li>Compare interest rates and review loan terms carefully</li>
                <li>Ensure you can afford the EMI before borrowing</li>
                <li>
                  Avoid over-borrowing that could lead to financial distress
                </li>
              </ul>
              <p className="leading-relaxed">
                If you have concerns about predatory lending or unfair
                practices, report to the RBI or consumer forums.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-8 mt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Grievances & Support
              </h2>
              <p className="mb-4 leading-relaxed">
                For questions about this disclaimer or our services:
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
                      RBI Ombudsman:
                    </span>
                    <span className="text-slate-700 ml-2">
                      For lending-related complaints: www.rbi.org.in
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Last Updated:
                </span>{" "}
                April 2026 | This disclaimer is subject to change without
                notice. Continued use of Cashmela indicates acceptance of this
                disclaimer.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
