import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Overdraft Loan India | Flexible Credit Line | Working Capital | Cashmela",
  description:
    "Get an overdraft facility up to ₹50 lakhs with instant approval. Pay interest only on amount used. Flexible working capital for businesses. Apply online at Cashmela.",
  alternates: {
    canonical: "https://cashmela.com/overdraft",
  },
};

const financialProductSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "CashMela Overdraft Facility",
  "description": "Get an overdraft facility up to ₹50 lakhs with instant approval. Pay interest only on amount used. Flexible working capital.",
  "provider": {
    "@type": "Organization",
    "name": "CashMela",
    "url": "https://cashmela.com"
  },
  "feesAndCommissionsSpecification": "https://cashmela.com/overdraft#fees",
  "interestRate": {
    "@type": "QuantitativeValue",
    "value": 10.50,
    "unitText": "annual percentage rate"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "25000"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an overdraft facility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An overdraft is a flexible credit line that allows you to borrow money as needed. You only pay interest on the amount you actually use, not the entire credit line, making it ideal for managing seasonal cash flow.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get an overdraft facility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With Cashmela, you can get instant approval within 2 minutes and the credit line activated in your account within 24-48 hours. You can start drawing funds immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum overdraft limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get an overdraft limit up to ₹50 lakhs depending on your income, business profile, and credit history. The actual limit is determined by the lender based on underwriting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I repay and redraw from overdraft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, overdraft facilities are revolving credit lines. You can repay and redraw funds as needed within the credit limit, making it perfect for seasonal or fluctuating business needs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the interest rate for overdraft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Overdraft interest rates typically start from 10.5% p.a. onwards and are based on your credit profile, business type, and the lender&apos;s assessment of your business.",
      },
    },
  ],
};

