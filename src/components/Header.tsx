'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  title: string
  currentLang: 'en' | 'bn'
}

export default function Header({ title, currentLang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    // Use replace to avoid adding to browser history and reduce flickering
    router.replace(`/?lang=${lang}`, { scroll: false })
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        {/* Left Side - Logo and Kids English Ad */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 min-w-[140px] sm:min-w-[180px]">
            <img src="/10mslogo-svg.svg" alt="10 Minute School" className="h-6 w-auto sm:h-8" />
          </div>
          {/* Kids English Ad - Hidden on mobile */}
          
        </div>

        {/* Center - Search Bar - Hidden on mobile */}
        <div className="flex-1 mx-4 sm:mx-6 hidden lg:flex">
          <div className="flex items-center w-full max-w-xl bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
            <span className="text-orange-500 mr-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg>
            </span>
            <input
              type="text"
              placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Right Side - Navigation Links - Hidden on mobile */}
        <div className="hidden xl:flex items-center gap-3 lg:gap-4 text-gray-700 text-xs lg:text-sm font-medium">
          <button className="hover:text-primary-600 whitespace-nowrap">সকল কোর্স</button>
          <button className="hover:text-primary-600 whitespace-nowrap">বই</button>
          <button className="hover:text-primary-600 whitespace-nowrap">ব্লগ</button>
          <button className="hover:text-primary-600 whitespace-nowrap">কুইজ</button>
          <button className="hover:text-primary-600 whitespace-nowrap">চাকরি প্রস্তুতি</button>
          <button className="hover:text-primary-600 whitespace-nowrap">ভার্সিটি ভর্তি প্রস্তুতি</button>
          <button className="hover:text-primary-600 whitespace-nowrap">ফ্রি ডাউনলোড</button>
        </div>

        {/* Right Side - Language, Phone, Login */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => handleLanguageChange(currentLang === 'en' ? 'bn' : 'en')}
            className="border border-gray-300 rounded px-1.5 sm:px-2 py-1 text-xs flex items-center gap-1 hover:bg-gray-100"
          >
            <span className="text-gray-500 hidden sm:inline">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 3v18m9-9H3"/></svg>
            </span>
            {currentLang === 'en' ? 'EN' : 'BN'}
          </button>
          
          {/* Phone - Hidden on small mobile */}
          <span className="hidden sm:inline-flex items-center gap-1 text-green-600 font-semibold text-sm lg:text-base">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0122 16.92z"/></svg>
            16910
          </span>
          
          {/* Login Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded font-semibold transition-colors text-xs sm:text-sm">
            লগইন
          </button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-4 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-2 min-w-[140px] sm:min-w-[180px]">
              <img src="/10mslogo-svg.svg" alt="10 Minute School" className="h-6 w-auto sm:h-8" />
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded hover:bg-gray-100">
              <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Search */}
          <div className="mb-6">
            <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-3 border border-gray-200">
              <span className="text-orange-500 mr-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg>
              </span>
              <input
                type="text"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400 text-sm"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4 text-base sm:text-lg font-medium text-gray-800 flex-1">
            <button className="text-left py-2 border-b border-gray-100">সকল কোর্স</button>
            <button className="text-left py-2 border-b border-gray-100">বই</button>
            <button className="text-left py-2 border-b border-gray-100">ব্লগ</button>
            <button className="text-left py-2 border-b border-gray-100">কুইজ</button>
            <button className="text-left py-2 border-b border-gray-100">চাকরি প্রস্তুতি</button>
            <button className="text-left py-2 border-b border-gray-100">ভার্সিটি ভর্তি প্রস্তুতি</button>
            <button className="text-left py-2 border-b border-gray-100">ফ্রি ডাউনলোড</button>
            
            {/* Kids English Ad for Mobile */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg px-3 py-2 mt-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl">🐘</span>
                <span className="text-2xl">🐒</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Kids English</span>
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">
                ক্লিক করুন
              </button>
            </div>
            
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-200">
              <button
                onClick={() => handleLanguageChange(currentLang === 'en' ? 'bn' : 'en')}
                className="border border-gray-300 rounded px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-100"
              >
                <span className="text-gray-500">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 3v18m9-9H3"/></svg>
                </span>
                {currentLang === 'en' ? 'EN' : 'BN'}
              </button>
              <span className="inline-flex items-center gap-1 text-green-600 font-semibold text-base">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0122 16.92z"/></svg>
                16910
              </span>
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded font-semibold transition-colors text-sm">
                লগইন
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 