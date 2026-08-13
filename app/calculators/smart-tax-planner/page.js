import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import SmartTaxPlanner from '@/app/components/SmartTaxPlanner/SmartTaxPlanner';
import Script from 'next/script';

export const metadata = {
    title: "Smart Tax Planner 2026 — Calculate Income Tax & Compare Regimes | CashMela",
    description: "Plan your taxes smartly for Indian Financial Year 2025-26 & 2026-27 with CashMela. Compare Old vs New Tax Regimes instantly with our AI-powered Tax Planner.",
    keywords: [
        "tax planner 2026", "income tax calculator india", "budget tax calculator",
        "old vs new tax regime", "income tax planner", "Section 80C deductions", "CashMela tax calculator"
    ],
    alternates: {
        canonical: "https://cashmela.com/calculators/smart-tax-planner",
    },
    openGraph: {
        title: "Smart Tax Planner 2026 | CashMela",
        description: "Compare Old vs New Tax Regimes instantly with our AI-powered Income Tax Planner.",
        url: "https://cashmela.com/calculators/smart-tax-planner",
        type: "website",
    },
};

export default function SmartTaxPlannerPage() {
    const taxSoftwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "CashMela Smart Tax Planner",
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        },
        "description": "Calculate income tax liability and compare Old vs New Tax Regimes for Indian taxpayers."
    };

    return (
        <div className="bg-[#f3f6fc]">
            <Script
                id="smart-tax-planner-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(taxSoftwareSchema) }}
            />
            <Navbar />
            <main className="w-full bg-[#f3f6fc]">
                <div className="w-full overflow-hidden bg-white">
                    <SmartTaxPlanner />
                </div>
            </main>
            <Footer />
        </div>
    );
}
