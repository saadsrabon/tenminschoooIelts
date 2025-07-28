'use client'

import React, { useState, useRef } from 'react'
import type { Testimonial } from '@/types/api'

interface CourseTestimonialsSectionProps {
  testimonialsSection: {
    type: string
    name: string
    description: string
    bg_color: string
    order_idx: number
    values: Testimonial[]
  } | undefined
}

export default function CourseTestimonialsSection({ testimonialsSection }: CourseTestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  if (!testimonialsSection || !testimonialsSection.values || testimonialsSection.values.length === 0) {
    return null
  }

  const testimonials = testimonialsSection.values
  const itemsPerView = 2 // Show 2 testimonials at a time

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerView < 0 ? Math.max(0, testimonials.length - itemsPerView) : prev - itemsPerView
    )
  }

  const handleVideoClick = (videoUrl: string) => {
    if (videoUrl) {
      setCurrentVideoId(videoUrl)
      setIsPlaying(true)
    }
  }

  const closeVideo = () => {
    setIsPlaying(false)
    setCurrentVideoId(null)
  }

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
        {testimonialsSection.name || 'Students opinion'}
      </h2>
      
      {/* Testimonials Slider */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Testimonials Container */}
        <div 
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 "
        >
          {visibleTestimonials.map((testimonial: Testimonial, index: number) => (
            <div key={testimonial.id} className="flex-1 min-w-0 bg-white  shadow-md">
              {/* Video Thumbnail Section */}
              <div className="relative aspect-video bg-gray-100  ">
                {testimonial.thumb ? (
                  <>
                    <img 
                      src={testimonial.thumb} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    {/* Play Button Overlay */}
                    {testimonial.video_url && (
                      <button
                        onClick={() => handleVideoClick(testimonial.video_url)}
                        className="absolute inset-0 bg-black rounded-t-lg bg-opacity-30 hover:bg-opacity-40 transition-all flex items-center justify-center group"
                      >
                        <div className="w-16 h-16 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                          <svg className="w-8 h-8 text-red-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </button>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-lg">👤</span>
                      </div>
                      <p className="text-gray-600 text-sm">No Video</p>
                    </div>
                  </div>
                )}
                
                {/* Quotation Mark Icon */}
                <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2" id="quote">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 20 30">
                      <path fill="#D33242" d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 20 30">
                      <path fill="#D33242" d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Student Info Section */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={testimonial.profile_image} 
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
                
                {/* Testimonial Text */}
                {testimonial.testimonial && testimonial.testimonial !== testimonial.description && (
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {testimonial.testimonial}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === Math.floor(currentIndex / itemsPerView) 
                  ? 'bg-green-500' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && currentVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center"
            >
              ✕
            </button>
            <iframe
              src={getYouTubeEmbedUrl(currentVideoId)}
              title="Student Testimonial Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
} 