import React from 'react';

/**
 * Premium, ultra-elegant vector icon set for CashMela.
 * Inspired by high-end Iconscout premium 3D/flat vector illustrations.
 * Features:
 *  - Multi-layered SVGs with custom linear and radial gradients.
 *  - Semi-transparent overlays for modern visual depth.
 *  - Built-in Tailwind hover micro-interactions (gears rotating, charts expanding, arrows shifting, bolts pulsing).
 *  - Responsive sizing and color themes.
 */

// Custom hook / helper for common gradients to ensure unique IDs across renders
const GradientDefs = ({ id, colorStart, colorEnd, radial = false }) => {
  if (radial) {
    return (
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor={colorStart} />
          <stop offset="100%" stopColor={colorEnd} />
        </radialGradient>
      </defs>
    );
  }
  return (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={colorStart} />
        <stop offset="100%" stopColor={colorEnd} />
      </linearGradient>
    </defs>
  );
};

// ==========================================
// 1. TRADITIONAL LENDING PAIN POINTS (Coral/Red Sunset Theme)
// ==========================================

export const HighInterestIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    {/* Glow background */}
    <div className="absolute inset-0 bg-red-500/10 rounded-full blur-md group-hover:bg-red-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-high-int-1" colorStart="#ef4444" colorEnd="#f43f5e" />
      <GradientDefs id="grad-high-int-bg" colorStart="#fee2e2" colorEnd="#fecdd3" radial />
      {/* Background circle badge */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-high-int-bg)" />
      {/* Percentage Sign with red arrow pointing UP */}
      <circle cx="22" cy="22" r="5" stroke="url(#grad-high-int-1)" strokeWidth="3" />
      <circle cx="42" cy="42" r="5" stroke="url(#grad-high-int-1)" strokeWidth="3" />
      <path d="M44 20L20 44" stroke="url(#grad-high-int-1)" strokeWidth="4" strokeLinecap="round" />
      {/* Rising Arrow indicating soaring rates */}
      <path 
        d="M34 14H46V26" 
        stroke="#ef4444" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
      <path 
        d="M24 36L44 16" 
        stroke="#ef4444" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </svg>
  </div>
);

export const SlowProcessIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-md group-hover:bg-orange-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-slow-proc" colorStart="#f97316" colorEnd="#ef4444" />
      <GradientDefs id="grad-slow-bg" colorStart="#ffedd5" colorEnd="#fed7aa" radial />
      {/* Background Badge */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-slow-bg)" />
      {/* Hourglass or Clock face */}
      <circle cx="32" cy="32" r="18" stroke="url(#grad-slow-proc)" strokeWidth="3.5" />
      {/* Slow clock hand that ticks backward/slowly on hover */}
      <line 
        x1="32" y1="32" x2="32" y2="18" 
        stroke="url(#grad-slow-proc)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        className="origin-center transition-transform duration-700 group-hover:rotate-[45deg]"
      />
      <line 
        x1="32" y1="32" x2="42" y2="32" 
        stroke="#ea580c" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
      {/* Small snail/slow trails on the left */}
      <path d="M10 24H14M8 32H16" stroke="#f97316" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    </svg>
  </div>
);

