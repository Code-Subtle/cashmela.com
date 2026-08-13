'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Pradeep Kumar',
        problem: 'Had 4 different EMIs totaling ₹48,000/month, making it extremely hard to manage monthly finances and track due dates.',
        solution: 'CashMela consolidated them into one single payment of ₹29,000. Expects to be completely debt-free in 3 years while saving ₹20k monthly.',
        avatarUrl: '/testinomials/pradeep-kumar.webp'
    },
    {
        name: 'Jyotirbindu Patnaik',
        problem: 'Drowning in credit card debt at 42% interest. Minimum payments were barely covering the interest, leaving no clear way out.',
        solution: 'CashMela helped consolidate everything at 10.5%. The process took less than 48 hours and gave him peace of mind.',
        avatarUrl: '/testinomials/jyotirbindu-patnaik.webp'
    },
    {
        name: 'Roshan Kadam',
        problem: 'Managing 3 app loans and a credit card was stressful and confusing to track for his small business.',
        solution: 'Now has just one EMI and a clear debt-free timeline. The dedicated advisor made the transition incredibly simple.',
        avatarUrl: '/testinomials/roshan-kadam.webp'
    },
    {
        name: 'Vikram Singh',
        problem: 'Paying ₹35,000 across 5 different debts, leaving very little room for savings or emergency funds.',
        solution: 'The advisor created a perfect consolidation plan, reducing outflow to just ₹21,500/month. Best financial decision ever.',
        avatarUrl: '/testinomials/vikram-singh.webp'
    }
];

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [xOffset, setXOffset] = useState(220);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setXOffset(80);
        }
    }, []);

    return (
        <section className="py-10 bg-white flex flex-col items-center overflow-hidden w-full relative">
            {/* Top badge */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-100 text-slate-600 px-5 py-2 rounded-full text-sm font-medium mb-12 md:mb-20 shadow-sm border border-slate-200/60"
            >
                Real People, Real Savings
            </motion.div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[1200px] h-[450px] flex justify-center items-center" style={{ perspective: 1200 }}>
                <AnimatePresence initial={false}>
                    {testimonials.map((t, i) => {
                        const diff = i - activeIndex;
                        const isCenter = diff === 0;
                        const isLeft = diff < 0;
                        const isRight = diff > 0;
                        
                        // Hide items that are too far away
                        if (Math.abs(diff) > 2) return null;

                        // Translation is computed via layout state to prevent hydration mismatches

                        return (
                            <motion.div
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`absolute w-[300px] md:w-[380px] h-[400px] bg-[#f0f3f8] rounded-3xl p-8 border border-white/50 shadow-2xl flex flex-col cursor-pointer ${isCenter ? '' : 'pointer-events-auto hover:border-blue-200'}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isCenter ? 1 : Math.max(0.3, 1 - Math.abs(diff) * 0.4),
                                    scale: isCenter ? 1 : Math.max(0.75, 1 - Math.abs(diff) * 0.15),
                                    x: isCenter ? 0 : (diff * xOffset),
                                    z: isCenter ? 0 : -Math.abs(diff) * 150,
                                    rotateY: isCenter ? 0 : (isLeft ? 35 : -35),
                                    zIndex: isCenter ? 10 : 10 - Math.abs(diff),
                                    filter: isCenter ? 'blur(0px)' : 'blur(2px)'
                                }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: [0.16, 1, 0.3, 1] // Custom spring-like easing
                                }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Card Content */}
                                <div className="flex items-center gap-4 mb-8">
                                    <img src={t.avatarUrl} alt={t.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm" />
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight">{t.name}</h3>
                                    </div>
                                </div>
                                
                                <div className="space-y-6 flex-grow overflow-y-auto pr-2 scrollbar-hide">
                                    <div>
                                        <h4 className="text-[13px] font-semibold text-slate-400 mb-2">Before CashMela</h4>
                                        <p className="text-slate-700 text-[15px] leading-relaxed">{t.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-semibold text-slate-400 mb-2">After CashMela</h4>
                                        <p className="text-slate-700 text-[15px] leading-relaxed">{t.solution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Thumbnails Navigation */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 mt-16 mb-10"
            >
                {testimonials.map((t, i) => (
                    <button 
                        key={i} 
                        onClick={() => setActiveIndex(i)}
                        className={`relative rounded-2xl overflow-hidden transition-all duration-300 transform ${activeIndex === i ? 'ring-4 ring-blue-400 scale-110 shadow-lg' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}
                    >
                        <img src={t.avatarUrl} alt={t.name} className="w-14 h-14 md:w-16 md:h-16 object-cover" />
                    </button>
                ))}
            </motion.div>

            {/* Bottom Text */}
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-800 text-center max-w-2xl text-sm md:text-base leading-relaxed px-6"
            >
                Having previously analyzed who could be a user of the service, we identified <span className="text-blue-600 font-semibold">{testimonials.length} groups of our target audience</span>, in each of which we described the characteristics of the person and how CashMela transformed their financial journey.
            </motion.p>
            
            <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
};

export default TestimonialsSection;
