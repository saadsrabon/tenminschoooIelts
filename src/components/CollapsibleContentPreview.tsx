'use client'

import React, { useState } from 'react';

interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
  thumbnail?: string;
}

interface CollapsibleContentPreviewProps {
  media: Media[];
}

const CollapsibleContentPreview: React.FC<CollapsibleContentPreviewProps> = ({ media }) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([1]); // Start with first section expanded
  const [showAllContent, setShowAllContent] = useState(false);

  // Group media into sections
  const sections = [
    {
      id: 1,
      title: "Introduction",
      items: media.slice(0, 6)
    },
    {
      id: 2,
      title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
      items: media.slice(6, 8)
    },
    {
      id: 3,
      title: "Academic Reading",
      items: media.slice(8, 10)
    },
    {
      id: 4,
      title: "Academic Reading Mock Test",
      items: media.slice(10, 12)
    },
    {
      id: 5,
      title: "Listening",
      items: media.slice(12, 14)
    }
  ];

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isFree = (index: number) => index < 4; // First 4 items are free

  const getIconForItem = (item: Media, index: number) => {
    if (isFree(index)) {
      return (
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      );
    }
    return (
      <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        </svg>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        Content preview
      </h2>
      
      <div className="space-y-1">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between text-left p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
                {section.title}
              </span>
              <div className={`w-5 h-5 transition-transform duration-200 flex items-center justify-center ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            {expandedSections.includes(section.id) && (
              <div className="border-t border-gray-200 bg-gray-50">
                <div className="p-4 space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between py-2 px-3 bg-white rounded-lg">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {getIconForItem(item, itemIndex)}
                        <span className="text-gray-700 text-sm sm:text-base truncate">
                          {item.name === 'preview_gallery' ? `Video: ${item.name}` : item.name}
                        </span>
                      </div>
                      {isFree(itemIndex) && (
                        <span className="text-green-600 text-xs sm:text-sm font-semibold bg-green-50 px-2 py-1 rounded-full flex-shrink-0">
                          ফ্রি দেখুন
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAllContent(!showAllContent)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm sm:text-base transition-colors flex items-center gap-2 mx-auto"
        >
          <span>সকল কন্টেন্ট</span>
          <div className={`w-4 h-4 transition-transform duration-200 ${showAllContent ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CollapsibleContentPreview; 