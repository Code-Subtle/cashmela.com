'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import FadeIn from '../FadeIn';

const CTASection = () => {
      return (
            <section className="bg-gradient-to-br from-slate-900 to-sky-600 py-12 md:py-20 text-center">
                  <div className="max-w-[800px] mx-auto px-4 md:px-6">
                        <FadeIn direction="up">
                              <h2 className="text-[1.5rem] md:text-[2.5rem] lg:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
                                    Ready to Make Smarter Financial Decisions?
                              </h2>
                              <p className="text-[0.875rem] md:text-[1.0625rem] lg:text-[1.125rem] text-white/90 mb-6 md:mb-8 leading-relaxed max-w-[600px] mx-auto">
                                    Join 50,000+ Indians who have found their perfect financial solution with CashMela
                              </p>
                              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                                    <Link href="/credit-score/check-score" className="group inline-flex items-center justify-center gap-2 bg-white text-sky-600 px-6 py-3.5 md:px-10 md:py-4 rounded-lg font-semibold text-[0.875rem] md:text-[1rem] no-underline transition-all shadow-md w-full md:w-auto hover:bg-sky-50 hover:-translate-y-0.5 hover:shadow-lg">
                                          Free CIBIL Check
                                          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>
                                    <Link href="/apply" className="inline-flex items-center justify-center bg-[#1E40AF] hover:bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold text-[0.875rem] md:text-[1rem] shadow-lg transition-transform active:scale-95 min-w-[160px] w-full md:w-auto text-center">
                                          Apply for Loan
                                    </Link>
                              </div>
                        </FadeIn>
                  </div>
            </section>
      );
};

export default CTASection;

