import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Debt Consolidation Loan India | Reduce Your EMI by 50% | Cashmela",
  description:
    "Combine multiple personal loans and credit card dues into one single easy EMI. Get the best debt consolidation loan in India with low interest. Apply now!",
  alternates: {
    canonical: "https://cashmela.com/debt-consolidation",
  },
};

const financialProductSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "CashMela Debt Consolidation Loan",
  "description": "Combine multiple personal loans and credit card bills into one single easy EMI. Save on interest and build your credit score.",
  "provider": {
    "@type": "Organization",
    "name": "CashMela",
    "url": "https://cashmela.com"
  },
  "feesAndCommissionsSpecification": "https://cashmela.com/debt-consolidation#fees",
  "interestRate": {
    "@type": "QuantitativeValue",
    "value": 10.49,
    "unitText": "annual percentage rate"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "10000"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a debt consolidation loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A debt consolidation loan allows you to combine multiple active loans and credit card dues into one single EMI. It offers lower interest rates, longer repayment tenure, and simplifies your monthly financial planning.",
      },
    },
    {
      "@type": "Question",
      name: "Is taking a debt consolidation loan safe in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, taking a debt consolidation loan is completely safe in India when processed through RBI-regulated lenders on Cashmela.",
      },
    },
    {
      "@type": "Question",
      name: "Does a single EMI loan affect my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initially, your CIBIL score may drop slightly due to a hard inquiry. However, closing multiple expensive loans and making one single monthly EMI payment on time will significantly improve your credit score in the long run.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible for a personal loan to close credit cards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salaried professionals earning above ₹15,000 per month, aged 21-58, with an active CIBIL score above 650 are generally eligible to combine multiple loans into one.",
      },
    },
    {
      "@type": "Question",
      name: "How fast does instant loan approval work in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Cashmela, our advanced AI-driven technology assesses your profile instantly, offering fast approval within hours and loan disbursal in as little as 24-48 hours.",
      },
    },
  ],
};

