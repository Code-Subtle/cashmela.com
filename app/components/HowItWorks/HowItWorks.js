'use client';

import { TellUsDebtsIcon, BestRateIcon, TotalFreedomIcon } from '@/components/ui/Icons';

import FadeIn from '../FadeIn';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <TellUsDebtsIcon className="w-12 h-12" />,
      title: 'Tell Us Your Debts',
      description: 'Share your existing EMIs, credit card bills, and loan details in 2 minutes.',
    },
    {
      number: '02',
      icon: <BestRateIcon className="w-12 h-12" />,
      title: 'We Find Your Best Rate',
      description: 'Our AI matches you with the lowest-rate consolidation loan from 40+ lenders.',
    },
    {
      number: '03',
      icon: <TotalFreedomIcon className="w-12 h-12" />,
      title: 'One EMI, Total Freedom',
      description: 'Pay one simple monthly payment and save up to 50% on interest.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8faff] to-[#ffffff] py-12 md:py-20 relative overflow-hidden" id="how-it-works">
      {/* Subtle grid background - light blue and gray grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply w-full" 
           style={{ 
               backgroundImage: 'linear-gradient(to right, #bfdbfe 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
        <FadeIn direction="down">
          <div className="text-center mb-14">
            <div className="inline-block bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700 text-[13px] font-bold px-5 py-1.5 rounded-full mb-5 tracking-[0.02em]">How It Works</div>
            <h2 className="text-[1.625rem] md:text-[2.25rem] font-extrabold text-slate-900 leading-[1.2] mb-3">
              Three Simple Steps to <span className="text-[#415ae6]">Debt Freedom</span>
            </h2>
            <p className="text-[0.9375rem] md:text-[1.0625rem] text-slate-500 max-w-[480px] mx-auto leading-relaxed">
              No paperwork, no branch visits. Complete the entire process from your phone.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 lg:gap-8 relative max-w-[420px] md:max-w-none mx-auto">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.12} direction="up" className="h-full">
              <div className="relative bg-white border border-slate-200 rounded-[20px] pt-10 px-4 sm:px-6 lg:px-8 pb-8 text-center transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(65,90,230,0.1)] hover:border-indigo-200 group h-full">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#415ae6] to-indigo-500 text-white text-xs font-extrabold w-[30px] h-[30px] leading-[30px] rounded-full text-center shadow-[0_4px_12px_rgba(65,90,230,0.3)]">{step.number}</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mx-auto mb-5 text-[#415ae6] text-2xl transition-colors duration-300 group-hover:from-indigo-100 group-hover:to-indigo-200">
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">{step.description}</p>

                {/* Connector line (not on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-5 lg:-right-10 top-1/2 -translate-y-1/2 z-10 scale-75 lg:scale-100">
                    <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                      <path d="M0 6H52M52 6L46 1M52 6L46 11" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
