'use client'

import React from 'react'
import type { Feature } from '@/types/api'

interface CourseFeaturesSectionProps {
  featuresSection: {
    type: string
    name: string
    description: string
    bg_color: string
    order_idx: number
    values: Feature[]
  } | undefined
}

export default function CourseFeaturesSection({ featuresSection }: CourseFeaturesSectionProps) {
  if (!featuresSection || !featuresSection.values || featuresSection.values.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        {featuresSection.name || 'How the course is laid out'}
      </h2>
      
      {/* Dark blue container with rounded corners */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {featuresSection.values.map((feature: Feature, index: number) => (
            <div key={index} className="flex items-start gap-4 sm:gap-5">
              {/* Circular icon container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white bg-opacity-10 flex items-center justify-center flex-shrink-0">
                {feature.icon && feature.icon.startsWith('http') ? (
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
                  />
                ) : (
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">
                    {feature.icon || '📚'}
                  </span>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 