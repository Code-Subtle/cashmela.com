"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Debt Consolidation Loan in India | Reduce EMI by 50% | CashMela",
  description:
    "Consolidate multiple loans & credit card dues into single EMI. Compare rates, save up to 50% on EMI, improve credit score. Instant approval, no hidden charges.",
  keywords:
    "debt consolidation loan, combine multiple loans, reduce EMI, personal loan consolidation, single EMI loan, credit card consolidation, debt consolidation India, lower interest loan, fintech loan",
  alternates: {
    canonical: "https://cashmela.com/debt-consolidation",
  },
};

const testimonials = [
  {
    name: "Rajesh Kapoor",
    location: "Mumbai",
    role: "Software Engineer",
    before: "₹45,000/month EMI across 3 loans",
    after: "₹28,500/month single EMI",
    quote:
      "CashMela helped me consolidate 3 personal loans and 2 credit card bills. My monthly EMI dropped from ₹45K to ₹28.5K. The entire process took just 3 days!",
    savings: "₹16,500/month saved",
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    role: "Marketing Manager",
    before: "6 different loan accounts to manage",
    after: "1 simple EMI, 740 credit score",
    quote:
      "Managing 6 different EMI dates was stressful. CashMela consolidated everything to one payment. My CIBIL score improved to 740 in 6 months!",
    savings: "Peace of mind + ₹52,000/year saved",
  },
  {
    name: "Amit Singh",
    location: "Delhi",
    role: "Business Owner",
    before: "25% interest rate on credit card",
    after: "11% consolidated loan",
    quote:
      "My credit card debt was costing me ₹2,50,000 in annual interest. By consolidating with a personal loan at 11%, I saved ₹3,75,000 over 5 years.",
    savings: "₹3,75,000 total savings",
  },
  {
    name: "Deepika Nair",
    location: "Hyderabad",
    role: "HR Professional",
    before: "Credit score: 580 (bad debts)",
    after: "Credit score: 710 (timely payments)",
    quote:
      "Consolidation not only reduced my EMI but also helped me build a strong credit history. My score jumped from 580 to 710 in 8 months.",
    savings: "Better financial health",
  },
];

