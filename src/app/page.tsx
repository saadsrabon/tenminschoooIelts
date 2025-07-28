import { Suspense } from 'react'
import { fetchProductData, mockProductData } from '@/lib/api'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CourseInstructorSection from '@/components/CourseInstructorSection'
import CourseFeaturesSection from '@/components/CourseFeaturesSection'
import CourseLearningPointsSection from '@/components/CourseLearningPointsSection'
import CourseTestimonialsSection from '@/components/CourseTestimonialsSection'
import CourseGroupJoinSection from '@/components/CourseGroupJoinSection'
import CourseFeatureExplanationsSection from '@/components/CourseFeatureExplanationsSection'
import CourseSidebar from '@/components/CourseSidebar'
import Footer from '@/components/Footer'
import CollapsibleContentPreview from '@/components/CollapsibleContentPreview'
import CollapsibleCourseDetails from '@/components/CollapsibleCourseDetails'
import CollapsibleFAQ from '@/components/CollapsibleFAQ'
import type { Metadata } from 'next'

interface PageProps {
  searchParams: { lang?: string }
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const lang = (searchParams?.lang as 'en' | 'bn') || 'en';
  let productData;
  try {
    productData = await fetchProductData(lang);
  } catch (error) {
    productData = mockProductData;
  }
  const { data } = productData;
  return {
    title: data.title || 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: data.description ? data.description.replace(/<[^>]*>/g, '') : 'Master IELTS with our comprehensive course. Expert guidance, practice tests, and lifetime access.',
    keywords: ['IELTS', 'English', 'Course', 'Munzereen Shahid', '10 Minute School'],
    openGraph: data.media && data.media.length > 0 ? { images: [data.media[0].thumbnail_url || data.media[0].resource_value] } : undefined,
  };
}

export default async function HomePage({ searchParams }: PageProps) {
  const lang = (searchParams.lang as 'en' | 'bn') || 'en'
  
  let productData
  try {
    productData = await fetchProductData(lang)
  } catch (error) {
    console.error('Failed to fetch data, using mock data:', error)
    productData = mockProductData
  }

  const { data } = productData

  // Find sections by type
  const instructorSection = data.sections.find(section => section.type === 'instructors')
  const featuresSection = data.sections.find(section => section.type === 'features')
  const pointersSection = data.sections.find(section => section.type === 'pointers')
  const aboutSection = data.sections.find(section => section.type === 'about')
  const testimonialsSection = data.sections.find(section => section.type === 'testimonials')
  const faqSection = data.sections.find(section => section.type === 'faq')
  const groupJoinSection = data.sections.find(section => section.type === 'group_join_engagement')
  const featureExplanationsSection = data.sections.find(section => section.type === 'feature_explanations')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={data.title} currentLang={lang} />
      <HeroSection data={data} />
      
      {/* Main Content Layout */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 lg:gap-8 xl:gap-10">
          {/* Left Column - Scrollable Content */}
          <div className="lg:col-span-2 xl:col-span-3 2xl:col-span-4 space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Course Instructor */}
            <CourseInstructorSection instructorSection={instructorSection} />

            {/* How the course is laid out */}
            <CourseFeaturesSection featuresSection={featuresSection} />
            {/* Join Our Community */}
            <CourseGroupJoinSection groupJoinSection={groupJoinSection} />
            {/* What you will learn */}
            <CourseLearningPointsSection pointersSection={pointersSection} />

            {/* Content Preview */}
            <CollapsibleContentPreview media={data.media} />

            {/* Course Details */}
            <CollapsibleCourseDetails aboutSection={aboutSection} />

            {/* Student Reviews */}
            <CourseTestimonialsSection testimonialsSection={testimonialsSection} />

         

            {/* Course Features */}
            <CourseFeatureExplanationsSection featureExplanationsSection={featureExplanationsSection} />

            {/* FAQ */}
            <CollapsibleFAQ faqSection={faqSection} />
          </div>

          {/* Right Sidebar - Sticky */}
          <CourseSidebar data={data} />
        </div>
      </div>

      <Footer />
    </div>
  )
} 