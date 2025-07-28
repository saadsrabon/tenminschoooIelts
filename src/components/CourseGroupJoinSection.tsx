'use client'

import React from 'react'
import type { GroupJoinItem } from '@/types/api'

interface CourseGroupJoinSectionProps {
  groupJoinSection: {
    type: string
    name: string
    description: string
    bg_color: string
    order_idx: number
    values: GroupJoinItem[]
  } | undefined
}

export default function CourseGroupJoinSection({ groupJoinSection }: CourseGroupJoinSectionProps) {
  if (!groupJoinSection || !groupJoinSection.values || groupJoinSection.values.length === 0) {
    return null
  }

  // Mock data for successful students (in real app, this would come from API)
  const successfulStudents = [
    { score: '8.5', name: 'রাহুল' },
    { score: '8.5', name: 'সাবরিনা' },
    { score: '8.0', name: 'আদনান' },
    { score: '8.0', name: 'ফারহানা' },
    { score: '8.0', name: 'ইমরান' },
    { score: '7.5', name: 'নুসরাত' },
    { score: '7.5', name: 'শাকিল' },
    { score: '7.5', name: 'তানজিনা' },
    { score: '7.5', name: 'রিফাত' },
    { score: '7.5', name: 'মাহিন' },
    { score: '7.5', name: 'জারিন' },
    { score: '7.5', name: 'আরিফ' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        {groupJoinSection.name || 'Free Resources'}
      </h2>
      
      {groupJoinSection.values.map((item: GroupJoinItem, index: number) => (
        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
          <div style={{backgroundImage: "url(https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png)", backgroundSize: "cover"}} className="flex flex-col lg:flex-row">
            {/* Left Section - Dark Background */}
            <div className="flex-1  p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-4">
                {item.top_left_icon_img && (
                  <img 
                    src={item.top_left_icon_img} 
                    alt=""
                    className="w-[30%] h-[30%] flex-shrink-0"
                  />
                )}
                {/* <span className="text-orange-400 font-semibold text-sm sm:text-base">Free PDF</span> */}
              </div>
              
              <h3 
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white"
                style={{ color: item.title_color || '#ffffff' }}
              >
                {item.title}
              </h3>
              
              <p 
                className="text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed"
                style={{ color: item.description_color || '#ededed' }}
              >
                {item.description}
              </p>
              
              <a 
                href={item.cta.clicked_url}
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
                style={{ backgroundColor: item.cta.color || '#10B981' }}
              >
                {item.cta.text}
              </a>
            </div>
            
            {/* Right Section - Light Background */}
            <div className="lg:w-96 p-6 sm:p-8 flex justify-center items-center" >
              
              
              <div className=" flex justify-center items-center">
                <img className="w-full" src={item.thumbnail} alt="succefful student" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 