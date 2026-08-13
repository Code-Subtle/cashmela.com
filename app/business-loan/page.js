import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title:
    "Business Loan India | MSME Loans | Unsecured Working Capital | Cashmela",
  description:
    "Get a business loan up to ₹1 crore with instant approval in 2 minutes. Low interest rates, fast disbursement for MSME expansion, working capital, and inventory. Apply now at Cashmela.",
  alternates: {
    canonical: "https://cashmela.com/business-loan",
  },
};

const financialProductSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "CashMela Business Loan",
  "description": "Get a business loan up to ₹1 crore with instant approval in 2 minutes. Low interest rates, fast disbursement for MSME expansion.",
  "provider": {
    "@type": "Organization",
    "name": "CashMela",
    "url": "https://cashmela.com"
  },
  "feesAndCommissionsSpecification": "https://cashmela.com/business-loan#fees",
  "interestRate": {
    "@type": "QuantitativeValue",
    "value": 11.00,
    "unitText": "annual percentage rate"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "50000"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a business loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A business loan is unsecured credit provided to entrepreneurs, MSMEs, and business owners to fund working capital, business expansion, inventory purchase, equipment, or any other business need without requiring collateral.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get a business loan approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With Cashmela, you can get instant approval within 2 minutes and funds disbursed in your business account within 24-48 hours of document submission.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum turnover required for business loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most lenders require a minimum annual turnover of ₹10-25 lakhs. For MSMEs, some lenders offer programs with lower turnover requirements based on GST registration and business history.",
      },
    },
    {
      "@type": "Question",
      name: "Can startups get business loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, some lenders offer loans to startups with a business plan, co-founder credentials, and initial business proof. Cashmela connects startups with supportive lenders.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed for a business loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical documents include PAN, Aadhaar, GST registration, business registration (UDYAM), ITR (last 2 years), bank statements (6-12 months), business plan, and director ID proof.",
      },
    },
  ],
};