export default function OverdraftLoanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="overdraft-schema"
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
                Get Overdraft Up to{" "}
                <span className="text-[#10B981]">₹50 Lakhs</span> On Demand.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 font-sans leading-relaxed">
                Perfect flexible credit line for working capital management. Draw what you need, pay interest only on the amount used. Ideal for seasonal business needs and cash flow gaps.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <Link
                  href="/apply?type=Overdraft"
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
                    800K+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Facilities Active
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    35+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Verified Lenders
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    ₹8000Cr+
                  </p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">
                    Approved
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Phone Image */}
            <div className="hidden md:flex justify-center items-center relative">
              <Image
                src="/Loan Mobile Mockup/overdraft loan.webp"
                alt="Overdraft facility app interface showing flexible credit line"
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
                Overdraft Facility Key Facts (2026 Summary)
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                An overdraft facility provides a pre-approved revolving credit line up to ₹25 Lakhs. Unlike regular personal loans, interest is charged strictly on the amount withdrawn and the duration utilized. Zero pre-payment penalties apply on repayment.
              </p>
            </div>
            <Link
              href="/apply?type=Overdraft Loan"
              className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full text-sm shrink-0 shadow transition-transform active:scale-95"
            >
              Unlock Credit Line
            </Link>
          </div>
        </section>

        {/* 2. WHAT IS OVERDRAFT */}
        <section className="py-20 px-4 md:px-8 bg-white" id="what-is-it">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                What is an Overdraft Facility?
              </h2>
              <p className="text-lg text-slate-600">
                An overdraft is a flexible revolving credit line that lets you borrow only what you need. You pay interest exclusively on the amount drawn, not the entire limit—perfect for managing seasonal cash flow and working capital needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-green-900 mb-6">
                  Real-Life Example
                </h3>
                <p className="text-slate-600 mb-6">
                  Arun owns a trading business with seasonal demand. He gets an overdraft limit of ₹20 lakhs. During busy season, he draws ₹15 lakh and pays interest only on that amount. In slow season, he repays and pays zero interest on the unused portion.
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
                    Overdraft Limit: ₹20 Lakhs
                  </p>
                  <p className="text-green-600 font-bold text-lg relative z-10">
                    Pays Interest Only on Used Amount
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
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
                      Revolving Credit
                    </h4>
                    <p className="text-slate-600">
                      Borrow, repay, and redraw as many times as needed within your approved limit. No need to reapply each time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
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
                      Pay Only What You Use
                    </h4>
                    <p className="text-slate-600">
                      Interest charged only on the drawn amount, not the entire limit. Extra savings on unused portion of credit line.
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
                Why Choose Cashmela for Overdraft?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                India&apos;s most trusted overdraft platform connecting you with the best rates from 35+ verified lenders.
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
                  Instant Activation
                </h3>
                <p className="text-sm text-slate-600">
                  Get approval in 2 minutes and credit line in your account within 24 hours.
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
                  Starting from 10.5% p.a. on drawn amount only.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  100% Digital
                </h3>
                <p className="text-sm text-slate-600">
                  Apply, approve, and draw funds all online. Zero paperwork.
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
                  Flexible Tenor
                </h3>
                <p className="text-sm text-slate-600">
                  Use credit line as per your business needs. No fixed tenure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. COMPARISON TABLE */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
              Overdraft vs Traditional Term Loan
            </h2>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Features
                    </th>
                    <th className="p-5 font-bold border-b bg-green-50 text-green-900 text-lg border-l border-r border-green-100">
                      Cashmela Overdraft
                    </th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">
                      Traditional Term Loan
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Interest Charged On
                    </td>
                    <td className="p-5 border-b border-green-100 bg-green-50/50 font-bold text-green-700 border-l border-r">
                      Amount Drawn Only
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      Full Loan Amount
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Redraw Facility
                    </td>
                    <td className="p-5 border-b border-green-100 bg-green-50/50 font-bold text-green-700 border-l border-r">
                      Yes, Unlimited
                    </td>
                    <td className="p-5 border-b border-slate-100">No</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Repayment Flexibility
                    </td>
                    <td className="p-5 border-b border-green-100 bg-green-50/50 font-bold text-green-700 border-l border-r">
                      Flexible, No Fixed EMI
                    </td>
                    <td className="p-5 border-b border-slate-100">Fixed EMI</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">
                      Idling Charges
                    </td>
                    <td className="p-5 border-b border-green-100 bg-green-50/50 font-bold text-green-700 border-l border-r">
                      Zero if Unused
                    </td>
                    <td className="p-5 border-b border-slate-100">
                      EMI Even if Unused
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
              Top Overdraft Interest Rates in India (2026)
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Compare overdraft facility rates, limits, and processing charges across major public and private sector banks in India.
            </p>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Lender</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Interest Rate (p.a.)</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Max Limit</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Processing Fee</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-bold text-slate-900">CashMela Overdraft Partners</td>
                    <td className="p-5 border-b border-slate-100 font-bold text-green-700">Starting at 10.50%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹50 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">HDFC Bank Overdraft</td>
                    <td className="p-5 border-b border-slate-100">Starting at 11.25%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹50 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">ICICI Bank InstaOD</td>
                    <td className="p-5 border-b border-slate-100">Starting at 11.50%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹50 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">State Bank of India (SBI)</td>
                    <td className="p-5 border-b border-slate-100">Starting at 11.15%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹20 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="py-20 px-4 md:px-8 bg-green-950 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6">
                Get Overdraft in 4 Simple Steps
              </h2>
              <p className="text-green-200 max-w-2xl mx-auto text-lg">
                From application to drawing funds—quick and completely online.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-1 bg-green-800 z-0 rounded-full border-t border-green-700"></div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-green-900 border-4 border-green-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  1
                </div>
                <h3 className="font-bold text-xl mb-3 text-green-100">
                  Apply Online
                </h3>
                <p className="text-green-300 text-sm">
                  Share basic info and desired overdraft limit.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-green-900 border-4 border-green-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  2
                </div>
                <h3 className="font-bold text-xl mb-3 text-green-100">
                  Get Approved
                </h3>
                <p className="text-green-300 text-sm">
                  Instant approval in 2 minutes with AI verification.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-green-900 border-4 border-green-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  3
                </div>
                <h3 className="font-bold text-xl mb-3 text-green-100">
                  Documents Upload
                </h3>
                <p className="text-green-300 text-sm">
                  Submit docs digitally. Verified in 24 hours.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-green-900 border-4 border-emerald-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                  <svg
                    className="w-10 h-10 text-emerald-400"
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
                <h3 className="font-bold text-xl mb-3 text-emerald-300">
                  Draw Funds
                </h3>
                <p className="text-green-300 text-sm">
                  Activate credit line. Draw as needed within 24 hours.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/apply?type=Overdraft"
                className="inline-block bg-white hover:bg-slate-100 text-green-900 font-bold justify-center py-4 px-10 rounded-xl shadow-lg transition-transform active:scale-95 text-lg"
              >
                Apply for Overdraft
              </Link>
            </div>
          </div>
        </section>

        {/* 5. ELIGIBILITY CRITERIA & 6. DOCS & 8. LOAN DETAILS */}
        <section className="py-20 px-4 md:px-8 bg-slate-50">
          <h2 className="sr-only">Overdraft Eligibility, Documents Required, and Loan Details</h2>
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
                  <span className="text-slate-900 font-bold">21 - 65 Years</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Employment</span>
                  <span className="text-slate-900 font-bold">
                    Salaried / Business
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Monthly Income</span>
                  <span className="text-slate-900 font-bold">Min ₹40,000</span>
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
                Documents
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> PAN &
                  Aadhaar
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Last 6
                  Months Bank Statement
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Last 3
                  Months Salary Slips
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> ID &
                  Address Proof
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
                Facility Terms
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Interest Rate</span>
                  <span className="text-emerald-600 font-bold">
                    10.5% p.a. onwards
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Maximum Limit</span>
                  <span className="text-slate-900 font-bold">
                    Up to ₹50 Lakhs
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Tenor</span>
                  <span className="text-slate-900 font-bold">Revolving</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Annual Fee</span>
                  <span className="text-slate-900 font-bold">Nil to 0.5%</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. USE CASES */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-12">
              When Do You Need Overdraft?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Seasonal Business
                  </h4>
                  <p className="text-slate-600">
                    Manage working capital during off-season without taking a full loan during peak seasons.
                  </p>
                </div>
              </div>
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Cash Flow Gaps
                  </h4>
                  <p className="text-slate-600">
                    Bridge working capital gaps between project payments and vendor requirements.
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Emergency Funds
                  </h4>
                  <p className="text-slate-600">
                    Have instant access to emergency working capital without going through lengthy approvals.
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
                      d="M20 7l-8-4-8 4m0 0l8-4m0 0l8 4m0 0v10l-8 4m0 0l-8-4m0 0v-10"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Inventory Management
                  </h4>
                  <p className="text-slate-600">
                    Draw funds only when you need to purchase inventory. Repay and redraw during slow periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CITY-SPECIFIC SEO SECTION */}
        <section className="py-8 px-4 md:px-8 bg-green-50 border-t border-green-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-green-900 mb-8 text-center text-opacity-80">
              Overdraft Available Across 100+ Indian Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Overdraft Mumbai",
                "Working Capital Delhi",
                "Overdraft Facility Bangalore",
                "Flexible Overdraft Hyderabad",
                "Working Capital Chennai",
                "Overdraft Pune",
                "Overdraft Kolkata",
                "Working Capital Ahmedabad",
                "Overdraft Jaipur",
                "Flexible OD Surat",
                "Overdraft Lucknow",
                "Working Capital Chandigarh",
                "Overdraft Indore",
                "Flexible Overdraft Bhopal",
                "Overdraft Nagpur",
              ].map((city, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-green-200 text-green-800 text-sm py-2 px-4 rounded-full shadow-sm hover:bg-green-600 hover:text-white transition-colors cursor-pointer"
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
                What is an overdraft facility?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                An overdraft is a flexible credit line that allows you to draw money as needed. You pay interest only on the amount drawn, not the entire limit, making it cost-effective for managing working capital.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                How fast can I get an overdraft facility?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                With Cashmela, you get instant approval in 2 minutes and the credit line is activated in your account within 24 hours. You can start drawing funds immediately after activation.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                What is the maximum overdraft limit?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                You can get up to ₹50 lakhs depending on your income, credit history, and business profile. The exact limit is determined by the lender based on underwriting assessment.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Can I redraw funds after repayment?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, overdraft is a revolving credit facility. You can repay and redraw funds multiple times within your approved limit as per your business requirements.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Do I pay interest on the entire limit?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                No, interest is charged only on the amount you actually draw. If you don&apos;t use the full limit, you pay zero interest on the unused portion, saving significantly on finance costs.
              </p>
            </div>
          </div>
        </section>

        {/* 15. STRONG CTA SECTION */}
        <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Access Your Overdraft Today.
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Flexible credit line up to ₹50 lakhs. Pay interest only on used amount. Instant approval and fund access.
            </p>
            <Link
              href="/apply?type=Overdraft"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-green-950 font-extrabold py-5 px-12 rounded-full shadow-2xl shadow-yellow-500/30 transition-transform active:scale-95 text-xl mb-4"
            >
              Apply for Overdraft ➔
            </Link>
            <p className="text-green-200 font-medium tracking-wide">
              2 Minutes Approval. Zero Fees if Unused.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