export const HiddenFeesIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-red-500/10 rounded-full blur-md group-hover:bg-red-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-hidden-1" colorStart="#dc2626" colorEnd="#b91c1c" />
      <GradientDefs id="grad-hidden-bg" colorStart="#ffe4e6" colorEnd="#fecdd3" radial />
      {/* Background badge */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-hidden-bg)" />
      {/* Document fold shape */}
      <path d="M18 14H40L48 22V50H18V14Z" stroke="url(#grad-hidden-1)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Lines of text */}
      <line x1="24" y1="24" x2="34" y2="24" stroke="url(#grad-hidden-1)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="32" x2="42" y2="32" stroke="url(#grad-hidden-1)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Hidden magnifying glass finding exclamation mark on hover */}
      <circle 
        cx="38" cy="40" r="7" 
        stroke="#b91c1c" 
        strokeWidth="3" 
        fill="#fecdd3" 
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <line 
        x1="43" y1="45" x2="48" y2="50" 
        stroke="#b91c1c" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
      />
      {/* Warning cross inside magnifying glass */}
      <path d="M36 38L40 42M40 38L36 42" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// ==========================================
// 2. CASHMELA SOLUTIONS (Emerald/Mint Green Theme)
// ==========================================

export const LowInterestIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-low-int" colorStart="#10b981" colorEnd="#059669" />
      <GradientDefs id="grad-low-bg" colorStart="#d1fae5" colorEnd="#a7f3d0" radial />
      {/* Background circles */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-low-bg)" />
      {/* Low Rate Arrow pointing DOWN */}
      <path 
        d="M30 46H18V34" 
        stroke="url(#grad-low-int)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
      />
      <path 
        d="M40 18L20 38" 
        stroke="url(#grad-low-int)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
      />
      {/* Percentage circles */}
      <circle cx="22" cy="22" r="4.5" stroke="#047857" strokeWidth="3" />
      <circle cx="42" cy="42" r="4.5" stroke="#047857" strokeWidth="3" />
      <path d="M42 20L22 40" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

export const FastProcessIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-md group-hover:bg-teal-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-fast-proc" colorStart="#0d9488" colorEnd="#0f766e" />
      <GradientDefs id="grad-fast-bg" colorStart="#ccfbf1" colorEnd="#99f6e4" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-fast-bg)" />
      {/* Lightning bolt flashing in the center */}
      <path 
        d="M38 12L20 34H32L26 52L44 30H32L38 12Z" 
        fill="url(#grad-fast-proc)" 
        className="transition-transform duration-300 group-hover:scale-110 origin-center"
      />
      {/* Action sparkles */}
      <circle cx="46" cy="18" r="2" fill="#0d9488" className="animate-ping" />
      <circle cx="16" cy="46" r="2" fill="#0f766e" className="animate-ping" />
    </svg>
  </div>
);

export const TransparentProcessIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-trans-proc" colorStart="#059669" colorEnd="#047857" />
      <GradientDefs id="grad-trans-bg" colorStart="#e6fffa" colorEnd="#b2f5ea" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-trans-bg)" />
      {/* Shield outline representing safety */}
      <path d="M32 14C37 14 44 16 46 22C46 34 38 44 32 48C26 44 18 34 18 22C20 16 27 14 32 14Z" stroke="url(#grad-trans-proc)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Success checkmark inside shield */}
      <path 
        d="M26 31L30 35L38 25" 
        stroke="#047857" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-all duration-300 group-hover:stroke-[5px]"
      />
    </svg>
  </div>
);

// ==========================================
// 3. CORE PRINCIPLES (Indigo/Blue Gradients)
// ==========================================

export const BorrowerFirstIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md group-hover:bg-indigo-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-borrower" colorStart="#4f46e5" colorEnd="#3730a3" />
      <GradientDefs id="grad-borrower-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-borrower-bg)" />
      {/* Heart shielding person */}
      <path 
        d="M32 46C32 46 48 34 48 24C48 18 43 14 38 14C35 14 33 16 32 18C31 16 29 14 26 14C21 14 16 18 16 24C16 34 32 46 32 46Z" 
        fill="url(#grad-borrower)" 
        className="transition-transform duration-300 group-hover:scale-105 origin-center"
      />
      {/* Person figure embedded in the heart in high-contrast white */}
      <circle cx="32" cy="22" r="4.5" fill="#ffffff" />
      <path d="M25 32C25 28 29 27 32 27C35 27 39 28 39 32V34H25V32Z" fill="#ffffff" />
    </svg>
  </div>
);

export const RadicalTransparencyIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md group-hover:bg-blue-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-transp" colorStart="#2563eb" colorEnd="#1d4ed8" />
      <GradientDefs id="grad-transp-bg" colorStart="#dbeafe" colorEnd="#bfdbfe" radial />
      {/* Background Circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-transp-bg)" />
      {/* Overlapping transparent glassmorphic prism cubes */}
      <rect x="20" y="20" width="18" height="18" rx="3" fill="url(#grad-transp)" fillOpacity="0.8" />
      <rect 
        x="28" y="28" width="18" height="18" rx="3" 
        fill="#1e40af" 
        fillOpacity="0.45" 
        stroke="#2563eb" 
        strokeWidth="2.5" 
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
      />
      {/* Sparkles / Clarity dots */}
      <circle cx="48" cy="18" r="2.5" fill="#2563eb" className="animate-pulse" />
      <circle cx="16" cy="48" r="2" fill="#1e40af" />
    </svg>
  </div>
);

