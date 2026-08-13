'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { PersonalLoanCalcIcon, SmartTaxPlannerIcon, LoanEligibilityIcon } from '@/components/ui/Icons';

import FadeIn from '../FadeIn';

const CalculatorsSection = () => {
    const calculators = [
        {
            title: 'Personal Loan Calculator',
            description: 'Plan your monthly EMI, total interest payable, and complete repayment schedule instantly.',
            icon: <PersonalLoanCalcIcon className="w-14 h-14" />,
            link: '/calculators/personal-loan-calculator',
            badge: 'Instant EMI'
        },
        {
            title: 'Smart Tax Planner',
            description: 'Optimize your tax savings, compare Old vs New tax regimes, and maximize deductions.',
            icon: <SmartTaxPlannerIcon className="w-14 h-14" />,
            link: '/calculators/smart-tax-planner',
            badge: 'Save Tax'
        },
        {
            title: 'Loan Eligibility Calculator',
            description: 'Check maximum personal loan amount you can borrow based on income and existing obligations.',
            icon: <LoanEligibilityIcon className="w-14 h-14" />,
            link: '/calculators/loan-eligibility-calculator',
            badge: 'Check Borrowing Limit'
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-16">
                {/* Header */}
                <FadeIn direction="up">
                    <div className="text-center mb-10 lg:mb-14">
                        <h2 className="text-[1.5rem] md:text-[2.25rem] lg:text-[2.5rem] font-extrabold text-slate-900 mb-3 italic">
                            Quick Financial Calculators
                        </h2>
                        <p className="text-[0.875rem] md:text-base lg:text-[1.0625rem] text-slate-500 max-w-[560px] mx-auto">
                            Make smart, data-driven financial decisions with our instant planning calculators
                        </p>
                    </div>
                </FadeIn>

                {/* 3-Card Responsive Calculators Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {calculators.map((calc, index) => (
                        <FadeIn key={index} delay={index * 0.05} direction="up" fullWidth className="flex flex-col h-full">
                            <Link href={calc.link} className="block h-full group">
                                <div className="bg-gradient-to-br from-white to-sky-50/60 p-6 lg:p-8 rounded-2xl flex flex-col transition-all duration-300 border-[1.5px] border-sky-500/20 hover:bg-gradient-to-br hover:from-white hover:to-sky-100/80 hover:-translate-y-1.5 hover:border-sky-500/50 hover:shadow-[0_12px_35px_rgba(14,165,233,0.18)] h-full relative overflow-hidden">
                                    
                                    {/* Top Badge */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="p-1.5 rounded-xl bg-white shadow-sm border border-sky-100">
                                            {calc.icon}
                                        </div>
                                        <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200/50">
                                            {calc.badge}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[1.125rem] md:text-[1.25rem] font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                                        {calc.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[0.875rem] md:text-[0.9375rem] text-slate-600 leading-relaxed mb-6 flex-grow">
                                        {calc.description}
                                    </p>

                                    {/* CTA Link */}
                                    <div className="inline-flex items-center gap-2 text-sky-600 group-hover:text-indigo-600 text-[0.875rem] md:text-[0.9375rem] font-semibold no-underline transition-colors duration-200 mt-auto">
                                        <span>Calculate Now</span>
                                        <FaArrowRight className="text-[0.75rem] transition-transform duration-200 group-hover:translate-x-1.5" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CalculatorsSection;

