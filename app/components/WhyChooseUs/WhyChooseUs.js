'use client';

import { BankSecurityIcon, InstantApprovalIcon, DedicatedAdvisorIcon, LowerEmiIcon } from '@/components/ui/Icons';
import FadeIn from '../FadeIn';

const features = [
    {
        icon: <BankSecurityIcon className="w-16 h-16" />,
        title: 'Bank-Grade Security',
        desc: '256-bit SSL encryption protects your data. We only share information with RBI-regulated lending institutions with your consent.',
    },
    {
        icon: <InstantApprovalIcon className="w-16 h-16" />,
        title: 'Approval in Minutes',
        desc: 'No branch visits, no long waits. Get your consolidation approved digitally in minutes.',
    },
    {
        icon: <DedicatedAdvisorIcon className="w-16 h-16" />,
        title: 'Dedicated Debt Advisor',
        desc: 'A personal financial advisor guides you through your entire consolidation journey.',
    },
    {
        icon: <LowerEmiIcon className="w-16 h-16" />,
        title: 'Potentially Lower Your EMIs',
        desc: 'We compare offers from 40+ banks to find you a consolidation loan that can reduce your monthly outflow.',
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-10 md:py-32 bg-white relative overflow-hidden border-b border-slate-900/10 w-full flex flex-col items-center">
            {/* Subtle grid background - light blue and gray grid */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply w-full" 
                 style={{ 
                     backgroundImage: 'linear-gradient(to right, #bfdbfe 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                 }}>
            </div>

            <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
                
                {/* Heading (Centered) */}
                <div className="w-full text-center mb-16 md:mb-24">
                    <FadeIn direction="up">
                        <h2 className="text-[2.75rem] md:text-[4rem] font-medium text-slate-900 leading-[1.05] tracking-[-0.03em] mx-auto">
                            The financial upgrade <br className="hidden md:block"/>for you is here
                        </h2>
                    </FadeIn>
                </div>

                {/* Features Grid (Centered 2x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 w-full">
                    {features.map((feature, index) => (
                        <div key={index} className="flex justify-center">
                            <FadeIn delay={index * 0.1} direction="up" fullWidth className="flex flex-col h-full items-center text-center max-w-md">
                                <div className="mb-6 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </FadeIn>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default WhyChooseUs;
