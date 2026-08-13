'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiInfo, FiTrendingDown, FiCheckCircle, FiChevronRight, FiCreditCard, FiHome, FiEdit2 } from 'react-icons/fi';
import { FaLandmark, FaShieldAlt, FaSparkles } from 'react-icons/fa';
import FadeIn from '../FadeIn';

const SavingsCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [isEditing, setIsEditing] = useState(false);
  const [rawInputValue, setRawInputValue] = useState('500000');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smooth 3-Phase Animation State: 0 = Multiple Debts, 1 = Merging, 2 = Consolidated Success
  const [animPhase, setAnimPhase] = useState(0);
  
  useEffect(() => {
    let timeouts = [];
    const runLoop = () => {
      setAnimPhase(0); // Step 1: Multiple High-Interest Debts
      timeouts.push(setTimeout(() => setAnimPhase(1), 1500)); // Step 2: Merging Animation
      timeouts.push(setTimeout(() => setAnimPhase(2), 3000)); // Step 3: Consolidated Smart EMI
      timeouts.push(setTimeout(() => runLoop(), 5500));
    };
    runLoop();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Parallax 3D Effect for Left Card
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const calculateMonths = (principal) => {
    if (principal <= 50000) return 16;
    if (principal <= 100000) return 24;
    if (principal <= 500000) return 36;
    if (principal <= 1000000) return 48;
    if (principal <= 2500000) return 60;
    return 72;
  };

  const months = calculateMonths(amount);
  
  const ccMonthlyInterestRate = 0.40 / 12;
  const ccEmi = (amount * ccMonthlyInterestRate * Math.pow(1 + ccMonthlyInterestRate, months)) / (Math.pow(1 + ccMonthlyInterestRate, months) - 1);
  const totalCcPayment = ccEmi * months;
  
  const plMonthlyInterestRate = 0.12 / 12;
  const plEmi = (amount * plMonthlyInterestRate * Math.pow(1 + plMonthlyInterestRate, months)) / (Math.pow(1 + plMonthlyInterestRate, months) - 1);
  const totalPlPayment = plEmi * months;

  const savings = Math.max(0, Math.floor(totalCcPayment - totalPlPayment));
  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  const minAmount = 10000;
  const maxAmount = 5000000; // 50 Lakhs Limit
  const sliderPercentage = ((amount - minAmount) / (maxAmount - minAmount)) * 100;

  const cardsData = [
    {
      id: 'card-1',
      type: 'Personal Loan',
      icon: FaLandmark,
      amount: '₹2,80,000',
      rate: '22% p.a.',
      badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
      iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600 text-white',
      accentColor: 'border-amber-400',
      initialY: 0,
      initialRotate: -6,
    },
    {
      id: 'card-2',
      type: 'Home Loan Dues',
      icon: FiHome,
      amount: '₹3,50,000',
      rate: '14.5% p.a.',
      badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white',
      accentColor: 'border-blue-400',
      initialY: 25,
      initialRotate: 1,
    },
    {
      id: 'card-3',
      type: 'Credit Card Bill',
      icon: FiCreditCard,
      amount: '₹1,20,000',
      rate: '42% p.a.',
      badgeBg: 'bg-rose-500/10 text-rose-600 border-rose-200',
      iconBg: 'bg-gradient-to-br from-rose-500 to-red-600 text-white',
      accentColor: 'border-rose-400',
      initialY: 50,
      initialRotate: 7,
    }
  ];

  return (
    <section className="bg-[#f8faff] py-16 md:py-24 relative overflow-hidden flex items-center min-h-screen lg:min-h-[750px]" id="savings-calculator">
      {/* Decorative ambient background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-teal-100/40 rounded-full blur-[70px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 w-full">
        
        <FadeIn direction="down">
          <div className="text-center mb-10 lg:mb-8">
            <h2 className="text-[0.75rem] md:text-[0.875rem] font-black text-indigo-600 uppercase tracking-[0.2em] mb-1">
              Savings Calculator
            </h2>
            <h3 className="text-[1.75rem] md:text-[2.25rem] font-extrabold text-slate-900 leading-tight tracking-tight">
              See How Much You Can <span className="text-[#415ae6] relative">
                Save
                <svg className="absolute w-full h-2 -bottom-1 left-0 text-indigo-300" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
              </span>
            </h3>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12" style={{ perspective: 1200 }}>
          
          {/* Left Side - Animated Interactive Showcase (Never goes blank) */}
          <div 
            className="flex w-full lg:w-[42%] items-center justify-center cursor-pointer mb-10 lg:mb-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <FadeIn direction="right" delay={0.2} fullWidth={true} className="w-full flex justify-center">
              <motion.div 
                ref={cardRef}
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 120, damping: 25, mass: 0.5 }}
                className="relative w-full max-w-[370px] md:max-w-[420px] lg:max-w-none lg:w-[400px] min-h-[460px] lg:min-h-[530px] mx-auto flex flex-col justify-between rounded-[32px] bg-white/90 backdrop-blur-2xl border border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] p-6 overflow-hidden group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white to-indigo-50/20 pointer-events-none"></div>
                
                {/* Header Phase Indicator Bar */}
                <div className="relative z-20 flex items-center justify-between border-b border-slate-100 pb-4 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping"></div>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                      {animPhase === 0 && "Step 1: Multiple High EMIs"}
                      {animPhase === 1 && "Step 2: Smart Consolidation"}
                      {animPhase === 2 && "Step 3: 1 Single Reduced EMI"}
                    </span>
                  </div>

                  {/* Phase Step Dots */}
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => setAnimPhase(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${animPhase === idx ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-200'}`}
                        aria-label={`Switch to phase ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Cards Container (Always Present - Smooth Motion) */}
                <div className="relative w-full flex-1 flex items-center justify-center py-4 my-auto min-h-[300px]">
                  
                  {/* PHASES 0 & 1: 3 Stacked Cards Merging */}
                  {animPhase !== 2 && (
                    <div className="relative w-full h-[290px] flex items-center justify-center">
                      {cardsData.map((card, index) => {
                        // In merging phase (phase 1), pull cards toward center (y = 15, rotate = 0)
                        const isMerging = animPhase === 1;
                        const targetY = isMerging ? 15 : card.initialY;
                        const targetRotate = isMerging ? 0 : card.initialRotate;
                        const targetScale = isMerging ? 0.95 - index * 0.03 : 1;

                        return (
                          <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: -40, rotate: 0 }}
                            animate={{ 
                              opacity: 1, 
                              y: targetY, 
                              rotate: targetRotate,
                              scale: targetScale
                            }}
                            transition={{ 
                              duration: 0.9, 
                              ease: [0.22, 1, 0.36, 1],
                              delay: index * 0.2 
                            }}
                            className={`absolute w-[94%] sm:w-[320px] p-4 sm:p-5 rounded-2xl bg-white shadow-[0_15px_35px_-10px_rgba(0,0,0,0.12)] border ${card.accentColor} flex flex-col justify-between`}
                            style={{ zIndex: 10 + index * 10 }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center shadow-md`}>
                                  <card.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{card.type}</p>
                                  <p className="text-[10px] font-bold text-slate-400">High Interest Trap</p>
                                </div>
                              </div>

                              <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${card.badgeBg}`}>
                                {card.rate}
                              </span>
                            </div>

                            <div className="flex justify-between items-end pt-2 border-t border-dashed border-slate-100 mt-2">
                              <div>
                                <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Outstanding Amount</p>
                                <p className="text-base font-black text-slate-900 leading-tight">{card.amount}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                                  Multiple Due Dates
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}

                      {/* Merging Spinner & Aura Ring Overlay */}
                      {animPhase === 1 && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-40 bg-white/80 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-inner"
                        >
                          <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>
                            <FaShieldAlt className="text-indigo-600 text-xl animate-pulse" />
                          </div>
                          <p className="text-sm font-black text-indigo-700 uppercase tracking-wider">Merging 3 EMIs Into 1</p>
                          <p className="text-xs text-slate-500 font-semibold mt-1">Applying Best Interest Rate Engine...</p>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* PHASE 2: Single Consolidated Smart EMI Card */}
                  {animPhase === 2 && (
                    <motion.div
                      key="consolidated-card"
                      initial={{ opacity: 0, scale: 0.85, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                      className="w-full bg-gradient-to-b from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-2xl border border-indigo-500/30 text-center relative overflow-hidden flex flex-col justify-between min-h-[290px]"
                    >
                      {/* Accent Aura */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>

                      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider">
                          <FiCheckCircle className="text-emerald-400" /> Loan Consolidated
                        </span>
                        <span className="text-xs font-black text-indigo-200">1 Single EMI</span>
                      </div>

                      <div className="my-2 space-y-1">
                        <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">New Combined Monthly Payment</p>
                        <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">₹14,250 <span className="text-xs text-emerald-400 font-bold">/ month</span></p>
                      </div>

                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 my-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Total Interest Saved</p>
                        <p className="text-xl sm:text-2xl font-black text-yellow-300">Up to ₹1,45,000</p>
                        <p className="text-[11px] font-bold text-slate-200 mt-0.5">Rate Reduced to 9.99% p.a.*</p>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-xs font-extrabold text-emerald-300">
                        <FiTrendingDown className="w-4 h-4" /> 1 Due Date • Zero Hidden Fees
                      </div>
                    </motion.div>
                  )}
                </div>



              </motion.div>
            </FadeIn>
          </div>

          {/* Right Side - Interactive Calculator */}
          <div className="w-full lg:w-[55%] flex items-center justify-center">
            <FadeIn direction="left" delay={0.4} fullWidth={true} className="w-full flex justify-center">
              <div className="bg-white/80 backdrop-blur-xl w-full max-w-[100%] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] min-h-[420px] lg:min-h-[520px] flex flex-col rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06),0_0_50px_rgba(65,90,230,0.02)] border border-white/60 p-5 md:p-8 relative overflow-hidden">
                
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-50/30 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <label htmlFor="credit-bill-slider" className="block text-slate-800 font-extrabold text-lg md:text-xl lg:text-2xl mb-8 tracking-tight">
                    What's your total monthly EMI and bill payment?
                  </label>

                  {/* Custom Composite Slider */}
                  <div className="mb-2 relative h-10 flex items-center group touch-none">
                    {/* Track background */}
                    <div className="absolute w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                       {/* Active fill */}
                       <div className="h-full bg-gradient-to-r from-[#415ae6] to-indigo-400 rounded-full" style={{ width: `${Math.min(Math.max(sliderPercentage, 0), 100)}%` }}></div>
                    </div>
                    {/* Custom Thumb */}
                    <div 
                      className="absolute h-7 w-7 bg-white border-[3px] border-[#415ae6] rounded-full shadow-[0_3px_8px_rgba(65,90,230,0.3)] transition-transform group-active:scale-105 flex items-center justify-center pointer-events-none"
                      style={{ left: `calc(${Math.min(Math.max(sliderPercentage, 0), 100)}% - 14px)` }}
                    >
                      <div className="w-2.5 h-2.5 bg-[#415ae6] rounded-full"></div>
                    </div>
                    {/* Invisible Native Input */}
                    <input 
                      id="credit-bill-slider"
                      type="range" 
                      min={minAmount} 
                      max={maxAmount} 
                      step="10000" 
                      value={amount} 
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>

                  {/* Slider Min / Max Scale Labels */}
                  <div className="flex justify-between items-center text-[11px] font-extrabold text-slate-400 mb-8 px-1">
                    <span>₹10,000</span>
                    <span className="text-indigo-600 font-black">₹50,00,000 (50 Lakhs)</span>
                  </div>

                  {/* Amount Display & Direct Editable Input */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-auto">
                    <div className="w-[30%] bg-slate-100/90 text-slate-700 font-extrabold text-xs sm:text-sm lg:text-base px-3 sm:px-4 rounded-xl border border-slate-200/60 flex items-center justify-center h-14 shrink-0">
                      Amount
                    </div>
                    <div className="w-[70%] bg-indigo-50/50 hover:bg-indigo-50/80 text-slate-900 font-black text-xl md:text-2xl lg:text-3xl px-4 sm:px-5 rounded-xl border border-indigo-200/80 flex items-center justify-between h-14 shadow-inner transition-all group focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-300">
                      <span className="text-indigo-600 font-extrabold text-lg lg:text-xl mr-1 select-none">₹</span>
                      <input
                        type="text"
                        id="custom-amount-input"
                        value={isEditing ? rawInputValue : amount.toLocaleString('en-IN')}
                        onFocus={() => {
                          setIsEditing(true);
                          setRawInputValue(amount ? amount.toString() : '');
                        }}
                        onBlur={() => {
                          setIsEditing(false);
                          if (!amount || amount < minAmount) setAmount(minAmount);
                        }}
                        onChange={(e) => {
                          const cleaned = e.target.value.replace(/[^0-9]/g, '');
                          setRawInputValue(cleaned);
                          const val = parseInt(cleaned, 10);
                          if (!isNaN(val)) {
                            setAmount(Math.min(val, 5000000));
                          } else {
                            setAmount(0);
                          }
                        }}
                        className="w-full bg-transparent text-right font-black text-slate-900 outline-none tabular-nums"
                        placeholder="Enter amount"
                      />
                      <FiEdit2 className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600 ml-2 shrink-0 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>

                {/* Results Box */}
                <div className="mt-8 bg-gradient-to-br from-[#415ae6] via-[#354ac3] to-[#25369b] rounded-[1.8rem] p-6 lg:p-8 text-white shadow-[0_20px_40px_-10px_rgba(65,90,230,0.4)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-10">
                    <div className="sm:border-r sm:border-white/20 sm:pr-4 flex flex-col justify-between min-w-0">
                      <p className="text-indigo-100 text-[13px] font-medium leading-snug mb-1 break-words">Pay off your bill faster in</p>
                      <div className="flex items-baseline gap-1.5 mt-auto">
                        <span className="text-[2.25rem] font-black leading-none tracking-tight tabular-nums break-words">{months}</span>
                        <span className="text-indigo-200 text-xs font-bold">months</span>
                      </div>
                    </div>
                    
                    <div className="sm:pl-2 flex flex-col justify-between min-w-0 mt-4 sm:mt-0">
                      <p className="text-indigo-100 text-[13px] font-medium leading-snug mb-1 break-words">Save on interest paid up to</p>
                      <div className="flex items-baseline gap-0.5 mt-auto mb-4 min-w-0">
                        <span className="text-[1.5rem] md:text-[1.65rem] font-black leading-none text-[#ffeb3b] tracking-tight tabular-nums break-words truncate max-w-full">₹{savings.toLocaleString('en-IN')}</span>
                      </div>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-[#415ae6] font-extrabold text-[11px] md:text-[12px] py-2.5 px-3 md:px-5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full flex items-center justify-center gap-1 active:scale-95 whitespace-nowrap"
                      >
                        View Breakdown <FiChevronRight strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Breakdown Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-slate-50 border-b border-slate-100 px-6 sm:px-8 py-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-[#415ae6]">
                    <FiTrendingDown className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Savings Breakdown</h3>
                    <p className="text-xs text-slate-500 font-medium">Comparison based on {months} months tenure</p>
                  </div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:px-8 sm:py-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Existing Loan */}
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                    <h4 className="text-red-900 font-bold mb-4 flex items-center gap-2">
                      <FiInfo className="text-red-500" /> Existing Credit Card
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-red-700/80">Principal</span>
                        <span className="font-semibold text-slate-900">{formatCurrency(amount)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-red-700/80">Interest Rate</span>
                        <span className="font-semibold text-slate-900">~40% p.a.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-red-700/80">Monthly EMI</span>
                        <span className="font-semibold text-slate-900">{formatCurrency(ccEmi)}</span>
                      </div>
                      <div className="pt-3 border-t border-red-200/60 flex justify-between items-center">
                        <span className="text-sm font-bold text-red-900">Total Interest Paid</span>
                        <span className="font-black text-red-600">{formatCurrency(totalCcPayment - amount)}</span>
                      </div>
                    </div>
                  </div>

                  {/* CashMela Loan */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 relative overflow-hidden shadow-[0_10px_20px_-10px_rgba(16,185,129,0.2)]">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    <h4 className="text-emerald-900 font-bold mb-4 flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-500" /> CashMela Consolidation
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-emerald-800/80">Principal</span>
                        <span className="font-semibold text-slate-900">{formatCurrency(amount)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-emerald-800/80">Interest Rate</span>
                        <span className="font-semibold text-slate-900">Starts @ 12% p.a.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-emerald-800/80">Monthly EMI</span>
                        <span className="font-semibold text-slate-900">{formatCurrency(plEmi)}</span>
                      </div>
                      <div className="pt-3 border-t border-emerald-200/60 flex justify-between items-center">
                        <span className="text-sm font-bold text-emerald-900">Total Interest Paid</span>
                        <span className="font-black text-emerald-600">{formatCurrency(totalPlPayment - amount)}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Savings Highlight */}
                <div className="mt-8 bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                  <div>
                    <p className="text-indigo-200 text-sm font-medium mb-1">Your Total Savings</p>
                    <h2 className="text-3xl font-black text-[#ffeb3b]">{formatCurrency(savings)}</h2>
                  </div>
                  <a href="/apply" className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-transform active:scale-95 whitespace-nowrap text-center">
                    Apply Now
                  </a>
                </div>
                
                <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed max-w-lg mx-auto">
                  *Disclaimer: These calculations are for illustrative purposes only. Actual interest rates, EMIs, and savings will depend on your credit profile, lender policies, and final loan approval.
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SavingsCalculator;
