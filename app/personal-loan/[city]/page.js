import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const CITIES_DATA = {
  mumbai: "Mumbai",
  delhi: "Delhi",
  bangalore: "Bangalore",
  hyderabad: "Hyderabad",
  chennai: "Chennai",
  pune: "Pune",
  kolkata: "Kolkata",
  ahmedabad: "Ahmedabad",
  jaipur: "Jaipur"
};

export async function generateStaticParams() {
  return Object.keys(CITIES_DATA).map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityName = CITIES_DATA[city] || city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `Personal Loan in ${cityName} | Get Instant Approval Online | Cashmela`,
    description: `Get a personal loan up to ₹50 lakhs in ${cityName} with instant approval in 2 minutes. Fast disbursement, low interest rates starting at 10.49% p.a. Apply online at Cashmela.`,
    alternates: {
      canonical: `https://cashmela.com/personal-loan/${city}`,
    },
  };
}

export default async function PersonalLoanCityPage({ params }) {
  const { city } = await params;
  const cityName = CITIES_DATA[city] || city.charAt(0).toUpperCase() + city.slice(1);

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `CashMela Personal Loan in ${cityName}`,
    "description": `Compare and apply for unsecured personal loans up to ₹50 lakhs in ${cityName} with instant approval in 2 minutes. Rates starting at 10.49% p.a.`,
    "provider": {
      "@type": "Organization",
      "name": "CashMela",
      "url": "https://cashmela.com"
    },
    "feesAndCommissionsSpecification": `https://cashmela.com/personal-loan/${city}#fees`,
    "interestRate": {
      "@type": "QuantitativeValue",
      "value": 10.49,
      "unitText": "annual percentage rate"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "10000"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is a personal loan in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A personal loan in ${cityName} is an unsecured loan provided by financial institutions without requiring any collateral. You can use it for any personal purpose like education, medical expenses, home improvement, or debt consolidation.`,
        },
      },
      {
        "@type": "Question",
        name: `How fast can I get a personal loan in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `With Cashmela, you can check your eligibility online, get instant approval within 2 minutes, and receive funds in your bank account in ${cityName} within 24-48 hours.`,
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum income required for a personal loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `For salaried professionals in ${cityName}, most lenders require a minimum net monthly income of ₹15,000, and self-employed professionals require ₹25,000.`,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="personal-loan-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }}
      />
      <Navbar />

      <main className="min-h-screen bg-white font-sans">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden bg-white pt-6 pb-16 md:pt-10 md:pb-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-heading font-bold leading-tight text-slate-900 mb-8">
                Get a Personal Loan in <span className="text-[#0284C7]">{cityName}</span> Up to ₹50 Lakhs Instantly.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 font-sans leading-relaxed">
                Borrow money for any personal need—education, medical, home, or lifestyle in {cityName}. Get instant approval, minimal documentation, and funds in your account within 24-48 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <Link
                  href={`/apply?type=Personal Loan&city=${cityName}`}
                  className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform active:scale-95 text-center text-lg"
                >
                  Apply in {cityName}
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 md:gap-12 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">1M+</p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">Loans Approved</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">50+</p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">Verified Lenders</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-slate-900">₹10000Cr+</p>
                  <p className="text-sm md:text-base font-sans text-slate-600 mt-2">Disbursed</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center relative">
              <Image
                src="/Loan Mobile Mockup/personal loan.webp"
                alt={`Personal loan app interface showing approval and disbursement in ${cityName}`}
                width={320}
                height={600}
                priority
                className="w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* 2. WHAT IS PERSONAL LOAN */}
        <section className="py-20 px-4 md:px-8 bg-white" id="what-is-it">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                What is a Personal Loan in {cityName}?
              </h2>
              <p className="text-lg text-slate-600">
                A personal loan is quick, unsecured credit that doesn&apos;t require collateral. Borrow money instantly without pleading assets, and use it for any personal purpose in {cityName}—completely flexible and transparent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Real-Life Example</h3>
                <p className="text-slate-600 mb-6">
                  Priya needs ₹5 lakhs for her sister&apos;s wedding in {cityName}. She applies on Cashmela, gets approved in 2 minutes, and receives the funds in 24 hours—without any collateral or lengthy paperwork.
                </p>
                <div className="bg-white rounded-xl p-5 border-l-4 border-green-500 shadow-sm relative overflow-hidden">
                  <p className="text-slate-800 font-semibold mb-1 relative z-10">Loan Amount: ₹5 Lakhs</p>
                  <p className="text-green-600 font-bold text-lg relative z-10">Time to Approval: 2 Minutes</p>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Quick Approval</h4>
                    <p className="text-slate-600">Get approved for your personal loan in just 2 minutes. No lengthy paperwork or multiple visits required.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Use For Any Purpose</h4>
                    <p className="text-slate-600">Education, wedding, medical, home renovation, travel, or business needs—use your personal loan as you wish.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
              Cashmela vs Traditional Banks
            </h2>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Features</th>
                    <th className="p-5 font-bold border-b bg-indigo-50 text-indigo-900 text-lg border-l border-r border-indigo-100">Cashmela Personal Loan</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Traditional Banks</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">Approval Time</td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">2 Minutes</td>
                    <td className="p-5 border-b border-slate-100">3-7 Days</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">Disbursement</td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">24-48 Hours</td>
                    <td className="p-5 border-b border-slate-100">5-7 Working Days</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">Documentation</td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">100% Digital</td>
                    <td className="p-5 border-b border-slate-100">Physical</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">Interest Rate Range</td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">10.49% - 18%</td>
                    <td className="p-5 border-b border-slate-100">12% - 20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* LENDER RATES COMPARISON TABLE */}
        <section className="py-12 px-4 md:px-8 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
              Top Personal Loan Interest Rates in {cityName} (2026)
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Compare starting interest rates, maximum loan tenures, and processing fees across top public and private sector banks in {cityName}.
            </p>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Lender</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Interest Rate (p.a.)</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Max Tenure</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Processing Fee</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-bold text-slate-900">CashMela Partners</td>
                    <td className="p-5 border-b border-slate-100 font-bold text-blue-600">Starting at 10.49%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">HDFC Bank</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.50%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">ICICI Bank</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.75%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">State Bank of India (SBI)</td>
                    <td className="p-5 border-b border-slate-100">Starting at 11.15%</td>
                    <td className="p-5 border-b border-slate-100">Up to 72 Months</td>
                    <td className="p-5 border-b border-slate-100">Up to 1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP */}
        <section className="py-20 px-4 md:px-8 bg-indigo-950 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-16">
              Get a Personal Loan in 4 Simple Steps
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6">1</div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">Apply Online</h3>
                <p className="text-indigo-300 text-sm">Fill a quick form with basic details and desired loan amount.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6">2</div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">Get Approved</h3>
                <p className="text-indigo-300 text-sm">We match you with the best lender in {cityName} instantly.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-indigo-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6">3</div>
                <h3 className="font-bold text-xl mb-3 text-indigo-100">Submit Docs</h3>
                <p className="text-indigo-300 text-sm">Upload documents digitally. Zero branch visits.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-indigo-900 border-4 border-green-500 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6">✓</div>
                <h3 className="font-bold text-xl mb-3 text-green-300">Disbursal</h3>
                <p className="text-indigo-300 text-sm">Funds disbursed directly to your bank account in {cityName}.</p>
              </div>
            </div>
            <div className="mt-16">
              <Link
                href={`/apply?type=Personal Loan&city=${cityName}`}
                className="inline-block bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform active:scale-95 text-lg text-center"
              >
                Apply in {cityName}
              </Link>
            </div>
          </div>
        </section>

        {/* CITY LINKING SECTION */}
        <section className="py-8 px-4 md:px-8 bg-indigo-50 border-t border-indigo-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center text-opacity-80">
              Personal Loans Available Across India
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(CITIES_DATA).map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/personal-loan/${slug}`}
                  className={`bg-white border text-sm py-2 px-4 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer ${
                    slug === city ? "border-indigo-600 bg-indigo-600 text-white font-bold" : "border-indigo-200 text-indigo-800"
                  }`}
                >
                  Personal Loan in {name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
