'use client'

import { Data } from '@/types/api'

interface StructuredDataProps {
  data: Data
}

export default function StructuredData({ data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": data.title,
    "description": data.description ? data.description.replace(/<[^>]*>/g, '') : 'Master IELTS with our comprehensive course. Expert guidance, practice tests, and lifetime access.',
    "provider": {
      "@type": "Organization",
      "name": "10 Minute School",
      "url": "https://10minuteschool.com",
      "logo": "https://cdn.10minuteschool.com/images/10mslogo-svg.svg"
    },
    "instructor": {
      "@type": "Person",
      "name": "Munzereen Shahid",
      "jobTitle": "IELTS Instructor",
      "description": "MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5"
    },
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced",
    "inLanguage": ["en", "bn"],
    "url": "https://10minuteschool.com/ielts-course",
    "image": data.media?.find(media => media.name === 'thumbnail')?.resource_value ||
             data.media?.find(media => media.thumbnail_url)?.thumbnail_url ||
             "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT",
      "availability": "https://schema.org/InStock",
      "url": "https://10minuteschool.com/ielts-course"
    },
    "coursePrerequisites": "Basic English knowledge",
    "educationalCredentialAwarded": "Certificate of Completion",
    "timeRequired": "PT50H",
    "teaches": [
      "IELTS Academic",
      "IELTS General Training", 
      "English Reading",
      "English Writing",
      "English Listening",
      "English Speaking",
      "Test Preparation"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "inLanguage": ["en", "bn"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "12500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": data.sections?.find(section => section.type === 'testimonials')?.values?.slice(0, 3).map((testimonial: any) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.testimonial || testimonial.description
    })) || []
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 