export default function DebtConsolidationPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="debt-consolidation-schema"
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
                Consolidate{" "}
                <span className="text-[#0284C7]">Multiple Loans </span> Into One
                Simple Payment.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 font-sans leading-relaxed">
                An intelligent debt consolidation solution that streamlines your
                finances, reduces your monthly burden, and helps you save
                thousands—tailored just for you.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <Link
                  href="/apply?type=Debt Consolidation"
                  className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform active:scale-95 text-center text-lg shrink-0"
                >
                  Apply Now
                </Link>
                <Link
                  href="/calculators/personal-loan-calculator"
                  className="bg-transparent hover:bg-slate-100 text-slate-800 border border-slate-300 font-sans font-semibold py-4 px-8 rounded-full transition-all active:scale-95 text-center text-lg shrink-0"
                >
                  Calculate EMI
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 md:gap-12 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    500K+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Indians Consolidated
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    30+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Verified Lenders
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
                src="/Loan Mobile Mockup/consolidation loan.webp"
                alt="Debt consolidation app interface showing balance and savings"
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
                How Debt Consolidation Works in India (2026 Summary)
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Debt consolidation combines high-interest credit card debt (36%–42% APR) and multiple active personal loans into a single lower-interest personal loan starting at 10.49% p.a. This reduces monthly EMI payments by up to 45%, consolidates repayment into one monthly due date, and protects your CIBIL score.
              </p>
            </div>
            <Link
              href="/apply?type=Debt Consolidation"
              className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full text-sm shrink-0 shadow transition-transform active:scale-95"
            >
              Calculate Savings
            </Link>
          </div>
        </section>

        {/* 2. WHAT IS DEBT CONSOLIDATION LOAN */}
        <section className="py-20 px-4 md:px-8 bg-white" id="what-is-it">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                What is a Debt Consolidation Loan?
              </h2>
              <p className="text-lg text-slate-600">
                A best consolidation loan India lets you borrow a new personal
                loan to pay off all your existing costly liabilities. Instead of
                tracking multiple dates, you pay exactly one single EMI loan
                every month at a significantly lower interest rate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">
                  Real-Life Example
                </h3>
                <p className="text-slate-600 mb-6">
                  Rahul had 3 active credit cards and 2 app-based personal
                  loans. His monthly outgoing was stressful, and interest was
                  accumulating at 36% p.a. on his cards.
                </p>
                <div className="bg-white rounded-xl p-5 border-l-4 border-red-500 mb-4 shadow-sm">
                  <p className="text-slate-800 font-semibold mb-1">
                    Before: 5 EMIs & Dates
                  </p>
                  <p className="text-red-600 font-bold text-lg">
                    Total Monthly Payment: ₹38,000
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border-l-4 border-green-500 shadow-sm relative overflow-hidden">
                  <div className="absolute right-0 top-0 text-green-100 transform translate-x-4 -translate-y-4">
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
                    After Cashmela: 1 Single EMI
                  </p>
                  <p className="text-green-600 font-bold text-lg relative z-10">
                    New Monthly Payment: ₹21,000
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
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
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Close Credit Cards
                    </h4>
                    <p className="text-slate-600">
                      Stop bleeding money to 36%-45% APR interest rates. We
                      offer a personal loan to close credit cards instantly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
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
                      Substitute Multiple EMIs
                    </h4>
                    <p className="text-slate-600">
                      Merge 2, 3, or more personal loans into one easily
                      manageable tenure, allowing you to reduce EMI India
                      significantly.
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
                Why Choose Cashmela for Debt Consolidation?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We aren&apos;t just another platform. We are India&apos;s finest
                fintech loan India aggregator, matching you with the perfect
                verified loan consolidation lenders.
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
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  Lower EMI Outflow
                </h3>
                <p className="text-sm text-slate-600">
                  Extend your tenure and reduce your monthly outflows
                  drastically to breathe easily.
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  Single Payment Date
                </h3>
                <p className="text-sm text-slate-600">
                  No more tracking dates and facing late payment penalties. Just
                  one day to remember.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  Lower Interest Rates
                </h3>
                <p className="text-sm text-slate-600">
                  Replace expensive credit card debt and app loans with cheap
                  personal loan refinance India.
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  Improve CIBIL Score
                </h3>
                <p className="text-sm text-slate-600">
                  Clear out standing loans. A cleaner credit report boosts your
                  future borrowing capacity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. COMPARISON TABLE */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
              Cashmela vs Traditional Approaches
            </h2>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Features
                    </th>
                    <th className="p-5 font-bold border-b bg-indigo-50 text-indigo-900 text-lg border-l border-r border-indigo-100">
                      Cashmela Debt Consolidation
                    </th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Traditional Banks / Others
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Digital Approval Process
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      Instant (10 Mins)
                    </td>
                    <td className="p-5 border-b border-slate-100">7-14 Days</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Lender Network
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      30+ Top Verified Lenders
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      Single Lender
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Approval Odds
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      Extremely High AI Matching
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      Low (Strict Criteria)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Paperwork
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      100% Paperless & KYC based
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      Physical Branch Visits
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
              Top Debt Consolidation Interest Rates in India (2026)
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Compare rates and processing fees across top Indian banks when consolidating credit cards and personal loans.
            </p>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Lender</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Starting Rate (p.a.)</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Max Loan Amount</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Processing Fee</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-bold text-slate-900">CashMela Consolidation Program</td>
                    <td className="p-5 border-b border-slate-100 font-bold text-blue-600">Starting at 10.49%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹50 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">HDFC Bank Balance Transfer</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.50%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹40 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">ICICI Bank Personal Loan</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.75%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹50 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">Axis Bank Balance Transfer</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.99%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹25 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. HOW IT WORKS (STEP-BY-STEP) */}
        <section className="py-20 px-4 md:px-8 bg-indigo-950 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6">
                How to Clear Credit Card Debt India?
              </h2>
              <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
                Follow our simple 4-step secure process to combine multiple
                loans natively from your smartphone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-1 bg-indigo-800 z-0 rounded-full border-t border-indigo-700"></div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  1
                </div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">
                  Apply Online
                </h3>
                <p className="text-indigo-300 text-sm">
                  Submit your basic details, existing loan amounts, and credit
                  card dues safely.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  2
                </div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">
                  Compare Offers
                </h3>
                <p className="text-indigo-300 text-sm">
                  Our system fetches pre-approved offers from verified lenders with the
                  customized lowest interest rate.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  3
                </div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">
                  Get Approved
                </h3>
                <p className="text-indigo-300 text-sm">
                  Select the best consolidation loan India and get instant
                  digital approval & KYC verification.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-green-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
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
                  Close Existing Loans
                </h3>
                <p className="text-indigo-300 text-sm">
                  Funds disbursed directly to close bank accounts or to you. Pay
                  only 1 EMI going forward!
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/apply?type=Debt Consolidation"
                className="inline-block bg-white hover:bg-slate-100 text-indigo-900 font-bold justify-center py-4 px-10 rounded-xl shadow-lg transition-transform active:scale-95 text-lg"
              >
                Check Your Eligibility in 2 Mins
              </Link>
            </div>
          </div>
        </section>

        {/* 5. ELIGIBILITY CRITERIA & 6. DOCS & 8. LOAN DETAILS */}
        <section className="py-20 px-4 md:px-8 bg-slate-50">
          <h2 className="sr-only">Debt Consolidation Eligibility, Documents Required, and Loan Details</h2>
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
                    21 - 58 Years
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Employment</span>
                  <span className="text-slate-900 font-bold">
                    Salaried / Business
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Monthly Income</span>
                  <span className="text-slate-900 font-bold">Min ₹15,000</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Credit Score</span>
                  <span className="text-slate-900 font-bold">Minimum 650+</span>
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
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> PAN
                  Card & Aadhaar
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Last 3 Months Salary Slips
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Last 6 Months Bank Statement
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Foreclosure letters of old loans (if required)
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
                    10.49% p.a. onwards
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Loan Amount</span>
                  <span className="text-slate-900 font-bold">
                    Up to ₹50 Lakhs
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Loan Tenure</span>
                  <span className="text-slate-900 font-bold">
                    12 to 72 Months
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
              Who Needs a Debt Relief Loan in India?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex-shrink-0 flex items-center justify-center">
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Credit Card Debt Traps
                  </h4>
                  <p className="text-slate-600">
                    If you only pay the &quot;Minimum Amount Due&quot;, you are
                    paying 40% interest. Convert it to a 12% personal loan to
                    close credit cards and become debt-free faster.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex-shrink-0 flex items-center justify-center">
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
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Multiple App Loans
                  </h4>
                  <p className="text-slate-600">
                    Stacked 3-4 short-term app loans? Personal loan stacking
                    ruins credit scores and mental peace. Combine them all and
                    stretch the tenure into manageable chunks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. TESTIMONIALS */}
        <section className="py-20 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-12">
              Success Stories of Financial Freedom
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-slate-600 mb-6 italic">
                  &quot;I had 2 credit cards maxed out and an old personal loan.
                  Emis were consuming 70% of my salary. Cashmela helped me
                  bundle everything. Now my EMI outflow is cut in half!&quot;
                </p>
                <div className="font-bold text-slate-800">
                  — Sameer Joshi, IT Professional (Pune)
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-slate-600 mb-6 italic">
                  &quot;The process was completely digital. Instead of paying
                  36% on my cards, I am paying 11.5% on this single EMI loan.
                  Instant loan approval India truly exists here.&quot;
                </p>
                <div className="font-bold text-slate-800">
                  — Anjali Desai, Marketing Exec (Mumbai)
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-slate-600 mb-6 italic">
                  &quot;A lifesaver fintech loan platform! The loan
                  consolidation option saved me from destroying my CIBIL score.
                  Excellent customer support.&quot;
                </p>
                <div className="font-bold text-slate-800">
                  — Rakesh Sharma, Business Owner (Delhi)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CITY-SPECIFIC SEO SECTION */}
        <section className="py-8 px-4 md:px-8 bg-indigo-50 border-t border-indigo-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center text-opacity-80">
              Debt Consolidation Available Across India
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { slug: "mumbai", name: "Mumbai" },
                { slug: "delhi", name: "Delhi" },
                { slug: "bangalore", name: "Bangalore" },
                { slug: "hyderabad", name: "Hyderabad" },
                { slug: "chennai", name: "Chennai" },
                { slug: "pune", name: "Pune" },
                { slug: "kolkata", name: "Kolkata" },
                { slug: "ahmedabad", name: "Ahmedabad" },
                { slug: "jaipur", name: "Jaipur" }
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/debt-consolidation/${city.slug}`}
                  className="bg-white border border-indigo-200 text-indigo-800 text-sm py-2 px-4 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                >
                  Debt Consolidation in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 14. FAQ SECTION (AEO OPTIMIZED) */}
        <section className="py-20 px-4 md:px-8 bg-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                What is a debt consolidation loan?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A debt consolidation loan allows you to combine multiple active
                loans and credit card dues into one single EMI. It offers lower
                interest rates, longer repayment tenure, and simplifies your
                monthly financial planning.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Is taking a debt consolidation loan safe in India?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, taking a debt consolidation loan is completely safe in
                India when processed through RBI-regulated lenders on Cashmela.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Does a single EMI loan affect my credit score?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Initially, your CIBIL score may drop slightly due to a hard
                inquiry. However, closing multiple expensive loans and making
                one single monthly EMI payment on time will significantly
                improve your credit score in the long run.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Who is eligible for a personal loan to close credit cards?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Salaried professionals earning above ₹15,000 per month, aged
                21-58, with an active CIBIL score above 650 are generally
                eligible to combine multiple loans into one.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                How fast does instant loan approval work in India?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                At Cashmela, our advanced AI-driven technology assesses your
                profile instantly, offering fast approval within hours and loan
                disbursal in as little as 24-48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* 15. STRONG CTA SECTION */}
        <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Escape the Debt Trap Today.
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of Indians who reduced their monthly EMI outgoings.
              Checking your limit will not affect your CIBIL score.
            </p>
            <Link
              href="/apply?type=Debt Consolidation"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-indigo-950 font-extrabold py-5 px-12 rounded-full shadow-2xl shadow-yellow-500/30 transition-transform active:scale-95 text-xl mb-4"
            >
              Apply Now ➔
            </Link>
            <p className="text-blue-200 font-medium tracking-wide">
              Check Eligibility in 2 Minutes. 100% Free & Secure.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