export const TechDrivenIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-tech" colorStart="#059669" colorEnd="#047857" />
      <GradientDefs id="grad-tech-bg" colorStart="#e6fffa" colorEnd="#a7f3d0" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-tech-bg)" />
      {/* Rotating gear representing AI Engine */}
      <g className="origin-center transition-transform duration-[2000ms] group-hover:rotate-180">
        <circle cx="32" cy="32" r="10" stroke="url(#grad-tech)" strokeWidth="4.5" />
        {/* Gear Teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line 
            key={angle}
            x1="32" y1="18" x2="32" y2="24" 
            stroke="url(#grad-tech)" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            transform={`rotate(${angle} 32 32)`}
          />
        ))}
      </g>
      {/* Digital node connection lines in background */}
      <circle cx="18" cy="18" r="3" fill="#047857" />
      <line x1="18" y1="18" x2="26" y2="26" stroke="#047857" strokeWidth="1.5" />
      <circle cx="46" cy="46" r="3" fill="#047857" />
      <line x1="46" y1="46" x2="38" y2="38" stroke="#047857" strokeWidth="1.5" />
    </svg>
  </div>
);

// ==========================================
// 4. CORE VALUES (Rich / Dynamic Themes)
// ==========================================

export const IntegrityIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md group-hover:bg-blue-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-integrity" colorStart="#2563eb" colorEnd="#7c3aed" />
      <GradientDefs id="grad-integrity-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-integrity-bg)" />
      {/* Target board with multi-layered concentric circles */}
      <circle cx="32" cy="32" r="18" stroke="url(#grad-integrity)" strokeWidth="3" />
      <circle cx="32" cy="32" r="10" stroke="url(#grad-integrity)" strokeWidth="3" />
      {/* Arrow hitting exactly the bullseye, moving slightly on hover */}
      <g className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1">
        <line x1="46" y1="18" x2="32" y2="32" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M30 34L32 32L34 30" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" />
        {/* Fletching */}
        <path d="M46 18L50 14M44 20L48 16" stroke="#f97316" strokeWidth="2.5" />
      </g>
    </svg>
  </div>
);

export const InnovationIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md group-hover:bg-indigo-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-innov" colorStart="#4f46e5" colorEnd="#a855f7" />
      <GradientDefs id="grad-innov-bg" colorStart="#f3e8ff" colorEnd="#e9d5ff" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-innov-bg)" />
      {/* Rocket ship blasting upwards */}
      <g className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        {/* Rocket body */}
        <path d="M38 18C38 18 36 28 30 34C28 36 24 38 24 38C24 38 26 34 28 32C34 26 44 24 44 24" stroke="url(#grad-innov)" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 32L24 38L18 38C19 35 21 33 24 32" stroke="url(#grad-innov)" strokeWidth="3" />
        <path d="M34 26L38 20L38 14C35 15 33 17 32 20" stroke="url(#grad-innov)" strokeWidth="3" />
        {/* Propulsion fire */}
        <path d="M24 38C22 41 21 44 22 46C24 47 27 46 30 44" fill="#f97316" opacity="0.8" />
        <path d="M23 39C21 41 20 43 21 45C22 46 24 45 26 43" fill="#fbbf24" />
      </g>
      {/* Small sparkles */}
      <circle cx="48" cy="14" r="2.5" fill="#a855f7" className="animate-ping" />
    </svg>
  </div>
);

export const SecurityIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-sec" colorStart="#059669" colorEnd="#0e7490" />
      <GradientDefs id="grad-sec-bg" colorStart="#ecfdf5" colorEnd="#d1fae5" radial />
      {/* Background badge */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-sec-bg)" />
      {/* Secured Shield */}
      <path 
        d="M32 14C37 14 45 16 47 23C47 35 38 45 32 49C26 45 17 35 17 23C19 16 27 14 32 14Z" 
        fill="url(#grad-sec)" 
        className="transition-transform duration-300 group-hover:scale-105 origin-center"
      />
      {/* Intricate keyhole or checkmark inside shield */}
      <path d="M27 30L31 34L37 24" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const CustomerCareIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-md group-hover:bg-rose-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-care" colorStart="#f43f5e" colorEnd="#e11d48" />
      <GradientDefs id="grad-care-bg" colorStart="#ffe4e6" colorEnd="#fecdd3" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-care-bg)" />
      {/* Warm Heart held in hands */}
      <path 
        d="M32 44C32 44 46 33 46 23C46 17 41.5 13 36.5 13C33.5 13 32.5 15 32 16.5C31.5 15 30.5 13 27.5 13C22.5 13 18 17 18 23C18 33 32 44 32 44Z" 
        fill="url(#grad-care)" 
        className="transition-transform duration-300 group-hover:scale-110 origin-center"
      />
      {/* Hands holding the heart gently */}
      <path d="M20 42C24 45 28 46 32 46C36 46 40 45 44 42" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

