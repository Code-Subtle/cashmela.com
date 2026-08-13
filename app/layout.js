import { Inter, Manrope } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' });

export const metadata = {
  // Core Meta Tags
  title: {
    default: "CashMela — Compare Personal Loans & Debt Consolidation Offers | India",
    template: "%s | CashMela"
  },
  description: "CashMela helps Indian borrowers compare personal loan and debt consolidation offers from RBI-regulated lenders. Reduce EMI stress, consolidate debts, and borrow smarter.",
  keywords: [
    "CashMela", "debt consolidation India", "consolidate EMIs", "personal loan comparison",
    "business loan", "reduce EMI", "low interest personal loan", "lower interest rate",
    "combine multiple loans", "one EMI payment", "debt freedom", "EMI calculator",
    "loan eligibility", "personal loan consolidation", "fintech India"
  ],
  authors: [{ name: "Vitthal Korvan", url: "https://cashmela.com/about" }],
  creator: "Vitthal Korvan",
  publisher: "CashMela",

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Base URL
  metadataBase: new URL("https://cashmela.com"),
  alternates: {
    canonical: "./",
  },

  // Open Graph
  openGraph: {
    title: "CashMela — Compare Personal Loans & Debt Consolidation Offers",
    description: "Reduce multiple high-interest EMIs into one smarter repayment plan. Compare offers from 40+ RBI-regulated lenders. 100% paperless.",
    url: "https://cashmela.com",
    siteName: "CashMela",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "CashMela — Compare Personal Loans and Debt Consolidation Offers in India",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "CashMela — Consolidate Debts & Compare Personal Loan Offers",
    description: "Compare personal loan and debt consolidation offers from 40+ RBI-regulated lenders. Reduce your EMI stress today.",
    images: ["/logo.webp"],
    creator: "@cash_mela",
    site: "@cash_mela",
  },

  // App & Theme
  applicationName: "CashMela",
  appleWebApp: {
    capable: true,
    title: "CashMela",
    statusBarStyle: "default",
  },

  // Format Detection
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
  },

  // Verification
  verification: {
    google: "google-site-verification-placeholder",
  },

  // Icons
  icons: {
    icon: "/favicon-white.webp",
    apple: "/favicon-white.webp",
  },

  // Category
  category: "Finance",

  // Other
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
    "author": "Vitthal Korvan",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Master Structured Data (Organization + FinancialService + WebSite + FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://cashmela.com/#organization",
        "name": "CashMela",
        "legalName": "CashMela Technologies",
        "url": "https://cashmela.com",
        "description": "CashMela helps Indian borrowers compare personal loan and debt consolidation offers from RBI-regulated lenders.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cashmela.com/logo.webp",
          "width": 160,
          "height": 50
        },
        "priceRange": "₹",
        "sameAs": [
          "https://www.youtube.com/@CashMela",
          "https://x.com/cash_mela",
          "https://www.instagram.com/cashmela_finance/",
          "https://www.linkedin.com/company/cashmela/",
          "https://www.facebook.com/people/CashMelacom/61583636349764/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-808-008-0114",
          "contactType": "customer service",
          "email": "info@cashmela.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://cashmela.com/#website",
        "url": "https://cashmela.com",
        "name": "CashMela",
        "description": "Compare personal loan and debt consolidation offers from RBI-regulated lenders. Reduce EMI stress and borrow smarter.",
        "publisher": { "@id": "https://cashmela.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://cashmela.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I apply for a loan through CashMela?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply select the type of loan you need, fill out a quick application form, and our team will match you with the best offers from our 40+ lending partners. The entire process is 100% paperless and takes just minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Is my personal information safe with CashMela?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We use bank-grade 256-bit SSL encryption to protect your data. Your information is shared only with RBI-regulated lenders with your explicit consent."
            }
          },
          {
            "@type": "Question",
            "name": "How long does loan approval take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With our digital-first approach, most loan applications receive in-principle approval within minutes. Final disbursement typically happens within 24-72 hours after document verification."
            }
          },
          {
            "@type": "Question",
            "name": "Does checking my loan eligibility affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No! Our eligibility check is a soft inquiry that does not impact your credit score. You can check your eligibility multiple times without any negative effect."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://unicons.iconscout.com" />
        <link rel="dns-prefetch" href="https://unicons.iconscout.com" />
        <link 
          rel="stylesheet" 
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" 
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
