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
    title: `Debt Consolidation Loan in ${cityName} | Combine EMIs | Cashmela`,
    description: `Combine multiple personal loans and credit card dues into one single easy EMI in ${cityName}. Get the best debt consolidation loan with low interest rates. Apply online.`,
    alternates: {
      canonical: `https://cashmela.com/debt-consolidation/${city}`,
    },
  };
}

export default async function DebtConsolidationCityPage({ params }) {
  const { city } = await params;
  const cityName = CITIES_DATA[city] || city.charAt(0).toUpperCase() + city.slice(1);

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `CashMela Debt Consolidation Loan in ${cityName}`,
    "description": `Combine multiple personal loans and credit card bills into one single easy EMI in ${cityName}. Save on interest and build your credit score.`,
    "provider": {
      "@type": "Organization",
      "name": "CashMela",
      "url": "https://cashmela.com"
    },
    "feesAndCommissionsSpecification": `https://cashmela.com/debt-consolidation/${city}#fees`,
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
        name: `What is a debt consolidation loan in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A debt consolidation loan in ${cityName} allows you to combine multiple active loans and credit card dues into one single EMI. It offers lower interest rates, longer repayment tenure, and simplifies your monthly financial planning.`,
        },
      },
      {
        "@type": "Question",
        name: `Who is eligible for a debt consolidation loan in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Salaried professionals in ${cityName} earning above ₹15,000 per month, aged 21-58, with an active CIBIL score above 600 are generally eligible to combine multiple loans into one.`,
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
        id="debt-consolidation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }}
      />
      <Navbar />

      <main className="min-h-screen bg-white font-sans">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white pt-6 pb-16 md:pt-10 md:pb-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-heading font-bold leading-tight text-slate-900 mb-8">
                Reduce Your EMIs by 50% in <span className="text-[#4F46E5]">{cityName}</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 font-sans leading-relaxed">
                Consolidate multiple personal loans and credit card bills in {cityName} into one single easy EMI. Pay lower interest rates, clear debt faster, and reclaim peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <Link
                  href={`/apply?type=Debt Consolidation&city=${cityName}`}
                  className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform active:scale-95 text-center text-lg"
                >
                  Consolidate Debt in {cityName}
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center relative">
              <Image
                src="/Loan Mobile Mockup/debt consolidation.webp"
                alt={`Debt consolidation app interface in ${cityName}`}
                width={320}
                height={600}
                priority
                className="w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* COMPARISON TABLES */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
              Cashmela vs Traditional Approaches
            </h2>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Features</th>
                    <th className="p-5 font-bold border-b bg-indigo-50 text-indigo-900 text-lg border-l border-r border-indigo-100">Cashmela Debt Consolidation</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Traditional Banks / Others</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">Digital Process</td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">Instant (10 Mins)</td>
                    <td className="p-5 border-b border-slate-100">7-14 Days</td>
                  </tr>
                  <tr>
                    <td className="p-5 border-b border-slate-100 font-medium">Lender Network</td>
                    <td className="p-5 border-b border-indigo-100 bg-indigo-50/50 font-bold text-indigo-700 border-l border-r">30+ Top Verified Lenders</td>
                    <td className="p-5 border-b border-slate-100">Single Lender</td>
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
              Top Debt Consolidation Interest Rates in {cityName} (2026)
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Compare rates and processing fees across top Indian banks when consolidating credit cards and personal loans in {cityName}.
            </p>
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Lender</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Starting Rate (p.a.)</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Max Loan Amount</th>
                    <th className="p-5 font-bold border-b border-slate-200 text-lg">Processing Fee</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-bold text-slate-900">CashMela Consolidation Program</td>
                    <td className="p-5 border-b border-slate-100 font-bold text-blue-600">Starting at 10.49%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹50 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">HDFC Bank Balance Transfer</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.50%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹40 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-slate-100 font-medium">ICICI Bank Personal Loan</td>
                    <td className="p-5 border-b border-slate-100">Starting at 10.75%</td>
                    <td className="p-5 border-b border-slate-100">Up to ₹50 Lakhs</td>
                    <td className="p-5 border-b border-slate-100">Up to 2.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CITY LINKING SECTION */}
        <section className="py-8 px-4 md:px-8 bg-indigo-50 border-t border-indigo-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center text-opacity-80">
              Debt Consolidation Available Across India
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(CITIES_DATA).map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/debt-consolidation/${slug}`}
                  className={`bg-white border text-sm py-2 px-4 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer ${
                    slug === city ? "border-indigo-600 bg-indigo-600 text-white font-bold" : "border-indigo-200 text-indigo-800"
                  }`}
                >
                  Debt Consolidation in {name}
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
