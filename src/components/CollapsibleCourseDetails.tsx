'use client'

import React, { useState } from 'react';

interface CollapsibleCourseDetailsProps {
  aboutSection: {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: any[];
  } | undefined;
}

const CollapsibleCourseDetails: React.FC<CollapsibleCourseDetailsProps> = ({ aboutSection }) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]); // Start with first section expanded

  // Create sections from the about data
  const sections = aboutSection?.values?.map((item, index) => ({
    id: index,
    title: item.title ? item.title.replace(/<[^>]*>/g, '') : `Section ${index + 1}`,
    content: item.description,
    isHtml: true
  })) || [
    {
      id: 0,
      title: "This IELTS course is for",
      content: [
        "Those who aim to go abroad for work or higher education",
        "Those who want to apply for permanent residency abroad", 
        "Those who have appeared for the IELTS exam but are not satisfied with their band score",
        "Those who want to improve their reading, writing, listening, and speaking skills through IELTS for work, business, or personal interest"
      ],
      isHtml: false
    }
  ];

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        {aboutSection?.name || 'Course details'}
      </h2>
      
      <div className="space-y-2">
        {sections.map((section, index) => (
          <div key={section.id} className="border-b border-dotted border-gray-300 last:border-b-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between text-left py-3 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
                {section.title}
              </span>
              <div className={`w-4 h-4 transition-transform duration-200 ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
            
            {expandedSections.includes(section.id) && (
              <div className="pl-4 pb-3">
                {section.isHtml ? (
                  <div 
                    className="text-gray-700 text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                    {section.content.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleCourseDetails; 