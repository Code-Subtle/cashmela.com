'use client';

import { useEffect, useState } from 'react';
import { FaAward, FaHandshake, FaRupeeSign, FaUsers } from 'react-icons/fa';

import FadeIn from '../FadeIn';

const StatsSection = () => {
      const [isVisible, setIsVisible] = useState(true);

      const stats = [
            {
                  icon: <FaUsers />,
                  value: 50000,
                  suffix: '+',
                  label: 'Happy Customers',
                  color: '#3b82f6'
            },
            {
                  icon: <FaRupeeSign />,
                  value: 500,
                  suffix: 'Cr+',
                  label: 'EMIs Consolidated',
                  color: '#10b981'
            },
            {
                  icon: <FaHandshake />,
                  value: 40,
                  suffix: '+',
                  label: 'Verified Lenders',
                  color: '#8b5cf6'
            },
            {
                  icon: <FaAward />,
                  value: 4.8,
                  suffix: '★',
                  label: 'Customer Rating',
                  color: '#f59e0b',
                  isDecimal: true
            }
      ];

      const AnimatedCounter = ({ value, suffix, isDecimal }) => {
            const [count, setCount] = useState(0);

            useEffect(() => {
                  if (!isVisible) return;

                  const duration = 2000;
                  const steps = 60;
                  const increment = value / steps;
                  let current = 0;

                  const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                              setCount(value);
                              clearInterval(timer);
                        } else {
                              setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
                        }
                  }, duration / steps);

                  return () => clearInterval(timer);
            }, [isVisible, value, isDecimal]);

            return (
                  <span className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-extrabold text-slate-900 leading-[1.2]">
                        {isDecimal ? count.toFixed(1) : count.toLocaleString('en-IN')}
                        {suffix}
                  </span>
            );
      };

      return (
            <section className="py-14 md:py-10 bg-gradient-to-br from-sky-50 via-white to-slate-50">
                  <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-16">
                        <FadeIn direction="up">
                              <div className="text-center mb-12">
                                    <h2 className="text-[1.5rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-slate-900 mb-3">
                                          Trusted by <span className="bg-gradient-to-br from-sky-600 to-sky-400 bg-clip-text text-transparent">Thousands</span>
                                    </h2>
                                    <p className="text-[0.875rem] md:text-base text-slate-500 max-w-[500px] mx-auto">
                                          Numbers that speak for our commitment to excellence
                                    </p>
                              </div>
                        </FadeIn>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                              {stats.map((stat, index) => (
                                    <FadeIn key={index} delay={index * 0.05} direction="up">
                                          <div className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 lg:p-10 text-center transition-all duration-300 flex flex-col items-center gap-3 border-[1.5px] border-sky-500/30 hover:bg-gradient-to-br hover:from-white hover:to-sky-200 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)] h-full">
                                                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 text-xl md:text-2xl lg:text-[1.75rem] shadow-[0_4px_6px_-1px_rgba(14,165,233,0.1)]">
                                                      {stat.icon}
                                                </div>
                                                <AnimatedCounter
                                                      value={stat.value}
                                                      suffix={stat.suffix}
                                                      isDecimal={stat.isDecimal}
                                                />
                                                <span className="text-[0.75rem] md:text-[0.875rem] lg:text-base text-slate-500 font-medium">{stat.label}</span>
                                          </div>
                                    </FadeIn>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default StatsSection;
