'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaEnvelope, FaQuoteLeft, FaCheckCircle, FaAward, FaUsers, FaBuilding, FaArrowRight } from 'react-icons/fa';

const LEADERS = [
  {
    id: "adil-patel",
    name: "Adil Patel",
    role: "Founder & Chief Executive Officer",
    badge: "FOUNDER & CEO",
    slug: "adil-patel",
    image: "/authors/adil-patel.webp",
    quote: "Fintech isn't just about faster disbursements; it is about rebuilding financial dignity for every borrower in India.",
    bio: "Adil Patel is the Founder & CEO of Cashmela.com. With over a decade of deep domain expertise across Indian banking, debt restructuring, and digital lending, Adil established Cashmela to liberate Indian borrowers from predatory credit card interest traps and opaque multi-EMI debt burdens. Under his leadership, Cashmela has helped over 50,000 borrowers consolidate EMIs into single, transparent, and affordable repayment plans.",
    stats: [
      { label: "Experience", value: "12+ Years", icon: FaAward },
      { label: "Borrowers Helped", value: "50,000+", icon: FaUsers },
      { label: "Customer Satisfaction", value: "99.2%", icon: FaBuilding }
    ],
    expertise: [
      "Debt Consolidation Strategy",
      "RBI Regulatory Compliance",
      "Fintech Innovation",
      "Credit Risk Assessment",
      "Banking Partnerships"
    ],
    socials: {
      linkedin: "https://linkedin.com/in/adil-patel-cashmela",
      twitter: "https://x.com/adilpatel_cm",
      email: "mailto:adil@cashmela.com"
    },
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-100"
  },
  {
    id: "ayyaz-patel",
    name: "Ayyaz Patel",
    role: "Co-Founder & Chief Operating Officer",
    badge: "CO-FOUNDER & COO",
    slug: "ayyaz-patel",
    image: "/authors/ayyaz-patel.webp",
    quote: "Our goal is to make debt management as effortless and instant as sending a UPI message.",
    bio: "Ayyaz Patel is the Co-Founder & COO of Cashmela.com. He leads strategic operations, lender integration, and customer success journeys across Tier-1, Tier-2, and Tier-3 cities in India. Ayyaz's operational blueprint has streamlined the e-KYC and digital verification turnaround time to under 4 hours, ensuring seamless, zero-friction loan application experiences for thousands of daily users.",
    stats: [
      { label: "Experience", value: "10+ Years", icon: FaAward },
      { label: "Turnaround Time", value: "< 4 Hours", icon: FaUsers },
      { label: "Customer Satisfaction", value: "99.2%", icon: FaBuilding }
    ],
    expertise: [
      "Fintech Operations",
      "Lender Relations & Onboarding",
      "Process Automation & e-KYC",
      "Customer Experience & Trust",
      "Financial Literacy"
    ],
    socials: {
      linkedin: "https://linkedin.com/in/ayyaz-patel-cashmela",
      twitter: "https://x.com/ayyazpatel_cm",
      email: "mailto:ayyaz@cashmela.com"
    },
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100"
  }
];

export default function LeadershipSection() {
  return (
    <section className="relative w-full py-20 bg-slate-50 overflow-hidden border-t border-b border-slate-200/80">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-extrabold uppercase tracking-widest">
            Visionary Founders
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600">Leadership</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed">
            The visionary founders driving Cashmela&apos;s mission to eliminate high-interest debt traps and rebuild financial dignity for borrowers across India.
          </p>
        </motion.div>

        {/* 2-Column Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header Profile Banner & Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.98] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-sm border backdrop-blur-md ${leader.badgeBg}`}>
                      {leader.badge}
                    </span>
                  </div>

                  {/* Social Media Float Icons */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    <a
                      href={leader.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-indigo-600 flex items-center justify-center transition-all shadow-md hover:scale-110"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedin size={16} />
                    </a>
                    <a
                      href={leader.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-sky-500 flex items-center justify-center transition-all shadow-md hover:scale-110"
                      title="Twitter / X Profile"
                    >
                      <FaTwitter size={16} />
                    </a>
                    <a
                      href={leader.socials.email}
                      className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-emerald-600 flex items-center justify-center transition-all shadow-md hover:scale-110"
                      title="Email Direct"
                    >
                      <FaEnvelope size={15} />
                    </a>
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-100 opacity-95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Quote Box */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 italic text-slate-700 text-xs sm:text-sm leading-relaxed flex items-start gap-3 relative">
                    <FaQuoteLeft className="text-indigo-500 shrink-0 text-base mt-0.5" />
                    <span>&quot;{leader.quote}&quot;</span>
                  </div>

                  {/* Biography */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      Leadership Profile
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Key Stats Bar */}
                  <div className={`grid ${leader.stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2 sm:gap-3 py-3 border-y border-slate-100 bg-slate-50/50 rounded-xl p-2 sm:p-3`}>
                    {leader.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-xs sm:text-sm font-extrabold text-slate-900">{stat.value}</p>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Core Expertise Tags */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/70"
                        >
                          <FaCheckCircle className="text-indigo-500 text-[10px]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Profile CTA */}
              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href={`/authors/${leader.slug}`}
                  className="w-full py-3 sm:py-3.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-indigo-200"
                >
                  View Full Author Profile & Articles <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
