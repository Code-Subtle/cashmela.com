'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import { blogData } from '../../data/blogData';

import FadeIn from '../FadeIn';

const ExpertInsights = ({ showViewAll = true }) => {
      const [activeTab, setActiveTab] = useState('Home Loan');

      const tabs = ['Home Loan', 'Personal Loan', 'CIBIL Score', 'Mutual Funds', 'Financial News'];

      const articles = blogData;

      return (
            <section className="py-8 sm:py-10 bg-white">
                  <div className="w-full max-w-[1280px] mx-auto px-6">
                        <FadeIn direction="down">
                              <div className="text-center mb-12">
                                    <h2 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-slate-900 mb-3 tracking-tight">Expert Financial Insights</h2>
                                    <p className="text-slate-500 text-lg">Stay updated with the latest tips, guides, and news from our financial experts</p>
                              </div>
                        </FadeIn>

                        {/* Tabs */}
                        <FadeIn direction="up" delay={0.1}>
                              <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto pb-2">
                                    <div className="flex bg-slate-100 p-1.5 rounded-full gap-2 min-w-max">
                                          {tabs.map((tab) => (
                                                <button
                                                      key={tab}
                                                      className={`px-6 py-3 rounded-full border-none bg-transparent font-semibold text-[15px] cursor-pointer transition-all whitespace-nowrap ${activeTab === tab ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                                                      onClick={() => setActiveTab(tab)}
                                                >
                                                      {tab}
                                                </button>
                                          ))}
                                    </div>
                              </div>
                        </FadeIn>

                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12" key={activeTab}>
                              {articles[activeTab].map((article, index) => (
                                    <FadeIn key={article.id} delay={index * 0.05} direction="up">
                                          <div className="bg-white border border-slate-200 rounded-[1rem] sm:rounded-[1.25rem] overflow-hidden transition-all cursor-pointer flex flex-col hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-transparent group">
                                                <div className="h-[220px] w-full overflow-hidden bg-slate-100">
                                                      <Link href={`/blog/${article.slug}`}>
                                                            <img
                                                                  src={article.image}
                                                                  alt={article.title}
                                                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                  onError={(e) => {
                                                                        e.target.style.display = 'none';
                                                                        e.target.parentElement.parentElement.style.backgroundColor = '#e2e8f0';
                                                                  }}
                                                            />
                                                      </Link>
                                                </div>

                                                <div className="p-7 flex flex-col grow">
                                                      <div className="flex items-center text-slate-500 text-[13px] mb-3 font-medium">
                                                            <span className="flex items-center"><FaClock className="mr-1.5 text-sm" /> {article.readTime}</span>
                                                            <span className="mx-2">•</span>
                                                            <span className="flex items-center">{article.date}</span>
                                                      </div>

                                                      <h3 className="text-xl font-bold text-slate-900 leading-snug mb-6 grow line-clamp-2">
                                                            <Link href={`/blog/${article.slug}`}>
                                                                  {article.title}
                                                            </Link>
                                                      </h3>

                                                      <div className="flex items-center text-slate-600 text-sm font-semibold">
                                                            <FaUser className="mr-1.5 text-sm" />
                                                            <span>{article.author}</span>
                                                      </div>
                                                </div>
                                          </div>
                                    </FadeIn>
                              ))}
                        </div>

                        {showViewAll && (
                              <FadeIn direction="up" delay={0.2}>
                                    <div className="text-center">
                                          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-3.5 border border-sky-600 text-sky-600 bg-transparent rounded-xl font-semibold no-underline transition-all hover:bg-sky-50 hover:-translate-y-0.5">
                                                View All Articles <FaArrowRight />
                                          </Link>
                                    </div>
                              </FadeIn>
                        )}
                  </div>
            </section>
      );
};

export default ExpertInsights;
