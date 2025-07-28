import type { Metadata } from 'next'
import './globals.css'
import { Noto_Sans_Bengali } from 'next/font/google'

const notoBengali = Noto_Sans_Bengali({
  weight: ['400', '600', '700'],
  subsets: ['bengali'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
  description: 'Master IELTS with our comprehensive course. Expert guidance, practice tests, and lifetime access.',
  keywords: ['IELTS', 'English', 'Course', 'Munzereen Shahid', '10 Minute School'],
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://10minuteschool.com'),
  alternates: {
    canonical: '/ielts-course',
  },
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    url: 'https://10minuteschool.com/ielts-course',
    siteName: '10 Minute School',
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Master IELTS with our comprehensive course. Expert guidance, practice tests, and lifetime access.',
    images: [
      {
        url: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
        width: 1200,
        height: 630,
        alt: 'IELTS Course by Munzereen Shahid',
        type: 'image/png',
      },
      {
        url: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_1_1.png',
        width: 1080,
        height: 1080,
        alt: 'IELTS Course by Munzereen Shahid',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@10minuteschool',
    creator: '@10minuteschool',
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Master IELTS with our comprehensive course. Expert guidance, practice tests, and lifetime access.',
    images: [
      'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
      'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_1_1.png'
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className={notoBengali.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10B981" />
        <meta name="msapplication-TileColor" content="#10B981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IELTS Course" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
} 