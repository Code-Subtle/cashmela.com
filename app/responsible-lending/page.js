import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Responsible Lending | Cashmela - Ethical Borrowing Practices",
  description:
    "Cashmela's commitment to responsible lending. Learn about ethical borrowing, debt management, consumer protection, and how to borrow responsibly.",
  keywords:
    "responsible lending, ethical borrowing, consumer protection, debt management, fair lending",
  alternates: {
    canonical: "https://cashmela.com/responsible-lending",
  },
  openGraph: {
    title: "Responsible Lending | Cashmela",
    description:
      "Cashmela - Committed to responsible lending practices and consumer protection.",
    url: "https://cashmela.com/responsible-lending",
    type: "website",
  },
};

const responsibleLendingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cashmela.com/responsible-lending",
  name: "Responsible Lending",
  description:
    "Cashmela Responsible Lending - Our commitment to ethical practices and consumer protection",
  url: "https://cashmela.com/responsible-lending",
  creator: {
    "@type": "Organization",
    name: "Cashmela",
    url: "https://cashmela.com",
  },
  datePublished: "2025-01-01",
  dateModified: "2026-04-09",
};

export default function ResponsibleLendingPage() {
  return (
    <>
      <Script
        id="responsible-lending-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(responsibleLendingSchema),
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Responsible Lending Commitment
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">
              Cashmela's dedication to ethical borrowing and consumer protection
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Last Updated: April 2026 | Our Ongoing Commitment
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Cashmela is committed to transforming the lending landscape by
              promoting responsible borrowing, financial literacy, and consumer
              protection. We believe financial inclusion should not come at the
              cost of consumer welfare. Our goal is to empower Indians to make
              informed borrowing decisions while protecting them from predatory
              lending practices.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-slate-700">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                1. Our Responsible Lending Principles
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela operates on these core principles:
              </p>

              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                      <span className="text-green-700 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Transparency
                    </h3>
                    <p className="text-sm leading-relaxed">
                      All loan terms, interest rates, fees, and conditions are
                      clearly disclosed. No hidden charges or surprise
                      conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Affordability
                    </h3>
                    <p className="text-sm leading-relaxed">
                      We help you find loans with EMIs that fit your budget. We
                      assess whether you can genuinely afford the borrowing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Consumer Protection
                    </h3>
                    <p className="text-sm leading-relaxed">
                      We only partner with RBI-regulated lenders who comply with
                      consumer protection laws and ethical lending standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                      <span className="text-green-700 font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Financial Literacy
                    </h3>
                    <p className="text-sm leading-relaxed">
                      We educate borrowers about smart borrowing, debt
                      management, and financial health through guides and
                      resources.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                      <span className="text-green-700 font-bold">5</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Fair Practice
                    </h3>
                    <p className="text-sm leading-relaxed">
                      We treat all customers with respect and fairness,
                      regardless of background, credit history, or financial
                      status.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                2. What We Do to Promote Responsible Lending
              </h2>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                A. Partner Selection & Compliance
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
                <li>
                  All lending partners are RBI-regulated and comply with Reserve
                  Bank guidelines
                </li>
                <li>
                  We verify lender credentials and regulatory standing before
                  partnering
                </li>
                <li>
                  We monitor partner practices for fair treatment and compliance
                </li>
                <li>
                  We discontinue partnerships with lenders engaging in unethical
                  practices
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                B. Transparent Information
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
                <li>
                  Display interest rates, processing fees, and tenure clearly
                </li>
                <li>
                  Provide comparative analysis to help you make informed choices
                </li>
                <li>Use EMI calculators showing exact monthly obligations</li>
                <li>Disclose all terms and conditions before application</li>
                <li>Explain debt-to-income ratios and affordability factors</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                C. Affordability Assessments
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
                <li>
                  Recommend loan amounts based on your income and obligations
                </li>
                <li>
                  Highlight potential financial stress from over-borrowing
                </li>
                <li>Suggest debt consolidation only when it genuinely helps</li>
                <li>Consider your credit history fairly in matching process</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                D. Consumer Education
              </h3>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Create guides on personal finance and smart borrowing</li>
                <li>Publish articles on debt management strategies</li>
                <li>Explain credit scoring and how to improve scores</li>
                <li>
                  Share stories of financial recovery and responsible borrowing
                </li>
                <li>Offer free financial calculators and assessment tools</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                3. How to Borrow Responsibly
              </h2>
              <p className="mb-4 leading-relaxed">
                Follow these guidelines to ensure smart borrowing:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Borrow Only When Necessary
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Take loans for genuine needs like education, home
                    improvement, or debt consolidation - not for lifestyle
                    inflation or unnecessary expenses.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Assess Your Affordability
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Ensure the monthly EMI doesn't exceed 30-40% of your net
                    monthly income. Use our EMI calculators to verify
                    affordability.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Compare Multiple Options
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Don't settle for the first offer. Use Cashmela to compare
                    rates, terms, and conditions from multiple lenders before
                    deciding.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Read Terms Carefully
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Thoroughly review the loan agreement, interest rate, fees,
                    tenure, and prepayment conditions before signing.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Avoid Over-Borrowing
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Don't borrow more than needed just because you're eligible.
                    Borrowing more increases interest costs and financial
                    stress.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Make Timely Payments
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Pay EMIs on time. Late payments damage your credit score and
                    trigger penalties. Set reminders or auto-pay if needed.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Monitor Your Credit Score
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Regularly check your CIBIL/credit score. Better scores
                    unlock lower interest rates on future borrowing.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    ✓ Plan Debt Repayment
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Have a plan to clear debts. Avoid accumulating multiple
                    loans unless absolutely necessary and managed carefully.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                4. What NOT to Do When Borrowing
              </h2>
              <p className="mb-4 leading-relaxed">
                Avoid these practices that can lead to financial hardship:
              </p>

              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <div>
                    <span className="font-semibold">
                      Don't borrow from unregulated lenders:
                    </span>{" "}
                    Stick to banks and RBI-regulated NBFCs only to avoid
                    predatory lending
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <div>
                    <span className="font-semibold">
                      Don't pay upfront fees:
                    </span>{" "}
                    No legitimate lender asks for fees before loan disbursement
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <div>
                    <span className="font-semibold">
                      Don't miss payments intentionally:
                    </span>{" "}
                    Late payments affect credit and attract penalties
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <div>
                    <span className="font-semibold">Don't over-commit:</span>{" "}
                    Avoid borrowing more than you can comfortably repay
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <div>
                    <span className="font-semibold">
                      Don't ignore documents:
                    </span>{" "}
                    Always read and understand all loan terms before signing
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <div>
                    <span className="font-semibold">
                      Don't borrow for loans:
                    </span>{" "}
                    Avoid taking loans specifically to repay other debts (unless
                    consolidating at lower rate)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-red-600">✗</span>
                  <div>
                    <span className="font-semibold">
                      Don't provide personal data to unverified sources:
                    </span>{" "}
                    Be cautious of phishing and fraud attempts
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                5. Understanding Loan Terms & Conditions
              </h2>
              <p className="mb-4 leading-relaxed">
                Every loan document includes important information. Understand
                these key terms:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Interest Rate (Rate p.a.)
                  </h3>
                  <p className="text-sm">
                    Annual percentage rate you pay on borrowed amount. Compare
                    rates carefully.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Processing Fee
                  </h3>
                  <p className="text-sm">
                    One-time fee charged for loan processing. Typically 1-3% of
                    loan amount.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    EMI (Equated Monthly Installment)
                  </h3>
                  <p className="text-sm">
                    Fixed monthly payment including principal + interest. Plan
                    budget around this.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Tenure/Duration
                  </h3>
                  <p className="text-sm">
                    Loan repayment period in months/years. Longer tenure = lower
                    EMI but higher total interest.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Prepayment Charges
                  </h3>
                  <p className="text-sm">
                    Fee for closing loan early. Some lenders waive this; verify
                    terms.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Late Payment Penalty
                  </h3>
                  <p className="text-sm">
                    Extra fees charged if EMI is not paid on time. Avoid by
                    paying on schedule.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                6. Debt Management Strategies
              </h2>
              <p className="mb-4 leading-relaxed">
                If you're managing multiple debts, consider these strategies:
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Debt Consolidation Loan
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Combine multiple debts (credit cards, personal loans) into a
                single loan with lower interest rate. This simplifies payments
                but ensure the consolidated rate is indeed lower.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Debt Payoff Methods
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
                <li>
                  <span className="font-semibold">Snowball Method:</span> Pay
                  smallest debt first, then move to larger ones. Provides
                  psychological wins.
                </li>
                <li>
                  <span className="font-semibold">Avalanche Method:</span> Pay
                  highest interest debt first. Saves more money on interest.
                </li>
                <li>
                  <span className="font-semibold">Balanced Approach:</span> Mix
                  both methods based on your financial situation and motivation.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Prevent Debt Spiral
              </h3>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Build emergency fund to avoid additional borrowing during
                  hardship
                </li>
                <li>Limit new debt while managing existing loans</li>
                <li>
                  Track spending and avoid lifestyle inflation with salary
                  increases
                </li>
                <li>
                  Get professional financial advice if debt feels overwhelming
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                7. Financial Hardship & Assistance
              </h2>
              <p className="mb-4 leading-relaxed">
                If you face financial difficulties in repaying loans:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Communicate with Your Lender
                  </h3>
                  <p className="text-sm">
                    Contact lender immediately. Many offer hardship programs,
                    payment deferrals, or restructuring options.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Loan Restructuring
                  </h3>
                  <p className="text-sm">
                    Lenders may extend tenure, reduce interest rate, or adjust
                    payment schedule to make loans manageable.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Seek Financial Counseling
                  </h3>
                  <p className="text-sm">
                    Non-profit organizations offer free financial counseling and
                    debt management plans.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Know Your Rights
                  </h3>
                  <p className="text-sm">
                    RBI has regulations protecting borrowers from harassment and
                    predatory collection practices. You have legal protections.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                8. Predatory Lending Red Flags
              </h2>
              <p className="mb-4 leading-relaxed">
                Watch out for these warning signs of predatory lending:
              </p>

              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span>
                    <span className="font-semibold">Upfront fees:</span>{" "}
                    Legitimate lenders don't charge before providing loan
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span>
                    <span className="font-semibold">
                      Unusually high interest rates:
                    </span>{" "}
                    Compare with market rates; outliers may indicate predatory
                    practices
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span>
                    <span className="font-semibold">
                      Pressure to decide quickly:
                    </span>{" "}
                    Legitimate lenders allow time for informed decision
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span>
                    <span className="font-semibold">Guaranteed approval:</span>{" "}
                    All real loans involve credit assessment; guarantees are
                    suspicious
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span>
                    <span className="font-semibold">Unclear terms:</span> Vague
                    documentation is a major red flag
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span>
                    <span className="font-semibold">Harassment tactics:</span>{" "}
                    Threats, abusive language, or illegal collection practices
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                9. Consumer Rights & Grievance Redressal
              </h2>
              <p className="mb-4 leading-relaxed">
                You have important rights as a borrower:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
                <li>
                  <span className="font-semibold">Right to Information:</span>{" "}
                  Lenders must disclose all terms, fees, and conditions
                  transparently
                </li>
                <li>
                  <span className="font-semibold">
                    Right to Fair Treatment:
                  </span>{" "}
                  No discrimination based on caste, gender, religion, or
                  disability
                </li>
                <li>
                  <span className="font-semibold">Right to Privacy:</span>{" "}
                  Personal information should be protected and not shared
                  without consent
                </li>
                <li>
                  <span className="font-semibold">
                    Right to Grievance Redressal:
                  </span>{" "}
                  Lenders must have systems to address complaints
                </li>
                <li>
                  <span className="font-semibold">Right to Ombudsman:</span>{" "}
                  File complaints with RBI-Integrated Ombudsman Scheme if
                  unresolved
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                File a Complaint
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-semibold">Lender Grievance:</span>{" "}
                    Contact lender's grievance department first
                  </li>
                  <li>
                    <span className="font-semibold">RBI Ombudsman:</span>{" "}
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      www.rbi.org.in
                    </a>{" "}
                    - for unresolved banking complaints
                  </li>
                  <li>
                    <span className="font-semibold">Consumer Forum:</span> File
                    with state consumer protection authority
                  </li>
                  <li>
                    <span className="font-semibold">NBFC Complaints:</span>{" "}
                    National Credit Federation website for NBFC-related
                    grievances
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                10. Resources & Support
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela provides resources to help you borrow responsibly:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    📖 Educational Content
                  </h3>
                  <p className="text-sm">
                    Visit our blog for guides on loans, credit scores, debt
                    management, and financial planning
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    🧮 Financial Tools
                  </h3>
                  <p className="text-sm">
                    Use our EMI calculator, loan eligibility checker, and
                    debt-to-income assessment tools
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    📞 Customer Support
                  </h3>
                  <p className="text-sm">
                    Our support team is available to answer questions and
                    provide guidance
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    🤝 Expert Resources
                  </h3>
                  <p className="text-sm">
                    Connect with financial experts and advisors for personalized
                    guidance
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="pt-8 mt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Questions About Responsible Borrowing?
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela is here to help. Reach out for guidance on responsible
                borrowing:
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
                      Available during business hours
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Our Commitment:
                </span>{" "}
                Cashmela is committed to continuous improvement of responsible
                lending practices. We welcome feedback and suggestions to make
                borrowing safer and more transparent for all Indians. Together,
                we can build a financially healthier society.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
