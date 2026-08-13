'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaShieldAlt, FaPercent } from 'react-icons/fa';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[92vh] bg-[#f8f8f6] text-slate-900 overflow-hidden flex flex-col justify-between pt-6 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Dynamic Ambient Background Blur Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-purple-300/25 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-emerald-200/30 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Floating Accent Glass Card 1 (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{ 
          opacity: { duration: 0.2, delay: 0.1 },
          x: { duration: 0.2, delay: 0.1 },
          y: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden lg:flex absolute top-1/4 left-6 xl:left-14 z-20 items-center gap-3.5 p-3.5 pr-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80">
          <FaShieldAlt className="text-lg" />
        </div>
        <div>
          <p className="text-xs font-black text-slate-900">RBI-Regulated Partners</p>
          <p className="text-[10px] text-slate-500 font-semibold">100% Encrypted &amp; Secure</p>
        </div>
      </motion.div>

      {/* Floating Accent Glass Card 2 (Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 0.2, delay: 0.15 },
          x: { duration: 0.2, delay: 0.15 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden lg:flex absolute top-1/3 right-6 xl:right-14 z-20 items-center gap-3.5 p-3.5 pr-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all"
      >
        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100/80">
          <FaPercent className="text-base" />
        </div>
        <div>
          <p className="text-xs font-black text-slate-900">Save up to 40% EMI</p>
          <p className="text-[10px] text-slate-500 font-semibold">Smart Debt Consolidation</p>
        </div>
      </motion.div>

      {/* Central Main Headline, Badge, Subtitle & CTAs */}
      <div className="relative max-w-4xl mx-auto text-center space-y-6 sm:space-y-7 z-10 my-auto pt-6 sm:pt-8">
        

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] text-slate-900 px-2 sm:px-0"
        >
          Making Loan Comparison{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            Simple, Transparent, and Fair
          </span>{" "}
          for Every Indian.
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal px-2 sm:px-0"
        >
          We founded Cashmela to simplify borrowing across India. Our platform helps you compare eligible personal loans, business loans, and credit cards from trusted RBI-regulated lenders without hidden fees or complex processes.
        </motion.p>

        {/* Action CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="flex items-center justify-center pt-2"
        >
          <Link
            href="/apply"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-extrabold rounded-2xl text-base sm:text-lg shadow-xl shadow-indigo-200/80 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            Check Loan Eligibility <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>

      {/* Integrated Metrics & Trust Section */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto w-full pt-6 pb-2"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 bg-white/85 backdrop-blur-xl p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-500">
          
          <div className="text-center px-2 py-1.5 border-r last:border-r-0 border-slate-100 group">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-indigo-600 group-hover:scale-105 transition-transform duration-300">
              50,000+
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
              Borrowers Empowered
            </p>
          </div>

          <div className="text-center px-2 py-1.5 md:border-r border-slate-100 group">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-600 group-hover:scale-105 transition-transform duration-300">
              ₹250Cr+
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
              Loans Disbursed
            </p>
          </div>

          <div className="text-center px-2 py-1.5 border-r border-slate-100 group">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-emerald-600 group-hover:scale-105 transition-transform duration-300">
              50+
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
              Verified Lenders
            </p>
          </div>

          <div className="text-center px-2 py-1.5 group">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-purple-600 group-hover:scale-105 transition-transform duration-300">
              99.2%
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
              Customer Satisfaction
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
