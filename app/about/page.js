import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LeadershipSection from "../components/LeadershipSection/LeadershipSection";
import AboutHero from "../components/AboutHero/AboutHero";
import {
  HighInterestIcon,
  SlowProcessIcon,
  HiddenFeesIcon,
  LowInterestIcon,
  FastProcessIcon,
  TransparentProcessIcon,
  BorrowerFirstIcon,
  RadicalTransparencyIcon,
  TechDrivenIcon,
  IntegrityIcon,
  InnovationIcon,
  SecurityIcon,
  CustomerCareIcon,
  EmiSavingsIcon,
  CreditScoreIcon,
  TimeSavedIcon
} from "@/components/ui/Icons";

export const metadata = {
  title:
    "About Cashmela | India's Most Trusted Loan Platform | Empowering Borrowers",
  description:
    "Founded in 2020, Cashmela has helped 1M+ borrowers access fair loans and consolidate debt. Learn our mission to democratize financial access for all Indians.",
  alternates: {
    canonical: "https://cashmela.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white font-sans">
        {/* HERO SECTION */}
        <AboutHero />

        {/* OUR STORY */}
        <section id="our-story" className="py-10 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                From a Vision to a Movement
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                In 2020, our founders witnessed Indian families struggle under
                the burden of high-interest debt and predatory lending
                practices. Today, we&apos;ve transformed that frustration into a
                mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  The Problem We Saw
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Every day, millions of Indians face predatory lending rates,
                  hidden charges, and opaque loan processes. They have no way to
                  compare offers fairly. Banks take days, sometimes weeks. And
                  debt spirals out of control because people don&apos;t
                  understand their options.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We knew there had to be a better way. A platform that puts
                  borrowers first. A system built on transparency, speed, and
                  genuine care.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <HighInterestIcon className="w-14 h-14 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">
                        28% Average Interest Rate
                      </p>
                      <p className="text-sm text-slate-600">
                        Traditional lenders charging exorbitant rates
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <SlowProcessIcon className="w-14 h-14 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">
                        7-14 Days Approval
                      </p>
                      <p className="text-sm text-slate-600">
                        Lengthy processes when people need help urgently
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <HiddenFeesIcon className="w-14 h-14 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">
                        Hidden Charges & Conditions
                      </p>
                      <p className="text-sm text-slate-600">
                        Borrowers surprised by unexpected fees later
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <LowInterestIcon className="w-14 h-14 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">
                        10.49% Starting Rate
                      </p>
                      <p className="text-sm text-slate-600">
                        Competitive rates from India&apos;s best lenders
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FastProcessIcon className="w-14 h-14 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">
                        2 Minute Approval
                      </p>
                      <p className="text-sm text-slate-600">
                        AI-powered instant verification and approval
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <TransparentProcessIcon className="w-14 h-14 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">
                        100% Transparent
                      </p>
                      <p className="text-sm text-slate-600">
                        No hidden charges. All fees disclosed upfront
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  The Cashmela Solution
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  We built Cashmela to be the bridge between borrowers and fair
                  lending. Our proprietary AI analyzes applications in seconds,
                  comparing offers from 50+ lenders to find the best rate for you.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Every interaction is transparent. Every fee is disclosed.
                  Every borrower gets options. Because financial freedom should
                  be accessible to all.
                </p>
              </div>
            </div>
          </div>
        </section>
          {/* LEADERSHIP TEAM */}
        <div id="leadership">
          <LeadershipSection />
        </div>

        {/* OUR APPROACH */}
        <section className="py-10 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                Our Core Principles
              </h2>
              <p className="text-xl text-slate-600">
                Three pillars guiding every decision we make
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col items-start">
                <div className="mb-6">
                  <BorrowerFirstIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Borrower-First
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Your interests come before ours. We&apos;ll turn down a deal
                  with a lender if it doesn&apos;t serve your best interests. We
                  advocate for you, not for commissions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col items-start">
                <div className="mb-6">
                  <RadicalTransparencyIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Radical Transparency
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  No hidden charges. No surprise fees. Every rupee you&apos;ll
                  pay is disclosed upfront. We show you exactly how rates are
                  calculated and why they vary.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col items-start">
                <div className="mb-6">
                  <TechDrivenIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Technology-Driven
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  AI and machine learning power everything. From instant
                  approval to fraud prevention to personalized rates. We
                  leverage technology to serve you better.
                </p>
              </div>
            </div>
          </div>
        </section>

      

        {/* OUR VALUES */}
        <section className="py-10 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-slate-600">
                What we stand for, every single day
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start">
                <div className="mb-4">
                  <IntegrityIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Integrity Without Compromise
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We&apos;ve turned down partnerships with lenders that
                  don&apos;t align with our values. Short-term revenue will
                  never trump long-term trust. Every decision is filtered
                  through our borrower-first lens.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start">
                <div className="mb-4">
                  <InnovationIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Relentless Innovation
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We invest heavily in R&D to stay ahead of fintech evolution.
                  Our AI model improves daily. We experiment with new products.
                  We&apos;re never satisfied with status quo.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start">
                <div className="mb-4">
                  <SecurityIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Security & Privacy First
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Your financial data is sacred. We use bank-grade encryption,
                  undergo regular audits, and comply with all RBI guidelines.
                  Your privacy is non-negotiable.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start">
                <div className="mb-4">
                  <CustomerCareIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Genuine Customer Care
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We have a 24/7 support team trained to help, not upsell. We
                  track customer satisfaction obsessively. We celebrate borrower
                  wins as our own wins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-10 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                The Impact We&apos;re Creating
              </h2>
              <p className="text-xl text-slate-600">
                Real stories from real borrowers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">
                      ₹5000 Crores
                    </h3>
                    <EmiSavingsIcon className="w-14 h-14 shrink-0" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>EMI reduced</strong> for borrowers through smart
                    consolidation and rate optimization
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">450K+</h3>
                    <CreditScoreIcon className="w-14 h-14 shrink-0" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Credit scores improved</strong> through consistent
                    on-time payments tracked and incentivized
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">
                      848 Hours
                    </h3>
                    <TimeSavedIcon className="w-14 h-14 shrink-0" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Time saved</strong> per 1M borrowers vs traditional
                    banks. Instant approval, not 7-14 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CULTURE SECTION */}
        <section className="py-10 px-4 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                Building for the Future
              </h2>
              <p className="text-xl text-slate-600">
                We&apos;re just getting started
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Vision for 2030
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-slate-600 text-lg">
                      <strong>5M+ borrowers</strong> accessing fair loans
                      through our platform
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-slate-600 text-lg">
                      <strong>₹100,000 Crores</strong> of loans disbursed with
                      transparency and care
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-slate-600 text-lg">
                      Expanding to{" "}
                      <strong>mortgages, credit cards, and investments</strong>
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-slate-600 text-lg">
                      Building <strong>financial literacy programs</strong> for
                      underserved communities
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <p className="text-lg leading-relaxed mb-6">
                  &quot;Every borrower deserves access to fair lending. Every
                  person deserves financial dignity. That&apos;s what we&apos;re
                  building at Cashmela—not just a platform, but a movement
                  toward financial empowerment.&quot;
                </p>
                <p className="text-indigo-100 font-semibold">
                  — Adil Patel, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-16 px-4 md:px-8 overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative max-w-6xl mx-auto text-center z-10 p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Whether you&apos;re looking for a loan or want to build the future
              of fintech with us, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply?type=Personal Loan"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all active:scale-95 shadow-lg shadow-indigo-200"
              >
                Apply for a Loan
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-50 text-indigo-600 font-bold py-4 px-10 rounded-full text-lg transition-all active:scale-95 border-2 border-indigo-100 hover:border-indigo-200 shadow-sm"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
