'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import FadeIn from '../FadeIn';

const FAQSection = ({ faqs: customFaqs }) => {
      const [openIndex, setOpenIndex] = useState(0);

      const defaultFaqs = [
            {
                  question: 'How do I apply for a loan through CashMela?',
                  answer: 'Simply select the type of loan you need, fill out a quick application form, and our team will match you with the best offers from our 40+ lending partners. The entire process is 100% paperless and takes just minutes.'
            },
            {
                  question: 'Is my personal information safe with CashMela?',
                  answer: 'Absolutely. We use bank-grade 256-bit SSL encryption to protect your data. We are RBI-compliant and never share your information with third parties without your consent.'
            },
            {
                  question: 'What documents do I need to apply for a personal loan?',
                  answer: 'For most personal loans, you need: PAN Card, Aadhaar Card, latest 3 months salary slips (for salaried), bank statements, and address proof. Self-employed individuals may need ITR and business proof.'
            },
            {
                  question: 'How long does loan approval take?',
                  answer: 'With our digital-first approach, most loan applications receive in-principle approval within minutes. Final disbursement typically happens within 24-72 hours after document verification.'
            },
            {
                  question: 'Does checking my loan eligibility affect my CIBIL score?',
                  answer: 'No! Our eligibility check is a "soft inquiry" that does not impact your credit score. You can check your eligibility multiple times without any negative effect.'
            },
            {
                  question: 'What interest rates can I expect?',
                  answer: 'Interest rates vary based on loan type, amount, tenure, and your credit profile. Personal loans typically range from 10.5% to 24% p.a., while home loans start from 8.5% p.a. We help you find the lowest rates available.'
            }
      ];

      const faqs = customFaqs || defaultFaqs;

      const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? -1 : index);
      };

      return (
            <section className="py-14 md:py-10 bg-white relative overflow-hidden">
                  {/* Subtle grid background - light blue and gray grid */}
                  <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply w-full" 
                       style={{ 
                           backgroundImage: 'linear-gradient(to right, #bfdbfe 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
                           backgroundSize: '40px 40px' 
                       }}>
                  </div>
                  
                  <div className="max-w-[800px] lg:max-w-[1280px] mx-auto px-4 md:px-6 lg:px-16 relative z-10">
                        <FadeIn direction="down">
                              <div className="text-center mb-12">
                                    <h2 className="text-[1.5rem] md:text-[2.25rem] lg:text-[2.5rem] font-bold text-black mb-3">
                                          Frequently Asked Questions
                                    </h2>
                                    <p className="text-[0.875rem] md:text-base text-slate-500">
                                          Everything you need to know about our services
                                    </p>
                              </div>
                        </FadeIn>

                        <div className="flex flex-col gap-4">
                              {faqs.map((faq, index) => (
                                    <FadeIn key={index} delay={index * 0.02} direction="up" fullWidth>
                                          <div
                                                className={`rounded-xl border overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white border-sky-600 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.1)]' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
                                          >
                                                <button
                                                      className={`w-full flex justify-between items-center gap-4 p-4 md:p-6 bg-transparent border-none cursor-pointer text-left text-[0.9375rem] md:text-[1.0625rem] font-semibold transition-colors duration-200 ${openIndex === index ? 'text-sky-600' : 'text-slate-900'}`}
                                                      onClick={() => toggleFAQ(index)}
                                                      aria-expanded={openIndex === index}
                                                >
                                                      <span>{faq.question}</span>
                                                      <FaChevronDown className={`flex-shrink-0 text-[0.875rem] transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-sky-600' : 'text-slate-500'}`} />
                                                </button>
                                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[300px]' : 'max-h-0'}`}>
                                                      <p className="px-4 md:px-6 pb-4 md:pb-6 text-[0.875rem] md:text-[0.9375rem] text-slate-600 leading-relaxed m-0">{faq.answer}</p>
                                                </div>
                                          </div>
                                    </FadeIn>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default FAQSection;
