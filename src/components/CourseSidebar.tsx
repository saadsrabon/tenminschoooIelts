'use client'

import React from 'react'
import type { Data } from '@/types/api'

interface CourseSidebarProps {
  data: Data
}

export default function CourseSidebar({ data }: CourseSidebarProps) {
  return (
    <div className="lg:col-span-1 xl:col-span-2 2xl:col-span-2">
      <div className="sticky top-6 space-y-6">
        {/* Course Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          {/* Course Thumbnail */}
          {data.media && data.media.length > 0 && (
            <div className="mb-4">
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={data.media[0].thumbnail_url || data.media[0].resource_value} 
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
                    <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Course Title */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3">
            {data.title}
          </h1>

          {/* Course Description */}
          {data.description && (
            <div className="mb-4">
              <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                {data.description.replace(/<[^>]*>/g, '')}
              </p>
            </div>
          )}

          {/* Course Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Certificate Included</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Expert Support</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-800">৳2,999</span>
              <span className="text-lg text-gray-500 line-through">৳5,999</span>
              <span className="text-sm text-green-600 font-medium">50% OFF</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Limited time offer</p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-green-500 capitalize text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105">
              {data.cta_text?.value || 'Enroll Now'}
            </button>
            
          </div>

          
        </div>

        {/* Course Checklist */}
        {data.checklist && data.checklist.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">What's Included</h3>
            <ul className="space-y-3">
              {data.checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 text-sm mt-0.5">✓</span>
                  <span className="text-gray-600 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
} 