// ==========================================
// 5. IMPACT & METRICS SECTION (Gold & Purple Theme)
// ==========================================

export const EmiSavingsIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-md group-hover:bg-yellow-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-emi" colorStart="#fbbf24" colorEnd="#d97706" />
      <GradientDefs id="grad-emi-bg" colorStart="#fef3c7" colorEnd="#fde68a" radial />
      {/* Background Circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-emi-bg)" />
      {/* Coins Stacked */}
      <rect x="20" y="32" width="24" height="8" rx="4" fill="url(#grad-emi)" stroke="#b45309" strokeWidth="1.5" />
      <rect x="20" y="24" width="24" height="8" rx="4" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
      <rect x="20" y="16" width="24" height="8" rx="4" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
      {/* Downward Savings Arrow overlay */}
      <g className="transition-transform duration-300 group-hover:translate-y-1">
        <path d="M46 16L36 26" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M40 26H46V20" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
);

export const CreditScoreIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-credit" colorStart="#10b981" colorEnd="#047857" />
      <GradientDefs id="grad-credit-bg" colorStart="#d1fae5" colorEnd="#a7f3d0" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-credit-bg)" />
      {/* Graph bars rising */}
      <rect 
        x="18" y="36" width="6" height="12" rx="1.5" 
        fill="#a7f3d0" stroke="url(#grad-credit)" strokeWidth="2.5" 
      />
      <rect 
        x="28" y="28" width="6" height="20" rx="1.5" 
        fill="#34d399" stroke="url(#grad-credit)" strokeWidth="2.5" 
        className="transition-all duration-500 group-hover:height-24"
      />
      <rect 
        x="38" y="18" width="6" height="30" rx="1.5" 
        fill="url(#grad-credit)" stroke="#047857" strokeWidth="2.5" 
      />
      {/* Growth Arrow line */}
      <path 
        d="M16 42L26 30L36 20L46 14" 
        stroke="#047857" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
      <path 
        d="M38 14H46V22" 
        stroke="#047857" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </svg>
  </div>
);

export const TimeSavedIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-md group-hover:bg-purple-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-time" colorStart="#8b5cf6" colorEnd="#6d28d9" />
      <GradientDefs id="grad-time-bg" colorStart="#f3e8ff" colorEnd="#e9d5ff" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-time-bg)" />
      {/* Stopwatch shape */}
      <circle cx="32" cy="34" r="16" stroke="url(#grad-time)" strokeWidth="3.5" />
      {/* Clock crown */}
      <rect x="28" y="12" width="8" height="4" fill="url(#grad-time)" rx="1" />
      <circle cx="24" cy="16" r="2.5" fill="url(#grad-time)" />
      {/* Hands running fast on hover */}
      <line 
        x1="32" y1="34" x2="32" y2="24" 
        stroke="#6d28d9" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        className="origin-[32px_34px] transition-transform duration-[1200ms] ease-out group-hover:rotate-[360deg]"
      />
      <line 
        x1="32" y1="34" x2="40" y2="34" 
        stroke="url(#grad-time)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
      {/* Speed lines */}
      <path d="M12 28H8M10 36H6" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
    </svg>
  </div>
);

// ==========================================
// 6. WHY CHOOSE US (Gold/Slate Tech Theme)
// ==========================================

export const BankSecurityIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-slate-900/5 rounded-full blur-md group-hover:bg-indigo-500/10 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-bank-sec" colorStart="#1e293b" colorEnd="#0f172a" />
      <GradientDefs id="grad-bank-bg" colorStart="#f1f5f9" colorEnd="#cbd5e1" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-bank-bg)" />
      {/* Large Premium Shield */}
      <path 
        d="M32 12C38 12 46 14 48 21C48 33 39 43 32 47C25 43 16 33 16 21C18 14 26 12 32 12Z" 
        stroke="url(#grad-bank-sec)" 
        strokeWidth="3.5" 
        strokeLinejoin="round" 
        fill="#f8fafc"
      />
      {/* Internal Security Lock, glowing green on hover */}
      <rect x="25" y="27" width="14" height="11" rx="2" fill="url(#grad-bank-sec)" />
      <path 
        d="M28 27V23C28 20.79 29.79 19 32 19C34.21 19 36 20.79 36 23V27" 
        stroke="url(#grad-bank-sec)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      {/* Green spark inside lock on hover */}
      <circle cx="32" cy="32.5" r="2.5" fill="#10b981" />
    </svg>
  </div>
);

