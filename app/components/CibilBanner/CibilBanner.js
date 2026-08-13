'use client';

import Link from 'next/link';
import { FaArrowRight, FaShieldAlt, FaStar } from 'react-icons/fa';

const CibilBanner = () => {
  return (
    <section className="py-8 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 min-h-[380px] flex flex-col md:flex-row cursor-pointer bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl group">

          {/* LEFT PANEL */}
          <div className="w-full md:w-[40%] bg-gradient-to-br from-emerald-900 to-emerald-800 relative overflow-hidden flex items-end justify-center">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="absolute top-6 left-6 flex items-center gap-2 z-20 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#4ade80] animate-pulse"></div>
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">Happy Customer</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              className="relative z-10 h-[20rem] object-cover object-top translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-2 group-hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              alt="Happy Customer"
            />
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:right-0 before:w-[60%] before:h-[60%] before:bg-[radial-gradient(circle,rgba(74,222,128,0.1)_0%,transparent_70%)] before:blur-[60px] before:pointer-events-none">
            <div className="w-full md:w-[50%] text-center md:text-left z-10 mb-8 md:mb-0">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-400/10 text-emerald-400 rounded-full text-[0.625rem] font-bold uppercase tracking-[0.15em] mb-6 border border-emerald-400/20">
                <FaStar size={10} /> Official Partner
              </div>
              <h2 className="text-[2.5rem] font-extrabold text-white leading-[1.1] mb-4">
                Check Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">CIBIL Score</span>
              </h2>

              <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
                <div className="relative text-slate-500 font-semibold text-[1.5rem]">
                  ₹1,200
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500 -rotate-12 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                </div>
                <div className="bg-gradient-to-br from-emerald-400 to-green-500 text-emerald-950 px-4 py-1 rounded-md font-extrabold text-[1.125rem] shadow-[0_4px_15px_-1px_rgba(34,197,94,0.4)] tracking-wide">FREE</div>
              </div>

              <Link
                href="/cibil-score"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-950 px-10 py-4 rounded-full font-bold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-3 w-fit mx-auto md:mx-0 text-base border border-white/20 group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_25px_-5px_rgba(234,179,8,0.3)]"
              >
                Check Now <FaArrowRight size={10} />
              </Link>

              <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400 font-medium tracking-wide">
                <FaShieldAlt color="#22c55e" /> 100% Safe & Secure
              </div>
            </div>

            <div className="w-full md:w-[50%] flex justify-center items-center relative z-10">
              <div className="relative bg-slate-900 border-[6px] border-slate-800 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] h-[16rem] w-[9rem] overflow-hidden rotate-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)]">
                <div className="absolute top-2 left-0 right-0 mx-auto w-12 h-3 bg-slate-900 rounded-full z-20"></div>
                <div className="h-full w-full bg-slate-950 pt-8 px-3 pb-4 flex flex-col items-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[40%] after:bg-gradient-to-b after:from-white/5 after:to-transparent after:pointer-events-none">
                  <div style={{ fontSize: '8px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Credit Score</div>
                  <div className="relative w-24 h-12 overflow-hidden my-2">
                    <div className="w-24 h-24 rounded-full border-8 border-white/10 box-border"></div>
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-transparent border-t-emerald-400 border-r-emerald-400 -rotate-45 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]"></div>
                  </div>
                  <div className="text-[1.875rem] font-black text-white leading-none mb-1 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">785</div>
                  <div className="px-2 py-0.5 bg-emerald-400/20 text-emerald-400 rounded text-[0.5rem] font-bold uppercase border border-emerald-400/30">Excellent</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CibilBanner;
