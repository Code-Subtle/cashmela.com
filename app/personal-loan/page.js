import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Personal Loan India | Get Instant Approval Online | Cashmela",
  description:
    "Get a personal loan up to ₹50 lakhs with instant approval in 2 minutes. Fast disbursement, low interest rates starting at 10.49% p.a. Apply online at Cashmela.",
  alternates: {
    canonical: "https://cashmela.com/personal-loan",
  },
};

const financialProductSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "CashMela Personal Loan",
  "description": "Compare and apply for unsecured personal loans up to ₹50 lakhs with instant approval in 2 minutes. Rates starting at 10.49% p.a. and flexible repayment tenures.",
  "provider": {
    "@type": "Organization",
    "name": "CashMela",
    "url": "https://cashmela.com"
  },
  "feesAndCommissionsSpecification": "https://cashmela.com/personal-loan#fees",
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
      name: "What is a personal loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A personal loan is an unsecured loan provided by financial institutions without requiring any collateral. You can use it for any personal purpose like education, medical expenses, home improvement, or debt consolidation.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get a personal loan in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With Cashmela, you can get instant approval within 2 minutes and funds disbursed in your account within 24-48 hours of document submission.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum income required for a personal loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most lending institutions require a minimum monthly income of ₹15,000 for salaried individuals and ₹25,000 for self-employed professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a personal loan with a credit score below 650?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you may still be eligible depending on your income, employment history, and other factors. Cashmela connects you with lenders who consider beyond just credit scores.",
      },
    },
    {
      "@type": "Question",
      name: "What are the uses of a personal loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personal loans can be used for any purpose including education, medical expenses, home renovation, wedding, travel, debt consolidation, or any other personal need.",
      },
    },
  ],
};