export default function BusinessLoanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="business-loan-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }}
      />
      <Navbar />

      <main className="min-h-screen bg-white font-sans">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden bg-white pt-6 pb-16 md:pt-10 md:pb-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-heading font-bold leading-tight text-slate-900 mb-8">
                Scale Your Business with a{" "}
                <span className="text-[#9333EA]">₹1 Crore Business Loan</span>{" "}
                Instantly.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 font-sans leading-relaxed">
                Fuel your business growth with working capital, inventory
                funding, or expansion loans. Get instant approval, flexible
                tenures, and funds in 24-48 hours with minimal paperwork.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <Link
                  href="/apply?type=Business Loan"
                  className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform active:scale-95 text-center text-lg shrink-0"
                >
                  Apply Now
                </Link>
                <Link
                  href="/calculators/loan-eligibility-calculator"
                  className="bg-transparent hover:bg-slate-100 text-slate-800 border border-slate-300 font-sans font-semibold py-4 px-8 rounded-full transition-all active:scale-95 text-center text-lg shrink-0"
                >
                  Check Eligibility
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 md:gap-12 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    500K+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Businesses Funded
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    40+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Lender Partners
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    ₹5000Cr+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Disbursed
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Phone Image */}
            <div className="hidden md:flex justify-center items-center relative">
              <Image
                src="/Loan Mobile Mockup/business loan.webp"
                alt="Business loan app interface showing approval and disbursement for MSME"
                width={320}
                height={600}
                priority
                className="w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* AEO AI SEARCH QUICK SUMMARY */}
        <section className="bg-indigo-50/70 border-y border-indigo-100 py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white text-xs font-extrabold uppercase rounded-full mb-3">
                <span>⚡ AI Overview / Quick Summary</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Business Loans for MSMEs in India (2026 Summary)
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                CashMela connects Indian MSMEs, sole proprietors, and startups with collateral-free business loans up to ₹75 Lakhs. Interest rates start at 12.00% p.a., with flexible repayment tenures from 12 to 60 months, digital GST/bank statement verification, and 48-hour capital disbursement.
              </p>
            </div>
            <Link
              href="/apply?type=Business Loan"
              className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full text-sm shrink-0 shadow transition-transform active:scale-95"
            >
              Apply for Capital
            </Link>
          </div>
        </section>

        {/* 2. WHAT IS BUSINESS LOAN */}
        <section className="py-20 px-4 md:px-8 bg-white" id="what-is-it">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                What is a Business Loan?
              </h2>
              <p className="text-lg text-slate-600">
                A business loan is unsecured credit for entrepreneurs and MSMEs
                to fund working capital, business expansion, inventory,
                equipment purchase, or any other business need—without pledging
                collateral.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  Real-Life Example
                </h3>
                <p className="text-slate-600 mb-6">
                  Raj owns an e-commerce business and needs ₹30 lakhs for
                  inventory expansion. He applies on Cashmela, gets approved in
                  2 minutes, and receives the funds in 24 hours to scale
                  operations immediately.
                </p>
                <div className="bg-white rounded-xl p-5 border-l-4 border-purple-500 shadow-sm relative overflow-hidden">
                  <div className="absolute right-0 top-0 text-purple-100 transform translate-x-4 -translate-y-4">
                    <svg
                      className="w-24 h-24"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-800 font-semibold mb-1 relative z-10">
                    Loan Amount: ₹30 Lakhs
                  </p>
                  <p className="text-purple-600 font-bold text-lg relative z-10">
                    Time to Approval: 2 Minutes
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Instant Verification
                    </h4>
                    <p className="text-slate-600">
                      Get approved for your business loan in just 2 minutes.
                      AI-powered business verification without lengthy reviews.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Use For Any Business Purpose
                    </h4>
                    <p className="text-slate-600">
                      Working capital, inventory, equipment, expansion,
                      marketing, or debt consolidation—use funds as your
                      business requires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CHOOSE CASHMELA & 4. KEY BENEFITS */}
        <section className="py-20 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Why Choose Cashmela for Business Loans?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                India&apos;s most trusted MSME loan platform connecting you with
                40+ verified lenders offering unsecured business financing.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  Instant Approval
                </h3>
                <p className="text-sm text-slate-600">
                  Business loan approval in 2 minutes with GST-based
                  verification.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  Competitive Rates
                </h3>
                <p className="text-sm text-slate-600">
                  Starting from 11% p.a. with rates based on business profile.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  100% Paperless
                </h3>
                <p className="text-sm text-slate-600">
                  Digital application, e-sign documents, no in-person visits.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  High Loan Amount
                </h3>
                <p className="text-sm text-slate-600">
                  Borrow up to ₹1 crore based on business turnover and profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. COMPARISON TABLE */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
              Cashmela vs Traditional Banks for Business Loans
            </h2>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Features
                    </th>
                    <th className="p-5 font-bold border-b bg-purple-50 text-purple-900 text-lg border-l border-r border-purple-100">
                      Cashmela Business Loan
                    </th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Banks
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Approval Time
                    </td>
                    <td className="p-5 border-b border-purple-100 bg-purple-50/50 font-bold text-purple-700 border-l border-r">
                      2 Minutes
                    </td>
                    <td className="p-5 border-b border-slate-100">5-10 Days</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Disbursement
                    </td>
                    <td className="p-5 border-b border-purple-100 bg-purple-50/50 font-bold text-purple-700 border-l border-r">
                      24-48 Hours
                    </td>
                    <td className="p-5 border-b border-slate-100">7-15 Days</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Collateral
                    </td>
                    <td className="p-5 border-b border-purple-100 bg-purple-50/50 font-bold text-purple-700 border-l border-r">
                      Not Required
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      Often Required
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Interest Rate
                    </td>
                    <td className="p-5 border-b border-purple-100 bg-purple-50/50 font-bold text-purple-700 border-l border-r">
                      11% - 18% p.a.
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      12% - 20% p.a.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* LENDER RATES COMPARISON TABLE */}
        <section className="py-12 px-4 md:px-8 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
              Top Business Loan Interest Rates in India (2026)
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Compare business loan rates, tenures, and fees across top public and private sector lenders for MSME and startup capital.
            </p>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Lender</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Starting Rate (p.a.)</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Max Tenure</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Processing Fee</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-bold text-slate-900">CashMela MSME Partners</td>
                    <td className="p-5 border-b border-slate-100 font-bold text-purple-700">Starting at 11.00%</td>
                    <td className="p-5 border-b border-slate-100">Up to 60 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">HDFC Bank Business Growth Loan</td>
                    <td className="p-5 border-b border-slate-100">Starting at 11.90%</td>
                    <td className="p-5 border-b border-slate-100">Up to 48 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">ICICI Bank Business Loan</td>
                    <td className="p-5 border-b border-slate-100">Starting at 12.00%</td>
                    <td className="p-5 border-b border-slate-100">Up to 60 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">State Bank of India (SBI)</td>
                    <td className="p-5 border-b border-slate-100">Starting at 11.20%</td>
                    <td className="p-5 border-b border-slate-100">Up to 60 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="py-20 px-4 md:px-8 bg-purple-950 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6">
                Get a Business Loan in 4 Simple Steps
              </h2>
              <p className="text-purple-200 max-w-2xl mx-auto text-lg">
                From application to approval and fund disbursement—completely
                online, zero paperwork after document submission.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-1 bg-purple-800 z-0 rounded-full border-t border-purple-700"></div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-purple-900 border-4 border-purple-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                  1
                </div>
                <h3 className="font-bold text-xl mb-3 text-purple-100">
                  Apply Online
                </h3>
                <p className="text-purple-300 text-sm">
                  Share business details, GST registration, and desired loan
                  amount.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-purple-900 border-4 border-purple-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                  2
                </div>
                <h3 className="font-bold text-xl mb-3 text-purple-100">
                  Get Approved
                </h3>
                <p className="text-purple-300 text-sm">
                  AI analyzes your GST and business data for instant approval.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-purple-900 border-4 border-purple-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                  3
                </div>
                <h3 className="font-bold text-xl mb-3 text-purple-100">
                  Submit Docs
                </h3>
                <p className="text-purple-300 text-sm">
                  Upload ITR, bank statements, and documents digitally in
                  minutes.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-purple-900 border-4 border-green-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <svg
                    className="w-10 h-10 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-green-300">
                  Funds Transferred
                </h3>
                <p className="text-purple-300 text-sm">
                  Money in business account within 24-48 hours to scale fast.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/apply?type=Business Loan"
                className="inline-block bg-white hover:bg-slate-100 text-purple-900 font-bold justify-center py-4 px-10 rounded-xl shadow-lg transition-transform active:scale-95 text-lg"
              >
                Apply for Business Loan
              </Link>
            </div>
          </div>
        </section>

        {/* 5. ELIGIBILITY CRITERIA & 6. DOCS & 8. LOAN DETAILS */}
        <section className="py-20 px-4 md:px-8 bg-slate-50">
          <h2 className="sr-only">Business Loan Eligibility, Documents Required, and Loan Details</h2>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="col-span-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Eligibility
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Age Limit</span>
                  <span className="text-slate-900 font-bold">
                    21 - 65 Years
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Business Type</span>
                  <span className="text-slate-900 font-bold">
                    MSME, Startup, Sole Proprietor
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Min. Turnover</span>
                  <span className="text-slate-900 font-bold">₹10 Lakh+</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Business Age</span>
                  <span className="text-slate-900 font-bold">
                    Min 1-2 Years
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-span-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Documents Required
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> GST
                  Registration Certificate
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> ITR
                  (Last 2 Years)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Business Registration (UDYAM)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Bank Statements (6-12 Months)
                </li>
              </ul>
            </div>

            <div className="col-span-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Loan Details
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Interest Rate</span>
                  <span className="text-emerald-600 font-bold">
                    11% p.a. onwards
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Loan Amount</span>
                  <span className="text-slate-900 font-bold">
                    Up to ₹1 Crore
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Repayment Tenure</span>
                  <span className="text-slate-900 font-bold">
                    12 to 60 Months
                  </span>
                </li>
                
              </ul>
            </div>
          </div>
        </section>

        {/* 9. USE CASES */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-12">
              Business Loan Uses
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Working Capital
                  </h4>
                  <p className="text-slate-600">
                    Manage day-to-day operations, payroll, and inventory with
                    flexible working capital.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Business Expansion
                  </h4>
                  <p className="text-slate-600">
                    Open new branches, hire staff, and scale operations across
                    locations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-500 rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m0 0l8-4m0 0l8 4m0 0v10l-8 4m0 0l-8-4m0 0v-10"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Inventory & Equipment
                  </h4>
                  <p className="text-slate-600">
                    Purchase goods, raw materials, machinery, or equipment for
                    production.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Marketing & Technology
                  </h4>
                  <p className="text-slate-600">
                    Fund digital marketing, website development, or tech
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CITY-SPECIFIC SEO SECTION */}
        <section className="py-8 px-4 md:px-8 bg-purple-50 border-t border-purple-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center text-opacity-80">
              Business Loans Available Across 100+ Indian Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Business Loan Mumbai",
                "MSME Loan Delhi",
                "Business Loan Bangalore",
                "Working Capital Hyderabad",
                "Business Loan Chennai",
                "MSME Loan Pune",
                "Business Loan Kolkata",
                "Working Capital Ahmedabad",
                "Business Loan Jaipur",
                "MSME Loan Surat",
                "Business Loan Lucknow",
                "Business Loan Chandigarh",
                "MSME Loan Indore",
                "Business Loan Bhopal",
                "Business Loan Nagpur",
              ].map((city, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-purple-200 text-purple-800 text-sm py-2 px-4 rounded-full shadow-sm hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 14. FAQ SECTION */}
        <section className="py-20 px-4 md:px-8 bg-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                What is a business loan?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A business loan is unsecured credit for entrepreneurs and MSMEs
                to expand operations, manage working capital, purchase inventory
                or equipment, without requiring collateral against the loan.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                How fast is business loan approval?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Cashmela offers instant approval within 2 minutes using AI
                verification of GST data. Funds are typically disbursed within
                24-48 hours.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                What minimum turnover is required?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Most lenders require minimum annual turnover of ₹10-25 lakhs.
                Startups may qualify with business plan and GST registration
                through our specialized startup programs.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Is collateral required for business loans?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Most business loans through our platform are unsecured and
                don&apos;t require collateral. Loan amount depends on business
                profile and turnover.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Can I prepay the business loan?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, most business loans allow prepayment without penalties. You
                can repay early without additional charges, helping you save on
                interest.
              </p>
            </div>
          </div>
        </section>

        {/* 15. STRONG CTA SECTION */}
        <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-purple-600 to-purple-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Scale Your Business Today.
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Fast business loans up to ₹1 crore. Instant approval, zero
              collateral, rapid disbursement for MSME growth.
            </p>
            <Link
              href="/apply?type=Business Loan"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-purple-950 font-extrabold py-5 px-12 rounded-full shadow-2xl shadow-yellow-500/30 transition-transform active:scale-95 text-xl mb-4"
            >
              Apply for Business Loan ➔
            </Link>
            <p className="text-purple-200 font-medium tracking-wide">
              2 Minutes Approval. 100% Secure. For Verified Businesses Only.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
