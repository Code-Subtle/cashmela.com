import CalculatorsSection from './components/CalculatorsSection/CalculatorsSection';
import FAQSection from './components/FAQSection/FAQSection';
import FinancialProducts from './components/FinancialProducts/FinancialProducts';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import SavingsCalculator from './components/SavingsCalculator/SavingsCalculator';
import Navbar from './components/Navbar/Navbar';
import StatsSection from './components/StatsSection/StatsSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

export const metadata = {
  title: "Debt Consolidation & Personal Loan Comparison — CashMela",
  description: "Compare personal loan and debt consolidation offers from 40+ RBI-regulated lenders. Reduce multiple EMIs into one smarter repayment plan. 50,000+ happy customers. 100% paperless, instant approval.",
  keywords: [
    "debt consolidation India", "consolidate EMIs", "reduce monthly EMI",
    "combine multiple loans", "lower interest rate loan", "one EMI payment",
    "personal loan comparison", "CashMela", "fintech debt consolidation",
    "EMI consolidator", "merge debts India", "debt freedom", "personal loan India",
    "business loan comparison", "personal loan offers"
  ],
  alternates: {
    canonical: "https://cashmela.com",
  },
  openGraph: {
    title: "CashMela — Debt Consolidation & Personal Loan Comparison",
    description: "Reduce multiple high-interest EMIs into one smarter repayment plan. Compare offers from 40+ RBI-regulated lenders. 100% paperless.",
    url: "https://cashmela.com",
    type: "website",
  },
  twitter: {
    title: "CashMela — Compare Personal Loans & Consolidate Debts",
    description: "Compare personal loan and debt consolidation offers from 40+ top lenders. Reduce your EMI stress today.",
  },
}

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <SavingsCalculator />
          <FinancialProducts />
          <WhyChooseUs />
          {/* <StatsSection /> - Temporarily hidden until metrics are verified */}
          <CalculatorsSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
      </div>
      <Footer />
    </>
  )
}
