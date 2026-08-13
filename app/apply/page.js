'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LoanApplicationModal from '@/app/components/LoanApplicationModal/LoanApplicationModal';

function ApplyContent() {
  const searchParams = useSearchParams();
  const rawType = searchParams.get('type') || searchParams.get('loan_type') || 'Personal';
  
  let loanType = 'Personal';
  if (rawType.toLowerCase().includes('business')) loanType = 'Business';
  else if (rawType.toLowerCase().includes('consolidation') || rawType.toLowerCase().includes('debt')) loanType = 'Debt Consolidation';
  else if (rawType.toLowerCase().includes('overdraft')) loanType = 'Overdraft';

  return <LoanApplicationModal isOpen={true} defaultLoanType={loanType} isPageMode={true} />;
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 text-slate-500 font-bold">
        <div className="w-8 h-8 border-4 border-[#415ae6]/30 border-t-[#415ae6] rounded-full animate-spin mb-3"></div>
        Loading Application Journey...
      </div>
    }>
      <ApplyContent />
    </Suspense>
  );
}
