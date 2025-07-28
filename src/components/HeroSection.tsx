'use client'

import React, { useState, useEffect, useRef } from "react";
import { Data } from '@/types/api';

interface HeroSectionProps {
  data: Data;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Filter only video media items
  const videoMedia = data.media.filter(media => media.resource_type === 'video');
  const currentVideo = videoMedia[currentVideoIndex];
  
  const handleVideoClick = (index: number) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // For YouTube videos, we'll use a simple approach with video.js or similar
  // For now, let's create a custom YouTube video player
  const getYouTubeVideoUrl = (videoId: string) => {
    // Extract video ID if it's a full URL
    let cleanVideoId = videoId;
    if (videoId.includes('youtube.com/watch?v=')) {
      cleanVideoId = videoId.split('v=')[1]?.split('&')[0] || videoId;
    } else if (videoId.includes('youtu.be/')) {
      cleanVideoId = videoId.split('youtu.be/')[1]?.split('?')[0] || videoId;
    }
    
    return `https://www.youtube.com/embed/${cleanVideoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`;
  };

  const handleEnrollClick = () => {
    setShowSuccessMessage(true);
    // Auto-hide the message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <section 
      className="text-white py-8 sm:py-12 lg:py-16 xl:py-20 relative"
      style={{
        backgroundImage: 'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
              {data.title}
            </h1>
            <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-6">
              <div className="text-yellow-400 text-base lg:text-lg xl:text-xl mr-2">★★★★★</div>
              <span className="text-xs lg:text-sm xl:text-base opacity-90">(4.9 রেটিং • ১২,৫০০+ শিক্ষার্থী)</span>
            </div>
            <div 
              className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-8 opacity-90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <button 
              onClick={handleEnrollClick}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 rounded-lg font-semibold transition-colors text-sm sm:text-base lg:text-lg xl:text-xl w-full sm:w-auto"
            >
              {data.cta_text?.name || 'কোর্সটি কিনুন'}
            </button>
          </div>

          {/* Right Video Section */}
          <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
            {/* Main Video Player */}
            <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
              {isPlaying && currentVideo ? (
                <div className="w-full h-full relative">
                  <iframe
                    src={getYouTubeVideoUrl(currentVideo.resource_value)}
                    title={currentVideo.name || 'Course Video'}
                    className="w-full h-full absolute inset-0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  {/* Custom close button */}
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <>
                  {currentVideo && currentVideo.thumbnail_url ? (
                    <img
                      src={currentVideo.thumbnail_url}
                      alt={currentVideo.name || 'Course Preview'}
                      className="object-cover w-full h-full absolute inset-0 opacity-60"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white text-lg sm:text-xl lg:text-2xl">👩‍🏫</span>
                        </div>
                        <div className="text-white text-xs lg:text-sm xl:text-base">IELTS</div>
                      </div>
                    </div>
                  )}
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="text-green-500 bg-white bg-opacity-90 hover:bg-opacity-100 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl xl:text-2xl transition-all z-10"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>
            
            {/* Video Thumbnails Row */}
            {videoMedia.length > 0 && (
              <div className="grid grid-cols-4 gap-2 lg:gap-3">
                {videoMedia.slice(0, 4).map((media, index) => (
                  <div 
                    key={index} 
                    className={`rounded aspect-video flex items-center justify-center relative overflow-hidden cursor-pointer transition-all duration-200 ${
                      currentVideoIndex === index 
                        ? 'ring-2 ring-green-500 bg-green-500 bg-opacity-20' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    onClick={() => handleVideoClick(index)}
                  >
                    {media.thumbnail_url ? (
                      <img
                        src={media.thumbnail_url}
                        alt={media.name || `Video ${index + 1}`}
                        className="object-cover w-full h-full absolute inset-0 opacity-80"
                      />
                    ) : (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs lg:text-sm xl:text-base">▶</span>
                      </div>
                    )}
                    {/* Play indicator overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <span className="text-gray-800 text-xs lg:text-sm">▶</span>
                      </div>
                    </div>
                    {/* Active indicator */}
                    {currentVideoIndex === index && (
                      <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-md w-full mx-4">
            <div className="text-center">
              {/* Success Icon */}
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Success Message */}
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Enrollment Successful! 🎉
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                You have successfully enrolled to the course of <strong>IELTS Course by Munzereen Shahid</strong>
              </p>
              
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;