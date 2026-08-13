"use client";

import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const pathname = usePathname();

  // Hide the WhatsApp button completely on admin paths
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group flex flex-col items-end">
      {/* Tooltip */}
      <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none w-max bg-gray-800 text-white text-[13px] py-1.5 px-3 rounded shadow-md transition-opacity duration-200">
        Contact us on whatsapp
        <div className="absolute top-full right-5 border-4 border-transparent border-t-gray-800"></div>
      </div>
      
      {/* Button */}
      <a
        href="https://wa.me/918080080114"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-md hover:bg-[#128C7E] transition-colors flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
