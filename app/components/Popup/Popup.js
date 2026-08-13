"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-gradient-to-br from-[#e0faff] to-white w-full max-w-[800px] rounded-[20px] relative overflow-visible shadow-2xl flex flex-col pt-12 border-4 border-white"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute -top-3.5 -right-3.5 bg-white border-none rounded-full w-9 h-9 flex justify-center items-center cursor-pointer shadow-md z-10 text-xl text-slate-800 transition-transform hover:scale-110 hover:text-red-500" onClick={handleClose}>
              <IoClose />
            </button>

            <div className="absolute -top-6 left-0 w-full flex justify-center z-10">
              <div className="bg-blue-500 text-white py-2.5 px-6 font-extrabold text-[1.1rem] md:text-[1.2rem] uppercase tracking-wide shadow-md relative rounded-lg whitespace-nowrap">
                <span>SAVE UPTO 50% ON EMIs</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row p-6 md:px-8 md:pb-10 gap-6 md:gap-8 items-center">
              <div className="flex-1 flex items-center justify-center gap-4 relative w-full transform scale-90 md:scale-100">
                <div className="relative w-[140px] h-[120px]">
                  <div className="bg-red-500 top-0 left-[10px] z-[1] -rotate-[5deg] w-[90px] h-[56px] rounded-lg absolute shadow-md flex flex-col p-2 text-white text-[8px]">
                    <div className="w-[14px] h-[10px] bg-slate-200 rounded-[2px] mb-auto" />
                    <div className="font-mono text-right mt-0.5">**** 1234</div>
                  </div>
                  <div className="bg-blue-500 top-[20px] left-[40px] z-[2] rotate-[5deg] w-[90px] h-[56px] rounded-lg absolute shadow-md flex flex-col p-2 text-white text-[8px]">
                    <div className="w-[14px] h-[10px] bg-slate-200 rounded-[2px] mb-auto" />
                    <div className="font-mono text-right mt-0.5">**** 5678</div>
                  </div>
                  <div className="bg-emerald-500 top-[40px] left-0 z-[3] -rotate-[10deg] w-[90px] h-[56px] rounded-lg absolute shadow-md flex flex-col p-2 text-white text-[8px]">
                    <div className="w-[14px] h-[10px] bg-slate-200 rounded-[2px] mb-auto" />
                    <div className="font-mono text-right mt-0.5">**** 9012</div>
                  </div>
                  <div className="bg-slate-800 top-[60px] left-[30px] z-[4] rotate-0 w-[90px] h-[56px] rounded-lg absolute shadow-md flex flex-col p-2 text-white text-[8px]">
                    <div className="w-[14px] h-[10px] bg-slate-200 rounded-[2px] mb-auto" />
                    <div className="font-mono text-right mt-0.5">**** 3456</div>
                  </div>
                </div>

                <div className="text-[2.5rem] font-bold text-blue-500">+</div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col items-center text-xs text-blue-500 font-semibold">
                    <div className="text-[1.5rem] text-blue-500"><FaHandHoldingUsd /></div>
                    <span>EMI 1</span>
                  </div>
                  <div className="flex flex-col items-center text-xs text-blue-500 font-semibold">
                    <div className="text-[1.5rem] text-blue-500"><FaHandHoldingUsd /></div>
                    <span>EMI 2</span>
                  </div>
                  <div className="flex flex-col items-center text-xs text-blue-500 font-semibold">
                     <div className="text-[1.5rem] text-blue-500"><FaHandHoldingUsd /></div>
                    <span>EMI 3</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left w-full">
                <h3 className="text-[1.1rem] text-slate-800 font-bold leading-tight mb-1">
                  Club Multiple Loans &<br />Credit Card Bills
                </h3>
                <h2 className="text-[1.75rem] md:text-[2rem] font-black text-blue-500 mb-4 leading-none">INTO SINGLE EMI</h2>
                
                <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2 items-start inline-flex md:flex">
                  <li className="flex items-center justify-start gap-3 font-semibold text-slate-700 text-[0.95rem]">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[0.8rem] text-white">⚙️</span>
                    Remember One EMI
                  </li>
                  <li className="flex items-center justify-start gap-3 font-semibold text-slate-700 text-[0.95rem]">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[0.8rem] text-white">⚡</span>
                    Interest Rate Starting @9.99%
                  </li>
                  <li className="flex items-center justify-start gap-3 font-semibold text-slate-700 text-[0.95rem]">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[0.8rem] text-white">💰</span>
                    Club Loans Upto 50 Lacs
                  </li>
                </ul>

                <div className="w-full">
                  <button className="bg-slate-900 text-white border-none py-3 px-8 rounded-full text-base font-bold cursor-pointer shadow-sm transition-all block w-full md:w-auto hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