export const InstantApprovalIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-slate-900/5 rounded-full blur-md group-hover:bg-indigo-500/10 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-inst-app" colorStart="#1e293b" colorEnd="#0f172a" />
      <GradientDefs id="grad-inst-bg" colorStart="#f1f5f9" colorEnd="#cbd5e1" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-inst-bg)" />
      {/* Digital clock badge */}
      <circle cx="32" cy="32" r="17" stroke="url(#grad-inst-app)" strokeWidth="3.5" />
      {/* Hour/Minute hands spinning fast on hover */}
      <line 
        x1="32" y1="32" x2="32" y2="21" 
        stroke="url(#grad-inst-app)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        className="origin-center transition-transform duration-1000 group-hover:rotate-[360deg]"
      />
      <line x1="32" y1="32" x2="41" y2="32" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
      {/* Glowing checkmark on bottom right indicating approval */}
      <circle 
        cx="44" cy="44" r="8" 
        fill="#10b981" 
        stroke="#ffffff" 
        strokeWidth="2" 
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <path d="M41 44L43 46L47 42" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const DedicatedAdvisorIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-slate-900/5 rounded-full blur-md group-hover:bg-indigo-500/10 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-adv" colorStart="#1e293b" colorEnd="#0f172a" />
      <GradientDefs id="grad-adv-bg" colorStart="#f1f5f9" colorEnd="#cbd5e1" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-adv-bg)" />
      {/* Operator avatar */}
      <circle 
        cx="32" cy="24" r="7" 
        stroke="url(#grad-adv)" 
        strokeWidth="3.5" 
        className="transition-transform duration-300 group-hover:scale-105 origin-center"
      />
      <path d="M19 44C19 36 24 35 32 35C40 35 45 36 45 44" stroke="url(#grad-adv)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Interactive sparkling crown/star next to advisor */}
      <path 
        d="M48 20L49 22L51 22L49 23L50 25L48 24L46 25L47 23L45 22L47 22Z" 
        fill="#fbbf24" 
        className="animate-pulse"
      />
    </svg>
  </div>
);

export const LowerEmiIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-slate-900/5 rounded-full blur-md group-hover:bg-indigo-500/10 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-low-emi" colorStart="#1e293b" colorEnd="#0f172a" />
      <GradientDefs id="grad-low-emi-bg" colorStart="#f1f5f9" colorEnd="#cbd5e1" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-low-emi-bg)" />
      {/* Decreasing lines showing savings */}
      <path 
        d="M20 18L32 30L44 20" 
        stroke="url(#grad-low-emi)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Lowering arrow pointing down */}
      <path 
        d="M32 30V44M27 39L32 44L37 39" 
        stroke="#10b981" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-transform duration-300 group-hover:translate-y-1"
      />
    </svg>
  </div>
);

// ==========================================
// 7. HOW IT WORKS SECTION (Interactive Stepper Theme)
// ==========================================

export const TellUsDebtsIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md group-hover:bg-indigo-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-tell-debts" colorStart="#415ae6" colorEnd="#312e81" />
      <GradientDefs id="grad-tell-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      {/* Background Circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-tell-bg)" />
      {/* Digital Document checklist */}
      <rect x="20" y="16" width="24" height="32" rx="3" stroke="url(#grad-tell-debts)" strokeWidth="3.5" fill="#ffffff" />
      {/* Writing Pen moving back and forth on hover */}
      <g className="origin-[38px_24px] transition-transform duration-500 group-hover:rotate-[-10deg]">
        <path d="M46 14L41 19L38 16L43 11L46 14Z" fill="#fbbf24" stroke="url(#grad-tell-debts)" strokeWidth="1.5" />
        <path d="M38 16L32 25L30 29L34 27L41 19" stroke="url(#grad-tell-debts)" strokeWidth="2" strokeLinejoin="round" />
      </g>
      {/* Checklist points */}
      <line x1="25" y1="26" x2="33" y2="26" stroke="#415ae6" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="34" x2="35" y2="34" stroke="#415ae6" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </div>
);

