"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineLightningBolt,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import FadeIn from "../FadeIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation Columns
  const footerLinks = {
    loans: {
      title: "Loans",
      links: [
        { name: "Personal Loan", href: "/personal-loan" },
        { name: "Debt Consolidation", href: "/debt-consolidation" },
        { name: "Business Loan", href: "/business-loan" },
        { name: "Overdraft Loan", href: "/overdraft" },
      ],
    },
    calculators: {
      title: "Calculators",
      links: [
        {
          name: "Personal Loan Calc",
          href: "/calculators/personal-loan-calculator",
        },
        {
          name: "Smart Tax Planner",
          href: "/calculators/smart-tax-planner",
        },
        {
          name: "Loan Eligibility",
          href: "/calculators/loan-eligibility-calculator",
        },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blogs" },
        { name: "Our Team", href: "/authors" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact" },
        { name: "About Us", href: "/about" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/people/CashMelacom/61583636349764/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/cashmela_finance/",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@CashMela",
    },
    { name: "X", icon: FaXTwitter, href: "https://x.com/cash_mela" },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/cashmela/",
    },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/918080080114" },
  ];

  return (
    <footer className="bg-[#0B1120] text-white pt-6 mt-auto font-sans overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <FadeIn direction="up">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 pb-12">
            {/* Company Info */}
            <div className="flex-1 max-w-[300px]">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.webp"
                  alt="CashMela"
                  className="h-[60px] w-auto"
                  width={180}
                  height={60}
                  priority
                />
              </Link>
              <span className="text-sky-400 text-base font-semibold mb-6 block">Smart Money | Right Choice</span>

              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold text-white mb-2 text-[15px]">
                  <HiOutlineLocationMarker /> Corporate Address
                </div>
                <p className="text-slate-400 text-sm leading-relaxed ml-0">
                  Off no 05, Karishma Bldg, Dadar East,
                  <br />
                  Mumbai - 400014, Maharashtra, India
                </p>
              </div>

              <a href="mailto:info@cashmela.com" className="flex items-center gap-3 text-slate-400 text-sm no-underline mb-3 transition-colors hover:text-sky-400">
                <HiOutlineMail /> info@cashmela.com
              </a>
              <a href="tel:+918080080114" className="flex items-center gap-3 text-slate-400 text-sm no-underline mb-3 transition-colors hover:text-sky-400">
                <HiOutlinePhone /> +91-808-008-0114
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8">
              {Object.values(footerLinks).map((category, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-[15px] font-bold text-white mb-5 border-b-2 border-sky-400 pb-2 inline-block w-fit">{category.title}</h4>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href}
                          className="text-slate-400 text-[13px] no-underline transition-all relative pl-3 hover:text-sky-400 hover:pl-4 before:content-['›'] before:absolute before:left-0 before:text-sky-400 before:text-base before:leading-none before:top-0"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="flex-[0_0_280px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 rounded-xl p-6">
              <h4 className="text-base font-bold text-white mb-6 border-b border-white/10 pb-3">Quick Contact</h4>

              <div className="flex items-start gap-4 mb-5">
                <div className="bg-sky-400/10 text-sky-400 w-10 h-10 text-[20px] rounded-md flex items-center justify-center shrink-0">
                  <HiOutlinePhone />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 mb-0.5">Sales & Support</span>
                  <a href="tel:8080080114" className="text-sm text-white font-semibold no-underline hover:text-sky-400">
                    +91 80800 80114
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="bg-sky-400/10 text-sky-400 w-10 h-10 text-[20px] rounded-md flex items-center justify-center shrink-0">
                  <HiOutlineMail />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 mb-0.5">Email</span>
                  <a
                    href="mailto:info@cashmela.com"
                    className="text-[13px] text-white font-semibold no-underline hover:text-sky-400 break-all"
                  >
                    info@cashmela.com
                  </a>
                </div>
              </div>

              <Link href="/apply" className="flex items-center justify-center gap-2 w-full p-3 bg-blue-500 text-white font-semibold rounded-md no-underline transition-all mt-4 hover:bg-blue-600 hover:-translate-y-[1px]">
                <HiOutlineLightningBolt /> Apply for Loan
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* City Directory Linking Section */}
        <FadeIn direction="up" delay={0.05}>
          <div className="border-t border-white/10 pt-8 mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400 text-[11px] leading-relaxed">
            <div>
              <h5 className="text-white font-bold text-[13px] mb-3 uppercase tracking-wider">Personal Loans by City</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                <Link href="/personal-loan/mumbai" className="hover:text-sky-400 hover:underline">Mumbai</Link>
                <Link href="/personal-loan/delhi" className="hover:text-sky-400 hover:underline">Delhi</Link>
                <Link href="/personal-loan/bangalore" className="hover:text-sky-400 hover:underline">Bangalore</Link>
                <Link href="/personal-loan/hyderabad" className="hover:text-sky-400 hover:underline">Hyderabad</Link>
                <Link href="/personal-loan/chennai" className="hover:text-sky-400 hover:underline">Chennai</Link>
                <Link href="/personal-loan/pune" className="hover:text-sky-400 hover:underline">Pune</Link>
                <Link href="/personal-loan/kolkata" className="hover:text-sky-400 hover:underline">Kolkata</Link>
                <Link href="/personal-loan/ahmedabad" className="hover:text-sky-400 hover:underline">Ahmedabad</Link>
                <Link href="/personal-loan/jaipur" className="hover:text-sky-400 hover:underline">Jaipur</Link>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold text-[13px] mb-3 uppercase tracking-wider">Debt Consolidation by City</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                <Link href="/debt-consolidation/mumbai" className="hover:text-sky-400 hover:underline">Mumbai</Link>
                <Link href="/debt-consolidation/delhi" className="hover:text-sky-400 hover:underline">Delhi</Link>
                <Link href="/debt-consolidation/bangalore" className="hover:text-sky-400 hover:underline">Bangalore</Link>
                <Link href="/debt-consolidation/hyderabad" className="hover:text-sky-400 hover:underline">Hyderabad</Link>
                <Link href="/debt-consolidation/chennai" className="hover:text-sky-400 hover:underline">Chennai</Link>
                <Link href="/debt-consolidation/pune" className="hover:text-sky-400 hover:underline">Pune</Link>
                <Link href="/debt-consolidation/kolkata" className="hover:text-sky-400 hover:underline">Kolkata</Link>
                <Link href="/debt-consolidation/ahmedabad" className="hover:text-sky-400 hover:underline">Ahmedabad</Link>
                <Link href="/debt-consolidation/jaipur" className="hover:text-sky-400 hover:underline">Jaipur</Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Branding & Notice */}
        <FadeIn direction="up" delay={0.1}>
          <div className="py-12 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white rounded-full flex flex-col items-center justify-center text-[0.6rem] leading-[1.1] text-center font-bold p-0.5">
                  MADE
                  <br />
                  IN
                  <br />
                  INDIA
                </div>
                <div>
                  <h5 className="text-[15px] font-bold text-white m-0 mb-1">Proudly Made in India</h5>
                  <span className="text-[13px] text-slate-400">Empowering Financial Dreams</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-4 md:mt-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-all no-underline hover:bg-sky-400 hover:text-slate-900"
                    aria-label={social.name}
                  >
                    <social.icon className="text-[22px]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-bold text-white mb-2">Disclaimer</h5>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                CashMela is a free-to-use search and comparison platform that
                helps borrowers find personal loan and debt consolidation offers
                from RBI-regulated lenders. We do not sell loans
                directly, and loan approval is at the sole discretion of the
                respective financial institution. Backed by a strong tech-based
                platform and deep financial expertise, we help increase your
                approval chances and secure the best deals in the industry by
                matching you with the most suitable lenders.
              </p>

              <div className="bg-[#2a1810] border-l-4 border-orange-500 p-4 rounded mt-4">
                <div className="text-orange-500 font-bold text-sm flex items-center gap-2 mb-1">
                  <span>⚠️ Important Notice</span>
                </div>
                <p className="text-[13px] text-slate-200 leading-relaxed">
                  <strong>
                    Never pay any upfront fee for loan processing or disbursal.
                  </strong>{" "}
                  If anyone claims to represent CashMela and asks for money,
                  please report it immediately at{" "}
                  <a
                    href="mailto:info@cashmela.com"
                    className="text-sky-400 no-underline"
                  >
                    info@cashmela.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-950 py-6 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex flex-col items-center gap-4 md:justify-center md:text-center">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/about" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">About Us</Link>
            <Link href="/terms-and-conditions" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">Disclaimer</Link>
            <Link href="/cookie-policy" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">Cookie Policy</Link>
            <Link href="/contact" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">Contact us</Link>
            <Link href="/refund-policy" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">Refund Policy</Link>
            <Link href="/responsible-lending" className="text-slate-400 text-[13px] no-underline transition-colors hover:text-white">Responsible Lending</Link>
          </div>
          <p className="text-slate-500 text-[13px] text-center mt-6 w-full border-t border-white/5 pt-6">
            © {currentYear} CashMela - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