const faqs = [
  {
    question: "What is a debt consolidation loan and how does it work?",
    answer:
      "A debt consolidation loan merges multiple high-interest loans and credit card bills into a single, lower-interest loan with one easy EMI. You pay off all your old debts with this new loan and then focus on repaying just one monthly payment instead of managing multiple due dates and rates.",
  },
  {
    question: "How much can I save with debt consolidation on my EMI?",
    answer:
      "Most borrowers save 25-50% on monthly EMIs depending on their current interest rates and loan mix. For example, if you're paying ₹45,000 in combined EMIs across 3 loans, consolidation could reduce this to ₹22,500-33,750. Use our savings calculator to get an exact estimate.",
  },
  {
    question: "Will debt consolidation affect my credit score?",
    answer:
      "Initially, your credit score may dip by 10-20 points due to a hard inquiry and new account opening. However, by making timely payments on your consolidated loan and reducing your credit utilization, your score typically improves within 3-6 months. Most users see a 50-100 point improvement within a year.",
  },
  {
    question: "Who is eligible for debt consolidation with CashMela?",
    answer:
      "You need: Minimum 18 years age, credit score 600+, minimum ₹50,000 monthly net income, salaried or self-employed, 2+ active loans or credit cards, and Indian residency. You can check instant eligibility in 2 minutes without affecting your credit score.",
  },
  {
    question: "What documents are required for debt consolidation?",
    answer:
      "Basic documents: PAN card, Aadhaar/ID proof, recent salary slip (last 2-3 months), bank statements (last 6 months), and details of existing loans. Self-employed individuals need ITR and business registration documents. We verify everything digitally, no physical documentation required.",
  },
  {
    question: "How fast is the approval process for debt consolidation?",
    answer:
      "CashMela's AI-powered platform gives instant approval in most cases. Eligibility check: 2 minutes. Documentation: 30 minutes. Fund disbursement: 24-48 hours. The entire process from application to funds in your account typically takes 2-3 business days.",
  },
  {
    question: "Can I consolidate credit card debt with personal loans?",
    answer:
      "Absolutely! In fact, this is one of the most beneficial uses of consolidation. Credit card interest rates (24-36% p.a.) are significantly higher than personal loans (9-18% p.a.). Consolidating credit card dues with a personal loan at 11-14% can save you thousands in interest.",
  },
  {
    question:
      "What interest rates does CashMela offer for consolidation loans?",
    answer:
      "Our rates range from 9.5% to 18% per annum depending on your credit profile, income, loan amount, and tenure. We work with 25+ verified lenders to find the most competitive rates. Your final rate is locked after approval—no hidden charges.",
  },
  {
    question: "Is debt consolidation safe and legal in India?",
    answer:
      "Yes, completely safe and legal. Debt consolidation is regulated by RBI and offered by all major financial institutions. CashMela is an authorized fintech platform that only connects you with RBI-regulated lenders. We never ask for upfront fees or personal account access.",
  },
  {
    question: "Can I prepay my consolidated loan without penalty?",
    answer:
      "Yes! There's no prepayment penalty on your consolidated loan. You can pay off the entire loan or make extra payments anytime without any charges. This gives you flexibility to reduce the tenure and save more on interest if your financial situation improves.",
  },
  {
    question: "How is debt consolidation different from a personal loan?",
    answer:
      "Personal loans are for any purpose (travel, purchase, emergency). Debt consolidation loans are specifically designed to payoff existing debts. Consolidation loans typically offer: faster approval, better rates for existing borrowers, lower processing fees, and improved credit profile through single payment history.",
  },
  {
    question: "What's the maximum loan amount I can get for consolidation?",
    answer:
      "You can consolidate up to ₹50 lakhs depending on your income, credit score, and repayment capacity. The loan amount is determined by: (1) Total existing debt, (2) Debt-to-income ratio, (3) Credit score. Our algorithm ensures you get maximum approval amount without over-leveraging.",
  },
  {
    question: "Can self-employed/freelancers apply for debt consolidation?",
    answer:
      "Yes! Self-employed individuals, freelancers, and business owners are welcome to apply. You'll need last 2 years ITR, business registration documents, and 6 months bank statements showing income. Many of our borrowers are self-employed and get approved within 2-3 days.",
  },
  {
    question: "What if I have a low credit score (below 650)?",
    answer:
      "Even with a credit score below 650, you may be eligible for consolidation. Our AI evaluates 100+ parameters beyond score—including income stability, employment history, and payment patterns. Many low-score applicants get approved at slightly higher rates. Check instant eligibility online.",
  },
  {
    question: "How many existing loans can I consolidate at once?",
    answer:
      "You can consolidate 2 to 10 loans/credit cards. More loans = higher EMI savings potential. Whether you have 2 personal loans + 1 credit card or 4 loans + 3 credit cards, CashMela finds lenders willing to consolidate your entire portfolio into one manageable payment.",
  },
];

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Nagpur",
];