export const BestRateIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md group-hover:bg-indigo-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-best-rate" colorStart="#415ae6" colorEnd="#312e81" />
      <GradientDefs id="grad-best-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-best-bg)" />
      {/* Glowing crystal bulb/lens representing AI Search */}
      <circle cx="30" cy="30" r="12" stroke="url(#grad-best-rate)" strokeWidth="3.5" fill="#ffffff" />
      {/* Magnifying Glass handle moving outwards */}
      <line 
        x1="38.5" y1="38.5" x2="48" y2="48" 
        stroke="url(#grad-best-rate)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
      />
      {/* Star inside search lens representing the "best" rate */}
      <polygon 
        points="30,22 32.5,27 38,27.5 34,31 35.5,36 30,33 24.5,36 26,31 22,27.5 27.5,27" 
        fill="#fbbf24" 
        className="origin-[30px_29px] transition-transform duration-[1000ms] group-hover:rotate-45"
      />
    </svg>
  </div>
);

export const TotalFreedomIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md group-hover:bg-indigo-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-freedom" colorStart="#415ae6" colorEnd="#312e81" />
      <GradientDefs id="grad-freedom-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      {/* Background Circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-freedom-bg)" />
      {/* Broken Chains / Freedom Badge */}
      <path 
        d="M32 14C41.94 14 50 22.06 50 32C50 41.94 41.94 50 32 50C22.06 50 14 41.94 14 32" 
        stroke="url(#grad-freedom)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
      {/* Big smile checkmark */}
      <path 
        d="M22 28L30 36L46 20" 
        stroke="#10b981" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-transform duration-300 group-hover:scale-105 origin-center"
      />
    </svg>
  </div>
);

// ==========================================
// 8. CALCULATORS SECTION (Sky Blue / Coral themes)
// ==========================================

export const PersonalLoanCalcIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-p-calc" colorStart="#0ea5e9" colorEnd="#0284c7" />
      <GradientDefs id="grad-p-calc-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      <circle cx="32" cy="32" r="28" fill="url(#grad-p-calc-bg)" />
      <rect x="18" y="15" width="28" height="34" rx="4" stroke="url(#grad-p-calc)" strokeWidth="3.5" fill="#ffffff" />
      <rect x="22" y="20" width="20" height="8" rx="2" fill="#0ea5e9" />
      <line x1="25" y1="24" x2="33" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="33" r="2" fill="#0284c7" />
      <circle cx="32" cy="33" r="2" fill="#0284c7" />
      <circle cx="40" cy="33" r="2" fill="#0284c7" />
      <circle cx="24" cy="40" r="2" fill="#0284c7" />
      <circle cx="32" cy="40" r="2" fill="#0284c7" />
      <circle cx="40" cy="40" r="2" fill="#ea580c" />
    </svg>
  </div>
);

export const SmartTaxPlannerIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-tax-calc" colorStart="#0ea5e9" colorEnd="#0284c7" />
      <GradientDefs id="grad-tax-calc-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      <circle cx="32" cy="32" r="28" fill="url(#grad-tax-calc-bg)" />
      <path d="M20 16H36L44 24V46C44 47.1 43.1 48 42 48H20C18.9 48 18 47.1 18 46V18C18 16.9 18.9 16 20 16Z" stroke="url(#grad-tax-calc)" strokeWidth="3.5" fill="#ffffff" strokeLinejoin="round" />
      <path d="M26 38L36 26" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="27" cy="28" r="2.5" fill="#ea580c" />
      <circle cx="35" cy="36" r="2.5" fill="#ea580c" />
      <circle cx="40" cy="18" r="3.5" fill="#10b981" className="animate-pulse" />
    </svg>
  </div>
);

export const CibilCheckerIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-cibil" colorStart="#0ea5e9" colorEnd="#0284c7" />
      <GradientDefs id="grad-cibil-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background badge */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-cibil-bg)" />
      {/* Credit Card base */}
      <rect x="16" y="20" width="32" height="24" rx="4" stroke="url(#grad-cibil)" strokeWidth="3.5" fill="#ffffff" />
      {/* Magnetic Strip / Chip */}
      <rect x="22" y="26" width="6" height="5" rx="1" fill="#ea580c" />
      {/* Waves showing live verification on hover */}
      <path 
        d="M36 28C38 28 40 30 40 32C40 34 38 36 36 36" 
        stroke="url(#grad-cibil)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        className="transition-opacity duration-300 group-hover:animate-pulse"
      />
    </svg>
  </div>
);

