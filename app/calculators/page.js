import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Financial Calculators | Loan Eligibility — CashMela",
  description: "Free online financial calculators by CashMela. Check your loan eligibility and plan your finances better.",
  alternates: {
    canonical: "https://cashmela.com/calculators",
  }
};

export default function CalculatorsHubPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-8 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight text-center">
            Financial Calculators
          </h1>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed text-center max-w-2xl mx-auto">
            Plan your finances better with our suite of free, easy-to-use calculators. Make informed decisions before applying for a loan.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/calculators/personal-loan-calculator" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Personal Loan Calculator</h2>
              <p className="text-slate-600">Plan your EMIs, compare balance transfers, and calculate pre-payment savings instantly.</p>
            </Link>

            <Link href="/calculators/smart-tax-planner" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Smart Tax Planner</h2>
              <p className="text-slate-600">Estimate your tax liability and plan your investments to save more on taxes.</p>
            </Link>

            <Link href="/calculators/loan-eligibility-calculator" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Loan Eligibility Calculator</h2>
              <p className="text-slate-600">Find out how much loan amount you qualify for based on your net monthly income and existing EMIs.</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
