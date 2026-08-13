import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import SmartLoanCalculator from '@/app/components/SmartLoanCalculator/SmartLoanCalculator';
import Script from 'next/script';

export const metadata = {
    title: "Personal Loan Calculator — Smart EMI & Prepayment Planner | CashMela",
    description: "Use CashMela's Smart Personal Loan Calculator to plan your EMIs, compare balance transfers, and calculate pre-payment savings instantly.",
    keywords: [
        "personal loan calculator", "personal loan EMI calculator", "smart loan calculator",
        "personal loan EMI", "loan prepayment calculator", "balance transfer calculator",
        "loan interest calculator", "CashMela personal loan"
    ],
    alternates: {
        canonical: "https://cashmela.com/calculators/personal-loan-calculator",
    },
    openGraph: {
        title: "Personal Loan Calculator — Smart Planner | CashMela",
        description: "Calculate your personal loan EMI instantly. Compare interest rates, balance transfers, and plan your pre-payments smartly.",
        url: "https://cashmela.com/calculators/personal-loan-calculator",
        type: "website",
    },
};

export default function PersonalLoanCalculatorPage() {
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "CashMela Personal Loan Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        },
        "description": "Calculate personal loan EMIs, interest payable, balance transfer savings, and pre-payment impact instantly in India."
    };

    return (
        <>
            <Script
                id="personal-loan-calculator-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <Navbar />
            <main className="w-full bg-slate-50 flex flex-col items-center justify-center">
                <div className="w-full overflow-hidden">
                    <SmartLoanCalculator />
                </div>
            </main>
            <Footer />
        </>
    );
}
