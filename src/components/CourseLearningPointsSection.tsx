'use client'

import React from 'react'
import type { Pointer } from '@/types/api'

interface CourseLearningPointsSectionProps {
  pointersSection: {
    type: string
    name: string
    description: string
    bg_color: string
    order_idx: number
    values: Pointer[]
  } | undefined
}

export default function CourseLearningPointsSection({ pointersSection }: CourseLearningPointsSectionProps) {
  if (!pointersSection || !pointersSection.values || pointersSection.values.length === 0) {
    return null
  }

  const getIconDisplay = (icon: string) => {
    // Handle cases where icon might be 0, empty, or invalid
    if (!icon || icon === '0' || icon === '') {
      return '✓'
    }
    
    // If it's a URL, return a play icon or checkmark
    if (icon.startsWith('http')) {
      return '▶'
    }
    
    // If it's an emoji or valid icon, return it
    return icon
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        {pointersSection.name || 'What you will learn'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {pointersSection.values.map((pointer: Pointer, index: number) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4">
            <div 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
              style={{ backgroundColor: pointer.color || '#3B82F6' }}
            >
              {getIconDisplay(pointer.icon)}
            </div>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              {pointer.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 