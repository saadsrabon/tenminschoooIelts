'use client'

import React, { useState } from 'react';

interface CollapsibleFAQProps {
  faqSection: {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: any[];
  } | undefined;
}

const CollapsibleFAQ: React.FC<CollapsibleFAQProps> = ({ faqSection }) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]); // Start with first FAQ expanded
  const [openQuestions, setOpenQuestions] = useState<number[]>([0]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        {faqSection?.name || 'Frequently Ask Questions'}
      </h2>
      
      <div className="space-y-2">
        {faqSection?.values.slice(0, 5).map((faq: any, index: number) => (
          <div key={index} className="border-b border-dotted border-gray-300 last:border-b-0">
            <button 
              onClick={() => toggleQuestion(index)}
              className="w-full flex items-center justify-between text-left py-3 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg flex-1 pr-4">
                {faq.question}
              </span>
              <div className={`w-4 h-4 transition-transform duration-200 ${openQuestions.includes(index) ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
            {openQuestions.includes(index) && (
              <div className="pl-4 pb-3">
                <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleFAQ; 