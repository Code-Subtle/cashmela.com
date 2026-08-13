'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoClose, 
  IoCheckmarkCircle, 
  IoCalendarOutline, 
  IoInformationCircleOutline,
  IoTimeOutline,
  IoArrowBackOutline
} from 'react-icons/io5';

// Pincode city helper
const getCityFromPincode = (pincode) => {
  if (!pincode || pincode.length < 3) return '';
  if (pincode.startsWith('400')) return 'Mumbai';
  if (pincode.startsWith('560')) return 'Bengaluru';
  if (pincode.startsWith('110')) return 'New Delhi';
  if (pincode.startsWith('600')) return 'Chennai';
  if (pincode.startsWith('700')) return 'Kolkata';
  if (pincode.startsWith('500')) return 'Hyderabad';
  if (pincode.startsWith('380')) return 'Ahmedabad';
  if (pincode.startsWith('411')) return 'Pune';
  if (pincode.startsWith('201')) return 'Noida';
  if (pincode.startsWith('122')) return 'Gurugram';
  return 'Mumbai';
};

// Formatter for elapsed time display (e.g. "58 seconds", "5 min 3 sec")
const formatElapsedTime = (totalSeconds) => {
  if (totalSeconds < 60) {
    return `${totalSeconds} seconds`;
  }
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins} min ${secs} sec`;
};

export default function LoanApplicationModal({ 
  isOpen = true, 
  onClose, 
  defaultLoanType = 'Personal',
  isPageMode = false 
}) {
  const [step, setStep] = useState(1);
  const [loanCategory, setLoanCategory] = useState(defaultLoanType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Time elapsed tracking
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [stepTimings, setStepTimings] = useState({
    1: 40,
    2: 12,
    3: 10,
    4: 0
  });

  // Lead ID for draft / abandoned tracking
  const [leadId, setLeadId] = useState(null);

  // Main Form state
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    pincode: '',
    dateOfBirth: '',
    city: '',
    panNumber: '',
    employmentStatus: 'Self-Employed', // Salaried Employee | Self-Employed
    netIncome: '',
    companyName: '',
    existingEmi: '',
    loanAmount: '',
    loanPurpose: 'Debt Consolidation',
    desiredTenure: '3 Years',
  });

  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(true);

  // Sync default loan type
  useEffect(() => {
    if (defaultLoanType) {
      setLoanCategory(defaultLoanType);
      if (defaultLoanType === 'Debt Consolidation') {
        setFormData(prev => ({ ...prev, loanPurpose: 'Debt Consolidation' }));
      } else if (defaultLoanType === 'Business') {
        setFormData(prev => ({ ...prev, loanPurpose: 'Business Expansion' }));
      } else if (defaultLoanType === 'Overdraft') {
        setFormData(prev => ({ ...prev, loanPurpose: 'Working Capital' }));
      } else {
        setFormData(prev => ({ ...prev, loanPurpose: 'Personal Expenses' }));
      }
    }
  }, [defaultLoanType]);

  // Live Stopwatch
  useEffect(() => {
    let timer;
    if (isOpen && !isSubmitted) {
      timer = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, isSubmitted]);

  // Auto detect city from pincode
  useEffect(() => {
    if (formData.pincode.length >= 3) {
      const detectedCity = getCityFromPincode(formData.pincode);
      if (detectedCity) {
        setFormData(prev => ({ ...prev, city: detectedCity }));
      }
    }
  }, [formData.pincode]);

  // Auto-restore form draft from localStorage for returning users
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem('cashmela_loan_draft');
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        if (parsed.formData) {
          setFormData(prev => ({ ...prev, ...parsed.formData }));
        }
        if (parsed.step && parsed.step >= 1 && parsed.step <= 4) {
          setStep(parsed.step);
        }
        if (parsed.leadId) {
          setLeadId(parsed.leadId);
        }
      }
    } catch (e) {
      console.error('Error restoring draft from localStorage:', e);
    }
  }, []);

  // Save form draft to localStorage whenever form details change
  useEffect(() => {
    if (!isSubmitted && (formData.fullName || formData.mobileNumber)) {
      try {
        localStorage.setItem(
          'cashmela_loan_draft',
          JSON.stringify({ formData, step, leadId })
        );
      } catch (e) {
        console.error('Error saving draft to localStorage:', e);
      }
    }
  }, [formData, step, leadId, isSubmitted]);

  if (!isOpen) return null;

  const handleDateChange = (e) => {
    const rawVal = e.target.value;
    // Strip non-digit characters
    const digitsOnly = rawVal.replace(/\D/g, '').slice(0, 8);
    let formatted = '';
    if (digitsOnly.length <= 2) {
      formatted = digitsOnly;
    } else if (digitsOnly.length <= 4) {
      formatted = `${digitsOnly.slice(0, 2)}-${digitsOnly.slice(2)}`;
    } else {
      formatted = `${digitsOnly.slice(0, 2)}-${digitsOnly.slice(2, 4)}-${digitsOnly.slice(4)}`;
    }

    setFormData(prev => ({ ...prev, dateOfBirth: formatted }));
    if (errors.dateOfBirth) {
      setErrors(prev => ({ ...prev, dateOfBirth: '' }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Auto-save draft / abandoned lead to Supabase
  const saveDraftLead = async (currentFormData) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: leadId,
          full_name: currentFormData.fullName,
          mobile_number: currentFormData.mobileNumber,
          email_address: currentFormData.emailAddress,
          pincode: currentFormData.pincode,
          date_of_birth: currentFormData.dateOfBirth,
          city: currentFormData.city,
          pan_number: currentFormData.panNumber,
          employment_type: currentFormData.employmentStatus === 'Salaried Employee' ? 'Salaried' : 'Self-Employed',
          monthly_income: currentFormData.netIncome || null,
          company_name: currentFormData.companyName || null,
          current_emi: currentFormData.existingEmi || 0,
          loan_amount: currentFormData.loanAmount || null,
          loan_purpose: currentFormData.loanPurpose || null,
          desired_tenure: currentFormData.desiredTenure || null,
          loan_type: loanCategory,
          status: 'abandoned'
        }),
      });
      const resData = await response.json();
      if (resData.success && resData.lead?.id) {
        setLeadId(resData.lead.id);
      }
    } catch (err) {
      console.error('Draft lead save error:', err);
    }
  };

  // Step Validations
  const validateStep1 = () => {
    const errs = {};
    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.emailAddress || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      errs.emailAddress = 'Enter a valid email address';
    }
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
      errs.pincode = 'Pincode must be 6 digits';
    }
    if (!formData.dateOfBirth) {
      errs.dateOfBirth = 'Date of Birth is required';
    }
    if (!formData.city) {
      errs.city = 'City of Residence is required';
    }
    if (!formData.panNumber || !/^[A-Z]{5}\d{4}[A-Z]{1}$/i.test(formData.panNumber)) {
      errs.panNumber = 'Enter a valid 10-character PAN Card number';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.netIncome || isNaN(formData.netIncome) || Number(formData.netIncome) <= 0) {
      errs.netIncome = 'Valid Net Income is required';
    }
    if (!formData.companyName || formData.companyName.trim().length < 2) {
      errs.companyName = 'Employer/Business Name is required';
    }
    if (formData.existingEmi === '' || isNaN(formData.existingEmi) || Number(formData.existingEmi) < 0) {
      errs.existingEmi = 'Total Existing EMI is required (enter 0 if none)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs = {};
    if (!formData.loanAmount || isNaN(formData.loanAmount) || Number(formData.loanAmount) <= 0) {
      errs.loanAmount = 'Required Loan Amount is required';
    }
    if (!formData.loanPurpose) {
      errs.loanPurpose = 'Purpose of Loan is required';
    }
    if (!formData.desiredTenure) {
      errs.desiredTenure = 'Desired Tenure is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStepTimings(prev => ({ ...prev, 1: elapsedSeconds || 40 }));
      setStep(2);
      saveDraftLead(formData);
    } else if (step === 2 && validateStep2()) {
      setStepTimings(prev => ({ ...prev, 2: Math.max(12, elapsedSeconds - stepTimings[1]) }));
      setStep(3);
      saveDraftLead(formData);
    } else if (step === 3 && validateStep3()) {
      setStepTimings(prev => ({ ...prev, 3: Math.max(10, elapsedSeconds - stepTimings[1] - stepTimings[2]) }));
      setStep(4);
      saveDraftLead(formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      setErrors({});
    }
  };

  const handleSubmitFinal = async () => {
    if (!agreed) {
      setErrors({ agreed: 'You must confirm and agree to terms before submitting.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: leadId,
          full_name: formData.fullName,
          mobile_number: formData.mobileNumber,
          email_address: formData.emailAddress,
          pincode: formData.pincode,
          date_of_birth: formData.dateOfBirth,
          city: formData.city,
          pan_number: formData.panNumber,
          employment_type: formData.employmentStatus === 'Salaried Employee' ? 'Salaried' : 'Self-Employed',
          monthly_income: formData.netIncome,
          company_name: formData.companyName,
          current_emi: formData.existingEmi,
          loan_amount: formData.loanAmount,
          loan_purpose: formData.loanPurpose,
          desired_tenure: formData.desiredTenure,
          loan_type: loanCategory,
          status: 'pending'
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to submit lead.');
      }

      setIsSubmitted(true);
      try {
        localStorage.removeItem('cashmela_loan_draft');
      } catch (e) {}
    } catch (err) {
      console.error('Submit lead error:', err);
      setErrors({ submit: err.message || 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTitle = () => {
    if (loanCategory === 'Debt Consolidation') return 'Loan Consolidation Application';
    if (loanCategory === 'Business') return 'Business Loan Application';
    if (loanCategory === 'Overdraft') return 'Overdraft Loan Application';
    return 'Personal Loan Application';
  };

  const calculateProgress = () => {
    if (step === 1) return '25%';
    if (step === 2) return '50%';
    if (step === 3) return '75%';
    return '100%';
  };

  const getFieldsCount = () => {
    if (step === 1) return '7/7 fields';
    if (step === 2) return '4/4 fields';
    if (step === 3) return '2/2 fields';
    return 'Final Review';
  };

  // 10-second redirect countdown timer state
  const [redirectCountdown, setRedirectCountdown] = useState(10);

  // Auto-redirect to home screen after 10 seconds on submission
  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setInterval(() => {
        setRedirectCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = '/';
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const modalContent = (
    <div className={`bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden w-full ${isPageMode ? 'max-w-6xl mx-auto my-4 border border-slate-200' : 'max-w-5xl max-h-[92vh] flex flex-col'}`}>
      
      {/* ── TOP HEADER BANNER ── */}
      <div className="bg-[#415ae6] text-white px-6 py-4 flex items-center justify-between shadow-md relative shrink-0">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">{getTitle()}</h2>
          <p className="text-xs md:text-sm text-blue-100 font-medium">Starting @9.99%</p>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all text-2xl focus:outline-none"
            aria-label="Close"
          >
            <IoClose />
          </button>
        )}
      </div>

      {/* ── MAIN BODY GRID (SIDEBAR + CONTENT) ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 overflow-y-auto">
        
        {/* LEFT SIDEBAR: STEP NAVIGATOR */}
        <div className="lg:col-span-4 bg-[#f8fafc] border-b lg:border-b-0 lg:border-r border-[#e2e8f0] p-5 md:p-6 flex flex-col justify-between">
          <div className="space-y-4 md:space-y-6">
            
            {/* Step 1 */}
            <div className={`flex items-start gap-3.5 p-3 rounded-2xl transition-all ${step === 1 ? 'bg-white shadow-sm border border-slate-200' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                step > 1 ? 'bg-emerald-500 text-white' : step === 1 ? 'bg-[#415ae6] text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {step > 1 ? <IoCheckmarkCircle className="w-6 h-6" /> : '1'}
              </div>
              <div>
                <p className={`font-bold text-sm ${step === 1 ? 'text-slate-900' : step > 1 ? 'text-emerald-700' : 'text-slate-500'}`}>
                  Basic Details
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {step > 1 ? formatElapsedTime(stepTimings[1]) : '40 seconds'}
                </p>
                {step === 1 && (
                  <p className="text-[11px] font-bold text-[#415ae6] mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#415ae6] animate-ping" />
                    • In Progress
                  </p>
                )}
              </div>
            </div>

            {/* Step 2 */}
            <div className={`flex items-start gap-3.5 p-3 rounded-2xl transition-all ${step === 2 ? 'bg-white shadow-sm border border-slate-200' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                step > 2 ? 'bg-emerald-500 text-white' : step === 2 ? 'bg-[#415ae6] text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {step > 2 ? <IoCheckmarkCircle className="w-6 h-6" /> : '2'}
              </div>
              <div>
                <p className={`font-bold text-sm ${step === 2 ? 'text-slate-900' : step > 2 ? 'text-emerald-700' : 'text-slate-500'}`}>
                  Employment Info
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {step > 2 ? formatElapsedTime(stepTimings[2]) : '12 seconds'}
                </p>
                {step === 2 && (
                  <p className="text-[11px] font-bold text-[#415ae6] mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#415ae6] animate-ping" />
                    • In Progress
                  </p>
                )}
              </div>
            </div>

            {/* Step 3 */}
            <div className={`flex items-start gap-3.5 p-3 rounded-2xl transition-all ${step === 3 ? 'bg-white shadow-sm border border-slate-200' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                step > 3 ? 'bg-emerald-500 text-white' : step === 3 ? 'bg-[#415ae6] text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {step > 3 ? <IoCheckmarkCircle className="w-6 h-6" /> : '3'}
              </div>
              <div>
                <p className={`font-bold text-sm ${step === 3 ? 'text-slate-900' : step > 3 ? 'text-emerald-700' : 'text-slate-500'}`}>
                  Loan Requirement
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {step > 3 ? formatElapsedTime(stepTimings[3]) : '10 seconds'}
                </p>
                {step === 3 && (
                  <p className="text-[11px] font-bold text-[#415ae6] mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#415ae6] animate-ping" />
                    • In Progress
                  </p>
                )}
              </div>
            </div>

            {/* Step 4 */}
            <div className={`flex items-start gap-3.5 p-3 rounded-2xl transition-all ${step === 4 ? 'bg-white shadow-sm border border-slate-200' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                isSubmitted ? 'bg-emerald-500 text-white' : step === 4 ? 'bg-[#415ae6] text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {isSubmitted ? <IoCheckmarkCircle className="w-6 h-6" /> : '4'}
              </div>
              <div>
                <p className={`font-bold text-sm ${step === 4 ? 'text-slate-900' : 'text-slate-500'}`}>
                  Review & Submit
                </p>
                {step === 4 && (
                  <p className="text-[11px] font-bold text-[#415ae6] mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#415ae6] animate-ping" />
                    • In Progress
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* OVERALL PROGRESS BAR */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1.5">
              <span>Overall Progress</span>
              <span className="text-[#415ae6]">{calculateProgress()}</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#415ae6] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: calculateProgress() }}
              />
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between bg-white min-h-[420px]">
          
          {isSubmitted ? (
            <div className="my-auto text-center py-8 animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl shadow-inner">
                <IoCheckmarkCircle />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Application Submitted!</h3>
              <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto mb-4 leading-relaxed">
                Thank you for applying with CashMela. Our team is processing your details and will present you with the lowest interest offers shortly.
              </p>

              {/* 10-Second Countdown Badge */}
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 py-2 px-4 rounded-full border border-blue-100 shadow-sm animate-pulse">
                <IoTimeOutline className="text-base text-blue-600" />
                <span>Redirecting to Home in <span className="text-sm font-black text-blue-800">{redirectCountdown}s</span></span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/"
                  className="w-full sm:w-auto py-3.5 px-8 bg-[#1E40AF] hover:bg-[#1e3a8a] active:scale-95 text-white font-bold rounded-full shadow-lg transition-transform text-sm text-center"
                >
                  Return to Home Now
                </a>
                {onClose && (
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-all text-sm"
                  >
                    Close Window
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              
              {/* ── STEP 1: BASIC DETAILS ── */}
              {step === 1 && (
                <form autoComplete="off" data-form-type="other" onSubmit={(e) => e.preventDefault()} className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Basic Details</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Starting @9.99%</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name (as per ID) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.fullName ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500 font-semibold mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number (10 digits) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="mobileNumber"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.mobileNumber ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.mobileNumber && <p className="text-xs text-red-500 font-semibold mt-1">{errors.mobileNumber}</p>}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        placeholder="e.g. rahul@example.com"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.emailAddress ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.emailAddress && <p className="text-xs text-red-500 font-semibold mt-1">{errors.emailAddress}</p>}
                    </div>

                    {/* Current Pincode */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        maxLength={6}
                        placeholder="e.g. 110001"
                        value={formData.pincode}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.pincode ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.pincode && <p className="text-xs text-red-500 font-semibold mt-1">{errors.pincode}</p>}
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="dateOfBirth"
                          autoComplete="new-password"
                          data-lpignore="true"
                          data-form-type="other"
                          maxLength={10}
                          placeholder="DD-MM-YYYY"
                          value={formData.dateOfBirth}
                          onChange={handleDateChange}
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all pr-12 ${
                            errors.dateOfBirth ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                          }`}
                        />
                        
                        {/* Hidden native HTML5 date input picker */}
                        <input
                          type="date"
                          id="nativeDobPicker"
                          className="sr-only"
                          onChange={(e) => {
                            if (e.target.value) {
                              const [yyyy, mm, dd] = e.target.value.split('-');
                              setFormData(prev => ({ ...prev, dateOfBirth: `${dd}-${mm}-${yyyy}` }));
                              if (errors.dateOfBirth) setErrors(prev => ({ ...prev, dateOfBirth: '' }));
                            }
                          }}
                        />

                        {/* Interactive Calendar Icon button */}
                        <button
                          type="button"
                          onClick={() => {
                            const picker = document.getElementById('nativeDobPicker');
                            if (picker && typeof picker.showPicker === 'function') {
                              picker.showPicker();
                            } else if (picker) {
                              picker.click();
                            }
                          }}
                          title="Pick date from calendar"
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-[#415ae6] hover:bg-blue-50 rounded-lg transition-all text-xl"
                        >
                          <IoCalendarOutline />
                        </button>
                      </div>
                      {errors.dateOfBirth && <p className="text-xs text-red-500 font-semibold mt-1">{errors.dateOfBirth}</p>}
                    </div>

                    {/* City of Residence */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City of Residence <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold outline-none bg-white focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50 transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select your city</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Pune">Pune</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Kanpur">Kanpur</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Indore">Indore</option>
                        <option value="Thane">Thane</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                        <option value="Patna">Patna</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Ludhiana">Ludhiana</option>
                        <option value="Agra">Agra</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Meerut">Meerut</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Srinagar">Srinagar</option>
                        <option value="Aurangabad">Aurangabad</option>
                        <option value="Dhanbad">Dhanbad</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="Navi Mumbai">Navi Mumbai</option>
                        <option value="Allahabad">Allahabad</option>
                        <option value="Ranchi">Ranchi</option>
                        <option value="Howrah">Howrah</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Jabalpur">Jabalpur</option>
                        <option value="Gwalior">Gwalior</option>
                        <option value="Vijayawada">Vijayawada</option>
                        <option value="Jodhpur">Jodhpur</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Kota">Kota</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Guwahati">Guwahati</option>
                        <option value="Solapur">Solapur</option>
                        <option value="Tiruchirappalli">Tiruchirappalli</option>
                        <option value="Bareilly">Bareilly</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Tiruppur">Tiruppur</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Aligarh">Aligarh</option>
                        <option value="Jalandhar">Jalandhar</option>
                        <option value="Bhubaneswar">Bhubaneswar</option>
                        <option value="Salem">Salem</option>
                        <option value="Warangal">Warangal</option>
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Guntur">Guntur</option>
                        <option value="Bhiwandi">Bhiwandi</option>
                        <option value="Saharanpur">Saharanpur</option>
                        <option value="Gorakhpur">Gorakhpur</option>
                        <option value="Bikaner">Bikaner</option>
                        <option value="Amravati">Amravati</option>
                        <option value="Noida">Noida</option>
                        <option value="Jamshedpur">Jamshedpur</option>
                        <option value="Bhilai">Bhilai</option>
                        <option value="Cuttack">Cuttack</option>
                        <option value="Firozabad">Firozabad</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Nellore">Nellore</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                        <option value="Dehradun">Dehradun</option>
                        <option value="Durgapur">Durgapur</option>
                        <option value="Asansol">Asansol</option>
                        <option value="Rourkela">Rourkela</option>
                        <option value="Nanded">Nanded</option>
                        <option value="Kolhapur">Kolhapur</option>
                        <option value="Ajmer">Ajmer</option>
                        <option value="Akola">Akola</option>
                        <option value="Gulbarga">Gulbarga</option>
                        <option value="Jamnagar">Jamnagar</option>
                        <option value="Ujjain">Ujjain</option>
                        <option value="Siliguri">Siliguri</option>
                        <option value="Jhansi">Jhansi</option>
                        <option value="Ulhasnagar">Ulhasnagar</option>
                        <option value="Jammu">Jammu</option>
                        <option value="Mangalore">Mangalore</option>
                        <option value="Erode">Erode</option>
                        <option value="Belgaum">Belgaum</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Malegaon">Malegaon</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Jalgaon">Jalgaon</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Davanagere">Davanagere</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Kurnool">Kurnool</option>
                        <option value="Rajahmundry">Rajahmundry</option>
                        <option value="Bokaro">Bokaro</option>
                        <option value="Bellary">Bellary</option>
                        <option value="Patiala">Patiala</option>
                        <option value="Agartala">Agartala</option>
                        <option value="Bhagalpur">Bhagalpur</option>
                        <option value="Muzaffarnagar">Muzaffarnagar</option>
                        <option value="Latur">Latur</option>
                        <option value="Dhule">Dhule</option>
                        <option value="Tirupati">Tirupati</option>
                        <option value="Rohtak">Rohtak</option>
                        <option value="Korba">Korba</option>
                        <option value="Bhilwara">Bhilwara</option>
                        <option value="Berhampur">Berhampur</option>
                        <option value="Muzaffarpur">Muzaffarpur</option>
                        <option value="Ahmednagar">Ahmednagar</option>
                        <option value="Mathura">Mathura</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Other City">Other City</option>
                      </select>
                      {errors.city && <p className="text-xs text-red-500 font-semibold mt-1">{errors.city}</p>}
                    </div>

                    {/* PAN Number */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        PAN Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="panNumber"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        maxLength={10}
                        placeholder="e.g. AYRPP0656F"
                        value={formData.panNumber}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold tracking-wider outline-none uppercase transition-all ${
                          errors.panNumber ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.panNumber && <p className="text-xs text-red-500 font-semibold mt-1">{errors.panNumber}</p>}
                    </div>

                  </div>
                </form>
              )}

              {/* ── STEP 2: EMPLOYMENT INFO ── */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Employment Info</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Starting @9.99%</p>
                  </div>

                  {/* Employment Status Selection Card */}
                  <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-100 space-y-3">
                    <p className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      Employment Type <span className="text-red-500">*</span>
                    </p>
                    <p className="text-xs font-semibold text-slate-600 mb-3">Select Your Employment Status *</p>

                    <div className="space-y-2.5">
                      <label 
                        onClick={() => setFormData(prev => ({ ...prev, employmentStatus: 'Salaried Employee' }))}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.employmentStatus === 'Salaried Employee' 
                            ? 'bg-white border-[#415ae6] shadow-sm text-slate-900' 
                            : 'bg-white/60 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="employmentStatus" 
                          checked={formData.employmentStatus === 'Salaried Employee'} 
                          onChange={() => {}}
                          className="w-4 h-4 text-[#415ae6] accent-[#415ae6]"
                        />
                        <span className="text-sm font-bold">Salaried Employee</span>
                      </label>

                      <label 
                        onClick={() => setFormData(prev => ({ ...prev, employmentStatus: 'Self-Employed' }))}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.employmentStatus === 'Self-Employed' 
                            ? 'bg-white border-[#415ae6] shadow-sm text-slate-900' 
                            : 'bg-white/60 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="employmentStatus" 
                          checked={formData.employmentStatus === 'Self-Employed'} 
                          onChange={() => {}}
                          className="w-4 h-4 text-[#415ae6] accent-[#415ae6]"
                        />
                        <span className="text-sm font-bold">Self-Employed (Business Owner, Professional, Freelancer)</span>
                      </label>
                    </div>
                  </div>

                  {/* Employment Details Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    
                    {/* Monthly/Annual Net Income */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Monthly Net Income (₹) for Salaried / Annual Net Income (₹) for Self-Employed <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="netIncome"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        placeholder="e.g. 850000"
                        value={formData.netIncome}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.netIncome ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.netIncome && <p className="text-xs text-red-500 font-semibold mt-1">{errors.netIncome}</p>}
                    </div>

                    {/* Employer Name / Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Employer Name / Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        placeholder="e.g. ABC Tech Solutions"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.companyName ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.companyName && <p className="text-xs text-red-500 font-semibold mt-1">{errors.companyName}</p>}
                    </div>

                    {/* Total Existing Monthly EMI */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Total Existing Monthly EMI (₹) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="existingEmi"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        placeholder="e.g. 15000"
                        value={formData.existingEmi}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.existingEmi ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.existingEmi && <p className="text-xs text-red-500 font-semibold mt-1">{errors.existingEmi}</p>}
                    </div>

                  </div>
                </div>
              )}

              {/* ── STEP 3: LOAN REQUIREMENT ── */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Loan Requirement</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Starting @9.99%</p>
                  </div>

                  {/* Informational Blue Box */}
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-3 text-slate-700 text-xs md:text-sm font-semibold">
                    <IoInformationCircleOutline className="text-2xl text-[#415ae6] shrink-0" />
                    <span>Specify the funds you need and the timeline for repayment.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    
                    {/* Required Loan Amount */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Required Loan Amount (₹) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="loanAmount"
                        autoComplete="new-password"
                        data-lpignore="true"
                        data-form-type="other"
                        placeholder="e.g. 5000000"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none transition-all ${
                          errors.loanAmount ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50'
                        }`}
                      />
                      {errors.loanAmount && <p className="text-xs text-red-500 font-semibold mt-1">{errors.loanAmount}</p>}
                    </div>

                    {/* Purpose of Loan */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Purpose of Loan <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="loanPurpose"
                        value={formData.loanPurpose}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold outline-none bg-white focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50 transition-all cursor-pointer"
                      >
                        <option value="Debt Consolidation">Debt Consolidation</option>
                        <option value="Personal Expenses">Personal Expenses</option>
                        <option value="Business Expansion">Business Expansion</option>
                        <option value="Working Capital">Working Capital</option>
                        <option value="Home Renovation">Home Renovation</option>
                        <option value="Medical Emergency">Medical Emergency</option>
                        <option value="Travel / Wedding">Travel / Wedding</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.loanPurpose && <p className="text-xs text-red-500 font-semibold mt-1">{errors.loanPurpose}</p>}
                    </div>

                    {/* Desired Tenure (Years) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Desired Tenure (Years) <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="desiredTenure"
                        value={formData.desiredTenure}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none bg-white focus:border-[#415ae6] focus:ring-2 focus:ring-blue-50 transition-all cursor-pointer ${
                          errors.desiredTenure ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300'
                        }`}
                      >
                        <option value="1 Year">1 Year (12 Months)</option>
                        <option value="2 Years">2 Years (24 Months)</option>
                        <option value="3 Years">3 Years (36 Months)</option>
                        <option value="4 Years">4 Years (48 Months)</option>
                        <option value="5 Years">5 Years (60 Months)</option>
                        <option value="7 Years">7 Years (84 Months)</option>
                        <option value="10 Years">10 Years (120 Months)</option>
                      </select>
                      {errors.desiredTenure && <p className="text-xs text-red-500 font-semibold mt-1">{errors.desiredTenure}</p>}
                    </div>

                  </div>
                </div>
              )}

              {/* ── STEP 4: REVIEW & SUBMIT ── */}
              {step === 4 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Review & Submit</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Double check your application summary before final submission.</p>
                  </div>

                  {/* Summary Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-200">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Full Name</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800 truncate">{formData.fullName || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Mobile Number</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">{formData.mobileNumber || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Email</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800 truncate">{formData.emailAddress || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Pincode</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">{formData.pincode || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">DOB</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">{formData.dateOfBirth || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">City</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">{formData.city || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">PAN</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800 uppercase">
                        {formData.panNumber ? `${formData.panNumber.slice(0, 4)}***${formData.panNumber.slice(-1)}` : '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Employment</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">{formData.employmentStatus}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Net Income</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">
                        ₹{Number(formData.netIncome || 0).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Employer</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800 truncate">{formData.companyName || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Existing EMI</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">
                        ₹{Number(formData.existingEmi || 0).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Loan Amount</p>
                      <p className="text-xs md:text-sm font-extrabold text-[#415ae6]">
                        ₹{Number(formData.loanAmount || 0).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Desired Tenure</p>
                      <p className="text-xs md:text-sm font-extrabold text-emerald-600">{formData.desiredTenure || '—'}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Purpose</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">{formData.loanPurpose}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Existing EMI</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">
                        ₹{Number(formData.existingEmi || 0).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Loan Amount</p>
                      <p className="text-xs md:text-sm font-extrabold text-[#415ae6]">
                        ₹{Number(formData.loanAmount || 0).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="col-span-2 sm:col-span-3">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Purpose</p>
                      <p className="text-xs md:text-sm font-extrabold text-slate-800">{formData.loanPurpose}</p>
                    </div>
                  </div>

                  {/* Next Steps Banner */}
                  <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 flex items-start gap-3">
                    <IoInformationCircleOutline className="text-xl text-[#415ae6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 mb-0.5">Next Steps</p>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                        1. Team reviews in 2-4 hours • 2. Updates via SMS/Email • 3. Best offers shared
                      </p>
                    </div>
                  </div>

                  {/* Confirmation Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 w-4 h-4 text-[#415ae6] rounded accent-[#415ae6]"
                      />
                      <span>
                        I confirm all information is accurate and agree to <a href="/terms-and-conditions" className="text-[#415ae6] underline font-bold">Terms</a> & <a href="/privacy-policy" className="text-[#415ae6] underline font-bold">Privacy Policy</a>. I authorize CashMela to share my data with financial institutions.
                      </span>
                    </label>
                    {errors.agreed && <p className="text-xs text-red-500 font-bold mt-1.5">{errors.agreed}</p>}
                    {errors.submit && <p className="text-xs text-red-500 font-bold mt-1.5">{errors.submit}</p>}
                  </div>

                </div>
              )}

            </div>
          )}

          {/* ── BOTTOM FOOTER NAVIGATION BAR ── */}
          {!isSubmitted && (
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Field count & stopwatch timer */}
              <div className="text-xs text-slate-500 font-semibold flex items-center gap-3">
                <span className="font-bold text-slate-800">Step {step} ({getFieldsCount()}) of 4</span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1">
                  <IoTimeOutline className="text-slate-400 text-sm" />
                  Time elapsed: {formatElapsedTime(elapsedSeconds)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="py-3 px-6 border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-full text-sm transition-all flex items-center justify-center gap-1.5 focus:outline-none"
                  >
                    <IoArrowBackOutline /> Back
                  </button>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 sm:flex-none py-3 px-8 bg-[#1E40AF] hover:bg-[#1e3a8a] active:scale-95 text-white font-bold rounded-full shadow-lg transition-transform text-sm text-center"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmitFinal}
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none py-3.5 px-8 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold rounded-full shadow-lg transition-transform text-sm text-center disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                )}
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );

  if (isPageMode) {
    return <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center">{modalContent}</div>;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full flex items-center justify-center"
        >
          {modalContent}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
