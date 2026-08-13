'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function numberToWords(num) {
  num = Number(num) || 0;
  if (!num) return '';
  const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function convert(n) {
    if (n.toString().length > 9) return 'Limit Exceeded';
    let match = ('000000000' + n).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!match) return '';
    let str = '';
    str += (match[1] !== "00") ? (a[Number(match[1])] || (b[match[1][0]] + ' ' + a[match[1][1]])) + 'crore ' : '';
    str += (match[2] !== "00") ? (a[Number(match[2])] || (b[match[2][0]] + ' ' + a[match[2][1]])) + 'lakh ' : '';
    str += (match[3] !== "00") ? (a[Number(match[3])] || (b[match[3][0]] + ' ' + a[match[3][1]])) + 'thousand ' : '';
    str += (match[4] !== "0")  ? (a[Number(match[4])] || (b[match[4][0]] + ' ' + a[match[4][1]])) + 'hundred ' : '';
    str += (match[5] !== "00") ? ((str !== '') ? 'and ' : '') + (a[Number(match[5])] || (b[match[5][0]] + ' ' + a[match[5][1]])) : '';
    return str.trim();
  }

  return convert(num) + ' rupees';
}

function formatINR(val) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
}

export default function LoanEligibilityCalculator() {
  const [salary, setSalary] = useState(65000);
  const [existingEmi, setExistingEmi] = useState(0);

  const [results, setResults] = useState({
    maxLoan: 0,
    eligibleEmi: 0,
    foir: 0,
    tenure: 0,
    roi: 0,
    showBt: false
  });

  const [ai, setAi] = useState({
    score: 0,
    profile: 'Awaiting Input',
    theme: 'themeSlate',
    msg: 'Enter your financial details to generate a real-time assessment.',
    advice: 'Keep EMIs below your FOIR threshold to maximize approval probability.'
  });

  const handleCalculate = () => {
    const sal = parseFloat(salary) || 0;
    const existing = parseFloat(existingEmi) || 0;

    if (sal < 15000) {
      setResults({
        maxLoan: 0,
        eligibleEmi: 0,
        foir: 0,
        tenure: 0,
        roi: 0,
        showBt: false
      });
      setAi({
        score: 0,
        profile: 'LOW SALARY',
        theme: 'themeSlate',
        msg: 'Salary below minimum threshold. Increase income or add a co-applicant to improve eligibility.',
        advice: 'Maintain a clean repayment track and keep obligations low to qualify.'
      });
      return;
    }

    let foir, roi, tenure;
    if (sal < 30000) { foir = 0.50; roi = 12.0; tenure = 5; }
    else if (sal < 50000) { foir = 0.60; roi = 11.5; tenure = 5; }
    else if (sal < 100000) { foir = 0.70; roi = 10.5; tenure = 6; }
    else { foir = 0.75; roi = 9.99; tenure = 7; }

    const maxTotalEmi = sal * foir;
    const eligibleEmi = Math.max(0, maxTotalEmi - existing);

    const r = (roi / 100) / 12;
    const n = tenure * 12;

    const maxLoan = r > 0
      ? eligibleEmi * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)))
      : eligibleEmi * n;

    setResults({
      maxLoan,
      eligibleEmi,
      foir,
      tenure,
      roi,
      showBt: existing > 0
    });

    const utilization = existing / maxTotalEmi;
    let score = 0;
    let profile = '';
    let theme = '';
    let msg = '';
    let advice = '';

    if (utilization > 0.85) {
      score = 32; profile = 'WEAK'; theme = 'themeRose';
      msg = `High debt usage detected. Based on the <b>${Math.round(foir * 100)}% FOIR</b> rule, your eligibility is constrained.`;
      advice = 'Reduce obligations or do a Balance Transfer to improve FOIR before applying.';
    } else if (utilization > 0.40) {
      score = 68; profile = 'MODERATE'; theme = 'themeAmber';
      msg = `Stable profile. Based on the <b>${Math.round(foir * 100)}% FOIR</b> rule, you qualify for up to <b>${formatINR(maxLoan).replace(/\.00$/, '')}</b>.`;
      advice = 'Compare lenders. Extending tenure can improve eligibility, but optimize ROI impact.';
    } else {
      score = 92; profile = 'STRONG'; theme = 'themeEmerald';
      msg = `This is a strong eligibility outcome! Based on the <b>${Math.round(foir * 100)}% FOIR</b> rule, you are eligible for up to <b>${formatINR(maxLoan).replace(/\.00$/, '')}</b> at <b>${roi.toFixed(2).replace(/\.00$/, '')}% ROI</b>.`;
      advice = 'Since your eligibility is strong, compare lenders to secure a higher limit or a lower final interest rate.';
    }

    setAi({ score, profile, theme, msg, advice });
  };

  useEffect(() => {
    handleCalculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salary, existingEmi]);

  const getThemeClasses = (theme) => {
    switch (theme) {
      case 'themeRose': return { border: 'border-rose-200', textVal: 'text-rose-600', textProf: 'text-rose-600', bgGlow: 'bg-rose-500 shadow-[0_0_24px_#f43f5e]' };
      case 'themeAmber': return { border: 'border-amber-200', textVal: 'text-amber-600', textProf: 'text-amber-600', bgGlow: 'bg-amber-500 shadow-[0_0_24px_#f59e0b]' };
      case 'themeEmerald': return { border: 'border-emerald-200', textVal: 'text-emerald-600', textProf: 'text-emerald-600', bgGlow: 'bg-emerald-500 shadow-[0_0_24px_#10b981]' };
      default: return { border: 'border-slate-200', textVal: 'text-slate-300', textProf: 'text-slate-400', bgGlow: 'bg-slate-300' };
    }
  };

  const themeCls = getThemeClasses(ai.theme);

  const eligibilitySchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CashMela Loan Eligibility Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Calculate maximum personal loan borrowing eligibility in India based on net salary, FOIR thresholds, and existing EMI obligations."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eligibilitySchema) }}
      />
      <Navbar />
      <main className="w-full bg-slate-50 font-sans flex flex-col">
        <div className="w-full bg-white border-t border-slate-200/60 flex-1 flex flex-col">
        <section className="w-full bg-white flex-1">
          <div className="flex flex-col lg:flex-row">
            
            {/* PANEL 1: INPUTS */}
            <aside className="p-6 sm:p-8 lg:w-[30%] border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.webp" alt="CashMela Logo" width={180} height={55} className="h-10 w-auto object-contain" priority />
              </div>

              <div className="mb-6">
                <h1 className="text-[1.875rem] sm:text-4xl leading-tight font-black tracking-tight text-slate-900">Loan Eligibility Calculator</h1>
                <p className="mt-3 text-sm text-slate-500">Enter your monthly net salary and existing obligations to calculate your maximum eligibility.</p>
              </div>

              <div>
                <div className="mb-6">
                  <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-2">Monthly Net Salary (₹)</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-extrabold text-slate-400 text-xl pointer-events-none">₹</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      min="0"
                      className="w-full rounded-2xl bg-slate-50 border border-slate-200 outline-none p-4 pl-10 text-2xl font-extrabold text-slate-900 transition-all focus:bg-white focus:border-indigo-600 box-border"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-500 leading-snug">
                    Salary in words: <span className="font-semibold">{numberToWords(salary) || '—'}</span>
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-2">Existing Monthly Obligations (₹)</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-extrabold text-slate-400 text-xl pointer-events-none">₹</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      min="0"
                      className="w-full rounded-2xl bg-slate-50 border border-slate-200 outline-none p-4 pl-10 text-2xl font-extrabold text-slate-900 transition-all focus:bg-white focus:border-indigo-600 box-border"
                      value={existingEmi}
                      onChange={(e) => setExistingEmi(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-500 leading-snug">
                    Obligations in words: <span className="font-semibold">{numberToWords(existingEmi) || '—'}</span>
                  </p>
                </div>

                <button className="w-full rounded-full p-4 sm:p-5 bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold tracking-wide text-sm shadow-lg border-none cursor-pointer transition-transform active:scale-95 mb-6" onClick={handleCalculate}>
                  Calculate Eligibility &amp; Get AI Insight
                </button>

                <p className="text-[11px] text-slate-500 text-center mb-6">AI-powered eligibility based on FOIR &amp; lender risk models</p>

                <div className="pt-4 border-t border-slate-100 text-center">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Bank-grade security • Data stays on-device</p>
                </div>
              </div>
            </aside>

            {/* PANEL 2: RESULTS */}
            <section className="flex-1 bg-slate-50 p-6 sm:p-8">
              <div className="flex flex-col gap-6 h-full">
                <div className="bg-white rounded-[22px] border border-slate-200 shadow-sm p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest m-0">Maximum Eligibility</p>
                      <h2 className="mt-3 text-4xl sm:text-5xl leading-none font-black tracking-tight text-slate-900 m-0">
                        {results.maxLoan > 0 ? formatINR(results.maxLoan).replace(/\.00$/, '') : '₹0'}
                      </h2>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-[11px] font-extrabold uppercase tracking-widest">
                        {results.tenure > 0 ? `${results.tenure} Year Tenure` : '-- Year Tenure'}
                      </span>
                      <p className="mt-3 mb-0 text-[11px] text-slate-500">
                        Interest: <span className="font-bold text-slate-700">{results.roi > 0 ? `${results.roi.toFixed(2).replace(/\.00$/, '')}%` : '--'}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest m-0">EMI Capacity</p>
                      <p className="mt-2 mb-0 text-2xl leading-none font-black text-slate-900">
                        {results.eligibleEmi > 0 ? formatINR(results.eligibleEmi).replace(/\.00$/, '') : '₹0'}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest m-0">FOIR Limit</p>
                      <p className="mt-2 mb-0 text-2xl leading-none font-black text-slate-900">
                        {results.foir > 0 ? `${(results.foir * 100).toFixed(0)}%` : '--%'}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest m-0">Tenure</p>
                      <p className="mt-2 mb-0 text-2xl leading-none font-black text-slate-900">
                        {results.tenure > 0 ? `${results.tenure} yrs` : '-- yrs'}
                      </p>
                    </div>
                  </div>
                </div>

                {results.showBt && (
                  <div className="bg-amber-50 border border-amber-200 rounded-[22px] p-5 sm:p-6">
                    <p className="text-[11px] font-extrabold text-amber-700 uppercase tracking-widest m-0">Smart Move: Balance Transfer</p>
                    <p className="mt-2 mb-0 text-sm text-amber-900/80 leading-relaxed">
                      Your obligations of <span className="font-extrabold text-amber-900">{formatINR(existingEmi).replace(/\.00$/, '')}</span> are reducing your eligibility.
                      Transfer them to lower your EMI and <span className="underline decoration-amber-400 decoration-2 underline-offset-2 font-semibold">increase your loan limit</span>.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* PANEL 3: AI INSIGHTS */}
            <aside className="p-6 sm:p-8 lg:w-[30%] bg-white border-t lg:border-t-0 lg:border-l border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest m-0">AI Eligibility Insight</h3>
                <span className="px-2 py-1 rounded-lg bg-slate-100 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">v2.4</span>
              </div>

              <div className="py-6 flex flex-col items-center text-center">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full blur-2xl opacity-20 ${themeCls.bgGlow}`}></div>
                  <div className={`w-44 h-44 sm:w-52 sm:h-52 rounded-full border-[10px] bg-white flex flex-col items-center justify-center shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] z-10 relative ${themeCls.border}`}>
                    <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">AI Eligibility Score</div>
                    <div className={`mt-2 text-6xl leading-none font-black tracking-tight ${themeCls.textVal}`}>{ai.score}</div>
                    <div className={`mt-2 text-[11px] font-extrabold uppercase tracking-widest ${themeCls.textProf}`}>{ai.profile}</div>
                  </div>
                </div>

                <div className="mt-6 w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 text-left box-border">
                  <p className="text-sm text-slate-700 leading-relaxed m-0" dangerouslySetInnerHTML={{ __html: ai.msg }}></p>
                  <div className="mt-3 text-xs font-semibold text-slate-500 mb-1">Actionable Advice:</div>
                  <p className="text-sm text-slate-600 leading-relaxed m-0">{ai.advice}</p>
                </div>
              </div>

              <Link href="/apply" className="block w-full text-center rounded-full p-4 sm:p-5 bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold tracking-wide text-sm shadow-lg border-none cursor-pointer transition-transform mb-3 active:scale-95">
                Continue Application
              </Link>
              <p className="text-[11px] text-slate-500 text-center m-0">Next step: lender comparison &amp; offer unlock</p>
            </aside>
            
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
