'use client';

import { useRouter } from 'next/navigation';
import { FiCheckCircle } from 'react-icons/fi';
import FadeIn from '../FadeIn';

const products = [
    {
        id: 'personal-loan',
        badge: 'FAST-TRACK FUNDING',
        title: 'Personal Loan: Access Funds Instantly',
        description: 'Get instant access to funds for any personal need with our streamlined application process from 40+ leading banks. Set the rules, choose lenders from a competitive marketplace, and track your application in real time.',
        points: [
            'Interest rates starting from 10.49% p.a.',
            'Zero collateral or guarantors required for approval',
            '100% paperless digital process and execution paths',
            'Instant disbursal directly to your bank account'
        ],
        buttonText: 'GET PERSONAL LOAN',
        image: '/Loan Mobile Mockup/personal loan.webp',
        route: '/personal-loan'
    },
    {
        id: 'debt-consolidation',
        badge: 'FINANCIAL FREEDOM',
        title: 'Debt Consolidation: Human in command',
        description: 'The Consolidation Room is where borrowers deploy and monitor their financial restructuring. Take back control by combining multiple high-interest EMIs and credit card dues into one single, manageable monthly payment.',
        points: [
            'Connect to leading banks to significantly lower your monthly EMI outflow',
            'Personalize policy settings and merge credit cards effortlessly',
            'Monitor allocation, yield, and activity to improve your credit score',
            'Always be on top of your single repayment date'
        ],
        buttonText: 'GET DEBT CONSOLIDATION',
        image: '/Loan Mobile Mockup/consolidation loan.webp',
        route: '/debt-consolidation'
    },
    {
        id: 'business-loan',
        badge: 'SCALE YOUR VISION',
        title: 'Business Loan: Scale your operations',
        description: 'Scale your operations and build a sustainable business with versatile lending partners and flexible business funding. Access an expanding range of capital management capabilities.',
        points: [
            'Collateral-free loans tailored for growing MSMEs and startups',
            'Quick funds for working capital, equipment, and expansion',
            'Fast approvals based on GST or current bank statements',
            'Flexible repayment tenures up to 60 months'
        ],
        buttonText: 'GET BUSINESS LOAN',
        image: '/Loan Mobile Mockup/business loan.webp',
        route: '/business-loan'
    },
    {
        id: 'overdraft-loan',
        badge: 'ON-DEMAND CAPITAL',
        title: 'Overdraft: Flexible Credit Line',
        description: 'The missing link between immediate needs and capital. A flexible credit line tailored to your cash flow, allowing you to access funds exactly when your business demands it.',
        points: [
            'Interest charged only on the utilized amount, not the limit',
            'Withdraw funds anytime up to your approved credit limit',
            'No pre-payment or foreclosure charges applied on closure',
            'Continuous 24/7 access to emergency operational capital'
        ],
        buttonText: 'GET OVERDRAFT LOAN',
        image: '/Loan Mobile Mockup/overdraft loan.webp',
        route: '/overdraft'
    }
];

const FinancialProducts = () => {
    const router = useRouter();

    return (
        <section className="bg-[#f8f9fa] relative overflow-hidden flex flex-col w-full">
            <div className="w-full relative z-10">
                <div className="w-full flex flex-col pt-12">
                    
                    {/* Header Section */}
                    <FadeIn direction="up">
                        <div className="max-w-[1280px] mx-auto px-6 py-6 md:py-10 text-center">
                            <h2 className="text-4xl md:text-6xl font-medium text-slate-900 leading-tight tracking-tight mb-6">
                                Loans We Help You Compare
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                With CashMela, borrowers always get the best rates. Every suggested action is checked against a rulebook. The banks compete on a transparent marketplace.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Alternating Product Blocks */}
                    <div className="flex flex-col w-full">
                        {products.map((product, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div 
                                    key={product.id}
                                    className="w-full py-12 md:py-20 relative group border-t border-slate-200/60 overflow-hidden"
                                >
                                    <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
                                        
                                        {/* Content Side */}
                                        <div className={`w-full flex flex-col items-start ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                            <FadeIn direction={isEven ? "right" : "left"} className="w-full flex flex-col items-start">
                                                
                                                {/* Minimalist Badge */}
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-slate-400 font-mono text-[11px] tracking-[0.25em] uppercase border-y border-slate-300/60 py-1.5 px-1">
                                                        // {product.badge}
                                                    </span>
                                                </div>
                                                
                                                <h3 className="text-4xl md:text-[42px] lg:text-[50px] font-medium text-slate-900 mb-4 tracking-tight leading-[1.1]">
                                                    {product.title.split(':').map((part, i) => (
                                                        <span key={i} className={i === 1 ? 'block text-slate-700' : ''}>
                                                            {part}
                                                        </span>
                                                    ))}
                                                </h3>
                                                
                                                <p className="text-slate-600 text-[17px] leading-relaxed mb-6 max-w-[90%]">
                                                    {product.description}
                                                </p>

                                                <div className="w-full h-px bg-slate-200/80 mb-6"></div>
                                                
                                                <ul className="space-y-3 mb-8 w-full">
                                                    {product.points.map((point, idx) => (
                                                        <li key={idx} className="flex items-start gap-4">
                                                            <FiCheckCircle className="text-slate-700 mt-0.5 shrink-0" strokeWidth={1.5} size={20} />
                                                            <span className="text-slate-600 font-medium text-[15.5px] leading-relaxed">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                <button 
                                                    onClick={() => router.push(product.route)}
                                                    className="bg-[#1E40AF] hover:bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold tracking-[0.05em] text-[13px] uppercase transition-transform shadow-lg hover:shadow-xl active:scale-95"
                                                >
                                                    {product.buttonText}
                                                </button>
                                            </FadeIn>
                                        </div>

                                        {/* Image Side */}
                                        <div className={`hidden md:block w-full relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                            <FadeIn direction={isEven ? "left" : "right"} className="w-full relative flex items-center justify-center">
                                                <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[520px] xl:h-[560px] mx-auto">
                                                    <img 
                                                        src={product.image} 
                                                        alt={product.title} 
                                                        className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                                                    />
                                                </div>
                                            </FadeIn>
                                        </div>
                                        
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinancialProducts;

