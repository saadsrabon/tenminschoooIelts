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
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
} 