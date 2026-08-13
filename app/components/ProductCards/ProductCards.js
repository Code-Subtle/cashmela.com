'use client';

import Link from 'next/link';
import { FaArrowRight, FaHome, FaMoneyBillWave, FaWallet } from 'react-icons/fa';

const ProductCards = () => {
    const products = [
        {
            id: 'pl',
            title: 'Personal Loan',
            desc: 'Paperless process at low rates for your immediate needs.',
            icon: <FaMoneyBillWave />,
            bgClass: 'bg-emerald-700',
            tagColor: 'text-emerald-900',
            btnHoverColor: 'group-hover:text-emerald-900',
            tag: 'Quick Disbursal',
            link: '/apply?type=Personal Loan'
        },
        {
            id: 'od',
            title: 'Overdraft',
            desc: 'Pay interest only on the amount you use. Withdraw anytime.',
            icon: <FaWallet />,
            bgClass: 'bg-cyan-700',
            tagColor: 'text-cyan-900',
            btnHoverColor: 'group-hover:text-cyan-700',
            tag: 'Flexible Limit',
            link: '/apply?type=Overdraft'
        },
        {
            id: 'hl',
            title: 'Home Loan',
            desc: 'Instant approval at lowest interest rates with minimal docs.',
            icon: <FaHome style={{color: '#2563eb'}} />, // Blue icon inside white box
            bgClass: 'bg-slate-800',
            tagColor: 'text-slate-900',
            btnHoverColor: 'group-hover:text-slate-800',
            tag: 'Quick Sanction',
            link: '/apply?type=Home Loan'
        }
    ];

  return (
    <section className="relative z-20 -mt-20 pb-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product) => (
                <Link href={product.link} key={product.id} className={`p-6 rounded-[1rem] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] text-white relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer flex flex-col group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-0 before:-left-[100%] before:w-1/2 before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-skew-x-[25deg] before:pointer-events-none group-hover:before:left-[150%] before:transition-all before:duration-1000 before:ease-in-out ${product.bgClass}`}>
                    <div className="flex items-start justify-between mb-6 relative z-10">
                        <span className={`text-[8px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded ${product.tagColor}`}>{product.tag}</span>
                        <div className="bg-white/20 p-2 rounded-lg transition-colors duration-200 flex items-center justify-center group-hover:bg-white/30">
                            <span className="text-xl">{product.icon}</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 relative z-10">{product.title}</h3>
                    <p className="text-xs mb-6 leading-relaxed text-white/80 relative z-10 grow">{product.desc}</p>
                    <span className={`text-white font-bold text-xs flex items-center gap-2 border border-white/30 px-4 py-2 rounded-full w-fit transition-all duration-300 relative z-10 group-hover:bg-white group-hover:gap-3 ${product.btnHoverColor}`}>
                        Apply Now <FaArrowRight style={{fontSize: '0.625rem'}} />
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
