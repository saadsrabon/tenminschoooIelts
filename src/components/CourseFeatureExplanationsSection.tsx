'use client'

import React from 'react'
import type { FeatureExplanation } from '@/types/api'

interface CourseFeatureExplanationsSectionProps {
  featureExplanationsSection: {
    type: string
    name: string
    description: string
    bg_color: string
    order_idx: number
    values: FeatureExplanation[]
  } | undefined
}

export default function CourseFeatureExplanationsSection({ featureExplanationsSection }: CourseFeatureExplanationsSectionProps) {
  if (!featureExplanationsSection || !featureExplanationsSection.values || featureExplanationsSection.values.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
        Course Exclusive Feature
      </h2>
      
      <div className="space-y-8 sm:space-y-10">
        {featureExplanationsSection.values.map((feature: FeatureExplanation, index: number) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 sm:p-8">
            {/* Feature Title */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-6">
              {feature.title}
            </h3>
            
            {/* Content Layout - Checklist on left, Visual on right */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left Side - Checklist */}
              <div className="flex-1">
                {feature.checklist && feature.checklist.length > 0 && (
                  <ul className="space-y-3 sm:space-y-4">
                    {feature.checklist.map((item, checklistIndex) => (
                      <li key={checklistIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Right Side - Visual */}
              <div className="lg:w-80 flex-shrink-0">
                {feature.video_thumbnail ? (
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={feature.video_thumbnail} 
                      alt={feature.title}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    {/* Overlay for better text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">{feature.title}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* File Link (if available) */}
            {feature.file_url && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a 
                  href={feature.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 text-sm sm:text-base font-medium"
                >
                  <span>View {feature.file_type || 'File'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 