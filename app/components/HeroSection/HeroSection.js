'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiSmartphone, FiCreditCard, FiCheckCircle, FiTrendingDown, FiCheck, FiArrowRight, FiShield } from 'react-icons/fi';
import { FaLandmark, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [checks, setChecks] = useState([false, false, false]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [showSavings, setShowSavings] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 300, y: 350, opacity: 0, scale: 1 });
  const [btnScale, setBtnScale] = useState(1);

  // Parallax Effect for Desktop Card
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
    
    setRotateX(((y - centerY) / centerY) * -8);
    setRotateY(((x - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    let timeouts = [];
    const T = (fn, delay) => timeouts.push(setTimeout(fn, delay));

    const runLoop = () => {
      // Reset
      setChecks([false, false, false]);
      setIsProcessing(false);
      setIsApproved(false);
      setShowSavings(false);
      setBtnScale(1);
      setCursorPos({ x: 220, y: 320, opacity: 0, scale: 1 });
      
      // Sequence
      T(() => setCursorPos(p => ({ ...p, opacity: 1 })), 500);
      T(() => setCursorPos(p => ({ ...p, x: 210, y: 130 })), 1500); // Move to first check
      T(() => setChecks([true, false, false]), 2000);
      T(() => setCursorPos(p => ({ ...p, x: 210, y: 190 })), 2500); // Move to second check
      T(() => setChecks([true, true, false]), 3000);
      T(() => setCursorPos(p => ({ ...p, x: 210, y: 250 })), 3500); // Move to third check
      T(() => setChecks([true, true, true]), 4000);
      
      T(() => setCursorPos(p => ({ ...p, x: 130, y: 350 })), 4800); // Move to button
      T(() => {
        setCursorPos(p => ({ ...p, scale: 0.8 }));
        setBtnScale(0.95);
      }, 5400); // Click button
      T(() => {
        setCursorPos(p => ({ ...p, scale: 1 }));
        setBtnScale(1);
        setIsProcessing(true);
      }, 5600);
      
      T(() => {
        setIsProcessing(false);
        setIsApproved(true);
        setCursorPos(p => ({ ...p, x: 180, y: 280 })); // Move cursor away
      }, 7000); // Show approved
      
      T(() => setShowSavings(true), 7800);
      T(() => setCursorPos(p => ({ ...p, opacity: 0 })), 9500);
      T(() => runLoop(), 11000);
    };

    runLoop();
    return () => timeouts.forEach(clearTimeout);
  }, []);



  return (
    <section className="relative bg-[#f5f6fc] overflow-x-hidden flex flex-col selection:bg-[#415ae6] selection:text-white pb-12">
      
      {/* --- CREATIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ x: [100, -100, 100], y: [50, -50, 50], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply"
        />
      </div>

      {/* ══ MOBILE LAYOUT ══ */}
      <div className="lg:hidden flex flex-col w-full pb-10 pt-4 sm:pt-8 px-5 relative z-10">
        
        {/* Heading */}
        <div className="text-center pb-8 md:pb-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "backOut" }}
            className="text-[36px] sm:text-[42px] md:text-[48px] font-medium text-slate-900 leading-[1.1] tracking-tight"
          >
            Make Debt Simpler, Smarter, and More Affordable.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[15px] sm:text-[16px] text-slate-600 mt-4 leading-relaxed max-w-md md:max-w-xl mx-auto"
          >
            Manage debt more efficiently with one simple repayment plan designed around your needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <a href="/apply" className="py-3.5 sm:py-4 px-10 bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold rounded-full shadow-lg transition-transform active:scale-95 text-[15px] flex items-center justify-center gap-2">
              Apply Now <FiArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Hero Visual Mobile (Simplified Interactive Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[360px] md:max-w-[420px] mx-auto perspective-1000"
        >
          {/* Card Base */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/60 relative overflow-hidden">
             {/* Gradient Headers */}
             <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-[#ffe4f5] via-[#f4f6ff] to-[#e0e7ff] opacity-60 -z-10"></div>
             
             {/* Header */}
             <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                    <h3 className="text-[16px] font-black text-slate-900 tracking-tight">EMI Consolidator</h3>
                    <div className="text-[11px] text-slate-500 font-medium h-4">
                      {isProcessing ? (
                        <motion.span initial={{opacity:0}} animate={{opacity:1}} className="text-[#415ae6] font-bold flex items-center gap-1">
                          <FaRobot className="animate-pulse"/> Auto-merging EMIs...
                        </motion.span>
                      ) : 'Clear your debts faster'}
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    <FiUser className="w-4 h-4 text-slate-400" />
                </div>
             </div>

             {/* Content Area */}
             <div className="relative h-[230px] w-full">
                <AnimatePresence mode="wait">
                  {!isApproved ? (
                    <motion.div 
                      key="old-debts"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, y: -30, scale: 0.9, filter: "blur(4px)" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="relative overflow-hidden rounded-2xl mb-3 p-1 -m-1">
                        {/* Scanner Effect */}
                        <motion.div
                          animate={{ top: ['-30%', '120%'] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                          className="absolute left-0 w-full h-16 bg-gradient-to-b from-transparent via-[#415ae6]/20 to-[#415ae6]/5 border-b-2 border-[#415ae6]/50 z-20 pointer-events-none shadow-[0_5px_15px_rgba(65,90,230,0.25)] rounded-b-xl"
                        />
                        <div className="space-y-2 relative z-10">
                            {[
                              { name: 'App Loan', amt: '₹12,400', int: '36%', icon: FiSmartphone, color: 'text-[#e53e3e]', bg: 'bg-[#fce8e8]' },
                              { name: 'Credit Card', amt: '₹8,500', int: '42%', icon: FiCreditCard, color: 'text-[#dd6b20]', bg: 'bg-[#ffedd5]' },
                              { name: 'Personal Loan', amt: '₹14,200', int: '18%', icon: FaLandmark, color: 'text-[#b7791f]', bg: 'bg-[#fef08a]/40' }
                            ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 shadow-sm relative overflow-hidden group hover:border-[#415ae6]/30 transition-colors">
                                <div className="flex items-center gap-2.5">
                                  <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center ${item.bg} ${item.color}`}>
                                    <item.icon className="w-4 h-4"/>
                                  </div>
                                  <div>
                                    <p className="text-[12px] font-bold text-slate-800 leading-none">{item.name}</p>
                                    <p className={`text-[9px] font-bold ${item.color} mt-1 inline-block px-1.5 py-0.5 rounded bg-slate-50`}>{item.int} Int.</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <p className="text-[14px] font-black text-slate-800">{item.amt}</p>
                                  <motion.div 
                                    animate={{ backgroundColor: checks[i] ? '#10b981' : '#ffffff', borderColor: checks[i] ? '#10b981' : '#e2e8f0' }}
                                    className="w-4 h-4 rounded-full border flex items-center justify-center"
                                  >
                                    <motion.div animate={{ opacity: checks[i] ? 1 : 0 }}><FiCheck className="w-2.5 h-2.5 text-white" strokeWidth="3"/></motion.div>
                                  </motion.div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-end pt-2 border-t border-slate-100">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Monthly</span>
                          <span className="text-[20px] font-black text-slate-800 leading-none tracking-tight">₹35,100</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="new-debt"
                      initial={{ opacity: 0, scale: 0.8, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                      className="absolute inset-0 pt-2"
                    >
                      <div className="bg-gradient-to-b from-[#f8faff] to-white border-2 border-[#e0e7ff] rounded-[20px] p-5 text-center shadow-md">
                          <motion.div 
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#10b981] text-[10px] font-bold mb-4 shadow-sm border border-green-100"
                          >
                            <FiCheckCircle className="w-3 h-3"/> All debts merged successfully
                          </motion.div>
                          <p className="text-slate-500 font-bold text-[11px] mb-1">New Single Monthly Payment</p>
                          <h2 className="text-[36px] font-black tracking-tight text-[#415ae6] mb-2 leading-none">₹21,500<span className="text-[14px] font-medium text-slate-400">/mo</span></h2>
                          <p className="text-[10px] text-[#415ae6] font-bold bg-white inline-block px-2.5 py-1.5 rounded-lg border border-[#e0e7ff] shadow-sm">Interest dropped to 9.99%*</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             {/* Action Button */}
             <motion.div 
               animate={{ scale: btnScale, backgroundColor: isApproved ? '#ecfdf5' : '#1E40AF', color: isApproved ? '#10b981' : '#ffffff' }}
               className="w-full mt-5 py-3.5 rounded-[12px] font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer border border-transparent"
               style={isApproved ? { borderColor: '#10b981' } : {}}
             >
                 {isProcessing && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                 <span className="flex items-center gap-2 text-[13px]">
                     {isApproved ? <><FiCheckCircle className="w-4 h-4"/> Consolidation Approved</> : isProcessing ? 'AI is processing...' : 'Combine into ONE Smart EMI'}
                 </span>
             </motion.div>

             {/* Simulated Cursor (Mobile) */}
             <motion.div 
               className="absolute top-0 left-0 z-50 drop-shadow-2xl pointer-events-none" 
               animate={{ x: cursorPos.x * 0.9, y: cursorPos.y * 0.88, opacity: cursorPos.opacity, scale: cursorPos.scale }}
               transition={{ type: "spring", stiffness: 80, damping: 20 }}
             >
                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M5.5 3.21V20.8C5.5 21.82 6.27 21.82 6.77 21.4L11.43 17.38C11.72 17.13 12.09 17 12.48 17H19.43C20.08 17 20.44 16.23 20.01 15.76L5.5 3.21Z" fill="#1e293b" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                 </svg>
             </motion.div>
          </div>
        </motion.div>


      </div>

      {/* ══ DESKTOP LAYOUT ══ */}
      <div className="hidden lg:flex flex-col py-2 px-8 xl:px-16 max-w-[1280px] w-full mx-auto flex-1 relative z-10">
        <div className="w-full h-full flex items-start">
            <div className="grid grid-cols-12 gap-12 items-center w-full">
                
                {/* Desktop Left Text */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col justify-center col-span-12 xl:col-span-6 z-20"
                >
                    <h1 className="text-[54px] xl:text-[64px] font-medium text-slate-900 leading-[1.05] mb-6 tracking-tight">
                        Make Debt Simpler, Smarter, and More Affordable.
                    </h1>
                    
                    <p className="text-[16px] xl:text-[18px] text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Manage debt more efficiently with one simple repayment plan designed around your needs.
                    </p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <a href="/apply" className="inline-flex items-center gap-2 py-4 px-10 bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1 active:scale-95 text-[16px]">
                          Apply Now <FiArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                    

                </motion.div>

                {/* Desktop Right Visual (Interactive 3D Card) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="relative col-span-12 xl:col-span-6 z-10 h-[600px] flex items-center justify-center"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ perspective: 1200 }}
                >
                    <motion.div 
                      ref={cardRef}
                      animate={{ rotateX, rotateY }}
                      transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.5 }}
                      className="relative w-[380px] min-h-[520px] cursor-crosshair"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                    
                    {/* Glowing Aura behind card */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full transform -translate-z-10"></div>

                    {/* Desktop EMI Card */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl rounded-[30px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-6 z-10 border border-white">
                        
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#ffe4f5] via-[#f4f6ff] to-[#e0e7ff] opacity-50 rounded-t-[30px] -z-10"></div>
                        
                        <div className="flex justify-between items-start mb-5 relative z-10" style={{ transform: "translateZ(30px)" }}>
                            <div>
                                <h3 className="text-[16px] font-black text-slate-900 tracking-tight">EMI Consolidator</h3>
                                <div className="text-[11px] text-slate-500 font-medium h-5 mt-1">
                                  {isProcessing ? (
                                    <motion.span initial={{opacity:0}} animate={{opacity:1}} className="text-[#415ae6] font-bold flex items-center gap-1.5">
                                      <FaRobot className="animate-pulse w-3 h-3"/> AI is auto-merging...
                                    </motion.span>
                                  ) : 'Clear your debts faster'}
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center">
                              <FiUser className="w-4 h-4 text-slate-400"/>
                            </div>
                        </div>

                        <div className="grid relative items-center w-full h-[290px]" style={{ transform: "translateZ(40px)" }}>
                            <AnimatePresence mode="wait">
                              {!isApproved ? (
                                <motion.div 
                                  key="desktop-old-debts"
                                  initial={{ opacity: 0, x: -30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
                                  transition={{ duration: 0.5 }}
                                  className="absolute inset-0"
                                >
                                    <div className="relative overflow-hidden rounded-2xl mb-4 mt-2 p-1 -m-1">
                                        {/* Scanner Effect */}
                                        <motion.div
                                          animate={{ top: ['-30%', '120%'] }}
                                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                                          className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-[#415ae6]/20 to-[#415ae6]/5 border-b-2 border-[#415ae6]/50 z-20 pointer-events-none shadow-[0_5px_15px_rgba(65,90,230,0.25)] rounded-b-xl"
                                        />
                                        <div className="space-y-3 relative z-10">
                                            {[
                                              { name: 'App Loan', amt: '₹12,400', int: '36%', icon: FiSmartphone, color: 'text-[#e53e3e]', bg: 'bg-[#fce8e8]' },
                                              { name: 'Credit Card', amt: '₹8,500', int: '42%', icon: FiCreditCard, color: 'text-[#dd6b20]', bg: 'bg-[#ffedd5]' },
                                              { name: 'Personal Loan', amt: '₹14,200', int: '18%', icon: FaLandmark, color: 'text-[#b7791f]', bg: 'bg-[#fef08a]/40' }
                                            ].map((item, i) => (
                                              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                                  <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center ${item.bg} ${item.color} shrink-0`}>
                                                      <item.icon className="w-4 h-4"/>
                                                    </div>
                                                    <div>
                                                      <p className="text-[12px] font-bold text-slate-800">{item.name}</p>
                                                      <p className={`text-[10px] font-bold ${item.color} mt-1 bg-slate-50 inline-block px-1.5 py-0.5 rounded`}>{item.int} Interest</p>
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center gap-3">
                                                    <p className="text-[14px] font-black text-slate-800 shrink-0">{item.amt}</p>
                                                    <motion.div 
                                                      animate={{ backgroundColor: checks[i] ? '#10b981' : '#ffffff', borderColor: checks[i] ? '#10b981' : '#e2e8f0' }}
                                                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                                                    >
                                                      <motion.div animate={{ opacity: checks[i] ? 1 : 0 }}><FiCheck className="w-2.5 h-2.5 text-white" strokeWidth="3"/></motion.div>
                                                    </motion.div>
                                                  </div>
                                              </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end pt-3 border-t border-slate-100">
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Monthly</span>
                                        <span className="text-[20px] font-black text-slate-800 leading-none tracking-tight">₹35,100</span>
                                    </div>
                                </motion.div>
                              ) : (
                                <motion.div 
                                  key="desktop-new-debt"
                                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                                  className="absolute inset-0 pt-4"
                                >
                                    <div className="bg-gradient-to-b from-[#f8faff] to-white border-2 border-[#e0e7ff] rounded-[24px] p-6 text-center shadow-lg relative overflow-hidden">
                                        {/* Confetti / Glow effect inside card */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/20 blur-2xl rounded-full"></div>
                                        
                                        <motion.div 
                                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ecfdf5] text-[#10b981] text-[10px] font-bold mb-4 border border-green-100 shadow-sm"
                                        >
                                          <FiCheckCircle className="w-3 h-3"/> All debts merged successfully
                                        </motion.div>
                                        <p className="text-slate-500 font-bold text-[11px] mb-1">New Single Monthly Payment</p>
                                        <h2 className="text-[34px] font-black tracking-tight text-[#415ae6] mb-2 leading-none">₹21,500<span className="text-[14px] font-medium text-slate-400">/mo</span></h2>
                                        <p className="text-[11px] text-[#415ae6] font-bold bg-white inline-block px-3 py-1 rounded-lg border border-[#e0e7ff] shadow-sm">Interest dropped to 9.99%*</p>
                                    </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                        </div>

                        <motion.div 
                          animate={{ scale: btnScale, backgroundColor: isApproved ? '#ecfdf5' : '#1E40AF', color: isApproved ? '#10b981' : '#ffffff' }}
                          className="w-full mt-6 py-4 rounded-[16px] font-bold flex items-center justify-center gap-2 shadow-xl border border-transparent"
                          style={isApproved ? { borderColor: '#10b981', transform: "translateZ(50px)" } : { transform: "translateZ(50px)" }}
                        >
                            {isProcessing && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                            <span className="flex items-center justify-center gap-2 text-[13px] w-full text-center whitespace-nowrap">
                                {isApproved ? <><FiCheckCircle className="w-4 h-4 shrink-0"/> Consolidation Approved</> : isProcessing ? 'AI is processing...' : 'Combine into ONE Smart EMI'}
                            </span>
                        </motion.div>
                    </div>

                    {/* Savings Badge Floating (Desktop only) */}
                    <AnimatePresence>
                      {showSavings && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0, x: -20, rotate: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                          className="absolute -left-[40px] top-[60%] bg-white p-3.5 rounded-[18px] shadow-2xl border border-green-100 z-30"
                          style={{ transform: "translateZ(80px)" }}
                        >
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#10b981] justify-center rounded-full border-[3px] border-white flex items-center text-white shadow-md">
                              <FiTrendingDown className="w-4 h-4"/>
                            </div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">You Save</p>
                            <p className="text-[22px] font-black text-[#10b981] leading-none">₹13,600</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Simulated Cursor (Desktop only) */}
                    <motion.div 
                      className="absolute top-0 left-0 z-50 drop-shadow-2xl pointer-events-none" 
                      animate={{ x: cursorPos.x, y: cursorPos.y, opacity: cursorPos.opacity, scale: cursorPos.scale }}
                      transition={{ type: "spring", stiffness: 80, damping: 20 }}
                      style={{ transform: "translateZ(100px)" }}
                    >
                        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.5 3.21V20.8C5.5 21.82 6.27 21.82 6.77 21.4L11.43 17.38C11.72 17.13 12.09 17 12.48 17H19.43C20.08 17 20.44 16.23 20.01 15.76L5.5 3.21Z" fill="#1e293b" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                    </motion.div>
                    
                    </motion.div>
                </motion.div>
            </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
