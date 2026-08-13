'use client';

import { useEffect, useState } from 'react';

const LoanEligibilityCalculator = () => {
    const [salary, setSalary] = useState(65000);
    const [existingEmi, setExistingEmi] = useState(0);
    const [result, setResult] = useState({
        maxLoan: 0,
        eligibleEmi: 0,
        foir: 0,
        tenure: 0,
        roi: 0,
        btNeeded: false
    });
    const [aiInsight, setAiInsight] = useState({
        score: 0,
        profile: 'Awaiting Input',
        theme: 'slate',
        msg: '',
        advice: ''
    });

    const formatINR = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val).replace('.00', '');
    };

    const calculate = () => {
        const sal = parseFloat(salary) || 0;
        const existing = parseFloat(existingEmi) || 0;

        if (sal < 15000) {
            setResult({
                maxLoan: 0,
                eligibleEmi: 0,
                foir: 0,
                tenure: 0,
                roi: 0,
                btNeeded: false
            });
            setAiInsight({
                score: 0,
                profile: 'LOW SALARY',
                theme: 'slate',
                msg: 'Salary below minimum threshold (₹15,000 required). Increase income or add a co-applicant to improve eligibility.',
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

        const utilization = existing / maxTotalEmi;
        let score = 0;
        let profile = '';
        let theme = 'slate';
        let msg = '';
        let advice = '';

        if (utilization > 0.85) {
            score = 32; profile = 'WEAK'; theme = 'rose';
            msg = <>High debt usage detected. Based on the <b>{Math.round(foir * 100)}% FOIR</b> rule, your eligibility is constrained.</>;
            advice = 'Reduce obligations or transfer high-interest balances to improve eligibility.';
        } else if (utilization > 0.40) {
            score = 68; profile = 'MODERATE'; theme = 'amber';
            msg = <>Stable profile. Based on the <b>{Math.round(foir * 100)}% FOIR</b> rule, you qualify for up to <b>{formatINR(maxLoan)}</b>.</>;
            advice = 'Compare lenders. Extending tenure can improve eligibility, but monitor total interest payout.';
        } else {
            score = 92; profile = 'STRONG'; theme = 'emerald';
            msg = <>This is a strong eligibility outcome! You are eligible for up to <b>{formatINR(maxLoan)}</b> at <b>{roi.toFixed(2).replace(/\.00$/, '')}% ROI</b>.</>;
            advice = 'Since your eligibility is strong, you have negotiating power to secure lower interest rates.';
        }

        setResult({
            maxLoan,
            eligibleEmi,
            foir,
            tenure,
            roi,
            btNeeded: existing > 0
        });

        setAiInsight({
            score,
            profile,
            theme,
            msg,
            advice
        });
    };

    useEffect(() => {
        calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salary, existingEmi]);

    // Percentage for progress bar around the score ring
    const strokeDasharray = 283; // Circumference roughly for r=45
    const dashoffset = strokeDasharray - ((aiInsight.score || 0) / 100) * strokeDasharray;

    return (
        <main className="flex items-center justify-center p-6 bg-slate-50 font-sans">
            <section className="w-full rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row lg:items-stretch">
                {/* Panel 1: Inputs */}
                <aside className="flex-none w-full p-8 bg-white lg:flex-none lg:w-[45%]">
                    <div className="mb-10">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2">Personal Loan Eligibility Calculator</h1>
                        <p className="text-sm text-slate-500 leading-relaxed">Check your loan limit instantly by adjusting your income and obligations.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Salary Slider Component */}
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-sm font-bold text-slate-700">Net Monthly Income</label>
                                <div className="text-xl font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">₹ {salary.toLocaleString('en-IN')}</div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="300000"
                                step="1000"
                                className="appearance-none w-full h-1.5 rounded-full outline-none p-0 m-0 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                                value={salary}
                                onChange={(e) => setSalary(Number(e.target.value))}
                                style={{
                                    background: `linear-gradient(to right, #4f46e5 ${(salary / 300000) * 100}%, #e2e8f0 ${(salary / 300000) * 100}%)`
                                }}
                            />
                            <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                                <span>₹0</span>
                                <span>₹3L+</span>
                            </div>
                        </div>

                        {/* Obligations Slider Component */}
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-sm font-bold text-slate-700">Existing Monthly EMI</label>
                                <div className="text-xl font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">₹ {existingEmi.toLocaleString('en-IN')}</div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="150000"
                                step="500"
                                className="appearance-none w-full h-1.5 rounded-full outline-none p-0 m-0 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                                value={existingEmi}
                                onChange={(e) => setExistingEmi(Number(e.target.value))}
                                style={{
                                    background: `linear-gradient(to right, #4f46e5 ${(existingEmi / 150000) * 100}%, #e2e8f0 ${(existingEmi / 150000) * 100}%)`
                                }}
                            />
                            <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                                <span>₹0</span>
                                <span>₹1.5L</span>
                            </div>
                        </div>

                        <div className="mt-6 text-center pt-6 border-t border-slate-100">
                            <p className="text-xs font-semibold text-slate-400">
                                Data secured with Bank-grade encryption.
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Panel 2: Visual Results Panel (Combines old Result and AI panels) */}
                <section className="flex-1 bg-slate-50 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 lg:px-10">
                    <div className="flex flex-col gap-6 h-full">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                            <div className="flex items-center gap-8 flex-col sm:flex-row">
                                {/* Donut / Score visualization equivalent */}
                                <div className="flex-none w-[110px]">
                                    <div className="relative w-[110px] h-[110px]">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle className="fill-none stroke-slate-100 stroke-[8]" cx="50" cy="50" r="45" />
                                            <circle 
                                                className={`fill-none stroke-[8] stroke-round transition-all duration-[800ms] ease-in-out ${aiInsight.theme === 'rose' ? 'stroke-rose-500' : aiInsight.theme === 'amber' ? 'stroke-amber-400' : aiInsight.theme === 'emerald' ? 'stroke-emerald-500' : 'stroke-slate-300'}`} 
                                                cx="50" cy="50" r="45" 
                                                style={{ strokeDashoffset: dashoffset, strokeDasharray: strokeDasharray }} 
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-3xl font-black text-slate-900 leading-none">{aiInsight.score}</span>
                                            <span className="text-[10px] font-bold text-slate-500 uppercase mt-1 max-w-[60px] text-center">Eligibility Score</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-sm font-semibold text-slate-500">You are eligible for</p>
                                    <h2 className="mt-1 text-4xl font-black text-slate-900 tracking-tight">{formatINR(result.maxLoan)}</h2>
                                    <p className="mt-2 text-sm text-slate-500">
                                         Tenure: <span className="font-bold text-slate-700">{result.tenure ? `${result.tenure} yrs` : '--'}</span> | ROI: <span className="font-bold text-slate-700">{result.roi ? `${result.roi}%` : '--'}</span>
                                    </p>
                                </div>
                            </div>
                            
                            <hr className="border-0 h-px bg-slate-200 my-6" />
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Max EMI Capacity</p>
                                    <p className="mt-1 text-lg font-extrabold text-slate-900">{formatINR(result.eligibleEmi)}</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">FOIR Limit</p>
                                    <p className="mt-1 text-lg font-extrabold text-slate-900">{result.foir ? `${(result.foir * 100).toFixed(0)}%` : '--%'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 lg:px-5">
                            <div className="flex gap-4 items-start">
                                <div className="text-2xl leading-none">💡</div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{aiInsight.msg}</p>
                                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{aiInsight.advice}</p>
                                </div>
                            </div>
                        </div>

                        {result.btNeeded && (
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 lg:px-5">
                                <p className="text-xs font-extrabold text-amber-700 uppercase mb-1">Smart Move: Balance Transfer</p>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Your obligations of <span className="font-extrabold">{formatINR(existingEmi)}</span> are reducing your eligibility.
                                    Transfer them to lower your EMI and <span className="underline font-semibold cursor-pointer">increase your loan limit</span>.
                                </p>
                            </div>
                        )}

                        <button className="w-full rounded-2xl p-5 bg-indigo-600 text-white font-extrabold text-base tracking-wide border-none shadow-[0_10px_15px_-3px_rgba(79,70,229,0.3),0_4px_6px_-2px_rgba(79,70,229,0.15)] transition-all cursor-pointer mt-auto hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-[0_20px_25px_-5px_rgba(79,70,229,0.4),0_10px_10px_-5px_rgba(79,70,229,0.2)]">
                            Check Offers Now
                        </button>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default LoanEligibilityCalculator;