export const LoanEligibilityIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-elig" colorStart="#0ea5e9" colorEnd="#0284c7" />
      <GradientDefs id="grad-elig-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-elig-bg)" />
      {/* Checklist doc */}
      <rect x="18" y="16" width="28" height="32" rx="3.5" stroke="url(#grad-elig)" strokeWidth="3.5" fill="#ffffff" />
      {/* Elegant checkmark badge popping on hover */}
      <circle 
        cx="40" cy="40" r="8" 
        fill="#10b981" 
        stroke="#ffffff" 
        strokeWidth="2.5" 
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <path d="M37 40L39 42L43 38" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Content lines */}
      <line x1="24" y1="24" x2="34" y2="24" stroke="url(#grad-elig)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="32" x2="30" y2="32" stroke="url(#grad-elig)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </div>
);

export const SipCalcIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-sip" colorStart="#0ea5e9" colorEnd="#0284c7" />
      <GradientDefs id="grad-sip-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-sip-bg)" />
      {/* Compounding bar charts growing on hover */}
      <rect x="20" y="34" width="5" height="12" rx="1" fill="#7dd3fc" stroke="url(#grad-sip)" strokeWidth="2" />
      <rect 
        x="29" y="27" width="5" height="19" rx="1" 
        fill="#38bdf8" stroke="url(#grad-sip)" strokeWidth="2" 
        className="transition-all duration-500 group-hover:height-23"
      />
      <rect 
        x="38" y="18" width="5" height="28" rx="1" 
        fill="url(#grad-sip)" stroke="#0284c7" strokeWidth="2" 
      />
      {/* Ascending arrow line shifting up/right */}
      <path 
        d="M16 42L26 31L36 21L46 16" 
        stroke="#ea580c" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
      <path 
        d="M38 16H46V24" 
        stroke="#ea580c" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </svg>
  </div>
);

export const FdCalcIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-fd" colorStart="#0ea5e9" colorEnd="#0284c7" />
      <GradientDefs id="grad-fd-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-fd-bg)" />
      {/* Secure Bank Safe or Lockbox */}
      <rect x="18" y="20" width="28" height="26" rx="4" stroke="url(#grad-fd)" strokeWidth="3.5" fill="#ffffff" />
      {/* Dynamic spinning dial in the center */}
      <circle 
        cx="32" cy="33" r="7" 
        stroke="url(#grad-fd)" 
        strokeWidth="3" 
        fill="#f1f5f9"
        className="origin-[32px_33px] transition-transform duration-[1500ms] group-hover:rotate-180"
      />
      <line x1="32" y1="26" x2="32" y2="30" stroke="url(#grad-fd)" strokeWidth="2.5" />
    </svg>
  </div>
);

// ==========================================
// 9. CONTACT PAGE & SUPPORT DETAILS (Sky Blue / Deep Tech Gradients)
// ==========================================

export const SupportAgentIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-support" colorStart="#0369a1" colorEnd="#075985" />
      <GradientDefs id="grad-support-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-support-bg)" />
      {/* Operator avatar outline */}
      <circle cx="32" cy="22" r="7" stroke="url(#grad-support)" strokeWidth="3.5" fill="#ffffff" />
      <path d="M19 44C19 36 24 35 32 35C40 35 45 44 45 44" stroke="url(#grad-support)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Headset wraps around the head */}
      <path 
        d="M23 22C23 16 27 13 32 13C37 13 41 16 41 22V26" 
        stroke="#ea580c" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
      {/* Micro-interactive mic element */}
      <path 
        d="M40 26C38 28 35 28 35 28" 
        stroke="#ea580c" 
        strokeWidth="3" 
        strokeLinecap="round" 
        className="origin-[40px_26px] transition-transform duration-300 group-hover:rotate-[-5deg]"
      />
    </svg>
  </div>
);

export const BankPartnersIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-partner" colorStart="#0369a1" colorEnd="#075985" />
      <GradientDefs id="grad-partner-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-partner-bg)" />
      {/* Classic Bank pillars */}
      <path d="M16 46H48M18 46V28M46 46V28" stroke="url(#grad-partner)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M26 46V28M38 46V28" stroke="url(#grad-partner)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Bank Triangular pediment on top */}
      <polygon 
        points="14,24 32,14 50,24" 
        fill="url(#grad-partner)" 
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </svg>
  </div>
);

