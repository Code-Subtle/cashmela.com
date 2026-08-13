import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FAQSection from '../components/FAQSection/FAQSection';
import { faqData } from '../data/faqData';
import {
  SupportAgentIcon,
  BankPartnersIcon,
  PaperlessProcessIcon,
  InstantMatchIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon
} from '@/components/ui/Icons';

export const metadata = {
  title: "Contact Us",
  description: "Have questions about our financial solutions? The CashMela team is here to provide the support and expertise you need.",
};

export default function ContactPage() {
  const contactFaqs = faqData[0].questions.slice(0, 8);

  return (
    <>
      <Navbar />
      <main className="font-sans text-slate-900 bg-slate-50">
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-32 px-6 lg:pt-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-16">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Get in <span className="text-blue-700">Touch</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Have questions about our financial solutions? Our dedicated team is here to provide the support and technical expertise you need to scale.
              </p>
            </div>

          </div>
        </section>

        {/* Contact Form & Trust Section */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Side */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm lg:col-span-7">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input id="fullName" className="w-full px-4 h-14 rounded-xl bg-slate-100 border-none transition-all text-slate-900 font-sans focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:bg-white placeholder:text-slate-400" placeholder="John Doe" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="workEmail" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Work Email</label>
                    <input id="workEmail" className="w-full px-4 h-14 rounded-xl bg-slate-100 border-none transition-all text-slate-900 font-sans focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:bg-white placeholder:text-slate-400" placeholder="john@company.com" type="email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phoneNumber" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Phone Number</label>
                    <input id="phoneNumber" className="w-full px-4 h-14 rounded-xl bg-slate-100 border-none transition-all text-slate-900 font-sans focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:bg-white placeholder:text-slate-400" placeholder="+91 98765 43210" type="tel" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Company</label>
                    <input id="company" className="w-full px-4 h-14 rounded-xl bg-slate-100 border-none transition-all text-slate-900 font-sans focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:bg-white placeholder:text-slate-400" placeholder="CashMela Inc." type="text" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiryType" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Inquiry Type</label>
                  <select id="inquiryType" className="w-full px-4 h-14 rounded-xl bg-slate-100 border-none transition-all text-slate-900 font-sans focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:bg-white appearance-none bg-no-repeat bg-[length:1rem] bg-[position:right_1.25rem_center] pr-12 cursor-pointer hover:bg-slate-200" style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23737688' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")` }}>
                    <option>Customer Support</option>
                    <option>Sales Inquiry</option>
                    <option>Partnerships</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea id="message" className="w-full p-4 rounded-xl bg-slate-100 border-none transition-all text-slate-900 font-sans focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:bg-white placeholder:text-slate-400 resize-y" placeholder="How can we help you?" rows="4"></textarea>
                </div>

                <div className="pt-4">
                  <button className="w-full md:w-auto px-10 py-4 bg-sky-700 text-white font-bold rounded-xl border-none cursor-pointer transition-all shadow-[0_10px_15px_-3px_rgba(3,105,161,0.2)] hover:bg-sky-600" type="submit">
                    Send Message
                  </button>
                  <p className="mt-4 text-sm text-slate-500 italic flex items-center">
                    <svg className="w-4 h-4 text-slate-400 mr-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    We typically respond within 24 hours
                  </p>
                </div>
              </form>
            </div>

            {/* Visual Trust Card */}
            <div className="h-full lg:col-span-5">
              <div className="bg-sky-700 p-10 rounded-3xl text-white flex flex-col justify-between h-full min-h-[400px]">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-widest">Why Us</span>
                  <h3 className="text-3xl font-bold mt-6 mb-4 text-white">Dedicated to Your Financial Success</h3>
                  <p className="text-blue-100/80 leading-relaxed">
                    Join thousands of users who trust CashMela to compare and apply for the best financial products.
                  </p>
                </div>
                
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-4">
                    <SupportAgentIcon className="w-14 h-14 shrink-0" />
                    <div>
                      <div className="font-bold">24/7 Priority Support</div>
                      <div className="text-xs text-blue-100/60">Dedicated account managers for institutions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <BankPartnersIcon className="w-14 h-14 shrink-0" />
                    <div>
                      <div className="font-bold">40+ Verified Lenders</div>
                      <div className="text-xs text-blue-100/60">Compare top offers seamlessly</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <PaperlessProcessIcon className="w-14 h-14 shrink-0" />
                    <div>
                      <div className="font-bold">100% Paperless Process</div>
                      <div className="text-xs text-blue-100/60">Fully digital applications</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <InstantMatchIcon className="w-14 h-14 shrink-0" />
                    <div>
                      <div className="font-bold">Instant Approvals</div>
                      <div className="text-xs text-blue-100/60">Get matched with offers in minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Info Cards */}
        <section className="bg-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-[0_1px_2px_rgba(0,57,179,0.05)] transition-all duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,57,179,0.05)] hover:-translate-y-0.5">
              <div className="mb-6">
                <PhoneIcon className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Contact Number</h4>
              <p className="text-slate-500 text-sm mb-4">Mon-Sat, 9AM-7PM</p>
              <a className="text-blue-700 font-bold no-underline hover:underline" href="tel:8080080114">+91 80800 80114</a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-[0_1px_2px_rgba(0,57,179,0.05)] transition-all duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,57,179,0.05)] hover:-translate-y-0.5">
              <div className="mb-6">
                <EmailIcon className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Email Address</h4>
              <p className="text-slate-500 text-sm mb-4">We typically respond within 24 hours.</p>
              <a className="text-blue-700 font-bold no-underline hover:underline" href="mailto:info@cashmela.com">info@cashmela.com</a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-[0_1px_2px_rgba(0,57,179,0.05)] transition-all duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,57,179,0.05)] hover:-translate-y-0.5">
              <div className="mb-6">
                <LocationIcon className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Corporate Address</h4>
              <p className="text-slate-500 text-sm mb-4">
                Off no 05, Karishma Bldg,<br />
                Dadar East - 400014, Mumbai
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-7xl mx-auto relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-slate-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.3373200226359!2d72.84375054603257!3d19.014978742894957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceddc6a44c8f%3A0xfacc4a4b6db83bc4!2sKarishma%20Building%2C%2016%2FA%2C%20Madhavadas%20Pasta%20Marg%2C%20Dadar%20East%2C%20Dadar%2C%20Mumbai%2C%20Maharashtra%20400014!5e1!3m2!1sen!2sin!4v1775106784065!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
              <div className="flex items-start gap-4">
                <LocationIcon className="w-14 h-14 shrink-0" />
                <div>
                  <h5 className="text-lg font-bold mb-2">Headquarters</h5>
                  <address className="not-italic text-slate-600 text-sm leading-relaxed">
                    Off no 05, Karishma Bldg,<br />
                    Dadar East - 400014, Mumbai
                  </address>
                  <button className="mt-6 text-blue-700 font-bold text-sm inline-flex items-center gap-2.5 cursor-pointer bg-none border-none p-0 transition-all group">
                    Get Directions 
                    <svg className="w-4 h-4 text-blue-700 shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={contactFaqs} />
      </main>
      <Footer />
    </>
  );
}
