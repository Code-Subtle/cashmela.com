'use client';

import Link from 'next/link';
import { FaChevronRight, FaFileSignature, FaLandmark, FaSearchDollar, FaUserCheck } from 'react-icons/fa';

const StepsSection = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden relative before:content-[''] before:absolute before:top-[20%] before:left-[20%] before:w-[60%] before:h-[60%] before:bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,transparent_70%)] before:blur-[80px] before:pointer-events-none">
      <div className="mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="text-center mb-20">
             <h2 className="text-[2.75rem] font-extrabold text-white mb-3">Easy. Convenient. <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.3)]">Quick.</span></h2>
             <p className="text-slate-400 text-lg">The simple & Quick steps to your loan.</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative h-[600px] max-w-[68rem] mx-auto">
             <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60" viewBox="0 0 1000 600" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#000000" />
                        <stop offset="100%" stopColor="#00D09C" />
                    </linearGradient>
                </defs>
                <path 
                    d="M250,80 L750,80 Q850,80 850,180 L850,180 Q850,280 750,280 L250,280 Q150,280 150,380 L150,380 Q150,480 250,480 L750,480" 
                    fill="none" 
                    stroke="url(#snakeGradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="[stroke-dasharray:2000] [stroke-dashoffset:0] drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]"
                />
             </svg>

             {/* Step 1 */}
             <div className="absolute w-72 text-center z-10 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 group top-[20px] left-[120px]">
                <div className="text-[5rem] font-black text-white/[0.03] absolute top-[-3.5rem] z-[-10] transition-all duration-300 group-hover:text-white/[0.08] group-hover:scale-110 left-[-1rem]">01</div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-slate-800/60 backdrop-blur-md text-teal-400 flex items-center justify-center text-[1.75rem] mb-5 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-amber-950 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:border-transparent group-hover:scale-110 group-hover:rotate-6"><FaUserCheck /></div>
                <div className="text-[1.375rem] font-bold mb-2 text-white">Eligibility</div>
                <p className="text-slate-400 text-[15px] leading-relaxed">Tell us your requirement.<br/>2 minutes fill details.</p>
             </div>

             {/* Step 2 */}
             <div className="absolute w-72 text-center z-10 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 group top-[20px] right-[120px]">
                <div className="text-[5rem] font-black text-white/[0.03] absolute top-[-3.5rem] z-[-10] transition-all duration-300 group-hover:text-white/[0.08] group-hover:scale-110 right-[-1rem]">02</div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-slate-800/60 backdrop-blur-md text-teal-400 flex items-center justify-center text-[1.75rem] mb-5 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-amber-950 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:border-transparent group-hover:scale-110 group-hover:rotate-6"><FaSearchDollar /></div>
                <div className="text-[1.375rem] font-bold mb-2 text-white">Compare</div>
                <p className="text-slate-400 text-[15px] leading-relaxed">AI matches best banks 90+<br/>criteria 90% success.</p>
             </div>

             {/* Step 3 */}
             <div className="absolute w-72 text-center z-10 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 group top-[220px] left-[120px]">
                <div className="text-[5rem] font-black text-white/[0.03] absolute top-[-3.5rem] z-[-10] transition-all duration-300 group-hover:text-white/[0.08] group-hover:scale-110 left-[-1rem]">03</div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-slate-800/60 backdrop-blur-md text-teal-400 flex items-center justify-center text-[1.75rem] mb-5 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-amber-950 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:border-transparent group-hover:scale-110 group-hover:rotate-6"><FaFileSignature /></div>
                <div className="text-[1.375rem] font-bold mb-2 text-white">Apply</div>
                <p className="text-slate-400 text-[15px] leading-relaxed">Digital bank application<br/>complete digitally.</p>
             </div>

             {/* Step 4 */}
             <div className="absolute w-72 text-center z-10 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 group top-[420px] right-[120px]">
                <div className="text-[5rem] font-black text-white/[0.03] absolute top-[-3.5rem] z-[-10] transition-all duration-300 group-hover:text-white/[0.08] group-hover:scale-110 right-[-1rem]">04</div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-slate-800/60 backdrop-blur-md text-teal-400 flex items-center justify-center text-[1.75rem] mb-5 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-amber-950 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:border-transparent group-hover:scale-110 group-hover:rotate-6"><FaLandmark /></div>
                <div className="text-[1.375rem] font-bold mb-2 text-white">Disbursement</div>
                <p className="text-slate-400 text-[15px] leading-relaxed">Get quick sanction minutes<br/>not weeks.</p>
             </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="block md:hidden pl-8 border-l border-white/10 ml-6">
            {[
                { num: '01', title: 'Eligibility', desc: 'Tell us your requirement. 2 minutes fill details.', icon: <FaUserCheck /> },
                { num: '02', title: 'Compare', desc: 'AI matches best banks 90+ criteria 90% success.', icon: <FaSearchDollar /> },
                { num: '03', title: 'Apply', desc: 'Digital bank application complete digitally.', icon: <FaFileSignature /> },
                { num: '04', title: 'Disbursement', desc: 'Get quick sanction minutes not weeks.', icon: <FaLandmark /> }
            ].map((step, i) => (
                <div key={i} className="relative mb-16">
                    <div className="absolute -left-[44px] top-0 w-14 h-14 rounded-full bg-slate-900 text-teal-400 flex items-center justify-center border border-white/10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] z-10">{step.icon}</div>
                    <span className="text-6xl font-black text-white/[0.03] absolute -top-10 left-4 z-[-10]">{step.num}</span>
                    <h3 className="text-[1.375rem] font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-slate-400 text-[15px] leading-relaxed">{step.desc}</p>
                </div>
            ))}
        </div>

        <div className="text-center mt-20">
            <Link href="/apply" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-amber-950 px-10 py-4 rounded-full font-bold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 inline-flex items-center gap-3 border border-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_20px_25px_-5px_rgba(234,179,8,0.3)]">
                Get Started <FaChevronRight size={10} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
