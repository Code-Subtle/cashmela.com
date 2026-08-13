'use client';

import Link from 'next/link';

import FadeIn from '../FadeIn';

const FeaturedOffers = () => {
      const offers = [
            {
                  bank: 'HDFC Bank',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
                  product: 'Personal Loan',
                  rate: '10.5%',
                  amount: 'Up to ₹40L',
                  bg: '#f0f9ff' // Light Blue
            },
            {
                  bank: 'SBI Card',
                  logo: '/sbi-logo.webp',
                  product: 'Credit Card',
                  rate: 'Lifetime Free',
                  amount: 'Rewards',
                  bg: '#ffffff' // White
            },
            {
                  bank: 'ICICI Bank',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg',
                  product: 'Home Loan',
                  rate: '8.75%',
                  amount: 'Up to ₹5Cr',
                  bg: '#f8fafc' // Slate 50
            },
            {
                  bank: 'Axis Bank',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg',
                  product: 'Personal Loan',
                  rate: '10.99%',
                  amount: 'Up to ₹25L',
                  bg: '#f0f9ff' // Light Blue
            }
      ];

      return (
            <section className="py-8 md:py-20 bg-slate-50">
                  <div className="w-full max-w-[1280px] mx-auto px-6">
                        <FadeIn direction="down">
                              <div className="flex justify-between items-center mb-10 md:mb-12 flex-wrap gap-4">
                                    <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-extrabold text-slate-900">Featured <span className="text-indigo-600">Offers</span></h2>
                                    <Link href="/offers" className="text-indigo-600 font-semibold text-[15px] no-underline hover:text-indigo-700 hover:underline transition-colors">View All &rarr;</Link>
                              </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
                              {offers.map((offer, i) => (
                                    <FadeIn key={i} delay={i * 0.05} direction="up">
                                          <div className="rounded-[1.25rem] p-6 lg:p-8 transition-all duration-300 border border-black/5 flex flex-col hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)]" style={{ backgroundColor: offer.bg }}>
                                                <div className="flex justify-between items-start mb-4 lg:mb-5 gap-3">
                                                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex items-center justify-center">
                                                            <img
                                                                  src={offer.logo}
                                                                  alt={offer.bank}
                                                                  className="max-w-full max-h-full w-auto h-auto object-contain"
                                                                  onError={(e) => {
                                                                        e.target.style.display = 'none';
                                                                        e.target.nextSibling.style.display = 'flex';
                                                                  }}
                                                            />
                                                            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl items-center justify-center text-white font-extrabold text-xl xl:text-2xl" style={{ display: 'none' }}>
                                                                  {offer.bank.charAt(0)}
                                                            </div>
                                                      </div>
                                                      <span className="text-[11px] font-semibold bg-white px-2.5 py-1 rounded-full text-slate-500 shadow-[0_2px_4px_rgba(0,0,0,0.05)] whitespace-nowrap">{offer.product}</span>
                                                </div>

                                                <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-4">{offer.bank}</h3>

                                                <div className="mb-5 grow">
                                                      <div className="flex justify-between mb-2 text-sm lg:text-[15px]">
                                                            <span className="text-slate-500">Interest Rate</span>
                                                            <span className="font-bold text-slate-900">{offer.rate}</span>
                                                      </div>
                                                      <div className="flex justify-between mb-2 text-sm lg:text-[15px]">
                                                            <span className="text-slate-500">Max Amount</span>
                                                            <span className="font-bold text-slate-900">{offer.amount}</span>
                                                      </div>
                                                </div>

                                                <button className="w-full p-3 lg:p-3.5 bg-white text-slate-900 border border-black/10 rounded-2xl font-semibold text-sm cursor-pointer transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-[0_10px_15px_-3px_rgba(79,70,229,0.3),0_4px_6px_-2px_rgba(79,70,229,0.15)] hover:-translate-y-0.5">Apply Now</button>
                                          </div>
                                    </FadeIn>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default FeaturedOffers;