export default function PersonalLoanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="personal-loan-schema"
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
                Get a Personal Loan Up to{" "}
                <span className="text-[#0284C7]">₹50 Lakhs</span> Instantly.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 font-sans leading-relaxed">
                Borrow money for any personal need—education, medical, home, or
                even lifestyle. Get instant approval, minimal documentation, and
                funds in your account within 24-48 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <Link
                  href="/apply?type=Personal Loan"
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
                    1M+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Loans Approved
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    50+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Verified Lenders
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    ₹10000Cr+
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
                src="/Loan Mobile Mockup/personal loan.webp"
                alt="Personal loan app interface showing approval and disbursement"
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
                Key Takeaways: CashMela Personal Loan Features (2026)
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                CashMela matches Indian borrowers with 50+ RBI-regulated lenders offering unsecured personal loans up to ₹50 Lakhs. Rates start at 10.49% p.a., with flexible repayment tenures from 12 to 84 months, 100% digital paperless KYC, and 24-hour bank disbursement.
              </p>
            </div>
            <Link
              href="/apply?type=Personal Loan"
              className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full text-sm shrink-0 shadow transition-transform active:scale-95"
            >
              Check Instant Rate
            </Link>
          </div>
        </section>

        {/* 2. WHAT IS PERSONAL LOAN */}
        <section className="py-20 px-4 md:px-8 bg-white" id="what-is-it">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                What is a Personal Loan?
              </h2>
              <p className="text-lg text-slate-600">
                A personal loan is quick, unsecured credit that doesn&apos;t
                require collateral. Borrow money instantly without pledging
                assets, and use it for any personal purpose—completely flexible
                and transparent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">
                  Real-Life Example
                </h3>
                <p className="text-slate-600 mb-6">
                  Priya needs ₹5 lakhs for her sister&apos;s wedding. She
                  applies on Cashmela, gets approved in 2 minutes, and receives
                  the funds in 24 hours—without any collateral or lengthy
                  paperwork.
                </p>
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
                    Loan Amount: ₹5 Lakhs
                  </p>
                  <p className="text-green-600 font-bold text-lg relative z-10">
                    Time to Approval: 2 Minutes
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Quick Approval
                    </h4>
                    <p className="text-slate-600">
                      Get approved for your personal loan in just 2 minutes. No
                      lengthy paperwork or multiple visits required.
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Use For Any Purpose
                    </h4>
                    <p className="text-slate-600">
                      Education, wedding, medical, home renovation, travel, or
                      business needs—use your personal loan as you wish.
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
                Why Choose Cashmela for Personal Loans?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                India&apos;s most trusted personal loan platform connecting you
                with the best rates from 50+ verified lenders.
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
                  Get approval in 2 minutes with our AI-powered verification.
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
                  Low Interest Rates
                </h3>
                <p className="text-sm text-slate-600">
                  Starting from 10.49% p.a. with competitive rates from
                  partners.
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
                      d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  100% Paperless
                </h3>
                <p className="text-sm text-slate-600">
                  Apply online, submit docs digitally, no branch visits needed.
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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-3">
                  Flexible Tenure
                </h3>
                <p className="text-sm text-slate-600">
                  Choose repayment period from 12 to 84 months as per need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. COMPARISON TABLE */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
              Cashmela vs Traditional Banks
            </h2>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Features
                    </th>
                    <th className="p-5 font-bold border-b bg-indigo-50 text-indigo-900 text-lg border-l border-r border-indigo-100">
                      Cashmela Personal Loan
                    </th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Traditional Banks
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Approval Time
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      2 Minutes
                    </td>
                    <td className="p-5 border-b border-slate-100">3-7 Days</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Disbursement
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      24-48 Hours
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      5-7 Working Days
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Documentation
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      100% Digital
                    </td>
                    <td className="p-5 border-b border-slate-100">Physical</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Interest Rate Range
                    </td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">
                      10.49% - 18%
                    </td>
                    <td className="p-5 border-b border-slate-100">12% - 20%</td>
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
              Top Personal Loan Interest Rates in India (2026)
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Compare starting interest rates, maximum loan tenures, and processing fees across top public and private sector banks in India.
            </p>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Lender</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Interest Rate (p.a.)</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Max Tenure</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Processing Fee</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-bold text-slate-900">CashMela Partners</td>
                    <td className="p-5 border-b border-slate-100 font-bold text-blue-600">Starting at 10.49%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">HDFC Bank</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.50%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">ICICI Bank</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.75%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">State Bank of India (SBI)</td>
                    <td className="p-5 border-b border-slate-100">Starting at 11.15%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 1.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">Axis Bank</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.99%</td>
                    <td className="p-5 border-b border-slate-100">Up to 60 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="py-20 px-4 md:px-8 bg-indigo-950 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6">
                Get a Personal Loan in 4 Simple Steps
              </h2>
              <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
                From application to approval and disbursement—all in your
                pocket.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-1 bg-indigo-800 z-0 rounded-full border-t border-indigo-700"></div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  1
                </div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">
                  Apply Online
                </h3>
                <p className="text-indigo-300 text-sm">
                  Fill a quick form with basic details and desired loan amount.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  2
                </div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">
                  Get Approved
                </h3>
                <p className="text-indigo-300 text-sm">
                  We match you with the best lender and instant approval in 2
                  mins.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  3
                </div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">
                  Submit Documents
                </h3>
                <p className="text-indigo-300 text-sm">
                  Upload documents digitally. No branch visits. Verification in
                  24 hours.
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
                  Money in Account
                </h3>
                <p className="text-indigo-300 text-sm">
                  Funds disbursed to your bank account within 24-48 hours. Done!
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/apply?type=Personal Loan"
                className="inline-block bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform active:scale-95 text-lg text-center"
              >
                Apply for Personal Loan
              </Link>
            </div>
          </div>
        </section>

        {/* 5. ELIGIBILITY CRITERIA & 6. DOCS & 8. LOAN DETAILS */}
        <section className="py-20 px-4 md:px-8 bg-slate-50">
          <h2 className="sr-only">Personal Loan Eligibility, Documents Required, and Loan Details</h2>
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
                    21 - 60 Years
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Employment</span>
                  <span className="text-slate-900 font-bold">
                    Salaried / Self-Employed
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Monthly Income</span>
                  <span className="text-slate-900 font-bold">Min ₹15,000</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Credit Score</span>
                  <span className="text-slate-900 font-bold">Minimum 600+</span>
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
                  Form 16 (if applicable)
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
                    12 to 84 Months
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
              What Can You Use a Personal Loan For?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-2xl flex-shrink-0 flex items-center justify-center">
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
                      d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17c0 5.523 4.477 10 10 10s10-4.477 10-10c0-6.002-4.5-10.747-10-10.747z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Education & Career
                  </h4>
                  <p className="text-slate-600">
                    Fund higher education, skill courses, certifications, or
                    professional development without stress.
                  </p>
                </div>
              </div>
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Medical Emergencies
                  </h4>
                  <p className="text-slate-600">
                    Cover hospital bills, surgeries, and medical treatment
                    without depleting savings.
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
                      d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 4l4 2m-2-4l4-2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Home Renovation
                  </h4>
                  <p className="text-slate-600">
                    Renovate, redecorate, or make home improvements with easy
                    EMI payments.
                  </p>
                </div>
              </div>
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Wedding & Events
                  </h4>
                  <p className="text-slate-600">
                    Plan weddings, anniversaries, or celebrations without
                    financial stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CITY-SPECIFIC SEO SECTION */}
        <section className="py-8 px-4 md:px-8 bg-indigo-50 border-t border-indigo-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center text-opacity-80">
              Personal Loans Available Across India
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
                  href={`/personal-loan/${city.slug}`}
                  className="bg-white border border-indigo-200 text-indigo-800 text-sm py-2 px-4 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                >
                  Personal Loan in {city.name}
                </Link>
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
                What is a personal loan?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A personal loan is unsecured credit provided by financial institutions
                without requiring collateral. You can use it for any personal
                purpose and repay in fixed EMIs.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                How fast can I get approval?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                With Cashmela, you can get instant approval within 2 minutes.
                Funds are typically disbursed within 24-48 hours of document
                submission.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                What is the minimum income required?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The minimum monthly income is typically ₹15,000 for salaried
                professionals. Self-employed individuals may need to show higher
                income with business documents.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Can I get a loan with a low credit score?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, you may still be eligible depending on your income and
                employment history. Cashmela works with lenders who look beyond
                just credit scores.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                What are prepayment terms?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Most personal loans allow prepayment without penalties. You can
                repay the entire loan early without additional charges.
              </p>
            </div>
          </div>
        </section>

        {/* 15. STRONG CTA SECTION */}
        <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Get Your Personal Loan Today.
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Quick approval, minimal documentation, instant disbursement.
              Borrow up to ₹50 lakhs for any personal need.
            </p>
            <Link
              href="/apply?type=Personal Loan"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-indigo-950 font-extrabold py-5 px-12 rounded-full shadow-2xl shadow-yellow-500/30 transition-transform active:scale-95 text-xl mb-4"
            >
              Apply Now ➔
            </Link>
            <p className="text-blue-200 font-medium tracking-wide">
              2 Minutes Approval. 100% Free & Secure.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
