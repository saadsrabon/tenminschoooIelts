'use client'

import { useState } from 'react'
import { Medium } from '@/types/api'

interface VideoPlayerProps {
  media: Medium
}

export default function VideoPlayer({ media }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeVideoId(media.url)

  if (!videoId) {
    return (
      <div className="bg-gray-200 rounded-lg p-8 text-center">
        <p className="text-gray-600">Video not available</p>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Course Trailer
          </h2>
          <p className="text-lg text-gray-600">
            Watch this preview to get a glimpse of what you'll learn
          </p>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={media.title || 'Course Trailer'}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={media.title || 'Course Trailer'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-white bg-opacity-90 rounded-full p-6 hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110"
                >
                  <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 