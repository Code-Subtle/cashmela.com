'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const menuItems = ['Loans', 'Calculators', 'About', 'Resources', 'Contact'];

  return (
    <>
      <div className="w-full z-[100] sticky top-0">
        <motion.nav
          className={`relative w-full transition-all duration-300 h-[80px] flex items-center bg-white ${
            isScrolled ? 'shadow-sm border-b border-gray-200' : ''
          }`}
          id="navbar"
          onMouseLeave={() => setActiveDesktopDropdown(null)}
        >
          <div className="mx-auto px-4 lg:px-8 w-full flex items-center justify-between max-w-[1280px]">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 mr-8">
              <Image
                src="/logo.webp"
                alt="CashMela Logo"
                width={240}
                height={75}
                className="h-[50px] lg:h-[65px] w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 h-full">
              {menuItems.map((item) => (
                <div 
                  key={item}
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveDesktopDropdown(item !== 'About' && item !== 'Contact' ? item : null)}
                >
                  {item === 'About' || item === 'Contact' ? (
                    <Link href={`/${item.toLowerCase()}`} className="font-medium text-[15px] text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                      {item}
                    </Link>
                  ) : (
                    <button className="font-medium text-[15px] text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                      {item} 
                      <FaChevronDown className={`text-[10px] transition-transform duration-200 ${activeDesktopDropdown === item ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <Link
                href="/apply"
                className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white px-6 py-2.5 rounded-full font-bold text-[14px] shadow-lg transition-transform active:scale-95 flex items-center gap-1.5"
              >
                Get Started <FaChevronRight className="text-[10px]" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="flex lg:hidden items-center justify-center w-10 h-10 text-gray-600"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </motion.div>
            </button>
          </div>

          {/* Desktop Mega Menu Dropdown */}
          <AnimatePresence>
            {activeDesktopDropdown === 'Loans' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 w-full flex justify-center px-4 pointer-events-auto"
                style={{ originY: 0 }}
              >
                <div 
                  className="bg-white shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border border-gray-100 rounded-xl flex w-full max-w-[1200px] overflow-hidden"
                  onMouseEnter={() => setActiveDesktopDropdown('Loans')}
                >
                  {/* Left Main Content */}
                  <div className="flex-1 p-8 pb-12 flex gap-12 bg-white">
                    {/* Personal Finance Column */}
                    <div className="flex-1">
                      <h3 className="text-[13px] font-semibold text-gray-900 mb-5 uppercase tracking-wide border-b pb-2 border-gray-100">Personal Finance</h3>
                      <div className="flex flex-col gap-5">
                        <Link href="/personal-loan" className="group block">
                          <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Personal Loan</div>
                          <div className="text-[14px] text-gray-500 mt-0.5">Flexible financing for your needs</div>
                        </Link>
                        <Link href="/debt-consolidation" className="group block">
                          <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Debt Consolidation</div>
                          <div className="text-[14px] text-gray-500 mt-0.5">Combine your debts into one payment</div>
                        </Link>
                      </div>
                    </div>

                    {/* Business Finance Column */}
                    <div className="flex-1">
                      <h3 className="text-[13px] font-semibold text-gray-900 mb-5 uppercase tracking-wide border-b pb-2 border-gray-100">Business Finance</h3>
                      <div className="flex flex-col gap-5">
                        <Link href="/business-loan" className="group block">
                          <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Business Loan</div>
                          <div className="text-[14px] text-gray-500 mt-0.5">Grow your enterprise with ease</div>
                        </Link>
                        <Link href="/overdraft" className="group block">
                          <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Overdraft Loan</div>
                          <div className="text-[14px] text-gray-500 mt-0.5">Access funds whenever you need them</div>
                        </Link>
                      </div>
                    </div>

                    {/* Empty Column for spacing */}
                    <div className="flex-1 flex flex-col gap-8">
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="w-[320px] bg-gray-50 p-8 border-l border-gray-100 flex flex-col gap-6">
                    <div>
                       <h3 className="text-[15px] font-semibold text-gray-900 mb-6">More Resources</h3>
                       <div className="flex flex-col gap-5">
                          <Link href="/calculators/personal-loan-calculator" className="group block">
                            <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Personal Loan Calculator</div>
                            <div className="text-[14px] text-gray-500 mt-0.5">Plan your EMI easily</div>
                          </Link>
                          <Link href="/calculators/loan-eligibility-calculator" className="group block">
                            <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Eligibility Calculator</div>
                            <div className="text-[14px] text-gray-500 mt-0.5">Check how much you can borrow</div>
                          </Link>
                          <Link href="/faq" className="group block">
                            <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">FAQ</div>
                            <div className="text-[14px] text-gray-500 mt-0.5">Common questions answered</div>
                          </Link>
                       </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {activeDesktopDropdown === 'Calculators' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 w-full flex justify-center px-4 pointer-events-auto"
                style={{ originY: 0 }}
              >
                <div 
                  className="bg-white shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border border-gray-100 rounded-xl flex w-max overflow-hidden p-6 gap-8"
                  onMouseEnter={() => setActiveDesktopDropdown('Calculators')}
                >
                  <div className="flex flex-col gap-5 min-w-[250px]">
                    <h3 className="text-[13px] font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b pb-2 border-gray-100">Financial Calculators</h3>
                    <Link href="/calculators/personal-loan-calculator" className="group block">
                      <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Personal Loan Calc</div>
                      <div className="text-[14px] text-gray-500 mt-0.5">Plan your EMI easily</div>
                    </Link>
                    <Link href="/calculators/smart-tax-planner" className="group block">
                      <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Smart Tax Planner</div>
                      <div className="text-[14px] text-gray-500 mt-0.5">Optimize your tax savings</div>
                    </Link>
                    <Link href="/calculators/loan-eligibility-calculator" className="group block">
                      <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Loan Eligibility</div>
                      <div className="text-[14px] text-gray-500 mt-0.5">Check how much you can borrow</div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {activeDesktopDropdown === 'Resources' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 w-full flex justify-center px-4 pointer-events-auto"
                style={{ originY: 0 }}
              >
                <div 
                  className="bg-white shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border border-gray-100 rounded-xl flex w-max overflow-hidden p-8 gap-12"
                  onMouseEnter={() => setActiveDesktopDropdown('Resources')}
                >
                  {/* Learn Column */}
                  <div className="flex flex-col gap-5 min-w-[200px]">
                    <h3 className="text-[13px] font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b pb-2 border-gray-100">Learn & Connect</h3>
                    <Link href="/blogs" className="group block">
                      <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">Blog</div>
                      <div className="text-[14px] text-gray-500 mt-0.5">Read our latest articles</div>
                    </Link>
                    <Link href="/faq" className="group block">
                      <div className="text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700">FAQ</div>
                      <div className="text-[14px] text-gray-500 mt-0.5">Find answers to common questions</div>
                    </Link>
                  </div>

                  {/* Legal Column */}
                  <div className="flex flex-col gap-5 min-w-[350px]">
                    <h3 className="text-[13px] font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b pb-2 border-gray-100">Legal & Policies</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                       <Link href="/terms-and-conditions" className="group block">
                         <div className="text-[14px] font-semibold text-gray-700 hover:text-indigo-600">Terms & Conditions</div>
                       </Link>
                       <Link href="/privacy-policy" className="group block">
                         <div className="text-[14px] font-semibold text-gray-700 hover:text-indigo-600">Privacy Policy</div>
                       </Link>
                       <Link href="/disclaimer" className="group block">
                         <div className="text-[14px] font-semibold text-gray-700 hover:text-indigo-600">Disclaimer</div>
                       </Link>
                       <Link href="/cookie-policy" className="group block">
                         <div className="text-[14px] font-semibold text-gray-700 hover:text-indigo-600">Cookie Policy</div>
                       </Link>
                       <Link href="/refund-policy" className="group block">
                         <div className="text-[14px] font-semibold text-gray-700 hover:text-indigo-600">Refund Policy</div>
                       </Link>
                       <Link href="/responsible-lending" className="group block">
                         <div className="text-[14px] font-semibold text-gray-700 hover:text-indigo-600">Responsible Lending</div>
                       </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'calc(100vh - 80px)' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden fixed top-[80px] left-0 w-full bg-white z-40 overflow-y-auto border-t border-gray-100"
            >
              <div className="p-4 flex flex-col">
                {menuItems.map((item) => (
                  <div key={item} className="border-b border-gray-100">
                    {item === 'About' || item === 'Contact' ? (
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="flex items-center justify-between w-full py-4 text-[16px] font-medium text-gray-900"
                        onClick={toggleMobileMenu}
                      >
                        {item}
                      </Link>
                    ) : (
                      <button
                        className="flex items-center justify-between w-full py-4 text-[16px] font-medium text-gray-900"
                        onClick={() => toggleMobileDropdown(item)}
                      >
                        {item}
                        <FaChevronDown className={`text-[12px] text-gray-400 transition-transform duration-200 ${openMobileDropdown === item ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                    
                    {/* Simplified Mobile Dropdown for Loans */}
                    <AnimatePresence>
                      {openMobileDropdown === item && item === 'Loans' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 pl-4 flex flex-col gap-4 bg-gray-50 rounded-lg mb-4">
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-900 mb-2 uppercase">Personal Finance</h4>
                               <div className="flex flex-col gap-3">
                                  <Link href="/personal-loan" className="text-indigo-600 font-medium text-[15px]">Personal Loan</Link>
                                  <Link href="/debt-consolidation" className="text-indigo-600 font-medium text-[15px]">Debt Consolidation</Link>
                               </div>
                            </div>
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-900 mb-2 uppercase">Business Finance</h4>
                               <div className="flex flex-col gap-3">
                                  <Link href="/business-loan" className="text-indigo-600 font-medium text-[15px]">Business Loan</Link>
                                  <Link href="/overdraft" className="text-indigo-600 font-medium text-[15px]">Overdraft Loan</Link>
                               </div>
                            </div>
                            <Link href="/apply" className="text-indigo-600 font-medium text-[15px] py-2 border-t border-gray-200 mt-2">Apply for a Loan &rarr;</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Simplified Mobile Dropdown for Calculators */}
                    <AnimatePresence>
                      {openMobileDropdown === item && item === 'Calculators' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 pl-4 flex flex-col gap-4 bg-gray-50 rounded-lg mb-4">
                             <div className="flex flex-col gap-3">
                                <Link href="/calculators/personal-loan-calculator" className="text-indigo-600 font-medium text-[15px]">Personal Loan Calc</Link>
                                <Link href="/calculators/smart-tax-planner" className="text-indigo-600 font-medium text-[15px]">Smart Tax Planner</Link>
                                <Link href="/calculators/loan-eligibility-calculator" className="text-indigo-600 font-medium text-[15px]">Loan Eligibility</Link>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Simplified Mobile Dropdown for Resources */}
                    <AnimatePresence>
                      {openMobileDropdown === item && item === 'Resources' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 pl-4 flex flex-col gap-6 bg-gray-50 rounded-lg mb-4">
                             <div>
                                <h4 className="text-[13px] font-bold text-gray-900 mb-3 uppercase">Learn & Connect</h4>
                                <div className="flex flex-col gap-3">
                                   <Link href="/blogs" className="text-indigo-600 font-medium text-[15px]">Blog</Link>
                                   <Link href="/faq" className="text-indigo-600 font-medium text-[15px]">FAQ</Link>
                                </div>
                             </div>
                             <div>
                                <h4 className="text-[13px] font-bold text-gray-900 mb-3 uppercase">Legal & Policies</h4>
                                <div className="flex flex-col gap-3">
                                   <Link href="/terms-and-conditions" className="text-gray-700 hover:text-indigo-600 font-medium text-[14px]">Terms & Conditions</Link>
                                   <Link href="/privacy-policy" className="text-gray-700 hover:text-indigo-600 font-medium text-[14px]">Privacy Policy</Link>
                                   <Link href="/disclaimer" className="text-gray-700 hover:text-indigo-600 font-medium text-[14px]">Disclaimer</Link>
                                   <Link href="/cookie-policy" className="text-gray-700 hover:text-indigo-600 font-medium text-[14px]">Cookie Policy</Link>
                                   <Link href="/refund-policy" className="text-gray-700 hover:text-indigo-600 font-medium text-[14px]">Refund Policy</Link>
                                   <Link href="/responsible-lending" className="text-gray-700 hover:text-indigo-600 font-medium text-[14px]">Responsible Lending</Link>
                                </div>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="mt-8 flex flex-col gap-4">
                  <Link href="/apply" className="text-center py-3.5 px-6 text-[16px] font-bold text-white bg-[#1E40AF] hover:bg-[#1e3a8a] rounded-full shadow-lg transition-transform active:scale-95">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
