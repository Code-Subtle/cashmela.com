import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Check Your Credit Score Online For Free | CashMela",
  description: "Check your CIBIL and Experian credit score for free in 2 minutes. Understand your credit health with safe, soft inquiries that won't impact your score.",
  alternates: {
    canonical: "https://cashmela.com/credit-score",
  }
};

export default function CreditScorePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-8 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100 text-center mb-8">
             <div className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-bold mb-4">
              Credit Score
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Know Your Credit Score for Free
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your credit score is the key to getting the best loan offers and lowest interest rates. 
              Check your score safely—our soft inquiry will not negatively impact your credit rating.
            </p>
            
            <Link href="/credit-score/check-score" className="inline-block bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform active:scale-95 text-center">
              Check Free Credit Score
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/credit-score/cibil-score-range" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-slate-800 mb-2">CIBIL Score Ranges Explained</h2>
              <p className="text-slate-600">Understand what your score means. Learn the difference between excellent, good, average, and poor credit scores and how lenders view them.</p>
            </Link>
            
            <Link href="/credit-score/how-to-improve-cibil-score" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-slate-800 mb-2">How to Improve Your Score</h2>
              <p className="text-slate-600">Actionable tips and strategies to rebuild and improve your credit score over time for better loan eligibility.</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