export default function DebtConsolidationPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [expandedFaq, setExpandedFaq] = useState(0);

  const handleCalculate = () => {
    // Redirect to calculator or open modal
    window.location.href = "/calculators/debt-consolidation-calculator";
  };

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* ==================== HERO SECTION ==================== */}
        <section className="pt-8 pb-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 via-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 animate-pulse">
                  ✓ 25,000+ Loans Consolidated | 4.8/5 Rating
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                  Consolidate Multiple EMIs Into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    One Smart Payment
                  </span>
                </h1>

                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  Stop juggling multiple loan payments. Merge your credit card
                  bills, personal loans, and app loans into a single EMI. Save
                  up to 50% on monthly payments. Improve your credit score.
                  Regain financial peace.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      ₹25,000 Cr+
                    </div>
                    <div className="text-sm text-slate-600">Loans Merged</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      2-3 Days
                    </div>
                    <div className="text-sm text-slate-600">
                      From App to Approval
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      9.5% - 18%
                    </div>
                    <div className="text-sm text-slate-600">
                      Competitive Interest Rates
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      0% Upfront
                    </div>
                    <div className="text-sm text-slate-600">
                      No Hidden Charges
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/apply?type=debt-consolidation"
                    className="inline-block bg-gradient-to-r from-green-600 to-green-500 hover:shadow-lg text-white font-bold py-4 px-8 rounded-xl transition-all active:scale-95 text-center"
                  >
                    Apply Now & Get Instant Quote
                  </Link>
                  <button
                    onClick={handleCalculate}
                    className="inline-block bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-xl transition-all"
                  >
                    Calculate Your Savings
                  </button>
                </div>

                <p className="text-sm text-slate-500 mt-6">
                  <span className="text-green-600 font-bold">✓</span>{" "}
                  Confidential & secure •{" "}
                  <span className="text-green-600 font-bold">✓</span> No impact
                  on CIBIL score (initial check) •{" "}
                  <span className="text-green-600 font-bold">✓</span> 25+ Verified
                  Lenders
                </p>
              </div>

              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center border border-green-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-lg font-bold text-slate-800 mb-4">
                      See Your Potential Savings
                    </p>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-sm text-slate-600 mb-2">
                        Current Monthly EMI
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-6">
                        ₹45,000
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        After Consolidation
                      </div>
                      <div className="text-3xl font-bold text-green-600">
                        ₹28,500
                      </div>
                      <div className="text-green-600 font-bold mt-4">
                        Save ₹16,500/month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== WHAT IS DEBT CONSOLIDATION ==================== */}
        <section className="py-8 px-4 md:px-8" id="what-is">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What is Debt Consolidation Loan?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A simple yet powerful solution to replace multiple debts with a
                single, more manageable loan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    How It Works
                  </h3>
                  <p className="text-slate-700">
                    A debt consolidation loan takes all your existing loans and
                    credit card bills and replaces them with one new loan. The
                    new lender pays off your old debts, and you repay only this
                    single, new loan over time. It&apos;s like gathering all
                    your scattered puzzle pieces into one clear picture.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Key Advantage: Lower Interest Rate
                  </h3>
                  <p className="text-slate-700">
                    Credit cards charge 24-36% interest. Personal loans
                    typically charge 10-18%. Consolidating your credit card debt
                    into a personal loan can save you thousands of rupees in
                    interest payments.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Benefit: Simplified Payments
                  </h3>
                  <p className="text-slate-700">
                    No more tracking 5-6 different EMI dates, interest rates,
                    and lenders. Just one payment date, one rate, one lender.
                    Perfect for busy professionals who want financial
                    simplicity.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    Real Example
                  </div>
                  <p className="text-slate-600 text-sm mb-6 font-semibold">
                    Meet Raj from Bangalore
                  </p>

                  <div className="mb-6">
                    <p className="text-sm text-slate-600 mb-3 font-bold">
                      Current Debt Situation:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Personal Loan 1</span>
                        <span className="font-bold">₹1,50,000 @ 14%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Personal Loan 2</span>
                        <span className="font-bold">₹2,50,000 @ 12%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Credit Card Bill</span>
                        <span className="font-bold">₹75,000 @ 36%</span>
                      </div>
                      <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between font-bold">
                        <span>Total Monthly EMI</span>
                        <span className="text-orange-600">₹42,100</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 mb-2 font-bold">
                      After Consolidation with CashMela:
                    </p>
                    <div className="text-sm">
                      <div className="flex justify-between mb-2">
                        <span>Single Consolidation Loan</span>
                        <span className="font-bold">₹4,75,000 @ 11%</span>
                      </div>
                      <div className="border-t border-green-200 pt-2 mt-2 flex justify-between">
                        <span className="font-bold">New Monthly EMI</span>
                        <span className="text-green-600 font-bold text-lg">
                          ₹24,800
                        </span>
                      </div>
                      <div className="mt-3 pt-2 border-t border-green-200">
                        <div className="text-green-700 font-bold">
                          💰 Monthly Savings: ₹17,300
                        </div>
                        <div className="text-green-700 text-sm">
                          Yearly Savings: ₹2,07,600
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== KEY BENEFITS ==================== */}
        <section className="py-8 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                5 Powerful Benefits of Debt Consolidation
              </h2>
              <p className="text-lg text-slate-600">
                Stop paying more than you need to
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">📉</div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Lower EMI
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Reduce your monthly payment by 25-50% compared to your
                  combined current EMIs. More money in your pocket every month.
                </p>
                <div className="text-green-600 font-bold text-sm">
                  Avg. Savings: ₹15,000-25,000/month
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  One Payment
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  No more juggling 4-5 different EMI dates, lenders, and
                  statements. Just one simple payment date to remember every
                  month.
                </p>
                <div className="text-green-600 font-bold text-sm">
                  Simplified Financial Management
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Lower Interest
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Get a single interest rate (typically 9.5-18%) instead of
                  paying high credit card rates (24-36%). Save thousands in
                  interest over the loan tenure.
                </p>
                <div className="text-green-600 font-bold text-sm">
                  Interest Savings: ₹1,50,000+
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Better Credit Score
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Build a strong credit history through timely single payments.
                  Most users see their CIBIL score improve by 50-100 points
                  within 6-12 months.
                </p>
                <div className="text-green-600 font-bold text-sm">
                  Score Improvement: 50-100 points
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Better Planning
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Clear visibility of your debt repayment timeline. Plan your
                  finances better with a fixed monthly EMI and clear payoff
                  date.
                </p>
                <div className="text-green-600 font-bold text-sm">
                  Financial Clarity & Control
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE CASHMELA ==================== */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose CashMela Over Banks & Competitors?
              </h2>
              <p className="text-lg text-slate-600">
                We&apos;re different. Here&apos;s how.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-center font-bold">CashMela</th>
                    <th className="p-4 text-center font-bold">
                      Traditional Banks
                    </th>
                    <th className="p-4 text-center font-bold">Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Approval Speed
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      2-3 Days ⚡
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      7-14 Days
                    </td>
                    <td className="p-4 text-center text-slate-600">4-7 Days</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Interest Rates
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      9.5% - 18% 💰
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      12% - 20%
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      10% - 19%
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Processing Fee
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      0% - 1.5% ✓
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      1.5% - 3%
                    </td>
                    <td className="p-4 text-center text-slate-600">1% - 2%</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Lenders Available
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      25+ Verified Lenders 🏦
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      1 (Own Bank)
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      10-15 Partners
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Eligibility Check
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      2 Min, No Hard Pull 🎯
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      Hard inquiry + 3-5 days
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      5-10 minutes
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Digital Documentation
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      100% Online ✓
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      40% Physical
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      80% Online
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Credit Score Impact (Initial)
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      Soft Inquiry Only ✓
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      Hard Inquiry (-10-20 pts)
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      Hard Inquiry
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      Customer Support
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">
                      24/7 Chat & Call 📞
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      9 AM - 5 PM
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      10 AM - 6 PM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS ==================== */}
        <section className="py-8 px-4 md:px-8 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The CashMela Debt Consolidation Process
              </h2>
              <p className="text-lg text-slate-600">
                From Application to Approval in Just 3 Days
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Tell Us About Your Debts",
                  description:
                    "Share details of your existing loans and credit card bills. Enter loan amounts, interest rates, and outstanding balances. Takes just 2-3 minutes.",
                  time: "2 Min",
                },
                {
                  step: 2,
                  title: "Get Instant Eligibility Check",
                  description:
                    "Our AI-powered system checks your eligibility against 25+ lenders instantly. No hard inquiry, no credit score impact. See if you qualify immediately.",
                  time: "2 Min",
                },
                {
                  step: 3,
                  title: "Compare Best Offers",
                  description:
                    "Receive offers from multiple verified lenders. Compare interest rates, tenure options, EMI amounts, and processing fees. Choose what's best for you.",
                  time: "24 Hours",
                },
                {
                  step: 4,
                  title: "Easy Approval & Disbursal",
                  description:
                    "Submit digital documents (PAN, Aadhaar, salary slips, bank statements). Get approved and funds transferred to your account within 24-48 hours.",
                  time: "48 Hours",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-8 border-2 border-green-200 shadow-sm h-full">
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-3 pt-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="inline-block bg-green-50 px-3 py-1 rounded text-xs font-semibold text-green-700">
                      ⏱️ {item.time}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 items-center justify-center z-10">
                      <div className="w-6 h-6 flex items-center justify-center text-green-600 text-xl">
                        →
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="font-bold text-xl text-slate-900 mb-6">
                🎯 What Happens to Your Old Loans?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    📋
                  </div>
                  <p className="font-semibold text-slate-900 mb-2">
                    Step 1: List All Debts
                  </p>
                  <p className="text-slate-600 text-sm">
                    You provide details of all your existing loans and credit
                    cards that you want to consolidate.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    💰
                  </div>
                  <p className="font-semibold text-slate-900 mb-2">
                    Step 2: New Loan Disburses
                  </p>
                  <p className="text-slate-600 text-sm">
                    Once approved, your new consolidation loan amount is
                    automatically sent to your designated bank account.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">✓</div>
                  <p className="font-semibold text-slate-900 mb-2">
                    Step 3: Close Old Debts
                  </p>
                  <p className="text-slate-600 text-sm">
                    You use the funds to pay off all your old loans and credit
                    cards. Start fresh with just one EMI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ELIGIBILITY CRITERIA ==================== */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Eligibility Criteria for Debt Consolidation
              </h2>
              <p className="text-lg text-slate-600">
                Simple requirements to qualify
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Basic Requirements
                </h3>
                {[
                  { title: "Age", requirement: "Between 23 and 60 years" },
                  {
                    title: "Employment",
                    requirement: "Salaried or self-employed",
                  },
                  {
                    title: "Minimum Income",
                    requirement: "₹50,000 net monthly salary",
                  },
                  {
                    title: "Credit Score",
                    requirement: "600 or above (higher scores = better rates)",
                  },
                  {
                    title: "Active Debts",
                    requirement: "Minimum 2 loans or credit cards",
                  },
                  {
                    title: "Residency",
                    requirement: "Indian citizen with valid ID proof",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                  >
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-slate-600 text-sm">
                        {item.requirement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Who Should Consolidate?
                </h3>
                {[
                  {
                    title: "Multiple EMIs",
                    desc: "You're paying 3-5 different loan EMIs every month",
                  },
                  {
                    title: "High Interest Rates",
                    desc: "Your credit card interest is 25-36% per annum",
                  },
                  {
                    title: "Missed Payments",
                    desc: "Managing multiple payment dates is stressful",
                  },
                  {
                    title: "Financial Burden",
                    desc: "Combined EMI is more than 50% of your income",
                  },
                  {
                    title: "Credit Card Debt",
                    desc: "You have significant credit card outstanding balance",
                  },
                  {
                    title: "Better Credit Profile",
                    desc: "You want to build a stronger credit history",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-100"
                  >
                    <div className="text-2xl">→</div>
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-4">
                💡 Have a Low Credit Score or Irregular Income?
              </h3>
              <p className="text-slate-700 mb-4">
                Don&apos;t worry! Our AI evaluates your profile based on 100+
                parameters beyond credit score, including employment history,
                income stability, and payment patterns. Many applicants with
                credit scores as low as 550 get approved at competitive rates.{" "}
                <strong>
                  Check your instant eligibility in 2 minutes with zero impact
                  on your credit score.
                </strong>
              </p>
              <Link
                href="/apply?type=debt-consolidation"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700"
              >
                Check My Eligibility Now →
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== DOCUMENTS REQUIRED ==================== */}
        <section className="py-8 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Documents Required for Debt Consolidation Loan
              </h2>
              <p className="text-lg text-slate-600">
                100% Online Process - No Physical Verification Needed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="text-4xl mb-4">🪪</div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">
                  Identity & Residence
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">PAN Card</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Aadhaar Card / Voter ID
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Passport (if available)
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      License / Any Address Proof
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">
                  Income Proof
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Last 2-3 Salary Slips
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Last 2 Years ITR (Self-employed)
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Business Registration (Self-employed)
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Appointment Letter / Resume
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">
                  Financial Documents
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Last 6 Months Bank Statements
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Loan Account Details & Statements
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Credit Card Statements
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">
                      Existing Loan Statements
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-4">
                    📱 Upload Digitally
                  </h3>
                  <p className="text-slate-700 mb-4">
                    All documents can be uploaded via our mobile app or website.
                    Just take a clear photo and upload. Our system uses AI to
                    verify authenticity instantly.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Pro Tip:</strong> Keep all documents in a single
                    folder for quick uploads. Average upload time: 5 minutes.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-bold text-slate-900 mb-4">
                    ✓ What You DON&apos;T Need
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>❌ Property papers</li>
                    <li>❌ Vehicle registration</li>
                    <li>❌ Physical verification</li>
                    <li>❌ Offline branch visits</li>
                    <li>❌ Guarantor documents (for salaried)</li>
                    <li>❌ Collateral or security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== LOAN DETAILS ==================== */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Loan Details & Pricing
              </h2>
              <p className="text-lg text-slate-600">
                Transparent & Competitive Terms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xl text-slate-900 mb-6">
                  Interest Rates
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-lg border border-green-300">
                    <p className="text-sm text-slate-600 mb-1">
                      Excellent Credit (750+)
                    </p>
                    <p className="text-2xl font-bold text-green-700">
                      9.5% - 11% p.a.
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border border-blue-300">
                    <p className="text-sm text-slate-600 mb-1">
                      Good Credit (700-749)
                    </p>
                    <p className="text-2xl font-bold text-blue-700">
                      11% - 14% p.a.
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg border border-purple-300">
                    <p className="text-sm text-slate-600 mb-1">
                      Fair Credit (600-699)
                    </p>
                    <p className="text-2xl font-bold text-purple-700">
                      14% - 18% p.a.
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-200">
                    Final rate depends on credit score, income stability,
                    existing debt-to-income ratio, and employment type.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xl text-slate-900 mb-6">
                  Loan Amount & Tenure
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-slate-600 mb-2">
                      Loan Amount
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      ₹1 Lakh - ₹50 Lakhs
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Based on income, credit profile, and total existing debt
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-slate-600 mb-2">
                      Loan Tenure
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      1 - 7 Years
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Choose tenure based on your budget and savings preference
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-slate-600 mb-2">
                      Processing Fee
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      0% - 1.5%
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Special rates for excellent credit scores. Waived for
                      select partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">₹0</div>
                <p className="font-bold text-slate-900 mb-2">
                  Pre-closure Penalty
                </p>
                <p className="text-slate-600 text-sm">
                  Pay off your entire loan anytime with zero prepayment
                  penalties
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                <p className="font-bold text-slate-900 mb-2">Flexible EMI</p>
                <p className="text-slate-600 text-sm">
                  Adjust your EMI amount if your financial situation changes
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  📱
                </div>
                <p className="font-bold text-slate-900 mb-2">Clear Breakdown</p>
                <p className="text-slate-600 text-sm">
                  Get detailed loan statement showing principal, interest, and
                  fees
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CITY-SPECIFIC SEO + USE CASES ==================== */}
        <section className="py-8 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Debt Consolidation Loan Across India
              </h2>
              <p className="text-lg text-slate-600">
                Available in 15+ major cities with same fast approval
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {cities.map((city) => (
                <Link
                  key={city}
                  href={`/debt-consolidation?city=${city.toLowerCase()}`}
                  className="bg-white border-2 border-slate-200 hover:border-green-600 hover:bg-green-50 rounded-lg p-4 text-center transition-all group"
                >
                  <p className="font-bold text-slate-900 group-hover:text-green-600">
                    {city}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Consolidation Loan
                  </p>
                </Link>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="font-bold text-xl text-slate-900 mb-6">
                  🎯 Common Use Cases
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-2xl">💳</div>
                    <div>
                      <p className="font-bold text-slate-900">
                        Credit Card Debt Crisis
                      </p>
                      <p className="text-slate-600 text-sm">
                        Have 2-3 credit cards with 50,000+ balance each and 36%
                        interest rate? Consolidate into a 12% personal loan and
                        save ₹1,50,000+ in interest.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">📱</div>
                    <div>
                      <p className="font-bold text-slate-900">
                        Personal App Loans
                      </p>
                      <p className="text-slate-600 text-sm">
                        Drowning in quick-approval app loans at 24-48% interest?
                        Consolidate all these expensive loans into one
                        affordable personal loan.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">🏦</div>
                    <div>
                      <p className="font-bold text-slate-900">
                        Multiple Bank Loans
                      </p>
                      <p className="text-slate-600 text-sm">
                        Managing 3-4 personal loans from different banks with
                        different EMI dates? Consolidate into one single payment
                        and reduce EMI.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">⚠️</div>
                    <div>
                      <p className="font-bold text-slate-900">EMI Overload</p>
                      <p className="text-slate-600 text-sm">
                        Your combined EMIs are eating up 60% of your salary?
                        Consolidation can bring this down to 35-40% with lower
                        interest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200">
                <h3 className="font-bold text-xl text-slate-900 mb-6">
                  💡 Real Success Stories
                </h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-slate-900 mb-2">
                      Sandeep (Delhi) - ₹42,000 Monthly Savings
                    </p>
                    <p className="text-xs text-slate-600">
                      &quot;I was paying ₹52,000 every month across 4 loans.
                      CashMela reduced it to ₹10,000. Now I can finally save for
                      my daughter&apos;s education.&quot;
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-slate-900 mb-2">
                      Neha (Bangalore) - 150 Point Credit Score Jump
                    </p>
                    <p className="text-xs text-slate-600">
                      &quot;My CIBIL was 650 with scattered payments. After 8
                      months of consolidation, it&apos;s 800. Got approved for
                      home loan easily!&quot;
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-slate-900 mb-2">
                      Vikram (Mumbai) - ₹3.5L Interest Saved
                    </p>
                    <p className="text-xs text-slate-600">
                      &quot;Credit card debt was costing ₹2L yearly in interest.
                      Consolidated at 11% - saved ₹3.5L over the loan
                      tenure.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Hear From People Who&apos;ve Transformed Their Finances
              </h2>
              <p className="text-lg text-slate-600">
                Real stories of EMI reduction & financial freedom
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-bold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}, {testimonial.location}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 italic mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-xs text-slate-600 mb-2">Before</p>
                        <p className="font-bold text-slate-900 text-sm">
                          {testimonial.before}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-2">After</p>
                        <p className="font-bold text-green-600 text-sm">
                          {testimonial.after}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-bold text-sm">
                    {testimonial.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== FAQ SECTION ==================== */}
        <section className="py-8 px-4 md:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to know about debt consolidation
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? -1 : index)
                    }
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900 text-left text-sm md:text-base">
                      {faq.question}
                    </h3>
                    <span
                      className={`text-2xl text-green-600 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-5 pt-0 text-slate-700 border-t border-slate-100">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg text-center">
              <p className="text-slate-700 mb-4">
                Still have questions? Our debt consolidation experts are ready
                to help you find the perfect solution.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700"
              >
                Schedule a Free Consultation →
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== FINAL CTA SECTION ==================== */}
        <section className="py-8 px-4 md:px-8 bg-gradient-to-r from-green-600 to-green-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Take Control of Your Debt?
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
              Join 25,000+ Indians who&apos;ve already consolidated their debts
              and saving thousands every month. Your path to financial freedom
              starts with one click.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6 border border-white border-opacity-30">
                <div className="text-3xl mb-3">⏱️</div>
                <p className="font-bold text-lg mb-2">
                  Get Approved in 2-3 Days
                </p>
                <p className="text-sm opacity-90">
                  From application to funds in your account. Zero paperwork,
                  100% digital.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6 border border-white border-opacity-30">
                <div className="text-3xl mb-3">💾</div>
                <p className="font-bold text-lg mb-2">Save Up to 50% Monthly</p>
                <p className="text-sm opacity-90">
                  Lower EMI, lower interest, better financial health. Immediate
                  relief.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply?type=debt-consolidation"
                className="bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-10 rounded-xl transition-all text-lg active:scale-95 hover:shadow-lg"
              >
                Apply Now - Takes 2 Minutes
              </Link>
              <Link
                href="/calculators/debt-consolidation-calculator"
                className="bg-white bg-opacity-20 border-2 border-white hover:bg-opacity-30 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg"
              >
                Calculate Your Savings
              </Link>
            </div>

            <p className="mt-8 text-sm opacity-90">
              Interested but not ready yet? No pressure. Call us:{" "}
              <strong>+91-9XXX-XXX-XXX</strong> | Email:{" "}
              <strong>support@cashmela.com</strong>
            </p>

            <div className="mt-8 pt-8 border-t border-white border-opacity-30 flex flex-col sm:flex-row justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-lg">🔒</span>
                <span>100% Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-lg">✓</span>
                <span>RBI Regulated Lenders</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-lg">📞</span>
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