export const PaperlessProcessIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-paperless" colorStart="#0369a1" colorEnd="#075985" />
      <GradientDefs id="grad-paper-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-paper-bg)" />
      {/* Document layout */}
      <rect x="20" y="16" width="24" height="32" rx="3.5" stroke="url(#grad-paperless)" strokeWidth="3.5" fill="#ffffff" />
      {/* Interactive upward cloud-upload arrow or sparkles */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <path d="M26 36L32 30L38 36" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="32" y1="30" x2="32" y2="42" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

export const InstantMatchIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md group-hover:bg-sky-500/20 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-105">
      <GradientDefs id="grad-match" colorStart="#0369a1" colorEnd="#075985" />
      <GradientDefs id="grad-match-bg" colorStart="#e0f2fe" colorEnd="#bae6fd" radial />
      {/* Background Circle */}
      <circle cx="32" cy="32" r="28" fill="url(#grad-match-bg)" />
      {/* Speedometer arch */}
      <path d="M18 38C18 24.19 29.19 16 43 16" stroke="url(#grad-match)" strokeWidth="4" strokeLinecap="round" />
      <path d="M43 16C44.66 16 46 17.34 46 19C46 20.66 44.66 22 43 22" fill="#ea580c" />
      {/* Pointer Dial shifting high on hover */}
      <line 
        x1="26" y1="36" x2="38" y2="24" 
        stroke="#ea580c" 
        strokeWidth="5.5" 
        strokeLinecap="round" 
        className="origin-[26px_36px] transition-transform duration-500 group-hover:rotate-[35deg]"
      />
    </svg>
  </div>
);

// --- STATIC INFO CARD UTILS (PHONE, MAIL, LOCATION) ---

export const PhoneIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/15 rounded-full blur-md group-hover:bg-indigo-500/25 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-110">
      <GradientDefs id="grad-phone" colorStart="#2563eb" colorEnd="#1d4ed8" />
      <GradientDefs id="grad-phone-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      <circle cx="32" cy="32" r="28" fill="url(#grad-phone-bg)" />
      {/* Telephone handset tilting on hover */}
      <path 
        d="M20 23C20 38 26 44 41 44C43 44 45 42 45 40V34L39 32L35 36C28 34 26 32 24 29L28 25L26 19H20C20 21 20 23 20 23Z" 
        fill="url(#grad-phone)" 
        className="origin-center transition-transform duration-300 group-hover:rotate-12"
      />
    </svg>
  </div>
);

export const EmailIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/15 rounded-full blur-md group-hover:bg-indigo-500/25 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-110">
      <GradientDefs id="grad-mail" colorStart="#2563eb" colorEnd="#1d4ed8" />
      <GradientDefs id="grad-mail-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      <circle cx="32" cy="32" r="28" fill="url(#grad-mail-bg)" />
      {/* Envelope opening up on hover */}
      <rect x="18" y="22" width="28" height="22" rx="3.5" stroke="url(#grad-mail)" strokeWidth="3.5" fill="#ffffff" />
      <path 
        d="M18 24L32 34L46 24" 
        stroke="url(#grad-mail)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </svg>
  </div>
);

export const LocationIcon = ({ className = "w-12 h-12" }) => (
  <div className={`relative group ${className} flex items-center justify-center`}>
    <div className="absolute inset-0 bg-indigo-500/15 rounded-full blur-md group-hover:bg-indigo-500/25 transition-all duration-300" />
    <svg viewBox="0 0 64 64" fill="none" className="relative z-10 w-full h-full transition-transform duration-300 group-hover:scale-110">
      <GradientDefs id="grad-loc" colorStart="#2563eb" colorEnd="#1d4ed8" />
      <GradientDefs id="grad-loc-bg" colorStart="#e0e7ff" colorEnd="#c7d2fe" radial />
      <circle cx="32" cy="32" r="28" fill="url(#grad-loc-bg)" />
      {/* Map Pin Dropping/Bouncing on hover */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <path d="M32 14C23.72 14 17 20.72 17 29C17 38 32 49 32 49C32 49 47 38 47 29C47 20.72 40.28 14 32 14Z" fill="url(#grad-loc)" />
        <circle cx="32" cy="27" r="4.5" fill="#ffffff" />
      </g>
      {/* Base Ripple */}
      <ellipse cx="32" cy="50" rx="6" ry="1.5" fill="#1d4ed8" opacity="0.3" className="animate-pulse" />
    </svg>
  </div>
);
