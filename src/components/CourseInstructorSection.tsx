'use client'

import React from 'react'
import type { Instructor } from '@/types/api'

interface CourseInstructorSectionProps {
  instructorSection: {
    type: string
    name: string
    description: string
    bg_color: string
    order_idx: number
    values: Instructor[]
  } | undefined
}

export default function CourseInstructorSection({ instructorSection }: CourseInstructorSectionProps) {
  if (!instructorSection || !instructorSection.values || instructorSection.values.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        {instructorSection.name || 'Course instructor'}
      </h2>
      {instructorSection.values.map((instructor: Instructor, index: number) => (
        <div key={index} className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
          {/* Instructor Image */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
            {instructor.image ? (
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-white text-lg sm:text-xl lg:text-2xl font-bold">${instructor.name ? instructor.name.split(' ').map((n: string) => n[0]).join('') : 'MS'}</span>`;
                  }
                }}
              />
            ) : (
              <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                {instructor.name ? instructor.name.split(' ').map((n: string) => n[0]).join('') : 'MS'}
              </span>
            )}
          </div>
          
          {/* Instructor Details */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
            {instructor.short_description && (
              <p className="text-gray-600 mb-3 text-sm sm:text-base font-medium">{instructor.short_description}</p>
            )}
            {instructor.description && (
              <div 
                className="text-gray-700 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
} 