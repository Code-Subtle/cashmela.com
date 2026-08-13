import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FAQPageClient from './FAQPageClient';

export const metadata = {
  title: "Frequently Asked Questions — CashMela",
  description: "Find answers to all your questions about CashMela, personal loans, debt consolidation, credit cards, and insurance. Learn how our platform works.",
  keywords: [
    "CashMela FAQ", "loan questions", "debt consolidation FAQ", "credit card FAQ",
    "CashMela support", "how CashMela works"
  ],
  alternates: {
    canonical: "https://cashmela.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions — CashMela",
    description: "Find answers to all your questions about CashMela, personal loans, debt consolidation, credit cards, and insurance.",
    url: "https://cashmela.com/faq",
    type: "website",
  },
  twitter: {
    title: "Frequently Asked Questions — CashMela",
    description: "Find answers to all your questions about CashMela, personal loans, debt consolidation, credit cards, and insurance.",
  },
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <FAQPageClient />
      <Footer />
    </>
  );
}
