import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAuthors } from '../lib/getAuthors';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa6';

export const metadata = {
  title: 'Leadership & Financial Experts | CashMela',
  description: 'Meet the founders, tech leaders, and financial strategists driving CashMela. Read profiles of Adil Patel, Ayyaz Patel, Vitthal Korvan, and Samarth Shigvan.',
  alternates: {
    canonical: 'https://cashmela.com/authors',
  },
  openGraph: {
    title: 'Leadership & Financial Experts | CashMela',
    description: 'Meet the founders, tech leaders, and financial strategists driving CashMela.',
    url: 'https://cashmela.com/authors',
    type: 'website',
  },
};

export default function AuthorsPage() {
  const authors = getAuthors();

  return (
    <>
      <Navbar />
      <main className="w-full bg-[#fbfaf5] text-slate-900 min-h-screen pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 selection:bg-indigo-600 selection:text-white">
        
        {/* Hero Header Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-8 sm:pb-12 text-center">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-[11px] sm:text-xs font-extrabold tracking-wide uppercase">
              Leadership & Vision
            </span>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05]">
              The Minds Behind <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">CashMela</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
              Meet the entrepreneurs, system architects, and growth strategists simplifying debt and transforming credit access across India.
            </p>
          </div>
        </section>

        {/* Authors Spacious 2-Column Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {authors.map((author) => (
              <div
                key={author.id}
                className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-7 border border-slate-200/80 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(63,81,181,0.15)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col sm:flex-row gap-5 sm:gap-8 items-center sm:items-stretch group"
              >
                {/* Left Portrait Thumbnail Box */}
                <div className="relative aspect-[4/4.8] w-full sm:w-48 md:w-52 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 bg-slate-100 shadow-md">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    priority
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 220px"
                  />
                  
                  {/* Floating Role Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-center border border-white/10 shadow-lg truncate">
                      {author.role}
                    </div>
                  </div>
                </div>

                {/* Right Info & Actions Content */}
                <div className="flex-1 flex flex-col justify-between space-y-4 w-full text-center sm:text-left">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight w-full sm:w-auto text-center sm:text-left">
                        <Link href={`/authors/${author.slug}`}>
                          {author.name}
                        </Link>
                      </h2>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100/80 mx-auto sm:mx-0">
                        {author.company}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                      {author.bio}
                    </p>

                    {/* Expertise Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1 justify-center sm:justify-start">
                      {author.expertise.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-50 text-slate-700 border border-slate-200/70 text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-center sm:justify-between flex-wrap gap-3">
                      {/* Social Media Buttons */}
                      <div className="flex items-center gap-2.5">
                        {author.socials.linkedin && (
                          <a
                            href={author.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${author.name} LinkedIn`}
                            className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                          >
                            <FaLinkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {author.socials.twitter && (
                          <a
                            href={author.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${author.name} Twitter`}
                            className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                          >
                            <FaTwitter className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {author.socials.instagram && (
                          <a
                            href={author.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${author.name} Instagram`}
                            className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                          >
                            <FaInstagram className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {author.socials.email && (
                          <a
                            href={author.socials.email}
                            aria-label={`Email ${author.name}`}
                            className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                          >
                            <FaEnvelope className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {/* View Profile Link */}
                      <Link
                        href={`/authors/${author.slug}`}
                        className="py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs transition-all duration-300 inline-flex items-center gap-1.5 shadow-md group-hover:shadow-lg"
                      >
                        Profile <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Showcase Banner */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-slate-800">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full text-indigo-300 backdrop-blur-md">
                Driven by Experience. Built for Trust.
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Making Smarter Borrowing Simple in India
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Over 50,000 borrowers have reduced their EMI stress through CashMela's debt consolidation and loan comparison platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/apply"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-xl transition-all text-center text-xs sm:text-base whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                Apply for Loan <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/calculators/loan-eligibility-calculator"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-center text-xs sm:text-base whitespace-nowrap inline-flex items-center justify-center gap-2 backdrop-blur-md"
              >
                Calculate Eligibility
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
