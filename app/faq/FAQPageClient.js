'use client';

import { useState, useMemo } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { faqData } from '../data/faqData';

export default function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  // State to keep track of which FAQ is open. 
  // Key format: `${categoryIndex}-${questionIndex}`
  const [openStates, setOpenStates] = useState({});

  // Get all unique categories
  const categories = ['All', ...faqData.map(cat => cat.category)];

  // Filter the FAQs based on active category
  const filteredData = useMemo(() => {
    return faqData.map((categoryGroup, catIndex) => {
      return {
        ...categoryGroup,
        catIndex,
      };
    }).filter(categoryGroup => {
      // Keep the category if it has questions AND (it matches the active category OR active is 'All')
      const hasQuestions = categoryGroup.questions.length > 0;
      const matchesCategory = activeCategory === 'All' || categoryGroup.category === activeCategory;
      return hasQuestions && matchesCategory;
    });
  }, [activeCategory]);

  const toggleFAQ = (catIndex, qIndex) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-slate-900">
      {/* Header Section */}
      <section className="relative py-10 px-4 text-center bg-slate-50 border-b border-slate-200 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] before:bg-[size:40px_40px] before:opacity-50 before:z-0">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-slate-900 font-serif">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto py-8 px-6">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all border ${activeCategory === category ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQs */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {filteredData.map((categoryGroup) => (
              <div key={categoryGroup.category} className="mb-12">
                {/* Only show category title if "All" is selected to avoid redundancy */}
                {activeCategory === 'All' && (
                  <h2 className="text-2xl font-semibold mb-6 text-slate-900 border-b-2 border-slate-100 pb-2">{categoryGroup.category}</h2>
                )}
                
                <div className="flex flex-col">
                  {categoryGroup.questions.map((faq, qIndex) => {
                    // Use the original index from the data structure for consistent toggling
                    const originalIndex = faqData[categoryGroup.catIndex].questions.findIndex(q => q.question === faq.question);
                    const isOpen = openStates[`${categoryGroup.catIndex}-${originalIndex}`];

                    return (
                      <div 
                        key={originalIndex} 
                        className={`border-b border-slate-200 group ${isOpen ? 'active' : ''}`}
                      >
                        <button
                          className="w-full text-left py-5 bg-transparent border-none flex justify-between items-center cursor-pointer text-base font-semibold text-slate-800 transition-colors hover:text-indigo-500"
                          onClick={() => toggleFAQ(categoryGroup.catIndex, originalIndex)}
                          aria-expanded={isOpen}
                        >
                          <span className="pr-6">{faq.question}</span>
                          <FaChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-800' : 'text-slate-400'}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                          <p className="text-slate-600 leading-relaxed text-[0.95rem] m-0">{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-500 text-lg">
            <p>No FAQs available for this category.</p>
          </div>
        )}
      </main>
    </div>
  );
}
